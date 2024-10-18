"use client"
import { useState } from "react";

export default function SalesConversation() {
  const [position, setPosition] = useState("bottom")
  const [configMenu, setConfigMenu] = useState(false);

  return (
    <div className="container grid px-6 mx-auto">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Conversão de vendas
      </h2>

      <a className=" w-full flex align-middle items-center  p-4 mb-8 text-sm font-semibold overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple ">
        <div className="min-w-[1000px] grid grid-cols-5 gap-5 items-center mx-auto">
          <div className="flex h-full items-center justify-center hover:bg-gray-700/50">
            <a href="javascript: void(0);" className="text-white">
              Aguardando Contato
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="javascript: void(0);" className="text-white">
              Boleto Vencendo
              <span className="ml-2 bg-red-600 rounded-full px-2 py-1">12</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="javascript: void(0);" className="text-white">
              Boleto Vencido
              <span className="ml-2 bg-red-600 rounded-full px-2 py-1">6</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="javascript: void(0);" className="text-white">
              Acompanhamento
              <span className="ml-2 bg-red-600 rounded-full px-2 py-1">7</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="javascript: void(0);" className="text-white">
              Em contato
            </a>
          </div>
        </div>
      </a>

      {/* <!-- With avatar --> */}
      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Pedidos</h4>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">#ID / Dt Compra</th>
                <th className="px-4 py-3">Cliente</th>
                <th className="px-4 py-3">Produto</th>
                <th className="px-4 py-3">Status Pgto</th>
                <th className="px-4 py-3">Observação</th>
                <th className="px-4 py-3">CONF. MSG</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <tr className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    {/* <!-- Avatar with inset shadow --> */}
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Jolina Angelie</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Unemployed</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$ 369.95</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    {/* <!-- Avatar with inset shadow --> */}
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Curry</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Designer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$ 86.00</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                    Denied
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    {/* <!-- Avatar with inset shadow --> */}
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Rulia Joberts</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Actress</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$ 1276.45</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    {/* <!-- Avatar with inset shadow --> */}
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Wenzel Dashington</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Actor</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$ 863.45</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                    Expired
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
                <td className="px-4 py-3 text-sm">6/10/2020</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">Showing 21-30 of 100</span>
          <span className="col-span-2"></span>
          {/* <!-- Pagination --> */}
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
}
