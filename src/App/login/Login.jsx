import React from 'react'
import './login.css'
import Logo from '../../logo.png'
import Welcome from '../../welcome.gif'



export default function Login() {
  return (
    <div className='main-login'>
        <div className="login-contain">
            <div className="left-side">
                <div className="img-class">
                    <img src={Logo} alt="" id='img' />
                </div>
                <form action="">
                    <label for="email">Email :</label>
                         <input type="email" placeholder='Entrer votre email ...' />
                    <label for="password">Password : </label>
                         <input type="password" placeholder='Entrer votre password ...' />

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
