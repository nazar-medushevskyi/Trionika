import './SectionFour.css';
import jsonDate from '../../../../API/Rus.json'
import { useState } from 'react';
import Frame from './Images/Frame.svg';
import One from './Images/1.png';
import Two from './Images/2.png';
import Three from './Images/3.png';
import Four from './Images/4.png';
import Five from './Images/5.png';
import Six from './Images/6.png';
import Seven from './Images/7.png';
import Eight from './Images/8.png';
import frame from './Images/framee.svg';
import Close from './Images/close.svg'

const LINKS_CONFIG_Four = [
  { path: '/', label: 'All' },
  { path: '/', label: 'Gambling' },
  { path: '/', label: 'Nutra' },
  { path: '/', label: 'PDL' },
  { path: '/', label: 'Essay' },
];

const imagesItems = [One, Two, Three, Four, Five, Six, Seven, Eight]


const cardsSpeakOne = [
  {
    image: imagesItems[0],
    name: 'Михаил Гордецкий',
    btnOne: jsonDate['section-4']['card-1']['btnOne'],
    btnTwo: jsonDate['section-4']['card-1']['btnTwo'],
    text: jsonDate['section-4']['card-1']['text']
  },

  {
    image: imagesItems[1],
    name: 'Александра Хилова',
    btnOne: jsonDate['section-4']['card-2']['btnOne'],
    btnTwo: jsonDate['section-4']['card-2']['btnTwo'],
    text: jsonDate['section-4']['card-2']['text']
  },

  {
    image: imagesItems[2],
    name: 'Дмитрий Голополосов',
    btnOne: jsonDate['section-4']['card-3']['btnOne'],
    btnTwo: jsonDate['section-4']['card-3']['btnTwo'],
    text: jsonDate['section-4']['card-3']['text']
  },

  {
    image: imagesItems[3],
    name: 'Андрей Смоляков',
    btnOne: jsonDate['section-4']['card-4']['btnOne'],
    btnTwo: jsonDate['section-4']['card-4']['btnTwo'],
    text: jsonDate['section-4']['card-4']['text']
  },
];

const cardsSpeakTwo = [
  {
    image: imagesItems[4],
    name: 'Анна Лебедева',
    btnOne: jsonDate['section-4']['card-5']['btnOne'],
    btnTwo: jsonDate['section-4']['card-5']['btnTwo'],
    text: jsonDate['section-4']['card-5']['text']
  },

  {
    image: imagesItems[5],
    name: 'Кирилл Богатюк',
    btnOne: jsonDate['section-4']['card-6']['btnOne'],
    btnTwo: jsonDate['section-4']['card-6']['btnTwo'],
    text: jsonDate['section-4']['card-6']['text']
  },

  {
    image: imagesItems[6],
    name: 'Дмитрий Голополосов',
    btnOne: jsonDate['section-4']['card-7']['btnOne'],
    btnTwo: jsonDate['section-4']['card-7']['btnTwo'],
    text: jsonDate['section-4']['card-7']['text']
  },

  {
    image: imagesItems[7],
    name: 'Андрей Смоляков',
    btnOne: jsonDate['section-4']['card-8']['btnOne'],
    btnTwo: jsonDate['section-4']['card-8']['btnTwo'],
    text: jsonDate['section-4']['card-8']['text']
  },
];

export const SectionFour = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleOpen = () => {
    setState(true)
  }

  const handleClose = () => {
    setState(false)
  }

  return (
    <>
      <section className="sectionFour">
        <div className="sectionFour__content">
          <h1 className='sectionFour__content-h1'>
            {jsonDate['section-4']['title']}
          </h1>

          <nav className='sectionFour__content-nav'>
            <ul className='sectionFour__content-list'>
              {LINKS_CONFIG_Four.map((el, index) => (
                <li
                  className={`sectionFour__content-listT ${index === 1 ? 'is-active' : ''
                    }`}
                  key={index}
                >
                  <a
                    className={`sectionFour__content-link ${index === 1 ? 'active-link' : ''
                      }`}
                    href={el.path}
                  >
                    {el.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>


          <div className="button-block">
            <div className="button-block__info" onClick={handleToggle}>
              <p className='button-block__text'>
                {isOpen ? 'Вернуть назад' : 'Показать всех'}
              </p>
              <img className='button-block__frame' src={isOpen ? Close : Frame} alt="Image" />
            </div>
          </div>
        </div>

        <div className="sectionFour__cards">
          {cardsSpeakOne.map((el, index) => (
            <div className="main-block">
              <div key={index} className="speakers__card">
                <img className="speakers__card-image" src={el.image} alt="Описание изображения" />
                <div className="speakers__card-content">
                  <h1 className="speakers__card-name">{el.name}</h1>
                  <div className="speakers__card-buttons">
                    <button className="button-card">{el.btnOne}</button>
                    <button className="button-card" style={{ backgroundColor: '#E53030', color: 'white' }}>{el.btnTwo}</button>
                  </div>
                </div>
                <div className={`effect-to-top ${index % 2 === 1 ? 'blue' : 'red'} effect-to-top-x`}>
                  <div className="effect-to-top__container">
                    <p className="link-more" id="openModalBtn" onClick={handleOpen}>Подробнее</p>
                    <img className="frame" src={frame} alt="" />
                  </div>
                </div>
              </div>
              <p className="speakers__card-description smallText-style">{el.text}</p>
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="sectionFour__cards">
            {cardsSpeakTwo.map((el, index) => (
              <div className="main-block">
                <div key={index} className="speakers__card">
                  <img className="speakers__card-image" src={el.image} alt="Описание изображения" />
                  <div className="speakers__card-content">
                    <h1 className="speakers__card-name">{el.name}</h1>
                    <div className="speakers__card-buttons">
                      <button className="button-card">{el.btnOne}</button>
                      <button className="button-card" style={{ backgroundColor: '#E53030', color: 'white' }}>{el.btnTwo}</button>
                    </div>
                  </div>
                  <div className={`effect-to-top ${index % 2 === 1 ? 'blue' : 'red'} effect-to-top-x`}>
                    <div className="effect-to-top__container">
                      <p className="link-more" id="openModalBtn">Подробнее</p>
                      <img className="frame" src={frame} alt="" />
                    </div>
                  </div>
                </div>
                <p className="speakers__card-description smallText-style">{el.text}</p>
              </div>
            ))}
          </div>
        )}

        <div className="sectionFour__buttonPlace">
          <button className='button sectionFour__button'>{jsonDate['btn']['text']}</button>
        </div>
      </section>

      {state && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <img className="close" src={Close} id="closeModalBtn" alt="" onClick={handleClose}/>
            <div className="modal-content-block-1">
              <img className="modal-img" src={One} alt="" />
              <div className="modal-content-block-2">
                <div className="modal-line"></div>
                <div className="speakers__card-buttons buttons-container">
                  <button className="button-card">Gambling</button>
                  <button className="button-card" style={{ backgroundColor: '#E53030', color: 'white' }}>SEO</button>
                </div>
                <h1 className="h1 modal-h1">Дмитрий Голополосов</h1>
                <p className="modal-text">Автор и совладелец более 30 успешных проектов в сети Интернет. Founder Clickbaza.</p>
                <div className="modal-line"></div>
              </div>
            </div>
            <h1 className="modal-h1 small-h1">Как создать стабильный поток дохода с новостной витрины</h1>
            <p className="modal-text">О себе:</p>
            <p className="modal-text-2">Manish Goyal is a technology entrepreneur who strives to achieve success through innovation. He graduated from MIT with a Bachelors & Masters in Computer Science & Electrical Engineering. He’s the Founder & CEO of Friendbuy, a SaaS platform powering Growth Marketing for e-commerce disruptors such as Dollar Shave Club, Away, Casper and Afterpay, and Fortune 1000s such as Walmart, Intuit, Disney and Nestle.</p>
          </div>
        </div>
      )}
    </>
  );
}
