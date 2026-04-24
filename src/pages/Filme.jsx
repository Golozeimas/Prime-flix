import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/filme.css"

function Filme(){

    
    const [filme, setFilme]  = useState(null)
    const {id} = useParams()


    useEffect(()=>{
        fetch(`https://omdbapi.com/?i=${id}&apikey=a17992ac`)
        .then((res)=> res.json())
        .then((json)=> setFilme(json))
        .catch((err) => console.log(err))
    }, [id])

    if(!filme){
        return <h1>Carregando...</h1>
    }

    function salvar(){
        const filmes_salvos = localStorage.getItem("@filmes")

        let lista_de_filmes = JSON.parse(filmes_salvos) || []

        const ja_existe = lista_de_filmes.some((filme)=> filme == id)

        if(ja_existe){
            alert("Já estar nos seus filmes!")
            return;
        }

        lista_de_filmes.push(id)

        localStorage.setItem("@filmes", JSON.stringify(lista_de_filmes))

        alert("Filme salvo com sucesso!")
    
    }

    // O trailer não tenho na API
    return(
        <div className="Main">
            <h2>{filme.Title}</h2>
            <div className="Menu">
                
                <div className="imagem-filme">
                    <img src={filme.Poster} alt="Imagem do filme" />
                </div>

                <h3>Sinopse</h3>
                
                <p>{filme.Plot}</p>
                <p>
                <strong>
                    Avaliação: {filme.Ratings[0].Value}
                </strong>
                </p>    
            </div>
            <div className="Btn">
                <button className="salvar" onClick={salvar}>
                    Salvar
                </button>
                <button className="trailer">
                    Trailer
                </button>
            </div>
        </div>
    )
}

export default Filme