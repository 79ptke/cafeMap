import './common.css';
import Logo from '../img/logo.png';
import React, { useEffect } from 'react';

const Header = () => {

    useEffect(()=>{
        document.querySelector('.hamMenu').addEventListener('click', function() {
            if(document.querySelector('.hamMenu').classList.contains('on')) {
                document.querySelector('.hamMenu').classList.remove('on');
                document.querySelector('.bg').classList.remove('show');
                document.querySelector('.header ul').style.right = '-140px';
            } else {
                document.querySelector('.hamMenu').classList.add('on');
                document.querySelector('.bg').classList.add('show');
                document.querySelector('.header ul').style.right = '0';    
            }
        });

    }, [])

    return (
        <header className="header">
            <div className="container">
                <img src={Logo} alt="cafe map logo" className='logo'/>
                <ul>
                    <li className='hide'>
                        스타벅스
                    </li>
                    <li className='hide'>
                        투썸플레이스
                    </li>
                    <li className='hide'>
                        메가커피
                    </li>
                    <li className='hide'>
                        이디야
                    </li>
                    <li className='hide'>
                        빽다방
                    </li>
                    <li className='hide'>
                        커피빈
                    </li>
                    <li className='hide'>
                        엔제리너스
                    </li>
                    <li className='hide'>
                        할리스
                    </li>
                </ul>
                <div className='bg'></div>
                <div className='hamMenu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;