import { Link } from "react-router-dom"

export const Header = () =>{
  return (
    <div className="text-2xl mx-auto w-max-['1280px'] w-full flex justify-center gap-32 py-8 uppercase bg-blue-700">
      <Link to="/" className="hover:opacity-60 transition-opacity text-white">Início</Link>
      <Link to="/about" className="hover:opacity-60 transition-opacity text-white">Sobre</Link>
      <Link to="/portfolio" className="hover:opacity-60 transition-opacity text-white">Portfólio</Link>
      <Link to="/contact" className="hover:opacity-60 transition-opacity text-white">Contato</Link>
    </div>
  )
}