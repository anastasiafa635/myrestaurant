import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className='home'>
      <p1>Авторская кухня от шеф-повара</p1>
    </div>
    <div className="home2"> <p2> Мы верим, что кулинария - это искусство, а гостеприимство - наша страсть. 
        Наш шеф-повар с многолетним опытом в итальянской кухне создал меню, в котором каждое блюдо рассказывает свою историю.</p2>
    </div>
    <div className='img1'> 
      </div>
      <div className='img2'> 
      </div>
      <div className='img3'> 
      </div>
      <div className='home3'>
      <Link to="/menu" className="btn">Посмотреть меню</Link>

      <p>Почему нас выбирают? </p>
    </div>
    <div className='img4'> </div>
      <div className="name"><p1>Сезонное меню</p1></div>
     <div className='img5'> </div>
      <div className="name1"><p1>Теплая атмосфера</p1> 
      <Link to="/gallery" className="btn1">Наш интерьер</Link>
      </div> 
      <div className='img6'> </div>
      <div className="name2"><p1>Вкус, который запомнится </p1></div>
      </div>
  );
};

export default Home;
