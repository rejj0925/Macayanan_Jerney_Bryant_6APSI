import './App.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './LandingPage.css'
import jackhammer from './images/jackhammer.png'

function LandingPage() {
    const location = useLocation();
    const accountName = location.state?.accountName || 'Guest';
    const navigate = useNavigate();
    const goBackToLoginPage = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return(
        <div className='landingBody'>
            <div className='landingContent'>
            <h2>{accountName}, The landing page is still in progress!</h2>

            <img src={jackhammer}
            alt='jackhammer'
            className='jackhammer'/> 

            <button type='button' onClick={goBackToLoginPage} className='buttonToLogin'>Go back to login!</button>
            </div>
        </div>
    );
}
export default LandingPage;
