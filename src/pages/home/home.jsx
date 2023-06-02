import React, { useContext, useEffect } from 'react';
import img1 from '../../components/img/img1.png';
import img2 from '../../components/img/img2.png';
import { CustomContext } from '../../components/Context/Context';
import Carousel from '../../components/carousel/carousel';
import { Link } from 'react-router-dom';
const Home = () => {
  const { cars, getAllCars } = useContext(CustomContext);

  useEffect(() => {
    getAllCars();
  }, []);

  const chunkSize = Math.ceil(cars.length / 3);
  const slider1 = cars.slice(0, chunkSize);
  const slider2 = cars.slice(chunkSize, chunkSize * 2);
  const slider3 = cars.slice(chunkSize * 2);
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__main">
          <h1>
            CAR<span>SHOP</span> - Авторынок Украины
          </h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ zIndex: '2', minWidth: '25vw' }}>
              <p>
                <span>ПОКУПАТЕЛИ</span> выбирают лучшие, удобные и выгодные предложения у тысяч
                проверенных продавцов и могут купить в несколько кликов гарантированно безопасно.
              </p>
              <p>
                <span>ПРОДАВЦЫ</span> могут за час начать торговлю, в тот же день получить первые
                заказы и привлечь сотни тысяч подготовленных клиентов.
              </p>
            </div>
            <div>
              <img className="home__img" src={img1} alt="imggg" />
            </div>
          </div>
          <h1>
            НА CAR<span>SHOP</span> уже более {cars.length} объявлений
          </h1>
          <div style={{ display: 'flex', margin: '60px 0', justifyContent: 'center' }}>
            <Link to={'/catalog'}>
              <button className="btn">Посмотреть каталог</button>
            </Link>
          </div>
          <Carousel cars={slider1} />
        </div>
        <div className="about">
          <div className="about__main">
            <h1>О нас</h1>
            <p>
              Более 10 лет наша компания оказывает полный спектр услуг по купле-продаже нових и
              поддержаных автомобилей.
            </p>
            <p>Консультируем как физические лица,так и юридические.</p>
            <p>Сэкономив свое время и силы, мы поможем Вам получить желаемый результат.</p>
            <ul>
              Обратившись к нам, мы поможем Вам быстро:
              <li>Доставить авто из США</li>
              <li>Оформить договор купли-продажи</li>
              <li>Переоформить ваш автомобиль в органах МРЭО</li>
              <li>Доставить авто из США</li>
            </ul>
            <h4>В СВОЮ ОЧЕРЕДЬ МЫ ГАРАНТИРУЕМ ОПЕРАТИВНОСТЬ И РЕЗУЛЬТАТИВНОСТЬ!</h4>
          </div>
          <div>
            <img className="home__img2" src={img2} alt="imggg" />
          </div>
        </div>
        <div style={{ justifyContent: 'center' }}>
          <h1 style={{ marginLeft: '20vw', color: '#5c0796' }}>Возможно вам это понравится:</h1>
          <Carousel cars={slider2} />
          <Carousel cars={slider3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
