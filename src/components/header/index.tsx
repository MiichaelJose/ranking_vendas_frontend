import { useNavigate } from "react-router-dom";
import engrenagem from "../../assets/engrenagem-white.png"
import close from "../../assets/close.png"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

export default function Header() {
    const [useModal, setModal] = useState(false);

    const modal = () => {
        return (
            <div className="w-80 h-80 z-10 right-0 border-2 p-4 border-gray-700 absolute bg-secundaryground text-white shadow-md flex flex-col  sm:hidden">
                <div className="w-full h-10  border-y-2 border-gray-700 text-center items-center justify-center flex">
                    <p>conversao de vendas</p>
                </div>
                <div className="w-full h-auto mt-4 rounded-sm bg-gray-800 p-2">
                    <div className="flex items-center">
                        <img src="https://app.rankingdevendas.com.br/static/media/default_user.735cd2559a35bc9ffb72.png" alt="" className="w-7 h-7 rounded-full"/>
                        <div className="ml-5">
                            <p className="text-1xl">Michael</p>
                            <p>seller</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto align-middle m-4">
                    <div className="flex mt-2">
                        <img src={engrenagem} alt="" className="w-4 h-4"/>
                        <p className="ml-1">configuracoes</p>   
                    </div>
                    <div className="flex mt-2">
                        <img src={engrenagem} alt="" className="w-4 h-4"/>
                        <p className="ml-1">configuracoes</p>   
                    </div>
                    <div className="flex mt-2">
                        <img src={engrenagem} alt="" className="w-4 h-4"/>
                        <p className="ml-1">configuracoes</p>   
                    </div>
                </div>

                <div className="w-full h-auto  border-y-2 border-gray-700  items-center ">
                    <div className="flex mt-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#25D366" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-green-400 mr-5">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                        </svg>
                        <p className="text-green-400">suporte via whatsApp</p>
                    </div>
                    
                    <div className="flex mt-3">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="red" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-red mr-5">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
                        </svg>
                        <p className="text-red-500">sair da conta</p>
                    </div>
                </div>
            </div>  

        );
    };

    const navigate = useNavigate()


    return (
        <>
            <main className="flex w-full justify-center text-white">
                <div className="flex w-full h-20 justify-between align-middle px-3 items-center sm:hidden ">
                    <div>
                        <h5>Lista</h5>
                        <Select >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="conversao de vendas" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="/conversao-venda">conversao de vendas</SelectItem>
                                <SelectItem value="/ranking-venda">ranking de vendas</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div onClick={() => setModal(!useModal)}>
                        {useModal ? 
                            <img src={close} alt="" className="w-7 fill-white"/>
                        : 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-7 fill-white">
                                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/>
                            </svg>
                        }    
                        
                    </div>
                </div>
                <div className="hidden w-full h-20 justify-between align-middle px-3 items-center sm:flex">
                    <div className="flex">
                        <p className="p-1.5 bg bg-secundaryground rounded-full" onClick={() => navigate("/ranking-venda")}>ranking de vendas</p>
                        <p className="p-1.5 bg bg-secundaryground rounded-full ml-3" onClick={() => navigate("/conversao-venda")}>conversao de vendas</p>
                    </div>

                    <div className="flex w-32 justify-between items-center">
                        <div className="w-6 h-6 flex justify-center items-center bg-secundaryground rounded-full">
                            <img src={engrenagem} alt="" className="w-4 h-4"/>
                        </div>

                        <div className="flex items-center">
                            <img src="https://app.rankingdevendas.com.br/static/media/default_user.735cd2559a35bc9ffb72.png" alt="" className="w-7 h-7 rounded-full"/>
                            <div className="ml-5">
                                <p className="text-1xl">Michael</p>
                                <p>seller</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {useModal ? modal() : <></>}
        </>
    )
}