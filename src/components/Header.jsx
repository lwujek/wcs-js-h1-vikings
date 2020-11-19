import React from 'react';
import boat from './images/boat.png';
import './Header.css';




const Header = () => {
    return (
        <div className='header'>
            <h1 className='title'>Viqueen and Viking</h1>
            <div>
                <img src={boat} alt='bateau' className='bateau'/>
            </div>
            <div>
                <p className='parag'>Entre deux pillages la solitude se faire vite ressentir sur ton drakar. A partir de maintenant trouve vite l'amour sur notre application dédiée aux rencontres à cornes.</p>
            </div>
        </div>
    )
}

export default Header;


