import './Home.css'
import React from "react";
import music from '../../Assets/IMG/music.png'
import logo from '../../Assets/IMG/logo.svg'
import design from '../../Assets/IMG/design.png'
import { useNavigate } from 'react-router-dom'
import arrow from '../../Assets/IMG/Group.svg'

export default function Home() {

    const navigate = useNavigate()

    return (
        <div className="home-main">
            <div className='logo-cont'>
                <img src={logo} className='logo' alt="logo" />

                <div>
                    <button>Background</button>
                    <button>Start a project</button>
                </div>
            </div>
            <div className="music">

                {/* <div onClick={()=>navigate('/')}> */}
                <div className="img-holder" >
                    <div className="music-layer" onClick={() => navigate('/home')}>
                        <div className='layer-info music-dive'>
                            <h1>Music</h1>
                            <p>Dive in   <span><img src={arrow} alt="arrow" /></span></p>
                        </div>
                    </div>

                    <img className='music-background' src={music} alt="music" />
                    {/* </div> */}
                </div>
            </div>
            <div className="design">

                <div className="img-holder">
                    <div className="design-layer" onClick={() => navigate('/home')}>
                        <div className='layer-info design-dive'>
                            <h1>UX-UI Design</h1>
                            <p>Dive in   <span><img src={arrow} alt="arrow" /></span></p>
                        </div>
                    </div>
                    <img className='design-background' src={design} alt="design" />

                </div>
            </div>
        </div>
    )
}