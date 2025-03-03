import { Search, Plus, Settings, Menu, CircleUser, Heart, History, Cpu, CircleArrowRight, BookText, ChevronRight, House, ShoppingCart } from "lucide-react";

import Cart from "../assets/cart.png"
import Tloja from "../assets/logo-tech.png"
import Sloja from "../assets/logo-sec.png"
import crystal from "../assets/crystal-eyes.png"
import estrela from "../assets/estrela.png"
import Navbarinuse from "./Navbar";



export default function InApp() {
    return (
        <>
        <div className="w-full h-screen max-w-md pb-16">
            <div className="w-full max-w-md flex justify-between items-center p-3">
                <h1 className="text-[#3482ff] text-2xl font-bold">HubConnect</h1>
                <CircleUser className="w-[37px] h-[35px]"/>
            </div>
            <div className="w-full max-w-md bg-white p-4 ">
                <div className="p-2 rounded-xl flex bg-gray-300">
                    <Search className="w-5 h-7 text-gray-900 " />
                    <input type="text" placeholder="Search" className="bg-transparent ml-2 outline-none"/>
                </div>
                <div className="w-full mt-2 h-10 flex justify-between items-center">
                    <div className="flex justify-center items-center gap-1 bg-white border border-gray-400 rounded-xl w-[100px] h-8  hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300">
                        <Heart className="w-5"/>
                        <p className="font-medium">Favorites</p>
                    </div>

                    <div className="flex justify-center items-center gap-1 bg-white border border-gray-400 rounded-xl w-[100px] h-8 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300">
                        <History className="w-5"/>
                        <p className="font-medium">Recents</p>
                    </div>

                    <div className="flex justify-center items-center gap-1 bg-white border border-gray-400 rounded-xl w-[100px] h-8 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300">
                        <Cpu className="w-5"/>
                        <p className="font-medium">Tech</p>
                    </div>

                    
                </div>

                <div className="flex justify-center items-center mt-7">
                    <div className="flex justify-center items-center bg-gray-300 rounded-2xl w-[280px] h-[120px]">
                        <h1>imagem</h1>
                    </div>
                </div>

                <div className="flex items-center mt-5">
                    <button className="flex flex-row items-center gap-2">
                        <h3 className="font-medium text-lg ml-1 text-black">Top Enterprises</h3>
                        <div className="bg-gray-200 rounded-xl border border-gray-300">
                            <ChevronRight className="text-gray-700"/>
                        </div>
                    </button>
                </div>

                <div className="flex items-center mt-2 gap-4">
                    <div className="bg-gray-100 w-40 h-56 rounded-xl mt-2 flex justify-center flex-col ">
                        <div className="flex items-center justify-center">
                            <img className="w-20 mb-2" src={Tloja} alt="" />
                        </div>
                        <h1 className="font-medium text-lg mx-auto">Boop Store</h1>
                        <p className="text-sm mt-1 ml-4">Categorias</p>

                        <div className="flex  items-center ml-4 mt-2 bg-gray-200 border border-gray-00 rounded-xl w-[70px] h-6">
                            <BookText className="w-4 ml-1"/>
                            <p className="font-medium text-sm p-1">Books</p>
                        </div>
                        
                    </div>
                    
                    <div className="bg-gray-100 w-40 h-56 rounded-xl mt-2 flex justify-center flex-col ">
                        <div className="flex items-center justify-center">
                            <img className="w-20 mb-2" src={Sloja} alt="" />
                        </div>
                        <h1 className="font-medium text-lg mx-auto">PenSec</h1>
                        <p className="text-sm mt-1 ml-4">Categorias</p>

                        <div className="flex  items-center ml-4 mt-2 bg-gray-200 border border-gray-00 rounded-xl w-[70px] h-6">
                            <Cpu className="w-4 ml-1"/>
                            <p className="font-medium text-sm p-1">Tech</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-5">
                    <button className="flex flex-row items-center gap-2">
                        <h3 className="font-medium text-lg ml-1 text-black">Nearby Services</h3>
                        <div className="bg-gray-200 rounded-xl border border-gray-300">
                            <ChevronRight className="text-gray-700"/>
                        </div>
                    </button>
                </div>
                
                <div className="flex justify-start items-center mt-3">
                    <div className="bg-white border border-gray-400 shadow-lg w-[350px] h-22 rounded-2xl flex items-center hover:scale-105 hover:border duration-300">
                            <div className="w-10 h-14 ml-4 mt-4">
                                <img src={crystal} alt="" />
                            </div>
                        <div className="flex flex-col ml-3">
                            <h1 className="font-semibold text-base mt-1 font-[Sora]">Crystal Eyes</h1>
                            <h3 className="font-light text-sm font-[Sora]">Desenvolvimento Web</h3>
                            <div className="flex flex-row items-center mb-1">
                                <img className="w-5 h-5 mr-2" src={estrela} alt="" />
                            <p className="font-medium text-lg">4,5</p>
                            <p className="font-medium text-base ml-16">~R$470</p>
                            </div>
                        </div>
                        <button className="ml-auto mr-3 w-10 h-10 shadow-xl bg-[#005eff] rounded-3xl flex justify-center items-center">
                                <ChevronRight className="text-white hover:text-gray-400 duration-300"/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-start items-center mt-3">
                    <div className="w-[350px] h-22 bg-white border border-gray-400 shadow-lg  rounded-2xl flex items-center hover:scale-105 hover:border duration-300">
                                <div className="w-10 h-14 ml-4 mt-4">
                                    <img src={crystal} alt="" />
                                </div>
                            <div className="flex flex-col ml-3">
                                <h1 className="font-semibold text-base mt-1 font-[Sora]">HampDesign</h1>
                                <h3 className="font-light text-sm font-[Sora]">UI/UX Design</h3>
                                <div className="flex flex-row items-center mb-1">
                                    <img className="w-5 h-5 mr-2 text-shadow-md" src={estrela} alt="Logo" />
                                <p className="font-medium text-lg text-shadow-xs">5,0</p>
                                <p className="font-medium text-base ml-16">~R$320</p>
                                </div>
                            </div>
                            <button className="ml-auto mr-3 w-10 h-10 shadow-xl bg-[#005eff] rounded-3xl flex justify-center items-center">
                                    <ChevronRight className="text-white hover:text-gray-400 duration-300"/>
                            </button>
                    </div>
                </div>
                <div className="pb-24"></div>
            </div>        
        </div>
        <Navbarinuse/>
        </>
    );
}
