import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <ul>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/aboute'>Прочее</NavLink></li>
                <li><NavLink to='/contacts'>Контакты</NavLink></li>
            </ul>
        </>
    )
}
