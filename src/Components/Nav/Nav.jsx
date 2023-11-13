import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div className="nav">
            <Link to="/" className='About'>Accueil</Link>
                <a href="#aboutMe-container" className='About'>Présentation</a> 
                <a href="#mesRealisations" className="About">Mes Réalisations</a>
                <a href="#contact" className='About'>Me Contacter</a>
        </div>
    )
}
export default Nav