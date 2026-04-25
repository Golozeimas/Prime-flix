import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/filme.css"
import { toast } from "react-toastify";
function Filme(){

    const API_URL = import.meta.env.VITE_API_URL
    const API_KEY = import.meta.env.VITE_CHAVE

    const [filme, setFilme]  = useState(null)
    const {id} = useParams()


    useEffect(()=>{
        fetch(`${API_URL}/?i=${id}&apikey=${API_KEY}`)
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



        const ja_existe = lista_de_filmes.some((f) => f.imdbID === filme.imdbID)


        if(ja_existe){
            toast.warn('Já estar salvo!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            return;
        }

        lista_de_filmes.push(filme)

        localStorage.setItem("@filmes", JSON.stringify(lista_de_filmes))

        toast.success("Filme salvo com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    
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