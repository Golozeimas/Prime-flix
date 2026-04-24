import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Filme(){

    
    const {filme, setFilme} = useState({})
    const {id} = useParams()


    useEffect(()=>{
        fetch(`https://omdbapi.com/?i=${id}&apikey=a17992ac`)
        .then((res)=> res.json())
        .then((json)=> setFilme(json))
        .catch((err) => console.log(err))
    }, [id])

    if(filme.lenght === 0){
        return <h1>Carregando...</h1>
    }

    return(
        <div>
            
        </div>
    )
}

export default Filme