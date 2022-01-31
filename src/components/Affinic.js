import {Link} from 'react-router-dom';

import React, {useState} from "react";
import alphabet from '../tables/alphabet'



export default function AffineCipher() {


    const [alpha, setAlpha] = useState(0);
    const [beta, setBeta] = useState(0);
    const [message, setMessage] = useState("");
    const [encryptionMethod, setEncryptionMethod] = useState("");

    function encryptToAffine(e) {

        e.preventDefault();

        let input = message;

        for (let i = 0; i < input.length; i++) {
            if (input[i].match(/[A-Z]+/g)) {
                let alphabetIndex = alphabet.indexOf(input[i]);
                let troublesome = (parseInt(alpha * alphabetIndex) + parseInt(beta)) % alphabet.length;
                input = input.substring(0, i) + alphabet[troublesome] + input.substring(i + 1);
            } else {
                input = input.substring(0, i) + input[i] + input.substring(i + 1);
            }
        }
        document.getElementById("toAffine").innerHTML = input;
    }

    function decryptFromAffine(e) {

        e.preventDefault();

        let word = encryptionMethod;

        for (let i = 0; i < word.length; i++) {
            setAlpha(alpha % alphabet.length);

            let invert = 0;

            for (let j = 1; j < alphabet.length; j++) {
                if ((alpha * j) % alphabet.length === 1)
                    invert = j;
            }

            let alphabetIndex = alphabet.indexOf(word[i]);

            let troublesome = (invert * (alphabetIndex - beta)) % alphabet.length;
            if (troublesome < 0)
                troublesome += alphabet.length;
            word = word.substring(0, i) + alphabet[troublesome] + word.substring(i + 1);
        }
        document.getElementById("fromAffine").innerHTML = word;
    }

    return(
        <div>
        <div className="affinicWrapper">
            <h1>Szyfr Affiniczny</h1>
            <form id="myKey">
                <h4>
                Wybierz klucz:<br/>
                Alfa:
                <input type="number" value={alpha} required onChange={
                    (e) => setAlpha(e.target.value)
                }/>&nbsp;
                Beta:
                <input type="number" value={beta} required onChange={
                    (e) => setBeta(e.target.value)
                }/>
                </h4>
            </form><br/>

            <div className="">
                <div className="">
                    <h3>Zaszyfruj</h3>

                    <div className="">
                        <p>Załaduj wiadomość z pliku:</p>
                        <input type="file" id=""/><br/>
                        <button className="" >Załaduj</button><br/><br/>
                        </div>

                <div className="areas">
                    <div className="inputArea">
                    <form onSubmit={encryptToAffine}>
                        Wiadomość:<br/>
                        <textarea cols="20" rows="5" className="myInput" value={message} required onChange={
                            (e) => setMessage((e.target.value).toUpperCase())
                        }>text</textarea><br/>
                        <input className="" type="submit" value="Zamień"/>
                    </form><br/>
                    </div>     
                    
                    <div className="resultArea">
                    <p>Zaszyfrowana wiadomość:</p><br/>
                    <textarea cols="20" rows="5" readOnly="true" id="toAffine"></textarea><br/>

                    <button className="" >Zapisz</button><br/><br/>
                    </div>
                </div>
                </div>

                <div className="">
                    <h3>Odszyfruj</h3>
                    <div className="areas">
                    <div className="inputArea">
                    <form onSubmit={decryptFromAffine}>
                    <div className="loadDiv">
                        Załaduj szyfr z pliku:
                        <input type="file" id=""/><br/>
                        <button className="" >Załaduj</button><br/><br/>

                    </div>
                        Szyfr:<br/>
                        <textarea cols="20" rows="5" className="myInput" value={encryptionMethod} required onChange={
                            (e) => setEncryptionMethod((e.target.value).toUpperCase())
                        }>text</textarea><br/>
                        <input className="" type="submit" value="Zamień"/>
                    </form><br/>
                    </div>
                    <div className="resultArea">
                    <p>Odszyfrowana wiadomość:</p><br/>
                    <textarea cols="20" rows="5" readOnly="true" id="fromAffine"></textarea><br/>

                    <button className="" >Zapisz</button>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        <ul>
                <li><Link to="/" >Kod Morsa</Link></li>
                <li><Link to="/vigenere" >Szyfr Vigenere</Link></li>
            </ul>
            </div>
    )
}
