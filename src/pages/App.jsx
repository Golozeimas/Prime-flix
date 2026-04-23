import { useEffect } from "react"
import "../style/main.css"
import { useState } from "react"

function App(){
    
    const {filmes, setFilmes } = useState([])
    filmes
    setFilmes

    useEffect(()=>{
        fetch()
    }, [])
    
    return(
        <div> 
            <main>
                <h2>
                    Venom: Tempo de carnificina
                </h2>
                <img src="public/PrimeFlix.png" alt="" />
                <button>Acessar</button>
            </main>
        </div>
    )
}

export default App