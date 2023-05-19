import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <div className='header-wrapper'>
                <div className='header-wrapper__logo'>Creative World</div>
                <div className='header-wrapper__links'>
                    <ul>
                        <li><NavLink to='/'>Главная</NavLink></li>
                        <li><NavLink to='/about'>Работы</NavLink></li>
                        <li><NavLink to='/contacts'>Контакты</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
