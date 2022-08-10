import Typed from 'react-typed';
import { PortSvg } from '../components/PortSvg';


export const Home = () => {


  return (
    <div className="h-screen flex bg-blue-700">
      {/*ESQUERDA*/}
      <div className="flex flex-col w-[45%] justify-center items-end text-left h-[100%]">
        <h1 className='text-white text-4xl'>
          {` Olá me chamo, `}
          <span className='text-blue-400'>
            <Typed
              strings={['Alexandre']}
              typeSpeed={100}
            />
          </span>
        .</h1>
        <p className='text-white text-xl text-right'>Desenvolvedor Front-End <span className='text-blue-400'>REACT</span></p>
      </div>
      {/*DIREITA*/}
      <div className="flex w-[50%] justify-center items-center h-[100%]">
          <PortSvg/>
      </div>
    </div>
  )
}