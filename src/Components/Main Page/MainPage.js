import './MainPage.css'
import React from 'react'
import logo from '../../Assets/IMG/logo.svg'
import smallRec from '../../Assets/IMG/rec2.svg'
import bigRec from '../../Assets/IMG/rec1.svg'
import ss1 from '../../Assets/IMG/ss1.png'
import ss2 from '../../Assets/IMG/ss2.png'
import ss3 from '../../Assets/IMG/ss3.png'
import ss4 from '../../Assets/IMG/ss4.png'
import arrow from '../../Assets/IMG/Group.svg'
import { useNavigate } from 'react-router-dom'



export default function MainPage() {
    const navigate = useNavigate()


    return (
        <div className="main-page">
            <div className='mp-logo-cont'>
                <div className="rectangle">
                    <img src={logo} className='logo' alt="logo" />
                    <div>
                        <button onClick={() => navigate('/')}>
                            <img src={smallRec} alt="rectangle" />
                        </button>
                        <button onClick={() => navigate('/')}>

                            <img src={bigRec} alt="rectangle" />
                        </button>
                    </div>
                </div>
                <div className='mp-buttons'>
                    <button>Background</button>
                    <button>Start a project</button>
                </div>
            </div>
            <div className="mp-content">
                <div className="design-options">
                    <p>Web design</p>
                    <p>Application design</p>
                </div>
                <div className="screenshot-container">
                    <div>

                        <img src={ss1} alt="screenshot" />
                    </div>
                    <div>

                        <img src={ss2} alt="screenshot" />
                    </div>
                    <div>

                        <img src={ss3} alt="screenshot" />
                    </div>
                    <div>

                        <img src={ss4} alt="screenshot" />
                    </div>
                </div>
                <div className="docuport">

                        <h1>Docuport</h1>
                    <button>
                        <p>Dive in   <span><img src={arrow} alt="arrow" /></span></p>
                    </button>
                </div>
            </div>
        </div>

    )
}