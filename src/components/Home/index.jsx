import LogoTitle from '../../assets/images/logo-l.png'
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react'

function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'n', 's', 'u', 'h', 'a', 'n']
    const jobArray = ['d', 'a', 't', 'a', 's', 'c', 'i', 'e', 'n', 't', 'i', 's', 't']

    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                    Hi,
                    <br />
                    I'm<img src={LogoTitle} alt='logo' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    Data Scientist.
                </h1>
                <h2>Machine Learning Engineer / Statistician / TikToker</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home