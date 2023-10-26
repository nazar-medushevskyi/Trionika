import './SectionEight.scss'
import { useEffect, useState } from 'react';
import jsonDate from '../../../../API/Rus.json';
import Header from './Images/Header.png';
import Plus from './Images/plus.svg';
import Done from './Images/radio_button_checked.svg';
import Confa from './Images/Conf.png';
import AFTERPARTY from './Images/AFTERPARTY.png';
import Online from './Images/ONLINE.png';
import Vip from './Images/VIP.png'
import DoneDone from './Images/done.svg';
import Close from './Images/close.svg';

const imagesItems = [Confa, AFTERPARTY, Online, Vip];

const ImageItemsFast = [
  {
    image: imagesItems[0],
  },

  {
    image: imagesItems[1],
  },

  {
    image: imagesItems[3],
  },

  {
    image: imagesItems[2],
  },
]

const cardBase = [
  {
    title: jsonDate['section-8']['card-1']['title'],
    price: 120,
    btn: jsonDate['section-8']['card-1']['btn-more']
  },

  {
    title: jsonDate['section-8']['card-2']['title'],
    price: 80,
    btn: jsonDate['section-8']['card-2']['btn-more']
  },

  {
    title: jsonDate['section-8']['card-3']['title'],
    price: 240,
    btn: jsonDate['section-8']['card-3']['btn-more']
  },

  {
    title: jsonDate['section-8']['card-4']['title'],
    price: 42,
    btn: jsonDate['section-8']['card-4']['btn-more']
  },
];

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
];

const mainBaseModal = [
  {
    imgae: DoneDone,
    text: 'Welcome coffee'
  },

  {
    imgae: DoneDone,
    text: 'Пакет участника'
  },

  {
    imgae: DoneDone,
    text: 'Посещение докладов;'
  },

  {
    imgae: DoneDone,
    text: 'Доступ к выставочной зоне;'
  },

  {
    imgae: DoneDone,
    text: 'Мобильное приложение;'
  },

  {
    imgae: DoneDone,
    text: 'Записи всех докладов'
  },
]

export const SectionEight = () => {

  const [cardStates, setCardStates] = useState(Array(cardBase.length).fill(false));
  const [selectedCardInfo, setSelectedCardInfo] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, Setopen] = useState(false);

  const handleOpenButton = () => {
    Setopen(true)
  }

  const handleCloseButton = () => {
    Setopen(false)
  }


  const handleToggle = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index] = !newCardStates[index];
    setCardStates(newCardStates);

    if (newCardStates[index]) {
      setSelectedCardInfo({ ...cardBase[index], index }); // Добавляем индекс в объект
    } else {
      setSelectedCardInfo(null);
    }
  };

  const baseModal = [

    {
      title: 'Позволит вам попасть на самую грандиозную SEO тусовку в Украине',
    },

    {
      title: 'Позволит вам попасть на самую грандиозную SEO тусовку в Украине',
    },

    {
      title: 'Позволит вам попасть на самую грандиозную SEO тусовку в Украине',
    },

    {
      title: 'Позволит вам попасть на самую грандиозную SEO тусовку в Украине',
    },
  ]

  useEffect(() => {
    const updatedTotalPrice = cardStates.reduce((total, isSelected, index) => {
      if (isSelected) {
        total += cardBase[index].price;
      }
      return total;
    }, 0);
    setTotalPrice(updatedTotalPrice);
  }, [cardStates]);


  const hasSelectedCard = cardStates.some(isSelected => isSelected);


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
                    ${el.price}
                  </p>
                </div>
              </div>

              <div className="sectionEight__content-cards-card__more" onClick={handleOpenButton}>
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

              {hasSelectedCard ? (
                <h3 className='sectionEight__content-form__count-info-h3'>
                  {totalPrice} USD
                </h3>
              ) : (
                <h3 className='sectionEight__content-form__count-info-h3'>
                  0 USD
                </h3>
              )}

            </div>

            <div className="sectionEight__content-form__count-promo">
              <input className='sectionEight__content-form__count-promo__input-external sectionEight__content-form__count-promo__input' placeholder='Код для скидки (если есть)' type="text" />
              <button className='button header-button-1'>Зарегистрироваться</button>

            </div>
          </div>

        </form>

        {open && selectedCardInfo && (
          <div id="myModal" className="sectionEight__modal">
            <div className="sectionEight__modal-content" onClick={handleCloseButton}>
              <img className='sectionEight__modal-content-close' src={Close} alt="" />
              <img className='sectionEight__modal-content-image' src={ImageItemsFast[selectedCardInfo.index].image} alt='' />
              <div className="sectionEight__modal-content__block">
                <h2 className='sectionEight__modal-content__block-h2'>Пакет - {selectedCardInfo.title}</h2>
                <div className="sectionEight__content-cards-card__price">
                  <p className='sectionEight__content-cards-card__price-text'>
                    ${selectedCardInfo.price}
                  </p>
                </div>
              </div>

              <h3 className='sectionEight__modal-content__h3'>{baseModal[selectedCardInfo.index].title}</h3>

              <div className="sectionEight__modal-content__line" />

              <h3 className='sectionEight__modal-content__h3 externalEigth-h3'>Включает в себя:</h3>

              <div className="sectionEight__modal-content__container">
                {mainBaseModal.map((el, index) => (
                  <div key={index} className="sectionEight__modal-content__container-Child">
                    <img className='sectionEight__modal-content__container-Child-image' src={el.imgae} alt="" />
                    <p className='sectionEight__modal-content__container-Child-text'>{el.text}</p>
                  </div>
                ))}
              </div>



            </div>
          </div>
        )}


      </div>
    </section>
  );
}
