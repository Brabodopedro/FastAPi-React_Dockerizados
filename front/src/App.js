import { useEffect, useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState("Carregando...");

  useEffect(() => {
    console.log("API URL:", process.env.REACT_APP_API_URL);
    fetch(`${process.env.REACT_APP_API_URL}/`)
      .then((res) => res.json())
      .then((data) => setMensagem(data.message))
      .catch((err) => {
        console.error("Erro ao buscar API:", err);
        setMensagem("Erro ao conectar com a API");
      });
  }, []);

  return (
    <div className="App">
      <h1>{mensagem}</h1>
    </div>
  );
}

export default App;
