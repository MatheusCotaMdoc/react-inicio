let getWeekDay = () =>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
}
type Props ={
    name: string
    avatar: string
    filmes: string[]
   
}

export const Person = ({name,avatar,filmes}: Props) =>{

    return (
        <>
        <h1 style={{color:'red', fontSize: '30px'}}>{name} - {getWeekDay()}</h1>
            <img src={avatar} alt={name} className="w-40"/>
            <ul>
                <li>{filmes[0]}</li>
                <li>{filmes[1]}</li>
                <li>{filmes[2]}</li>
            </ul>
        
        </>
    )
}