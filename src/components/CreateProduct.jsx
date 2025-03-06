import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pencil, Cpu, ToggleLeft, ToggleRight, ChevronRight, CircleUser, Text } from 'lucide-react';

import Navbarinuse from './Navbar';

export default function Createproduct() {
    const [searchParams] = useSearchParams();
    
    const [type, setType] = useState('product');

    useEffect(() => {
      const type = searchParams.get('type');
      if (type === 'service') {
        setType('service');
      } else {
        setType('product');
      }
    }, [searchParams]);
     
    const categories = ['Tech', 'Culinária', 'Esportes', 'Acessórios', 'Roupas', 'Utilitarios', 'Saúde', 'Beleza', 'Casa', 'Jardinagem', 'Automotivo', 'Outros'];
    
    // Objeto para rastrear o estado de cada categoria individualmente
    const [selectedCategories, setSelectedCategories] = useState({});

    const [price, setPrice] = useState('');

    // Função que pega o toggle, fala que vai mexer é na category, seleciona o Set pra mudar o estado e selecionar a categoria
    // prev pega a ultima do array, ...prev é pra recarregar todas as outras, pra nao apagar quando selecionar uma
    // categoria: !prev[category] é pra inverter o estado, se tiver true, vai pra false e vice versa
    const toggleCategory = (category) => {
      setSelectedCategories(prev => ({
        ...prev,
        [category]: !prev[category]
      }));
    }



    const toggleType = () => {
      setType(type === 'product' ? 'service' : 'product');
    }

    const handlePriceChange = (e) => {
        const value = e.target.value;
        if(!isNaN(value) || value === ''){
            setPrice(value);
        }
    }

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-br', {
            style: "currency",
            currency: "BRL",
        }).format(value);
    }

  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className="w-full h-full bg-white pb-18">
        <div className="w-full flex justify-between items-center p-4 bg-white">
          <h1 className="text-[#3482ff] text-2xl font-bold">HubConnect</h1>
          <CircleUser className="w-9 h-9" />
        </div>
        <div className="w-full h-full bg-white mt-5">
          <div className="flex items-center p-4 gap-3 lg:ml-45">
            <h1 className="font-[Poppins] text-2xl font-medium">
              {type === 'product' ? 'Criar Produto' : 'Criar Serviço'}
            </h1>
            <div className="flex items-center justify-center">
              <button onClick={toggleType} className="relative w-12 h-6 bg-gray-300 rounded-full">
                <div
                  className={`absolute left-0 top-0 w-6 h-6 bg-blue-500 rounded-full transition-transform duration-300 ease-in-out cursor-pointer ${
                    type === 'service' ? 'translate-x-0' : 'translate-x-full'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="w-full h-full bg-white rounded-3xl p-4 flex flex-col gap-3">
            <h2 className="font-[Sora] text-xl font-medium text-center">
              {type === 'product' ? 'Imagem do Produto' : 'Imagem do Serviço'}
            </h2>
            <div className="w-40 h-40 bg-gray-300 rounded-md mx-auto mb-2">
            </div>
            
            <div className='flex flex-col lg:ml-45'>
              <h2 className="font-[Sora] text-xl font-medium">
                {type === 'product' ? 'Nome do Produto' : 'Nome do Serviço'}
              </h2>
              <div className="flex items-center gap-3 bg-white border border-gray-100 p-2 h-14 rounded-2xl w-full lg:w-170 shadow-xl mb-2">
                <Pencil className="text-[#3482ffd3] ml-2" />
                <input
                  type="text"
                  placeholder=
                  {type === 'product' ? 'Ex: Bicicleta, Martelo...' : 'Ex: Manutenção, Mão de Obra...'}
                  className="w-full focus:outline-none text-lg"
                />
              </div>
            </div>        
            <h2 className="font-[Sora] text-xl font-medium ml-2 lg:ml-45">
              {type === 'product' ? 'Descrição do Produto' : 'Descrição do Serviço'}
            </h2>
            <div className="flex justify-center gap-3 lg:ml-45 bg-white border border-gray-100 p-4 rounded-2xl w-full lg:w-170 shadow-xl mb-2">
              <Text className="text-[#3482ffd3]" />
              <textarea
                value={description}
                onChange={handleChange}
                placeholder={
                  type === 'product'
                    ? 'Descreva sobre o Produto...'
                    : 'Descreva sobre o Serviço Prestado...'
                }
                className="w-full h-30 focus:outline-none text-lg resize-none"
              />
            </div>
            <h2 className='font-[Sora] text-xl font-medium ml-2 lg:ml-45'>Preço</h2>
            <div className='flex items-center gap-3 lg:ml-45 bg-white border border-gray-100 p-3 rounded-xl w-full lg:w-170 shadow-xl mb-2'>
                <span className='text-lg font-[Sora] text-[#3482ffd3]'>{formatCurrency(price)}</span>
                <input type="text"
                 value={price}
                 onChange={handlePriceChange}
                 placeholder='Insira um Valor...'
                 className='w-full p-2 rounded-md focus:outline-none text-lg'
                 />
            </div>
            <h2 className='font-[Sora] text-xl font-medium ml-2 lg:ml-45'>Categorias</h2>
            <div className='w-full h-auto flex items-center justify-center flex-wrap gap-2'>
              {categories.map((category) => (
                <div 
                  key={category}
                  className={`flex justify-center items-center gap-1 border border-gray-400 rounded-xl w-[100px] h-8 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300 cursor-pointer
                  ${selectedCategories[category] ? 'bg-[#3482ffd3] text-white' : 'bg-white'}`}
                  onClick={() => toggleCategory(category)}
                >
                  
                  <p className="font-medium">{category}</p>
                </div>
              ))}
            </div>

            <div className='w-full h-auto flex items-center justify-center gap-2 mt-5'>
              <button className='w-76 h-16 bg-gray-200 border border-gray-400 shadow-xl rounded-xl text-red-500 font-[Sora] font-medium text-lg hover:scale-105 duration-300 transition-transform cursor-pointer'>
                Descartar 
              </button>
              <button className='w-84 h-20 bg-[#3482ffd3] shadow-xl rounded-xl text-lg text-white font-[Sora] font-medium hover:scale-105 duration-300 transition-transform cursor-pointer'>
                {type === 'product' ? 'Anunciar Produto' : 'Anunciar Serviço'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navbarinuse />
    </>
  );
}