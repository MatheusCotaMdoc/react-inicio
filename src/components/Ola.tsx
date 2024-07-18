/*let getWeekDay = () =>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
}*/
type Props ={
    titulo: string
    avatar: string
    mensagem: string
   
}

export const Ola = ({titulo,avatar,mensagem}: Props) =>{

    return (
        <>
        <h1 style={{color:'red', fontSize: '30px'}}>{titulo}</h1>
            <img src={avatar} alt={titulo} className="w-40"/>
            <ul>
                <li>{mensagem}</li>
                
            </ul>
        
        </>
    )
}