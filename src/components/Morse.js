import React from 'react';
import morseCodes from '../tables/morseCodes'
export default function Morse(){



    return( <div class="morseWrapper">
        <h1>Kod Morsa</h1>
        <h2>Zaszyfruj dowolny tekst lub wczytaj z pliku .txt.</h2>
        <input type = "file" accept=".txt" />
        <br/>
        <button>Wczytaj</button>
        <form>
            <textarea cols="20" rows="5"></textarea>
            <br/>
            <input type="submit" value = "Zaszyfruj"/>
        </form>

        Zaszyfrowana wiadomość:<br/>
                    <textarea cols="20" rows="5" readOnly={true} ></textarea>

                    <br/>

                    
                    <button>Zapisz plik z tajną wiadomością</button>

                    <hr/>

                    <h2>Odszyfruj alfabet morsa lub wczytaj z pliku .txt.</h2>

                    <input type = "file" accept=".txt" />
        <br/>
        <button>Wczytaj</button>
        <form>
            <textarea cols="20" rows="5"></textarea>
            <br/>
            <input type="submit" value = "Odszyfruj"/>
        </form>

        Odszyfrowana wiadomość:<br/>
                    <textarea cols="20" rows="5" readOnly={true} ></textarea>

                    <br/>

                    
                    <button>Zapisz plik z (nie)tajną wiadomością</button>

    </div>
    )
}