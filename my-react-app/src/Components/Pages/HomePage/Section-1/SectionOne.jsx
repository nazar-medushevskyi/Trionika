import './SectionOne.css';
import '../../../../API/Rus.json';
import jsonDate from '../../../../API/Rus.json'

const textOne = jsonDate['section-1']['01']
const textTwo = jsonDate['section-1']['02']
const textThree = jsonDate['section-1']['03']
const textFour = jsonDate['section-1']['04']
const five = jsonDate['section-1']['05']

const itemText = [textOne, textTwo, textThree, textFour, five]

export const SectionOne = () => {
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
    </section>
  );
}