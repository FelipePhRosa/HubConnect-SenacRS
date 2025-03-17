import { useState } from "react";

const StoreRegister = () => {
  const [storeData, setStoreData] = useState({
    name: "",
    description: "",
    urlimage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData({ ...storeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtendo o token JWT do localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Erro: Você precisa estar logado para criar uma loja.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5173/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Envia o token JWT
        },
        body: JSON.stringify(storeData),
      });

      if (response.ok) {
        alert("Loja criada com sucesso!");
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.error || "Falha ao criar a loja."}`);
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Abrir sua Loja</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome da Loja
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={storeData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={storeData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="urlimage" className="block text-sm font-medium text-gray-700">
              URL da Imagem
            </label>
            <input
              type="text"
              id="urlimage"
              name="urlimage"
              value={storeData.urlimage}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cadastrar Loja
          </button>
        </form>
      </div>
    </div>
  );
};

export default StoreRegister;
