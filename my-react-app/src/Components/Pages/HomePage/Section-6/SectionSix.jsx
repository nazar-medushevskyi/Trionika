import './SectionSix.scss';
import jsonDate from '../../../../API/Rus.json';
import Location from './Images/location.svg';
import One from './Images/1.png';
import Two from './Images/2.png';
import Three from './Images/3.png';
import Four from './Images/4.png';

const imageItems = [Two, Three, Four];

export const SectionSix = () => {

  const redirectToGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/%D0%9F%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F+%D0%B4%D0%BE%D1%80.,+16%D0%B0,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4511646,30.5381276,17.01z/data=!4m6!3m5!1s0x40d4ce4d3a8bffff:0x481da53edd9250ba!8m2!3d50.4511635!4d30.5381025!16s%2Fg%2F11r_mhf065?entry=ttu');
  };

  return (
    <section className='sectionSix'>
      <div className="main-content">

      <div className="sectionSix__content-1">
        <h1 className='sectionSix-h1'>
          Где будет проходить
          <br />
          SEMPRO CONFERENCE 2021
        </h1>

        <p className='sectionSix-text'>
          {jsonDate['section-6']['text']}
        </p>

        <div className="location-block">
          <img className='location-block-image' src={Location} alt="Location" onClick={redirectToGoogleMaps}/>
          <h3 className='location-block-image-h3' onClick={redirectToGoogleMaps}>
            {jsonDate['section-6']['location']}
          </h3>
        </div>
      </div>

      <div className="sectionSix__content-2">
        <img
          className='sectionSix__content-2-mainImage'
          src={One} alt=""
        />

        <div className="sectionSix__content-2-child">
        {imageItems.map((imageItem, index) => (
          <img className='sectionSix__content-2-image' key={index} src={imageItem} alt={imageItem + 1} />
        ))}
        </div>
      </div>
      </div>
    </section>
  );
}