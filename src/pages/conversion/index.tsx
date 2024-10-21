import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Table from "@/components/conversion/table";
import { useState } from "react";

interface FilterParams {
  contactStatus?: string;
  paymentMethod?: string;
  paymentStatus?: string;
}

export default function SalesConversation() {
  const [filters, setFilter] = useState<FilterParams>({});

  return (
    <div className="container grid px-6 mx-auto">
      <div className="relative flex justify-between items-center">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Conversão de vendas
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Configuracoes</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Pedidos</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Agenda Google</DropdownMenuItem>
            <DropdownMenuItem>Fluxo de Pedidos</DropdownMenuItem>
            <DropdownMenuItem>Emails</DropdownMenuItem>
            <DropdownMenuItem>Campanhas</DropdownMenuItem>
            <DropdownMenuItem>Relatórios</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className=" w-full flex align-middle items-center  p-4 mb-8 text-sm font-semibold overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-bluesecundary scrollbar-track-transparent text-purple-100 bg-blueground rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple ">
        <div className="min-w-[1000px] grid grid-cols-5 gap-5 items-center mx-auto">
          <div className="flex p-1  items-center justify-center ">
            <a
              onClick={() => setFilter({ contactStatus: "not_contacted" })}
              className="text-white p-1 rounded-md transition-colors focus:ring-2 focus:ring-gray-400 focus:shadow-outline-purple"
            >
              Aguardando Contato
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              onClick={() => setFilter({ contactStatus: "awaiting_contact" })}
              className="text-white p-1 rounded-md transition-colors focus:ring-2 focus:ring-gray-400 focus:shadow-outline-purple"
            >
              Boleto Vencendo
              <span className="ml-2 bg-red-600 rounded-full px-2 py-1">12</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              onClick={() => setFilter({ contactStatus: "awaiting_contact" })}
              className="text-white p-1 rounded-md transition-colors focus:ring-2 focus:ring-gray-400 focus:shadow-outline-purple"
            >
              Boleto Vencido
              <span className="ml-2 bg-red-600 rounded-full px-2 py-1">6</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              onClick={() => setFilter({ contactStatus: "awaiting_contact" })}
              className="text-white p-1 rounded-md transition-colors focus:ring-2 focus:ring-gray-400 focus:shadow-outline-purple"
            >
              Acompanhamento
              <span className="ml-2 bg-red-600 rounded-full px-2 py-1">7</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              onClick={() => setFilter({ contactStatus: "awaiting_contact" })}
              className="text-white p-1 rounded-md transition-colors focus:ring-2 focus:ring-gray-400 focus:shadow-outline-purple"
            >
              Em contato
            </a>
          </div>
        </div>
      </div>

      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Pedidos</h4>
      <Table filter={filters} />
    </div>
  );
}
