import { Search, Plus, Settings, Menu, CircleUser, Heart, History, Cpu, CircleArrowRight, BookText, ChevronRight, House, ShoppingCart } from "lucide-react";
import Navbarinuse from "./Navbar";


export default function Hubbusca(){
    return(
        <>
            <div className="w-full h-screen">
                <div className="w-full  flex justify-between items-center p-3">
                    <h1 className="text-[#3482ff] text-2xl font-bold">HubConnect</h1>
                    <CircleUser className="w-[37px] h-[35px]"/>
                </div>
                <div className="w-full  bg-white p-4">
                    <div className="p-2 flex bg-gray-300 rounded-xl">
                        <Search className="w-5 h-7 text-gray-600"/>
                        <input type="text" placeholder="Search" className="bg-transparent ml-2 outline-none" />
                    </div>
                    <p className="text-xl font-semibold font-[Sora] mt-4 -mb-2">Categorias</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 p-2">
                    <div className="w-[48%] h-[70px] md:w-[48%] md:h-[90px] rounded-xl bg-red-500 shadow-xl  flex items-center hover:scale-105 cursor-pointer duration-300">
                        <h1 className="mx-auto font-medium text-lg text-white text-shadow-md">Eletrodomésticos</h1>
                    </div>
                    <div className="w-[48%] h-[70px] md:w-[48%] md:h-[90px] rounded-xl bg-gray-600 shadow-xl flex items-center hover:scale-105 cursor-pointer duration-300">
                        <h1 className="mx-auto font-medium text-lg text-white text-shadow-md">Advocacia</h1>
                    </div>
                    <div className="w-[48%] h-[70px] md:w-[48%] md:h-[90px] rounded-xl bg-blue-600 shadow-xl flex items-center hover:scale-105 cursor-pointer duration-300">
                        <h1 className="mx-auto font-medium text-lg text-white text-shadow-md">Imobiliária</h1>
                    </div>
                    <div className="w-[48%] h-[70px] md:w-[48%] md:h-[90px] rounded-xl bg-purple-500 shadow-xl  flex items-center hover:scale-105 cursor-pointer duration-300">
                        <h1 className="mx-auto font-medium text-lg text-white text-shadow-md">Design Gráfico</h1>
                    </div>
                    <div className="w-[48%] h-[70px] md:w-[48%] md:h-[90px] rounded-xl bg-yellow-400 shadow-xl  flex items-center hover:scale-105 cursor-pointer duration-300">
                        <h1 className="mx-auto font-medium text-lg text-white text-shadow-md">Construção</h1>
                    </div>
                    <div className="w-[48%] h-[70px] md:w-[48%] md:h-[90px] rounded-xl bg-black shadow-xl flex items-center hover:scale-105 cursor-pointer duration-300">
                        <h1 className="mx-auto font-medium text-lg text-white text-shadow-md">Consultoria</h1>
                    </div>
                    <div className="w-[48%] h-[70px] md:w-[48%] md:h-[90px] rounded-xl bg-orange-500 shadow-xl flex items-center hover:scale-105 cursor-pointer duration-300">
                        <h1 className="mx-auto font-medium text-lg text-white text-shadow-md">Marketing</h1>
                    </div>
                    <div className="w-[48%] h-[70px] md:w-[48%] md:h-[90px] rounded-xl bg-green-500 shadow-xl  flex items-center hover:scale-105 cursor-pointer duration-300">
                        <h1 className="mx-auto font-medium text-lg text-white text-shadow-md">Saúde</h1>
                    </div>
                </div>
            </div>     
            <Navbarinuse/>
        </>
    )
}