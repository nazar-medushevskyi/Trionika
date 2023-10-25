import './SectionEight.scss'
import { useState } from 'react';
import jsonDate from '../../../../API/Rus.json';
import Header from './Images/Header.png';
import Plus from './Images/plus.svg';
import Done from './Images/radio_button_checked.svg';

const cardBase = [
  {
    title: jsonDate['section-8']['card-1']['title'],
    price: jsonDate['section-8']['card-1']['price'],
    btn: jsonDate['section-8']['card-1']['btn-more']
  },

  {
    title: jsonDate['section-8']['card-2']['title'],
    price: jsonDate['section-8']['card-2']['price'],
    btn: jsonDate['section-8']['card-2']['btn-more']
  },

  {
    title: jsonDate['section-8']['card-3']['title'],
    price: jsonDate['section-8']['card-3']['price'],
    btn: jsonDate['section-8']['card-3']['btn-more']
  },

  {
    title: jsonDate['section-8']['card-4']['title'],
    price: jsonDate['section-8']['card-4']['price'],
    btn: jsonDate['section-8']['card-4']['btn-more']
  },
]

const dateForForm = [
  {
    title: jsonDate['section-8']['form']['FIO'],
    placeholder: 'Введите ваше ФИО'
  },

  {
    title: jsonDate['section-8']['form']['Email'],
    placeholder: 'annasem'
  },

  {
    title: jsonDate['section-8']['form']['Phone'],
    placeholder: '+380'
  },

  {
    title: jsonDate['section-8']['form']['Occupation'],
    placeholder: 'Скаммер'
  },

]

export const SectionEight = () => {

  const [cardStates, setCardStates] = useState(Array(cardBase.length).fill(false));
  const [selectedCardInfo, setSelectedCardInfo] = useState(null);


  const handleToggle = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index] = !newCardStates[index];
    setCardStates(newCardStates);

    if (newCardStates[index]) {
      setSelectedCardInfo(cardBase[index]);
    } else {
      setSelectedCardInfo(null);
    }
  };


  return (
    <section className="sectionEight">
      <div className="sectionEight__content">
        <img
          className='sectionEight__content-images'
          src={Header} alt="Header"
        />

        <div className="sectionEight__content-texts">
          <p className='sectionEight__content-texts__text'>
            {jsonDate['section-8']['text-1']}
          </p>
          <p className='sectionEight__content-texts__text'>
            {jsonDate['section-8']['text-2']}
          </p>
        </div>

        <div className="sectionEight__content-cards">
          {cardBase.map((el, index) => (
            <div key={index}
              className={`sectionEight__content-cards-card ${cardStates[index] ? 'sectionEight__content-cards-card-active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              <img
                className='sectionEight__content-cards-card-active__svg'
                src={Done} alt="Done"
                style={{ display: cardStates[index] ? "block" : "none" }}
              />
              <div className="sectionEight__content-cards-card__container">
                <h2 className='sectionEight__content-cards-card__title'>
                  {el.title}
                </h2>

                <div className="sectionEight__content-cards-card__price">
                  <p className='sectionEight__content-cards-card__price-text'>
                    {el.price}
                  </p>
                </div>
              </div>

              <div className="sectionEight__content-cards-card__more">
                <p className='sectionEight__content-cards-card__more-text'>
                  {el.btn}
                </p>
                <img
                  className='sectionEight__content-cards-card__more-image'
                  src={Plus} alt="Plus"
                />
              </div>
            </div>
          ))}
        </div>


        <div className="sectionEight__line" />


        <form
          method='POST'
          action="#"
          className="sectionEight__content-form">

          <div className="main-container-forEight">



            {dateForForm.map((el, index) => (

              <div key={index} className="sectionEight__content-form__contentInputs">
                <h3 className='sectionEight__content-form__contentInputs-h3'>
                  {el.title}
                </h3>
                <input
                  className='sectionEight__content-form__contentInputs-input-external sectionEight__content-form__contentInputs-input'
                  placeholder={el.placeholder}
                  type="text" />
              </div>
            ))}
          </div>

          <div className="sectionEight__content-form__block">
            <p className='sectionEight__content-form__block-text'>
              Вы можете произвести оплату сейчас или позже (по ссылке отправленной вам в письме). <br />
              Регистрация позволит вам забронировать билет до повышения цены.
            </p>
          </div>

          <div className="sectionEight__content-form__count">
            <div className="sectionEight__content-form__count-info">
              <p className='sectionEight__content-form__count-info-text'>
                Общая стоимость:
              </p>

              {selectedCardInfo ? (
                <h3 className='sectionEight__content-form__count-info-h3'>
                  {selectedCardInfo.price} USD
                </h3>
              ) : (
                <h3 className='sectionEight__content-form__count-info-h3'>
                0 USD
              </h3>
              )}

            </div>

            <div className="sectionEight__content-form__count-promo">
              <input className='sectionEight__content-form__count-promo__input-external sectionEight__content-form__count-promo__input' placeholder='Код для скидки (если есть)' type="text" />
              <button className='button header-button-1'>{jsonDate['btn']['text']}</button>

            </div>
          </div>

        </form>

      </div>
    </section>
  );
}