import { post, setAuthToken, axiosInstance } from '../WebClienteService'
import ApiEres from '../../../api/apiEres/rotasApiEres'

// =================  Request  =================
// Função para lidar com logs de requisição e erros
export const requestInterceptorMiddleware = (request) => {
    // Log da requisição
    console.log(`Requisição [${request.method.toUpperCase()}]: ${request.url}`, request);
    return request;
};

// Função para lidar com erros de requisição
export const requestErrorHandler = (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
};

// =================  Response  =================
//Funcao de log de requisicao
export const responseInterceptorMiddleware = async (response) => {
    // Log da resposta
    console.log(`Resposta [${response.config.method.toUpperCase()}]: ${response.config.url}`, response);
    return response;
};

// Função para lidar com erros de token JWT expirado
export const responseErrorHandler = async (error) => {
    // Se o erro for de token JWT expirado
    if (error.response && error.response.status === 401
        && error.response.data && error.response.data.message === 'Token expirado') {
        try {
            // Chamar a rota para obter um novo token
            const newTokenResponse = await post(ApiEres.regresh);
            const newToken = newTokenResponse.data.token;

            // Configurar o novo token
            setAuthToken(newToken);

            // Reenviar a requisição original que causou o erro
            return axiosInstance(error.config);
        } catch (refreshTokenError) {
            console.error('Erro ao obter novo token:', refreshTokenError);
            return Promise.reject(error);
        }
    }

    // Se não for um erro de token JWT expirado, rejeitar o erro
    return Promise.reject(error);
};