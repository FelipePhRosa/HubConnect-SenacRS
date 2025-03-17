import { useState, useEffect } from "react";

const StoreFeed = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("http://localhost:5173/stores");
        if (!response.ok) throw new Error("Erro ao carregar lojas.");

        const data = await response.json();
        setStores(data); // Salva as lojas no state
      } catch (error) {
        console.error("Erro ao buscar lojas:", error);
      }
    };

    fetchStores();
  }, []);

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.length > 0 ? (
            stores.map((store) => (
              <div key={store.id} className="bg-white w-40 h-56 rounded-xl flex flex-col items-center justify-center shadow-xl border border-gray-200 p-2">
                <img
                  src={store.urlimage}
                  alt={store.name}
                  className="w-20 mb-2"
                />
                <h3 className="text-center text-sm font-semibold">{store.name}</h3>
                <p className="text-center text-xs text-gray-500">{store.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">Nenhuma loja cadastrada.</p>
          )}
        </div>
  );
};

export default StoreFeed;
