import React, { useState } from 'react'
import IconLogin from '../../../public/icon/logo.png'
// import IconSig from '../../public/icon/sig.png'
import './style/loginEstruct.scss'
import {login} from '../../api/login/index';
import {Redirect} from 'react-router-dom'

const TemplateLogin = () => {
    const [validate,setValidate] = useState(false)
    const [showPassword,setShowPassword] = useState(true)
    const [form,setForm] = useState({
        password : null,
        user : null
    })

    const handleChange  = (e) => {
        const {name,value} = e.target       
        setForm({...form, [name] : value})      
    }

    const handleSumbit = async () => {      
        const token = await login(form)   
        setValidate(true)
    }

    return(
        <React.Fragment>
            {validate == true? <Redirect to = "/app/dashboard" /> : null} 
            <div className = "container-login">
                <div className = "login-box card">  
                    <div className = "box">
                        <h3 className = "box__title">INICIAR SESION</h3>
                        <div className = "box__form">
                            <div className = "box__group box--borderActive box__group--text">
                                <label className = "box__margin" htmlFor = "usuarioID">usuario</label>
                                <input className = "box__input"  id = "usuarioID" type="text" placeholder = "example113" name = "user" onChange = {handleChange}
                                />
                            </div>                    
                            <div className = "box__group box--borderActive box__group--text">
                                <label className = "box__margin" htmlFor ="passwordID" > contraseña</label>
                                <input className = "box__input" id="passwordID" type={showPassword? "password":"text"} placeholder = "- - - - - - - -" name = "password" onChange = {handleChange} />
                            </div>    
                            <div className = "box__detail space">                                
                                <span className = "box__active">                                   
                                    <input 
                                        id = "checkboxID" 
                                        type = "checkbox"
                                        onClick = {(e)=>{
                                           e.target.checked? setShowPassword(false) : setShowPassword(true)                                           
                                        }}
                                    />
                                    <label htmlFor = "checkboxID"> Mostrar </label>
                                </span>
                                <span className = "box__active">recuperar contraseña ?</span>
                            </div>
                            <div>
                                <input className = "box__button" type="button" value ="INICIAR" onClick = {handleSumbit}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "logo-box card">
                    <div className = "logo__img-card">
                        <img className = "logo__img" src = {IconLogin} />
                        <span className = "logo__link">
                         
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TemplateLogin