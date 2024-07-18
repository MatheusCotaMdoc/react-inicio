import { Circle, Square } from "./Geo";

export const GeoForm = () =>{

    return(

        <div>
            <h1 className="text-2x1 font-bold"> Formas geometricas</h1>
            <h3>Algum outro texto</h3>

            <div className="flex gap-2 border-2 p-3">
                <Square/>
                <Circle/>
            </div>
        </div>

    )
    
}