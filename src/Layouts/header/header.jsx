import React from 'react'
import { useEffect } from 'react'
import Anim from "../../Media/anim.mp4"
import SplitHeader from '../../Components/animation/splitHeader'


function Header(){ 
    useEffect(()=>{
        document.getElementById('aboutMe-container').classList.add('fall-and-bounce');
    },[])
    return(
    <div  id="header" className="header-container">
        <div className="row-contain">
        <video autoPlay loop muted playsInline className="header-video">
            <source src={Anim} alt="animation" type="video/mp4"/>
                Votre navigateur ne prend pas en compte le format de la video
        </video>
        </div>
        <div className='presentation-container'>
            <div className='presentation'>
                <img src="https://i.goopics.net/q1o7xr.jpg" alt="Developpeur" className="developpeur"/>
                <div className='portfolio-name'>
                <SplitHeader/>
                </div>
                <p className="description">Développeur et Intégrateur Web</p>
            </div>
            <div id="aboutMe-container">
                <div className="aboutMe-description">
                    <p className="introduction">Developpeur passionné par le domaine du Web. Je conçois et réalise vos sites en partant du cahier des charges jusqu'à la mise en ligne.</p>
                    <p className="presentation">Je maitrise de nombreux langages qui me permettront de rendre votre site fiable et fluide afin d'offrir la meilleure experience possible à vos utilisateurs</p>
                    <div className='img-langage-container'>
                        <img src="https://i.goopics.net/k320va.png" alt="logo-langage" className='lgo-html'/>
                        <img src="https://i.goopics.net/6rqqql.png" alt="logo-css"/>
                        <img src="https://i.goopics.net/g34mea.png" alt="logo-javascript"/>
                        <img src="https://i.goopics.net/d9werv.png" alt="logo-react" className='lgo-react'/>
                        <img src="https://i.goopics.net/th9ifp.png" alt="logo-redux"/>
                        <img src="https://i.goopics.net/lnm5c9.png" alt="logo-mogoDb"/>
                        <img src="https://i.goopics.net/evmlfh.png" alt="logo-greenIt"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header