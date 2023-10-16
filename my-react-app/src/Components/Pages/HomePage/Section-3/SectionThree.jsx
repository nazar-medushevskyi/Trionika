import './SectionThree.css'
import jsonDate from '../../../../API/Rus.json';
import One from './Images/1.png';
import Two from './Images/2.png'

const imageItems = [One, Two];

export const SectionThree = () => {
  return (
    <section className='sectionThree'>
      <h1 className='sectionThree__h1 sectionThree__h1-external'>
        {jsonDate['section-3']['title']}
      </h1>

      <div className="speaker">
        {imageItems.map((imageItem, index) => (
          <img className='speaker__image' src={imageItem} alt={index} />
        ))}
      </div>
    </section>
  );
}