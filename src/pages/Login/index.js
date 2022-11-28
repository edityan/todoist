import React, { useState } from 'react'
import loginImg from '../../assets/login.png'
import './index.css'
import { signIn } from '../../utils/firebaseFunc'
import { redirect, useNavigate } from 'react-router-dom'

// RECOIL
import { useRecoilState } from 'recoil'
import { atomUser } from '../../atoms/user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // RECOIL STATE
    const [user, setUser] = useRecoilState(atomUser);
    // STATE
    const [data, setData] = useState({ email: '', password: '' })

    const navigate = useNavigate();

    const handleInput = (e) => {
        let type = e.target.name
        let value = e.target.value

        setData({...data, [type]: value})
    }

    const renderToast = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        }) 
    }

    const handleSubmit = () => {
        signIn(data.email, data.password)
        .then((data) => {
            setUser(data)
            navigate("/")
        })
        .catch((error) => renderToast(error.code))
    }

    console.log(user)

  return (
    <div className='login-container'>
        <div className="login-wrapper">
            <div className="login-image">
                <img src={loginImg} width="300" style={{position: 'relative'}} alt="login"/>
            </div>
            <div className="login-form-wrapper">
                <h2>To-Do</h2>
                <div className="login-form" >
                    <div className='input-form'>
                        <input placeholder="Email" name='email' onChange={handleInput} value={data.email}/>
                    </div>
                    <div className='input-form'>
                        <input type="password" placeholder="Password" name='password'  onChange={handleInput} value={data.password} />
                    </div>
                    <div>
                        <button type='submit' className="login-form-button" onClick={handleSubmit}> Log in </button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
        />
        {/* <div className="footer">
            <a href="" target="_blank" rel="noopener noreferrer" className="footerLink">Powered by React</a>
        </div> */}
    </div>
  )
}

export default Login