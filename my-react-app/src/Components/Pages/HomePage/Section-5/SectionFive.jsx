import './SectionFive.css'
import jsnonDate from '../../../../API/Rus.json';

import One from './Images/1.png';
import Two from './Images/2.png';
import Three from './Images/3.png';
import Youtube from './Images/youtube.png';
import Youtubee from './Images/Youtube.svg';
import Ain from './Images/Container/1.png';
import Where from './Images/Container/2.png';
import Partners from './Images/Container/3.png';
import Devaka from './Images/Container/4.png';

const imageItems = [Ain, Where, Partners, Devaka];

export const SectionFive = () => {
  return (
    <section className='sectionFive'>
      <h1 className='sectionFive-h1 title-sectionFive'>
        {jsnonDate['section-5']['title']}
      </h1>

      <main className='main-blockFive'>
        <div className="sectionFive__cards">
          <div className="sectionFive__cards-1">
            <img className='sectionFive__cards-1-image-1' src={One} alt="One" />
            <img className='sectionFive__cards-1-image-2' src={Youtube} alt="Youtube" />
          </div>

          <div className="sectionFive__cards-2">
            <img className='sectionFive__cards-2-image-1' src={Two} alt="Two" />
          </div>

          <div className="sectionFive__cards-3">
            <div className="sectionFive__cards-3-block">

              <div className="block-arrow">

                <div className="pusto" />

                <div className="block-arrow-container">

                  <div className="block-arrow__left">
                    <div className='arrow-slide-section-5-rigth' />
                  </div>

                  <div className="block-arrow-rigth">
                    <div className='arrow-slide-section-5-left' />
                  </div>

                </div>

              </div>

              <div className="block-images-forFiveSection">
                <img className='sectionFive__cards-3-block-mainImage' src={Three} alt="Three" />
                <img className='sectionFive__cards-3-block-mainImage-child' src={Youtubee} alt="Youtubee" />
              </div>
            </div>
          </div>
        </div>

        <div class="sectionFive__custom-block">
          {imageItems.map((imageItem, index) => (
            <img
              className='sectionFive__custom-block-images'
              src={imageItem}
              alt={index}
            />
          ))}
        </div>

      </main>


    </section>
  )
}