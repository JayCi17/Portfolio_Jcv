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
                    <p className="introduction">Developpeur passioné par le domaine du Web.Je conçois et réalise vos sites du cahier des charges à la mise en ligne.</p>
                    <p className="presentation">Je maitrise de nombreux langage qui me permettront de rendre votre site fiable et fluide afin d'offrir la meilleure experience possible à vos utilisateurs</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header