import "./Card.css"
import {useState} from "react";

const Card = ({titulo, texto, imagem}) => {
    const [clicado, setClicado] = useState(false)
    const corinthias = new Audio('./corinthias.mp3')



  return (
        <div className={`card ${clicado ? 'clicado': ''}`} onClick={() => {
            setClicado(!clicado)
            corinthias.play()
        }}>
            <img src={imagem} alt=""/>
            <div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
  )
}

export default Card

