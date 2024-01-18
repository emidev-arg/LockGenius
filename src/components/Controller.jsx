import React, { useEffect, useReducer, useState } from 'react'
import '../styles/Controller.css'
import 'animate.css';
import '../styles/Toast.css'

import { BsCopy } from "react-icons/bs";
import { IoAlertCircleOutline } from "react-icons/io5";

import {IoMdClose} from 'react-icons/io'
import {FaGithub, FaInstagram} from 'react-icons/fa'

import logo from '../assets/logo.svg'

const Controller = () => {

    // Establezco todo lo que querio hacer y usar.
    const [length, setLength] = useState(12);
    const [password, setPassword] = useState('');
    const [useUppercase, setUppercase] = useState(true);
    const [useLowercase, setLowercase] = useState(true);
    const [useNumbers, setNumbers] = useState(true);
    const [useSymbols, setSymbols] = useState(true);
    const [Error, setError] = useState(false);
    const [copiedSuccess, setCopiedSuccess] = useState(false);


    // Siempre que cambia el Input establezco el valor que contiene
    const handleChange = (event) => {
        setLength(event.target.value)
    }

    const copyToClipboard = () => {
        if (password) {
            navigator.clipboard.writeText(password)
            setCopiedSuccess(true)
        }
    }

    const handleClick = () => {

        if (length > 60) {
            return setError(true)
        }

        setError(false)
        // Agarro los elementos y verifico si estan checkeados o no, y los pongo en la const.
        const useUppercase = document.getElementById("uppercase").checked;
        const useLowercase = document.getElementById("lowercase").checked;
        const useNumbers = document.getElementById("numbers").checked;
        const useSymbols = document.getElementById("symbols").checked;


        // Establezco un charset (caracteres) vacio.
        let charset = "";

        // Le digo que el que este checkeado que lo agregue al charset, si no, que no lo agregue.
        if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (useNumbers) charset += "0123456789";
        if (useSymbols) charset += "!@#$%^&*";


        // Establezco una variable password vacia, para luego rellenar con el charset.
        let password = "";

        // Creo un bucle for para cada letra.
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length))
        }

        // Por ultimo establezco el password terminado en el State.
        setPassword(password)
    }

    useEffect(() => {
        handleClick()
    }, [])

    function Toast() {
        return (
            <div className="toast-custom">
                <div className="item-toast">
                    <button onClick={() => setCopiedSuccess(false)}><IoMdClose /></button>
                    <img src={logo} width={60} />
                    <h1>Contraseña copiada con exito!</h1>
                    <p>Gracias por visitar mi sitio web. Tu visita me ayuda mucho para poder seguir con mis desarrollo!</p>
                    <div className="social">
                        <a href="https://github.com/emidev-arg"><FaGithub /></a>
                        <a href="https://www.instagram.com/eemienriquee_"><FaInstagram /></a>
                    </div>
                    <h1></h1>
                </div>
            </div>
        )
    }

    return (
        <main className="controller">
            {copiedSuccess && <Toast />}
            <h1>Generador de contraseñas únicas.</h1>
            <p>Genera tus contraseñas a gusto con tan solo un click.</p>
            <div className="config">
                <div className="input">
                    <input type="number" min={4} max={50} maxLength={50} value={length} onChange={handleChange} />
                </div>
                <div className="passwordShow">
                    <div className="gradient"></div>
                    <span>{password}</span>
                    <div className="icons">
                        <button onClick={copyToClipboard}><BsCopy /></button>
                    </div>
                </div>
            </div>
            <button className='generate' onClick={handleClick}>Generar contraseña</button>
            {Error && (
                <span className="spanError" style={{ padding: '20px 0', color: 'red' }}><IoAlertCircleOutline size={25} style={{ marginRight: '5px' }} />Ingresa una cantidad inferior a 60.</span>
            )}

            <section className="avanzed">
                <p>Configuración avanzada</p>

                <div className="line"></div>
                <div className="checks">

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="uppercase" checked={useUppercase} onChange={() => setUppercase(!useUppercase)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            Mayúsculas
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="lowercase" checked={useLowercase} onChange={() => setLowercase(!useLowercase)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            Minusculas
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="numbers" checked={useNumbers} onChange={() => setNumbers(!useNumbers)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            Numeros
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="symbols" checked={useSymbols} onChange={() => setSymbols(!useSymbols)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            Símbolos
                        </label>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Controller