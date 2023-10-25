import './SectionEight.scss'
import jsonDate from '../../../../API/Rus.json';
import Header from './Images/Header.png';
import Plus from './Images/plus.svg';

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

export const SectionEight = () => {
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
            <div key={index} className="sectionEight__content-cards-card">
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

      </div>
    </section>
  );
}