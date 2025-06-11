import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Боковое меню</h3>
      <ul>
        <li><a href="/">Акции</a></li>
        <li><a href="/menu">Популярные блюда</a></li>
        <li><a href="/gallery">Фотоотчеты</a></li>
        <li><a href="/booking">Забронировать стол</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;