import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function Vigenere(){

    const [encryptionMethod, setEncryptionMethod] = useState("");
    const [key, setKey] = useState("");
    const [message, setMessage] = useState("");

        function encryptVigenere(e) {

        e.preventDefault();

        let result = '',keyArray = ignoreChars(key);

        for (let i = 0, j = 0; i < message.length; i++) {
            let c = message.charCodeAt(i);
            if (64 < c && c < 91) {
                result = result + String.fromCharCode(65 + (c - 65 + keyArray[j % keyArray.length]) % 26);

                j++;
            } else if (96 < c && c < 123) {
                result = result + String.fromCharCode(97 + (c - 97 + keyArray[j % keyArray.length]) % 26);

                j++;
            } else {
                result = result + message.charAt(i);
            }
        }
        document.getElementById("toVigenere").innerHTML = result;
    }

    function decryptVigenere(e) {

        e.preventDefault();

        let keyArray = ignoreChars(key);
        for (let i = 0; i < keyArray.length; i++) {
            keyArray[i] = (26 - keyArray[i]) % 26;
        }
        let result = '';

        for (let i = 0, j = 0; i < encryptionMethod.length; i++) {
            let c = encryptionMethod.charCodeAt(i);
            if (64 < c && c < 91) {
                result = result + String.fromCharCode(65 + (c - 65 + keyArray[j % keyArray.length]) % 26);

                j++;
            } else if (96 < c && c < 123) {
                result = result + String.fromCharCode(97 + (c - 97 + keyArray[j % keyArray.length]) % 26);

                j++;
            } else {
                result = result;
            }
        }   

        document.getElementById("fromVigenere").innerHTML = result;
    }

    function ignoreChars(key) {
        let filteredKeys = [];
        for (let i = 0; i < key.length; i++) {
            let c = key.charCodeAt(i);

           if ( (64 < c && c < 91) || (96 < c && c < 123))
           filteredKeys.push((c - 65) % 32);
        }
        return filteredKeys;
    }

    return(
        <div className="cipherPages">
        
        <div className="vigenereWrapper">
            <h1>Szyfr Vigenere</h1>
             <h2>Zaszyfruj dowolny tekst lub wczytaj z pliku .txt.</h2>
             <form id="myKey">
                <h4>
                Wybierz klucz:&nbsp;
                <input type="text" value={key} required onChange={
                (e) => setKey(e.target.value)
                }/>
                </h4>
            </form>
            <div className="row">
                <div className="column">
                    <h3>Zaszyfruj</h3>

                    <div className="loadDiv">
                        <p>Załaduj wiadomość z pliku:</p>
                        <input type="file" id="messageToLoadLow"/><br/>
                        <button className="baseButton" >Załaduj</button><br/><br/>
                        
                    </div>
                    <div className= "areas" >
                    <div className="inputArea">
                    <form onSubmit={encryptVigenere}>
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
                    <textarea cols="20" rows="5" readOnly={true} id="toVigenere"></textarea><br/>

                    <button className="baseButton" >Zapisz do pliku .txt</button><br/>
                    </div>
            </div>          


                </div>
                    <hr/>
                <div className="column">
                    <h3>Odszyfruj</h3>

                    <div className="loadDiv">
                        <p>Załaduj szyfr z pliku:</p>
                        <input type="file" id="cipherToLoadLow"/><br/>
                        <button className="baseButton" >Załaduj</button>

                        <br/><br/></div>

            <div className="areas">
                <div className="inputArea">
                    <form onSubmit={decryptVigenere}>
                        Szyfr:<br/>
                        <textarea cols="20" rows="5" className="myInput" value={encryptionMethod}
                                  required onChange={
                            (e) => setEncryptionMethod((e.target.value).toLowerCase())
                        }>text</textarea><br/>
                        <input className="changeBtn" type="submit" value="Odszyfruj"/>
                    </form><br/>
                </div>
                    <div className="resultArea">
                    <p>(Nie)tajna wiadmość:</p><br/>
                    <textarea cols="20" rows="5" readOnly={true} id="fromVigenere"></textarea><br/>

                    <button className="baseButton">Zapisz do pliku .txt</button>
                    </div>
                </div>
                </div>
            </div>
        
        
        </div>
        <ul>
                <li><Link to="/" >Kod Morsa</Link></li>
                <li><Link to="/affinic" >Szyfr Affiniczny</Link></li>
            </ul>
     </div>
    )
}