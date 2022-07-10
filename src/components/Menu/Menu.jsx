import { Link } from "react-router-dom"

function Menu() {
return(
    <ul className="menu">
        <li className="item">
         <Link className="link" to="/">Sobre</Link> </li>
        <li className="item">
             <Link className="link" to="/portfolio">Portfolio</Link> </li>
        <li className="item">
            <Link  className="link"
            to="/comentarios">Comentarios</Link> </li>
        
    </ul>
)
}

export default Menu