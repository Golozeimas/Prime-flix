import { useEffect } from "react"
import { useState } from "react"
import "../style/main.css"

function App(){
    
    const [filmes, setFilmes] = useState([])
    
    useEffect(()=>{
        fetch("https://omdbapi.com/?s=batman&apikey=a17992ac&page=1")
        .then((res)=> res.json())
        .then((filme)=> setFilmes(filme.Search))
        .catch((err)=> console.log(err))
    }, [])

    if(filmes.length === 0){
        return <h1> Carregando..</h1>
    }
    
    return(
        <div> 
            {filmes.map((filme)=>{
            return <main key={filme.imdbID}>
                <h2>
                    {filme.Title}
                </h2>
                <img src={filme.Poster} alt="Imagem do filme/série" />
                <button>Acessar</button>
            </main>
            })}
        </div>
    )
}

export default App