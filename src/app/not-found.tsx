import Link from "next/link";

export default function NotFound(){
  return(
      <div className="flex flex-col items-center justify-center">
           <h1 className="text-center font-bold mt-9" style={{ fontSize: '2em' }}>
             Página 404 não encontrada
           </h1>
           <p>Essa página que tentou acessar não existe!</p>

           <Link href='/' className="font-bold">
              Voltar para Home
           </Link>
     </div>
    )

}