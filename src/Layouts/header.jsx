import Anim from '../Media/anim.mp4'


function Header(){
    return(
    <div  id="header" className="header-container">
        <div className="row-contain">
        <video autoPlay loop muted playsInline className="header-video">
            <source src={Anim} alt="animation" type="video/mp4"/>
                Votre navigateur ne prend pas en compte le format de la video
        </video>
        </div>
        <div className='presentation'>
            <img src="https://i.goopics.net/q1o7xr.jpg" alt="Developpeur" className="developpeur"/>
            <h1>Jean-Charles VALENTIN</h1>
            <p className="description">Développeur et Intégrateur Web</p>
        </div>
    </div>
    )
}

export default Header