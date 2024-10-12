import { useNavigate } from "react-router-dom";
import engrenagem from "../../assets/engrenagem-white.png"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Header() {
    const navigate = useNavigate()

    return (
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-7 fill-white">
                    <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/>
                </svg>
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
    )
}