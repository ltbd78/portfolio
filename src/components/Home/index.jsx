import LogoTitle from '../../assets/images/logo-l.png'
import { Link } from 'react-router-dom'
import './index.scss';

function Home() {
    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                    Hi,
                    <br />
                    I'm<img src={LogoTitle} alt='logo' />insu Han,
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