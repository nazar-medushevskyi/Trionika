import './SecrionTwo.css';
import jsonDate from '../../../../API/Rus.json';
import One from './Images/sms.svg';
import Two from './Images/photo.svg';
import Three from './Images/people.svg';
import Four from './Images/cup.svg';

const imageItems = [One, Two, Three, Four]

const cards = [
  {
    images: imageItems[0],
    h3: jsonDate['section-2']['card-1']['title'],
    text: jsonDate['section-2']['card-1']['text']
  },

  {
    images: imageItems[1],
    h3: jsonDate['section-2']['card-2']['title'],
    text: jsonDate['section-2']['card-2']['text']
  },

  {
    images: imageItems[2],
    h3: jsonDate['section-2']['card-3']['title'],
    text: jsonDate['section-2']['card-3']['text']
  },

  {
    images: imageItems[3],
    h3: jsonDate['section-2']['card-4']['title'],
    text: jsonDate['section-2']['card-4']['text']
  },
];

const blockOne = [
  {
    h3: jsonDate['section-2']['category-1']['h2'],
    text: jsonDate['section-2']['category-1']['text']
  },

  {
    h3: jsonDate['section-2']['category-2']['h2'],
    text: jsonDate['section-2']['category-2']['text']
  },
];

const blockTwo = [
  {
    h3: jsonDate['section-2']['category-3']['h2'],
    text: jsonDate['section-2']['category-3']['text']
  },

  {
    h3: jsonDate['section-2']['category-4']['h2'],
    text: jsonDate['section-2']['category-4']['text']
  },
];

export const SecrionTwo = () => {
  return (
    <section className="sectionTwo">
      <div className="sectionTwo__content">
        <div className="titles">
          <h1 className='sectionTwo__content-h1'>{jsonDate['section-2']['title-1']}</h1>
          <h1 className='sectionTwo__content-h1'>точка сбора арбитражников <br /> и SEO-профессионалов</h1>
        </div>

        <div className="cards">
          {cards.map((el, index) => (
            <div key={index} className="card">
              <img className='card__image' src={el.images} alt="" />
              <h3 className='card__h3 sectionTwo__content-h3'>{el.h3}</h3>
              <p className='card__text sectionTwo__content-text'>{el.text}</p>
            </div>
          ))}
        </div>

        <button className='button sectionTwo__content-button'>{jsonDate['btn']['text']}</button>

        <h1 className='sectionTwo__content-h1 external-h1-sectionTwo'>
          Узнай все о заработке в <br /> самых популярных нишах
        </h1>
        <div className="confe" />


        <div className="blocks-for-contnent-sectionTwo">
          <div className="blocks-for-contnent-sectionTwo__1">
            <div className="line-sectionTwo" />
            {blockOne.map((el) => (
              <>
                <div className="container-content-reall">
                  <h3 className='sectionTwo__content-h3'>{el.h3}</h3>
                  <p className='sectionTwo__content-text'>{el.text}</p>
                </div>
                <div className="line-sectionTwo" />
              </>
            ))}

          </div>

          <div className="blocks-for-contnent-sectionTwo__2">
            <div className="line-sectionTwo" />
            {blockTwo.map((el) => (
              <>
                <div className="container-content-reall">
                  <h3 className='sectionTwo__content-h3'>{el.h3}</h3>
                  <p className='sectionTwo__content-text'>{el.text}</p>
                </div>

                <div className="line-sectionTwo" />
              </>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
