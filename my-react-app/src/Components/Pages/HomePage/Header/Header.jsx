import './Header.scss';
import Telegram from './Images/telegram-fill.svg';
import Youtube from './Images/youtube-fill.svg';
import FaceBook from './Images/facebook-circle-fill.svg';
import Logo from './Images/logo.svg';
import jsonDateRus from '../../../../API/Rus.json'
import EDP from './Images/EDP.svg';
import PDL from './Images/PDL.svg';
import Trionika from './Images/trionika.svg';
import Everad from './Images/everad.svg';
// import jsoDateEngl from '../../../../API/Engl.json'

const LINKS_CONFIG = [
  { path: '/', label: 'Спикеры' },
  { path: '/', label: 'Партнеры' },
  { path: '/', label: 'Локация' },
  { path: '/', label: 'Afterparty' },
  { path: '/', label: 'Контакты' },
];

const imagesPaths = [Telegram, Youtube, FaceBook]

const imagesPath2 = [EDP, PDL, Trionika, Everad]

export const Header = () => {
  return (
    <header className='header'>
      <div className="header__content">

        <div className="header__logos-logoAndText">

          <div className="main-logo">
            <img className='main-logo-image' src={Logo} alt="" />
          </div>

          <div className="container-for-logoTItle">
            <div className="logo-text" />
            <p className='text-for-logo'>conference</p>
          </div>
        </div>

        <nav className='nav'>
          <ul className='list'>
            {LINKS_CONFIG.map(el => (
              <li className='nav__list'>
                <a className='nav__link' href={el.path}>{el.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="contact">
          {imagesPaths.map((imagesPath, index) => (
            <img key={index} src={imagesPath} alt={imagesPath} />
          ))}
        </div>

        <div className="languages">
          <p className='languages__text'>RU</p>
          <div className="languages__block">
            <div className="languages__block-arrow" />
          </div>
        </div>
      </div>

      <div className="header__alContent">
        <div className="header__alContent-block">
          <div className="header__alContent-block-1">
            <h1 className='header__alContent-block-1-h1'>{jsonDateRus['header']['block-1-h1']}</h1>
            <p className='header__alContent-block-1-p1'>{jsonDateRus['header']['block-1-p']}</p>
          </div>
          <div className="header__alContent-block-2">
            <h1 className='header__alContent-block-1-h2'>{jsonDateRus['header']['block-2-h1']}</h1>
            <p className='header__alContent-block-1-p2'>{jsonDateRus['header']['block-2-p']}</p>
          </div>
        </div>

        <h1 className='header__alContent__h1'>
          SEO&Affiliate <br /> Sempro conference 2021
        </h1>

        <p className='header__alContent-text'>{jsonDateRus['header']['text']}</p>

        <div className="header-buttons">
          <button className='button header-button-1'>{jsonDateRus['btn']['text']}</button>
          <button className='button header-button-2'>{jsonDateRus['header']['btn']}</button>
        </div>
      </div>

      <div className="header-footer">
        {imagesPath2.map((imagesPath2s, index) => (
          <div className="block-forSvg">
          <img className='header-footer-image' key={index} src={imagesPath2s} alt={imagesPath2s} />
          </div>
        ))}
      </div>
    </header>
  );
}