import { Search, Plus, FilePlus2, PackagePlus, Settings, Menu, CircleUser, Heart, History, Cpu, CircleArrowRight, BookText, ChevronRight, House, ShoppingCart, Package } from "lucide-react";
import { Link } from "react-router"
import { useState } from "react";


export default function Navbarinuse() {

    const [isActive, setActive] = useState(false);
    
    const handleToggle = () => {
        setActive(!isActive);
    };
    
    return (
        <>
                <div className="fixed bottom-0 left-0 w-full h-16 lg:flex lg:justify-center lg:items-center lg:h-122 lg:mb-50 lg:w-24 lg:rounded-xl lg:shadow-2xl bg-white rounded-t-3xl border-t border-gray-300 z-50">
                    <div className="relative mt-3 lg:mt-15">
                    <div className="absolute top-[-38px] left-[50%] lg:top-[-95px] -translate-x-1/2 z-20">
                    <button 
                        className="bg-green-500 p-3 lg:p-5 rounded-3xl hover:scale-110 duration-300 transition-transform"
                        onClick={handleToggle}
                    >
                        <Plus className={`text-white transition-transform duration-300 ${isActive ? "rotate-45" : "rotate-0"}`} />
                    </button>
                        {isActive && (
                            
                            <div className="absolute w-40 h-30 bg-blue-600 rounded-lg bottom-13 lg:-bottom-9 left-6 lg:left-42 flex flex-col items-center justify-center gap-2 p-2 shadow-2xl animate-in fade-in slide-in-from-bottom duration-300">
                                <Link to="/CreatePr" className="w-full">
                                    <button className="flex items-center bg-blue-700 w-full py-3 rounded-lg text-white font-semibold hover:bg-blue-500 focus:outline-none transition-colors">
                                        <PackagePlus className="w-6 h-6 ml-1.5 mr-0.5"/>
                                        Novo Produto
                                    </button>
                                </Link>
                                <Link to="/CreatePr?type=service" className="w-full">
                                    <button className="flex items-center bg-blue-700 w-full py-3 rounded-lg text-white font-semibold hover:bg-blue-500 focus:outline-none transition-colors">
                                        <FilePlus2 className="w-6 h-6 ml-1.5 mr-0.5"/>
                                        Novo Serviço
                                    </button>
                                </Link>
                            </div>
                    )}
                    </div>
                    <div className="flex justify-center items-center gap-9 lg:flex-col">
                        <Link to="/">
                        <button className="flex flex-col mb-2 items-center font-medium text-sm hover:scale-110 duration-300">
                            <House className="w-6 h-6"/>
                            Home
                        </button>
                        </Link>
                        <Link to="/Hub-busca">
                        <button className="flex flex-col mb-2 items-center font-medium text-sm hover:scale-110 duration-300">
                            <Search className="w-6 h-6"/>
                            Buscar
                        </button>
                        </Link>
                        <button className="flex flex-col mb-2 items-center  font-medium text-sm hover:scale-110 duration-300">
                            <ShoppingCart className="w-6 h-6"/>
                            Carrinho
                        </button>
                        <Link to="/Settings">
                            <button className="flex flex-col mb-2 items-center  font-medium text-sm hover:scale-110 duration-300 ">
                                <Settings className="w-6 h-6"/>
                                Config.
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
