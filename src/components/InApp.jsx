import { Search, Plus, Settings, Menu, CircleUser, Heart, Clock, Zap, History, TrendingUp, Cpu, CircleArrowRight, BookText, ChevronRight, House, ShoppingCart } from "lucide-react";

import Cart from "../assets/cart.png"
import Tloja from "../assets/logo-tech.png"
import Sloja from "../assets/logo-sec.png"
import crystal from "../assets/crystal-eyes.png"
import estrela from "../assets/estrela.png"
import robotica from "../assets/robotica.png"
import devweb from "../assets/reactimage.jpg"
import marketimg from "../assets/marketingimage.jpg"
import designfreela from "../assets/designfreela.jpg"
import codeimg from "../assets/codeclass.jpg"
import photoimg from "../assets/photography.jpg"
import Navbarinuse from "./Navbar";

export default function InApp() {
    const lojas = [
        { logo: Tloja, name: 'TechSec', categories: ['Tech', 'Security'] },
        { logo: Sloja, name: 'DedSec', categories: ['Tech', 'Security'] },        
      ];

    const serviceList = [
        { image: robotica, 
          title: 'Montagem de Eletrônicos',
          description: 'Especialista em montagem, desmontagem e manutenção de eletrônicos e robótica, criando soluções inovadoras em hardware e automação. 🤖🚀',
          price: 600, 
          rating: 4.5
        },
        { 
            image: devweb, 
            title: 'Desenvolvimento Web', 
            description: 'Criação de sites responsivos, modernos e otimizados para empresas de todos os tamanhos.', 
            price: 1200, 
            rating: 4.8 
        },
        { 
            image: marketimg, 
            title: 'Consultoria de Marketing Digital', 
            description: 'Estratégias de SEO, anúncios pagos e marketing de conteúdo para aumentar sua visibilidade online.', 
            price: 800, 
            rating: 4.6 
        },
        { 
            image: designfreela, 
            title: 'Serviços de Design Gráfico', 
            description: 'Criação de identidade visual, logotipos, banners e outros materiais gráficos para marcas.', 
            price: 700, 
            rating: 4.7 
        },
        { 
            image: codeimg, 
            title: 'Aulas de Programação', 
            description: 'Aprenda a programar com aulas práticas de Python, JavaScript, C++ e muito mais.', 
            price: 300, 
            rating: 4.9 
        },
        { 
            image: photoimg, 
            title: 'Fotografia Profissional', 
            description: 'Captura de momentos especiais em eventos, casamentos e ensaios fotográficos.', 
            price: 1500, 
            rating: 4.8 
        }
          
          
    ]
      
    return (
        <>
        <div className="min-h-screen pb-16">
            <div className="w-full flex justify-between items-center p-3">
                <h1 className="text-[#3482ff] text-2xl font-bold">HubConnect</h1>
                <div className="w-[38px] h-[36px] rounded-xl hover:bg-gray-200 duration-300 flex items-center justify-center">
                    <Settings className="w-[27px] h-[35px]"/>
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Encontre os melhores serviços e produtos</h2>
                    <p className="text-blue-100 mb-6">Conectando você a milhares de profissionais e empresas de confiança</p>
                    <div className="p-2 rounded-xl flex bg-white">
                        <Search className="w-5 h-7 text-gray-500" />
                        <input type="text" placeholder="O que você está procurando?" className="w-full text-gray-700 bg-transparent ml-2 outline-none"/>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                    { icon: TrendingUp, label: 'Mais Procurados', color: 'text-purple-500' },
                    { icon: Heart, label: 'Favoritos', color: 'text-red-500' },
                    { icon: Clock, label: 'Recentes', color: 'text-green-500' },
                    { icon: Zap, label: 'Ofertas', color: 'text-yellow-500' }
                    ].map(({ icon: Icon, label, color }) => (
                        <button
                        key={label}
                        className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center space-y-2 cursor-pointer"
                        >
                        <Icon className={`w-6 h-6 ${color}`} />
                        <span className="font-medium text-gray-700">{label}</span>
                        </button>
                    ))}
                </section>
                <section className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-medium text-lg ml-1 text-black">Categorias em Destaque</h3>
                        <button className="flex flex-row items-center gap-2">
                            <p className="text-blue-500 font-medium hover:text-blue-700 duration:300 cursor-pointer">Ver Todas</p>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                        { icon: Cpu, label: 'Tecnologia', color: 'text-blue-500' },
                        { icon: BookText, label: 'Livros', color: 'text-yellow-600' },
                        { icon: ShoppingCart, label: 'Vestuário', color: 'text-purple-500' },
                        { icon: House, label: 'Casa', color: 'text-black' }
                        ].map(({ icon: Icon, label, color }) => (
                            <button key={label} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center space-y-2 cursor-pointer">
                            <Icon className={`w-6 h-6 ${color}`} />
                            <span className="font-medium text-gray-700">{label}</span>
                            </button>
                        ))}
                    </div>
                </section>

                <div className="flex items-center mt-5">
                    <button className="flex flex-row items-center gap-2">
                        <h3 className="font-medium text-lg ml-1 text-black">Empresas em Destaque</h3>
                        <div className="bg-gray-200 rounded-xl border border-gray-300">
                            <ChevronRight className="text-gray-700"/>
                        </div>
                    </button>
                </div>

                <div className="flex items-center mt-2 gap-4">
                    {lojas.map(({ logo, name, categories }, index) => (
                        <div key={index} className="bg-white w-40 h-56 rounded-xl flex flex-col items-center justify-center shadow-xl border border-gray-200 p-2">
                        <img className="w-20 mb-2" src={logo} alt={name} />
                        <p className="text-center text-sm font-semibold">{name}</p>
                        <p className="text-center text-xs text-gray-500">
                            {categories.join(' • ')}
                        </p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center mt-5">
                    <button className="flex flex-row items-center gap-2">
                        <h3 className="font-medium text-lg ml-1 text-black">Serviços Próximos</h3>
                        <div className="bg-gray-200 rounded-xl border border-gray-300">
                            <ChevronRight className="text-gray-700"/>
                        </div>
                    </button>
                </div>


                <div className="flex flex-col gap-5 p-3 rounded-xl mt-2">
                    {serviceList.map(({ image, title, description, price, rating }, index) => (
                        <div key={index} className="bg-white h-82 rounded-xl flex flex-col shadow-xl border border-gray-200">
                        
                        <div className="w-full rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-300" src={image} alt={title} />
                        </div>
                        
                            <div className="p-3">
                            <h1 className="text-lg font-semibold">{title}</h1>

                            <p className="text-sm text-gray-600">{description}</p>

                                <div className="flex justify-between w-full text-sm font-semibold text-gray-700 mt-2">
                                    <p>Média de R${price}</p>
                                    <p className="text-yellow-600">⭐ {rating}</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="bg-[#005eff] w-full h-8 text-white rounded-xl hover:bg-[#004fcc] duration-300 mt-2 font-[Poppins] cursor-pointer">
                                        Saiba Mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pb-24"></div>
            </div>        
        </div>
        <Navbarinuse/>
        </>
    );
}
