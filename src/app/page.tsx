import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"

const Page = () => {
  return (
    <div className='bg-center'>
      <h1 className="font-bold text-lg hover:bg-sky-200 ">Olá Mundo!</h1>
      <h3>Algum outro texto!</h3>

      <GeoForm/>
      <Person/>
    </div>
  )
}
//todo componente que eu crio, eu tenho que exportar
export default Page
