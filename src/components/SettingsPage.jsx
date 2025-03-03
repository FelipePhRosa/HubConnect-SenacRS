import { Search, Plus, Phone, ShieldQuestion, Info, LifeBuoy, CreditCard, UserPen, Settings, Menu, CircleUser, Heart, History, Cpu, CircleArrowRight, BookText, ChevronRight, House, ShoppingCart } from "lucide-react";
import Navbarinuse from "./Navbar.jsx";

export default function SettingsPage(){
    return(
        <>
            <div className="w-full h-screen bg-white">
                <div className="w-full flex items-center p-3 rounded-b-lg bg-white">
                    <h1 className="text-[#3482ff] text-2xl mb-[3px] ml-3 font-bold">HubConnect</h1>
                </div>
                <div className="tabs w-full ">
                    <div className="w-full p-5 flex items-center gap-2 bg-[#3482ff] border-b border-gray-300 shadow-lg rounded-br-[75px] cursor-pointer">
                        <CircleUser className="w-16 h-16 text-white text-shadow-xl"/>
                        <div className="">
                            <h className="text-xl font-[Poppins] italic font-semibold text-white text-shadow-lg">Felipe Rosa</h>
                            <div className="flex">
                                <p className="font-[Sora] text-xs text-gray-200 text-shadow-xs">Adicionar Número de Celular: <span className="text-[#A3E635] flex flex-col text-shadow-xs">+10 Pontos</span></p>
                            </div>
                        </div>
                    </div>
                    <div  className="bg-white flex items-center gap-3 mt-5 hover:scale-105 hover:ml-3 duration-300 cursor-pointer">
                        <UserPen className="w-6 h-8 ml-8"/>
                        <div>
                            <h1 className="text-md font-[Sora] text-shadow-xs">Editar Perfil</h1>
                            <p className="text-xs font-[Sora] text-gray-400">Meu nome, Descrição, Localização...</p>
                        </div>
                    </div>
                    <hr className="border-t-2 border-blue-500 mt-2 opacity-20 w-[350px] "/>
                    <div className="bg-white flex items-center gap-3 mt-3 hover:scale-105 hover:ml-3 duration-300 cursor-pointer">
                        <Settings className="w-6 h-8 ml-8"/>
                        <div>
                            <h1 className="text-md font-[Sora] text-shadow-xs">Configurações de Privacidade</h1>
                            <p className="text-xs font-[Sora] text-gray-400">Informações Pessoais, Segurança...</p>
                        </div>
                    </div>
                    <hr className="border-t-2 border-blue-500 mt-2 opacity-20 w-[300px]"/>
                    <div className="bg-white flex items-center gap-3 mt-3 hover:scale-105 hover:ml-3 duration-300 cursor-pointer">
                        <History className="w-6 h-8 ml-8"/>
                        <div>
                            <h1 className="text-md font-[Sora] text-shadow-xs">Histórico de Compras</h1>
                            <p className="text-xs font-light font-[Sora] text-gray-400">Compras recentes, Pedidos Pendentes...</p>
                        </div>
                    </div>
                        <hr className="border-t-2 border-blue-500 mt-2 opacity-20 w-[250px]"/>
                        <div className="bg-white flex items-center gap-3 mt-3 hover:scale-105 hover:ml-3 duration-300 cursor-pointer">
                        <CreditCard className="w-6 h-8 ml-8"/>
                        <div>
                            <h1 className="text-md font-[Sora] text-shadow-xs">Pagamentos</h1>
                            <p className="text-xs font-light font-[Sora] text-gray-400">Info. de Pagamentos, Cobranças...</p>
                        </div>
                    </div>
                    <hr className="border-t-2 border-blue-500 mt-2 opacity-20 w-[200px]"/>
                    <div className="bg-white flex items-center gap-3 mt-3 hover:scale-105 hover:ml-3 duration-300 cursor-pointer">
                        <Heart className="w-6 h-8 ml-8"/>
                        <div>
                            <h1 className="text-md font-[Sora] text-shadow-xs">Favoritos</h1>
                            <p className="text-xs font-light font-[Sora] text-gray-400">Lojas Curtidas, Produtos Favoritados...</p>
                        </div>
                    </div>
                    <hr className="border-t-2 border-blue-500 mt-2 opacity-20 w-[150px] hover:scale-105 hover:ml-3 duration-300 cursor-pointer"/>
                </div>
                <div className="w-full h-54 mt-36 ">
                    <div className="flex flex-col p-2 gap-2">
                        <div className="flex flex-row ml-3 gap-1 cursor-pointer">
                            <Phone className="w-5 h-6"/>
                            <h3 className="font-light text-gray-400 font-[Sora]">Ajuda</h3>
                        </div>
                        <div className="flex flex-row ml-3 gap-1 cursor-pointer">
                            <LifeBuoy className="w-5 h-6"/>
                            <h3 className="font-light text-gray-400 font-[Sora]">Suporte</h3>
                        </div>
                        <div className="flex flex-row ml-3 gap-1 cursor-pointer">
                            <ShieldQuestion className="w-5 h-6"/>
                            <h3 className="font-light text-gray-400 font-[Sora]">Regras de Uso</h3>
                        </div>
                        <div className="flex flex-row ml-3 gap-1 cursor-pointer">
                            <Info className="w-5 h-6"/>
                            <h3 className="font-light text-gray-400 font-[Sora]">Termos e Condições</h3>
                        </div>
                    </div>
                    <h3 className="text-medium font-[Sora] text-base ml-4 ">Todos Direitos Reservados. <br />&copy;HubConnect</h3>
                    <div/>
                </div>
            </div>
            <Navbarinuse/>
        </>
    )
}