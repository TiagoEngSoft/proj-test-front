import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess(state, action) {
      state.loading = false;
      state.currentUser = action.payload;
      toast.success("Login bem-sucedido!");
    },
    loginUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      toast.error("Erro ao fazer login. Credenciais incorretas.");
    },
    logout(state) {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
  },
});

// Async Thunk que listena os estados e atualiza
export const loginUser =
  (username, password, onSuccess, onError) => async (dispatch) => {
    dispatch(loginUserStart());
    try {
      const user = await authenticate(username, password);
      dispatch(loginUserSuccess(user));
      onSuccess(user);
    } catch (error) {
      dispatch(
        loginUserFailure("Erro ao fazer login. Credenciais incorretas."));
      onError(error);
    }
  };

//Funcao simulada - acesso a banco com credenciais usuario
let authenticate = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "eu@eres.com" && password === "123456") {
        resolve({
          sectionId: `${uuidv4()}`,
          username,
          password,
          token: '',
          refreshToken: ''
        });
      } else {
        reject(new Error("Credenciais incorretas"));
      }
    }, 1000); // espera 1 segundo antes de resolver a Promise
  });
};

export const {
  loginUserStart, loginUserSuccess,
  loginUserFailure, logout
} = userSlice.actions;
export default userSlice.reducer;
