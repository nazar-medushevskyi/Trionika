import './SectionTen.scss';
import Platinum from './Images/platinum.png';
import Gold from './Images/gold.png';
import Silver from './Images/silver.png';
import Partners from './Images/Partners.png';
import Huge from './Images/Huge.png';
import Bosta from './Images/Bosta.png';
import Map from './Images/map.png'


const imageItems = [Partners, Huge, Bosta];

const BostaImageItems = [Bosta, Bosta, Bosta, Bosta, Bosta, Bosta, Bosta, Bosta]
const SilverImageItems = [Bosta, Bosta, Bosta, Bosta, Bosta, Bosta, Bosta, Bosta, Bosta, Bosta, Bosta, Bosta,]
export const SectionTen = () => {
  return (
    <section className="sectionTen">
      <div className="sectionTen__content">
        <img className='sectionTen__content-logo' src={Platinum} alt="Platinum" />
        <div className="sectionTen__content-cards">
          {imageItems.map((imageItem, index) => (
            <div key={index} className="sectionTen__content-cards__card">
              <img className='sectionTen__content-cards__card-image' src={imageItem} alt="imageItem" />
            </div>
          ))}
        </div>
      </div>


      <div className="gold">
      <img className='gold__content-logo' src={Gold} alt="Gold" />
        <div className="gold__content">
          <div className="gold__content-cards">
            {BostaImageItems.map((BostaImageItem, index) => (
              <div key={index} className="gold__content-cards__card">
                <img className='gold__content-cards__card-image' src={BostaImageItem} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="silver">
      <img className='silver__content-logo' src={Silver} alt="Silver" />
        <div className="silver__content">
          <div className="silver__content-cards">
            {SilverImageItems.map((SilverImageItem, index) => (
              <div key={index} className="silver__content-cards__card">
                <img className='silver__content-cards__card-image' src={SilverImageItem} alt="SilverImageItem" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className='sectionTen__h1'>Карта Sempro conference 20<span className='sectionTen__h1-span'>21</span></h1>



      <div className="block__forMap">
      <img className='sectionTen__map' src={Map} alt="Map" />
      </div>

    </section>
  );
}