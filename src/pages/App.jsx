import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "../style/main.css"
import "../"

function App(){
    
    const API_URL = import.meta.env.VITE_API_URL
    const API_KEY = import.meta.env.VITE_CHAVE
    
    const [filmes, setFilmes] = useState([])
    
    useEffect(()=>{
        fetch(`${API_URL}/?s=Joker&apikey=${API_KEY}&page=1`)
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
                <button><Link className="link" to={`/filme/${filme.imdbID}`}>Acessar</Link></button>
            </main>
            })}
        </div>
    )
}

export default App