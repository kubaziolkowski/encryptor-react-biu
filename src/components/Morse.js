import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import morseCodes from '../tables/morseCodes'
export default function Morse(){

    const [message, setMessage] = useState("");

    function encryptMorse(e) {

        let input = message,processedInput = [];

        e.preventDefault();

        input.split(" ")
        .map(function (input) {
            input
            .split("").map(function (character) {
                processedInput.push(Object.keys(morseCodes)
                .find(key => morseCodes
                    [key] === character));
            });
            processedInput.push("     ");
        });
        input = processedInput.join(" ");
        document.getElementById("toMorse").innerHTML = input;
    }

    const [encryptionMethod, setEncryptionMethod] = useState("");

    function decryptMorse(e) {

        e.preventDefault();

        let input = encryptionMethod,processedInput = [];

        input.split("     ")
        .map(function (input) {
            input.split(" ")
            .map(function (character) {
                processedInput
                .push(morseCodes[character]);
            });
            processedInput.push(" ");
        });
        input = processedInput.join("");
        document.getElementById("fromMorse").innerHTML = input;
    }

    return (
        <div className="cipherPages">
        <div className="morseWrapper">
            <h1>Kod Morsa</h1>
             <h2>Zaszyfruj dowolny tekst lub wczytaj z pliku .txt.</h2>
            <div className="">
                <div className="">
                    <h3>Zaszyfruj</h3>

                    <div className="">
                        <p>Załaduj wiadomość z pliku:</p>
                        <input type="file" id="messageToLoadLow"/><br/>
                        <button className="baseButton" >Załaduj</button><br/><br/>
                        
                    </div>
                    <div className= "areas" >
                    <div className="inputArea">
                    <form onSubmit={encryptMorse}>
                        Wiadomość:<br/>
                        <textarea cols="20" rows="5" className="myInput"
                                  value={message} required onChange={
                            (e) => setMessage((e.target.value).toLowerCase())
                        }>text</textarea><br/>
                        <input className="changeBtn" type="submit" value="Zaszyfruj"/>
                    </form><br/>
                    </div>
                    
                    <div className="resultArea">
                    <p>Tajna wiadomość:</p><br/>
                    <textarea cols="20" rows="5" readOnly={true} id="toMorse"></textarea><br/>

                    <button className="baseButton" >Zapisz</button><br/>
                    </div>
            </div>          


                </div>
                    <hr/>
                <div className="">
                    <h3>Odszyfruj</h3>

                    <div className="">
                        <p>Załaduj szyfr z pliku:</p>
                        <input type="file" id="cipherToLoadLow"/><br/>
                        <button className="baseButton" >Załaduj</button>

                        <br/><br/></div>

            <div className="areas">
                <div className="inputArea">
                    <form onSubmit={decryptMorse}>
                        Szyfr:<br/>
                        <textarea cols="20" rows="5" className="myInput" value={encryptionMethod}
                                  required onChange={
                            (e) => setEncryptionMethod((e.target.value).toLowerCase())
                        }>text</textarea><br/>
                        <input className="" type="submit" value="Odszyfruj"/>
                    </form><br/>
                </div>
                    <div className="resultArea">
                    <p>(Nie)tajna wiadmość:</p><br/>
                    <textarea cols="20" rows="5" readOnly={true} id="fromMorse"></textarea><br/>

                    <button className="">Zapisz</button>
                    </div>
                </div>
                </div>
            </div>
        
        
        </div>
        <ul>
                <li><Link to="/affinic" >Szyfr Afiniczny</Link></li>
                <li><Link to="/vigenere" >Szyfr Vigenere</Link></li>
            </ul>
     </div>
    )
}