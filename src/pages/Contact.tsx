import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react"
import ContactSvg from "../components/ContactSvg";




export const Contact = () => {

  const handleButton = (url: string) => {
    window.location.href = `${url}`;
  }

  return (
    <div className="h-screen w-screen bg-blue-700 text-white flex justify-center items-center">
      <div className="w-[50%] h-screen flex flex-col justify-center items-center ml-32">
        <div className='w-[100%] h-[20%] flex flex-col'>
          <h1 className='text-4xl'>Entre em  <span className='text-blue-400'>Contato</span> comigo!</h1>
          <p className='text-xl mt-10'>Abaixo tem as melhores formas de se entrar em contato comigo.</p>
        </div>
        <div className="w-[100%] mb-4 mx-auto flex">
          <LinkedinLogo size={80} />
          <button className="w-[26vw] h-20 text-xl p-4 border-2" onClick={() => {
            window.location.href = 'https://www.linkedin.com/in/alexandre-sicchieri-ba7640103/'
          }}>LinkedIn</button>
        </div>
        <div className="w-[100%] mb-4 mx-auto flex">
          <GithubLogo size={80} />
          <button className="w-[26vw] h-20 text-xl p-4 border-2" onClick={() => {
            window.location.href = 'https://github.com/AlexandreSican'
          }}>GitHub</button>
        </div>
        <div className="w-[100%] m-4 mx-auto flex">
          <Envelope size={80} />
          <button className="w-[26vw] h-20 text-xl p-4" disabled>alexsicchieri@gmail.com</button>
        </div>
      </div>
      <div className="w-[50%]">
        <ContactSvg/>
      </div>
    </div>
  )
}