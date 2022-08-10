import { FileJsx, FileHtml, FileCss, Atom, Graph, FileTsx } from "phosphor-react"
import { useState } from "react"
import AboutSvg from "../components/AboutSvg"





export const About = () => {
  const [name, setName] = useState('')
  const [filled, setFilled] = useState(false)

  const toggleButton = () => {
    if (name != '') {
      setFilled(true)
    }
  }

  return (
    <div className="h-screen bg-blue-700 text-white flex flex-col justify-center items-center">
      {!filled ? <div className="h-[50%] flex flex-col justify-center items-center mt-[-200px]">
        <p className="text-4xl">Olá vistante, como devo te chamar?</p>
        <input
          type="text"
          placeholder="Digite seu melhor nome =D"
          className="w-full p-2 mt-10 h-14 text-black focus:"
          value={name}
          onChange={e => {
            setName(e.target.value)
          }} />
        <button
          className="hover:opacity-60 transition-opacity bg-blue-700 w-[100%] text-xl mt-10 p-4 border-2 border-white"
          onClick={toggleButton}
        >
          Saiba mais sobre Alexandre
        </button>
      </div>
        :
        <div className="w-[80%] h-screen flex flex-col justify-start mx-auto pt-14">
          <h1 className="text-4xl">Olá <span className="text-blue-400">{name}</span>, tudo bem?</h1>
          <div className="flex w-full mt-10 tracking-wide">
            <p className="text-xl">Me chamo Alexandre Sicchieri Cancian e tenho 27 anos. Comecei
              minha vida na tecnologia muito novo, desde os 12 anos, mas nunca me aprofundei nos
              assuntos de desenvolvimento de software, apenas em manutenção de hardware.
              Quando terminei meu ensino médio, escolhi estudar Fisioterapia, cursei por dois anos e tranquei, pois
              sentia que alí não era meu lugar, depois de um ano iniciei a formação em Engenharia de Computação pela
              Universidade de Ribeirão Preto. Hoje estou aprimorando minhas habilidades em React, pois desejo muito me
              tornar um desenvolvedor WEB Front-End, e posteriormente um desenvolvedor WEB full stack.
              <br />
              <br />
              Abaixo será apresentado as tecnologias que utilizo para meus projetos de estudo.
            </p>
          </div>
          <div className="flex mt-12">
            <FileJsx size={64} alt="JavaScript" />
            <FileTsx size={64} alt="TypeScript" />
            <FileHtml size={64} alt="HTML" />
            <FileCss size={64} alt="CSS" />
            <Atom size={64} alt="REACT" />
            <Graph size={64} alt="GraphQl" />

            <div className="w-full flex justify-end pr-24 ">
              <AboutSvg />
            </div>
          </div>
          
        </div>}
    </div>
  )
}