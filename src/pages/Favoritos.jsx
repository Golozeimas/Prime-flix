import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const lista_de_filmes = localStorage.getItem("@filmes")
        const lista_transformada = JSON.parse(lista_de_filmes) || []
        setFilmes(lista_transformada)   
    }, [])

    function excluirFilme(id){
        // pega apenas os diferentes da lista
        // diferente do find que pega só o primeiro e do some que retorna true ou false
        let novaLista = filmes.filter((filme) => filme.imdbID !== id)
        setFilmes(novaLista)
        localStorage.setItem("@filmes", JSON.stringify(novaLista))
    }

    if(filmes.length === 0){
        return <h1>Não há filmes na sua lista</h1>
    }

    return(
        <div>
            <h1>Meus Filmes</h1>

            {filmes.map((filme) =>{ 
            return <div className="main" key={filme.imdbID}>
                    <h4>{filme.Title}</h4>

                    <Link to={`/filme/${filme.imdbID}`}>
                        Ver detalhes
                    </Link>

                    <button onClick={() => excluirFilme(filme.imdbID)}>
                        Excluir
                    </button>
                </div>
            } )}
        </div>
    )
}

export default Favoritos