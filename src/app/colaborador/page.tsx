import React from 'react';
import Link from 'next/link';

const ColaboradorPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 p-8 flex justify-center min-h-screen">
      <div className="container grid grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Painel Esquerdo */}
        <div className="left-panel p-6 border border-gray-700 rounded-md">
          <h2 className="text-xl mb-4">Foto colaborador</h2>
          {/* ... Conteúdo do painel esquerdo ... */}
          <div className="bg-gray-800 border border-gray-700 rounded-md p-8 text-center mb-6">
            [Área para a foto]
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="sexo" className="block text-gray-500 text-sm mb-2">Sexo</label>
              <input type="text" id="sexo" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly placeholder="Ex: Masculino" />
            </div>
            <div>
              <label htmlFor="etnia" className="block text-gray-500 text-sm mb-2">Etnia</label>
              <input type="text" id="etnia" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly placeholder="Ex: Branca" />
            </div>
          </div>
        </div>

        {/* Painel Central */}
        <div className="middle-panel p-6 border border-gray-700 rounded-md">
          {/* ... Conteúdo do painel central ... */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome-social" className="block text-gray-500 text-sm mb-2">Nome social</label>
              <input type="text" id="nome-social" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="email-corporativo" className="block text-gray-500 text-sm mb-2">Email corporativo</label>
              <input type="email" id="email-corporativo" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="data-nascimento" className="block text-gray-500 text-sm mb-2">Data de nascimento</label>
              <input type="date" id="data-nascimento" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-gray-500 text-sm mb-2">Número de telefone</label>
              <input type="tel" id="telefone" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="departamento" className="block text-gray-500 text-sm mb-2">Departamento</label>
              <input type="text" id="departamento" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="lider" className="block text-gray-500 text-sm mb-2">Líder</label>
              <input type="text" id="lider" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="cargo" className="block text-gray-500 text-sm mb-2">Cargo</label>
              <input type="text" id="cargo" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="nivel" className="block text-gray-500 text-sm mb-2">Nível</label>
              <input type="text" id="nivel" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="salario" className="block text-gray-500 text-sm mb-2">Salário</label>
              <input type="text" id="salario" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="lider-time" className="block text-gray-500 text-sm mb-2">Líder time?</label>
              <input type="text" id="lider-time" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
          </div>
        </div>

        {/* Painel Direito */}
        <div className="right-panel p-6 border border-gray-700 rounded-md flex flex-col justify-start gap-4">
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Tipo de contratação
          </button>
          <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Status
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Data de início
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Data de desligamento
          </button>
        </div>

        {/* Seção de Desligamento */}
        <div className="col-span-3 p-6 border border-gray-700 rounded-md mt-8">
          <h2 className="text-xl mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5m0 4h6m-6-4h.01M9 18h6m-6-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Desligamento
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="tipo-desligamento" className="block text-gray-500 text-sm mb-2">Tipo de desligamento</label>
              <input type="text" id="tipo-desligamento" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="motivo-desligamento" className="block text-gray-500 text-sm mb-2">Motivo</label>
              <input type="text" id="motivo-desligamento" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
          </div>
        </div>

        {/* Seção de Dados Corporativos */}
        <div className="col-span-3 p-6 border border-gray-700 rounded-md mt-8">
          <h2 className="text-xl mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v-8m0 8h9m-9 0 3 3m0-3-3 3M21 21l-6-6m2-2-2-2" />
            </svg>
            Dados corporativos
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="variavel" className="block text-gray-500 text-sm mb-2">Variável</label>
              <input type="text" id="variavel" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="bonus" className="block text-gray-500 text-sm mb-2">Bônus</label>
              <input type="text" id="bonus" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
          </div>
        </div>
      </div>

      {/* Barra Lateral de Busca */}
      <div className="p-6 border border-gray-700 rounded-md">
        <h2 className="text-xl mb-4">Buscar Colaborador</h2>
        <div className="mb-4">
          <label htmlFor="busca" className="block text-gray-500 text-sm mb-2">Nome ou ID</label>
          <input
            type="text"
            id="busca"
            className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full"
            placeholder="Digite para buscar..."
          />
        </div>
        {/* Aqui você pode adicionar botões de filtro ou resultados da busca */}
      </div>
    </div>
  );
};

export default ColaboradorPage;