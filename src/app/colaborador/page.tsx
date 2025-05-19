'use client'

import React from 'react';
import { useState } from "react";
import Link from 'next/link';
import UploadDocument from '@/components/UploadDocument';


const ColaboradorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // modal anexar documentos
  const documentLabels = [
  "RG ou CNH",
  "CPF",
  "Carteira de trabalho digital",
  "Certidão casamento",
  "Certidão nascimento",
  "Comprovante residência",
  "Título de eleitor",
  "Reservista",
  "Laudo médico",
];

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
 
        { /*Seção de Dados Pessoais */} 
        <div className="col-span-3 p-6 border border-gray-700 rounded-md mt-8"> 
          <h2 className="text-xl mb-4 flex items-center">Dados Pessoais</h2>
            <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="estado-civil" className="block text-gray-500 text-sm mb-2">Estado Civil</label>
            <input type="text" id="estado-civil" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
          </div>
          <div>
           <label htmlFor="nome-mae" className="block text-gray-500 text-sm mb-2">Nome da Mãe</label>
           <input type="text" id="nome-mae" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
          </div>
          <div>
            <label htmlFor="nacionalidade" className="block text-gray-500 text-sm mb-2">Nacionalidade</label>
            <input type="text" id="nacionalidade" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
          </div>
          <div>
           <label htmlFor="nome-pai" className="block text-gray-500 text-sm mb-2">Nome do Pai</label>
           <input type="text" id="nome-pai" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
          </div>
          <div>
            <label htmlFor="naturalidade" className="block text-gray-500 text-sm mb-2">Naturalidade</label>
            <input type="text" id="naturalidade" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
          </div>
          <div>
           <label htmlFor="email-pessoal" className="block text-gray-500 text-sm mb-2">E-mail Pessoal</label>
           <input type="text" id="email-pessoal" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
          </div>
         </div>
        </div>


        {/* Seção de Documentos */}
          <div className="col-span-3 p-6 border border-gray-700 rounded-md mt-8 grid grid-cols-4 gap-4 relative">
            <h2 className="text-xl mb-4 col-span-4 flex items-center">Documentos</h2>

           {/* Coluna principal com os dados */}
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <div>
               <label className="block text-gray-500 text-sm mb-2">RG</label>
               <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div>
               <label className="block text-gray-500 text-sm mb-2">Órgão expedidor</label>
               <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">UF</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div className="col-span-3">
                <label className="block text-gray-500 text-sm mb-2">Data de emissão</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div className="col-span-3">
                <label className="block text-gray-500 text-sm mb-2">CPF</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">Número do PIS</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-500 text-sm mb-2">Data de registro do PIS</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">Título de eleitor</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">Zona</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">Seção</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-2">Número da reservista</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-500 text-sm mb-2">Categoria da reservista</label>
                <input type="text" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
              </div>
            </div>

       {/* Seção de Documentos com botão para abrir o modal */}
        <div className="col-span-1 border border-gray-700 rounded-md p-4 bg-gray-900">
          <p className="font-semibold">✕ Documentos anexados</p>
          <p
            className="mt-2 text-gray-400 hover:text-white cursor-pointer underline"
            onClick={() => setIsModalOpen(true)}>
            Clique aqui para mais detalhes
          </p>
        </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 text-white rounded-lg p-6 w-full max-w-4xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white text-xl">
              ✕
            </button>
            <div className="w-full px-6">
              <h2 className="text-center text-xl font-semibold mb-6">X documentos anexados</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {documentLabels.map((label, idx) => (
                  <UploadDocument key={idx} label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>

      { /*Seção de Endereço */} 
        <div className="col-span-3 p-6 border border-gray-700 rounded-md mt-8"> 
          <h2 className="text-xl mb-4 flex items-center">Endereço</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="logradouro" className="block text-gray-500 text-sm mb-2">Logradouro</label>
              <input type="text" id="logradouro" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
             <label htmlFor="numero" className="block text-gray-500 text-sm mb-2">Número</label>
             <input type="text" id="numero" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="complemento" className="block text-gray-500 text-sm mb-2">Complemento</label>
              <input type="text" id="complemento" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="bairro" className="block text-gray-500 text-sm mb-2">Bairro</label>
              <input type="text" id="bairro" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="cidade" className="block text-gray-500 text-sm mb-2">Cidade</label>
              <input type="text" id="cidade" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
             </div>
            <div>
              <label htmlFor="cep" className="block text-gray-500 text-sm mb-2">CEP</label>
              <input type="text" id="cep" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
          </div>
        </div>

        { /*Seção de Formação Acadêmica */} 
        <div className="col-span-3 p-6 border border-gray-700 rounded-md mt-8"> 
          <h2 className="text-xl mb-4 flex items-center">Educação</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="formação" className="block text-gray-500 text-sm mb-2">Nível de Formação</label>
              <input type="text" id="formação" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
            </div>
            <div>
              <label htmlFor="curso" className="block text-gray-500 text-sm mb-2">Curso</label>
              <input type="text" id="curso" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
             </div>
            <div>
              <label htmlFor="conclusao-curso" className="block text-gray-500 text-sm mb-2">Data de conclusão de curso</label>
              <input type="text" id="conclusao-curso" className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full" readOnly />
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