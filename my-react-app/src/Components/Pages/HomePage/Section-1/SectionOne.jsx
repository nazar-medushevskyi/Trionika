import './SectionOne.css';
import '../../../../API/Rus.json';
import jsonDate from '../../../../API/Rus.json'
import One from './Images/slider/1.png';
import Two from './Images/slider/2.jpeg';
import Three from './Images/slider/3.jpeg';
import Four from './Images/slider/4.jpeg';
import Five from './Images/slider/5.jpg';
import Six from './Images/slider/6.jpeg';
import { useEffect, useState } from 'react';

const textOne = jsonDate['section-1']['01']
const textTwo = jsonDate['section-1']['02']
const textThree = jsonDate['section-1']['03']
const textFour = jsonDate['section-1']['04']
const five = jsonDate['section-1']['05']

const itemText = [textOne, textTwo, textThree, textFour, five]

const slideItems = [One, Two, Three, Four, Five, Six];

export const SectionOne = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const updateSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    let newSlide = currentSlide + 1;
    if (newSlide >= slideItems.length) newSlide = 0;
    updateSlide(newSlide);
  };

  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(sliderInterval);
    };
  });

  return (
    <section className='section-1'>
      <div className="box">
        <div className="element-stats">
          <div className="overlap-group">
            <div className="element">
              <div className="text-wrapper">участников</div>
              <div className="div">1200+</div>
            </div>
            <div className="element-2">
              <div className="text-wrapper-2">спикера</div>
              <div className="text-wrapper-3">22</div>
            </div>
            <div className="element-3">
              <div className="text-wrapper-2">для нетворкинга</div>
              <div className="text-wrapper-4">3000м²</div>
            </div>
            <div className="element-4">
              <div className="text-wrapper-5">вебмастера</div>
              <div className="text-wrapper-6">75%</div>
            </div>
            <div className="after-party-wrapper">
              <div className="after-party">
                After
                <br />
                party
              </div>
            </div>
            <div className="lines">
              <div className="rectangle" />
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <div className="rectangle-7" />
              <div className="rectangle-8" />
              <div className="rectangle-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="confa">
        <h1 className='confa__h1'>Конференция обязательна
          <br />к посещению если вы:</h1>

        <div className="main-block-forConfaSlide">
          <div className="first__conf-block">
            <div className="confa__items">
              <div className="confa__items-line" />
              {itemText.map((text, index) => (
                <div key={index} className="confa__item">
                  <h2 className='text-for-confa'>
                    <span className="number">{(index + 1).toString().padStart(2, '0')}</span> {text}
                  </h2>
                  {index < itemText.length - 1 && <div className="confa__items-line" />}
                </div>
              ))}
            </div>
            <div className="confa__items-line" />

            <button className='button confa-btn'>{jsonDate['btn']['text']}</button>
          </div>

          <div className="block-for-logo" />

          <div className="two__conf-block">
            <div className="slider-container">
              <div className="slider">
                <div className="slides">
                  {slideItems.map((slideItem, index) => (
                    <img
                      key={index}
                      className={`slide ${index === currentSlide ? 'active' : ''}`}
                      src={slideItem}
                      alt={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="indicators">
                {slideItems.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => updateSlide(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>
  );
}