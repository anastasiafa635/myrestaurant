import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'> Flavors Inspired be the Reasons</span>
            <ul className='nav'>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/menu">Меню</Link></li>
            <li><Link to="/gallery">Галерея</Link></li>
            <li><Link to="/booking">Бронирование</Link></li>
         <li><Link to="/contacts">Контакты</Link></li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
