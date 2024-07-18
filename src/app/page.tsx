import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { Ola } from "@/components/Ola"
const Page = () => {
  return (
    <div className='bg-center'>
      
      <h1 className="font-bold text-lg hover:bg-sky-200 ">Olá Mundo!</h1>
      <h3>Algum outro texto!</h3>

      
      <Person
        name= 'Johnny Deep'
        avatar='https://upload.wikimedia.org/wikipedia/commons/7/79/Johnny_Depp_Deauville_2019.jpg'
        filmes={['Alice','Piratas do Caribe','Fantastica fabrica de Chocolate']}
      />

      <Person
        name='Angelina Jollye'
        avatar="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/24630_7E9A5B3C65889D88.jpg?w=1024"
        filmes={['Tomb Ryder','Malevola','Sr e sr Smith']}

      />
      
      <Ola
      titulo="Ola mundo!"
      avatar="https://cdn.pixabay.com/animation/2022/10/11/09/05/09-05-26-529_512.gif"
      mensagem="Esse e meu primeiro site usando react"
      />
    </div>
  )
}
//todo componente que eu crio, eu tenho que exportar
export default Page


