import './App.css';
import './LoginPage.css'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [accountName, setAccountName] = useState('');
    const navigate = useNavigate();
    const submitToLanding = (e) => {
        e.preventDefault();
        navigate('/LandingPage', {state: {accountName:accountName}});
    }
    return(
        <div className='loginBody'>
            <div className='Login'>
                <form onSubmit={submitToLanding}>
                    <h2>Login</h2>

                    <input type="text"
                    placeholder="Account Name"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}/>
                     
                    <input type="text" placeholder="Password"/>
                    <input type="submit" value="Submit" className='submitButton'/>
                </form>
            </div>
        </div>
    );
}
export default LoginPage;