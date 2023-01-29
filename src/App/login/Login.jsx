import React from 'react'
import { useState } from 'react'
import './login.css'
import Logo from '../../logo.png'
import Welcome from '../../welcome.gif'
import Icon from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'



export default function Login() {

    const [type, setType] = useState('password');
    const [icon , setIcon] = useState(eyeOff);

    const handleToggle = () => {
        
        if(type === 'password'){
        setIcon(eye);
        setType('text');
        console.log('hey')
        }
        else {
        setIcon(eyeOff);
        setType('password')
        }
}

  return (
    <div className='main-login'>
        <div className="login-contain">
            <div className="left-side">
                <div className="img-class">
                    <img src={Logo} alt="" id='img' />
                </div>
                <form action="">
                    <label for="email">Email :</label>
                         <input type="email" placeholder='Entrer votre email' autoFocus />
                         <label for="password" >Password : </label>

                            <div className='password'>
                         <input type={type} placeholder='Entrer votre mot de passe'/>
                         <span onClick={handleToggle}><Icon icon={icon} size="20"></Icon> </span>
                         </div> 

                            <button type='submit' id='submit'>Envoyer</button> 

                </form>
            </div>
            <div className="right-side">
                <div className="welcome">
                    <h3>Bienvenue !</h3>
                </div>
                {/* <div className='welcome-img'> */}
                    <img src={Welcome} id='welcomin' alt="" srcset="" />
                {/* </div> */}

            </div>
        </div>
     </div>
  )
}
