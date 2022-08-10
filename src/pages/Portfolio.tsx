import { imagesData } from '../components/Data'
import Carousel from 'react-elastic-carousel';
import '../styles/styles.css'

export const Portfolio = () => {
  
  

  return (
    <div className="h-screen bg-blue-700 text-white w-screen flex flex-col">
      <div className='w-[80%] h-[10%] flex flex-col justify-start mx-auto pt-14'>
        <h1 className='text-4xl'>Seja Bem-Vindx ao meu <span className='text-blue-400'>Portfólio</span></h1>
        <p className='text-xl mt-10'>Abaixo estão alguns dos meus projetos desenvolvidos
          para tangibilizar meu conhecimento. <span className='opacity-30'>Os projetos estão disponíveis no meu GitHub.</span> </p>
      </div>
      <div className='w-screen flex h-full justify-center items-center'>
        <div className='w-[70%] h-[70%] justify-center items-center '>
          <Carousel>
            {imagesData.map(item =>
              <div key={item.id} className='w-full h-[60vh] flex flex-col items-center '>
                <h1 className='text-3xl mt-10'>{item.name}</h1>
                <div className=' flex items-center justify-center'>
                  <img src={item.url} alt={item.description} 
                    className="mt-10 w-full" />
                </div>
                <p className='mt-4'>{item.description}</p>
              </div>
            )}
          </Carousel>
        </div>
      </div>
    </div>

  )
}