import React, { useState, useEffect } from 'react';
import { get, post } from './WebClienteService'; // Ajuste o caminho conforme necessário

const ExampleComponent = () => {
  const [posts, setPosts] = useState([]);
  const [postResponse, setPostResponse] = useState(null);

  // Exemplo de uso da função GET
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Exemplo de uso da função POST
  const createPost = async () => {
    try {
      const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      };
      const data = await post('https://jsonplaceholder.typicode.com/posts', newPost);
      setPostResponse(data);
    } catch (error) {
      console.error('Erro ao criar post:', error);
    }
  };

  return (
    <div>
      <h2>Posts Fetch Example</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{`** Id: ${post.id} ${post.title}`}</li>
        ))}
      </ul>

      <button onClick={createPost}>Criar Post</button>

      {postResponse && (
        <div>
          <h3>Resposta do Post Criado:</h3>
          <code>{JSON.stringify(postResponse)}</code>
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
