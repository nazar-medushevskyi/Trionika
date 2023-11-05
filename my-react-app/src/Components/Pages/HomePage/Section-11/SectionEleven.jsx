import './SectionEleven.scss';
import One from './Images/VectorOne.svg';
import Two from './Images/VectorTwo.svg';
import Three from './Images/VectorThree.svg';
import Four from './Images/VectorFour.svg';

const imagesItems = [One, Two, Three, Four];

const headerContent = [
  {
    id: 1,
    image: imagesItems[0],
    title: 'Silver'
  },

  {
    id: 2,
    image: imagesItems[1],
    title: 'Gold'
  },

  {
    id: 3,
    image: imagesItems[2],
    title: 'No name'
  },

  {
    id: 4,
    image: imagesItems[3],
    title: 'General'
  },
]

const dataBaseNameOne = [
  {
    number: '1',
    name: 'Name'
  },

  {
    number: '3',
    name: 'Name v2'
  },

  {
    number: '4',
    name: 'Name v3'
  },

  {
    number: '7',
    name: 'Name v4'
  },

  {
    number: '8',
    name: 'Name v4'
  },

  {
    number: '10',
    name: 'Name v4'
  },
];

const dataBaseNameTwo = [
  {
    number: '11',
    name: 'Name'
  },

  {
    number: '12',
    name: 'Name v2'
  },

  {
    number: '14',
    name: 'Name v3'
  },

  {
    number: '17',
    name: 'Name v4'
  },

  {
    number: '18',
    name: 'Name v4'
  },

  {
    number: '20',
    name: 'Name v4'
  },
];

const dataBaseNameThree = [
  {
    number: '21',
    name: 'Name'
  },

  {
    number: '22',
    name: 'Name v2'
  },

  {
    number: '24',
    name: 'Name v3'
  },

  {
    number: '25',
    name: 'Name v4'
  },

  {
    number: '27',
    name: 'Name v4'
  },

  {
    number: '33',
    name: 'Name v4'
  },
];

const dataBaseNameFour = [
  {
    number: '34',
    name: 'Name'
  },

  {
    number: '35',
    name: 'Name v2'
  },

  {
    number: '36',
    name: 'Name v3'
  },
]

export const SectionEleven = () => {
  return (
    <section className="sectionEleven">
      <div className="sectionEleven__content">
        <div className="sectionEleven__content-header">
          {headerContent.map((el, index) => (
            <div key={index} className='sectionEleven__content-header__button'>
              <div className="sectionEleven__content-header__button-content">
                <img
                  className='sectionEleven__content-header__button-content__image'
                  src={el.image}
                  alt={`images + ${- 1}`}
                />
                <p className='sectionEleven__content-header__button-content__title'>
                  {el.title}
                </p>
              </div>
            </div>
          ))}
        </div>



        <div className="sectionEleven__content-part">

          <div className="sectionEleven__content-part__mainContent">

              <div className="sectionEleven__content-part__blockOne">
                {dataBaseNameOne.map((el, index) => (
                  <div key={index} className="sectionEleven__content-part__blockOne-infoOne">
                    <p className='sectionEleven__content-part__text'>
                      {el.number}
                    </p>

                    <p className='sectionEleven__content-part__text'>
                      {el.name}
                    </p>
                  </div>
                ))}
                </div>

                <div className="sectionEleven__content-part__blockTwo">
                  {dataBaseNameTwo.map((el, index) => (
                    <div key={index} className="sectionEleven__content-part__blockTwo-infoTwo">
                      <p className='sectionEleven__content-part__text'>
                        {el.number}
                      </p>

                      <p className='sectionEleven__content-part__text'>
                        {el.name}
                      </p>
                    </div>
                  ))}
                </div>
              
           


            <div className="sectionEleven__content-part__blockThree">
              {dataBaseNameThree.map((el, index) => (
                <div key={index} className="sectionEleven__content-part__blockThree-infoOne">
                  <p className='sectionEleven__content-part__text'>
                    {el.number}
                  </p>

                  <p className='sectionEleven__content-part__text'>
                    {el.name}
                  </p>
                </div>
              ))}
              </div>

              <div className="sectionEleven__content-part__blockFour">
                {dataBaseNameFour.map((el, index) => (
                  <div key={index} className="sectionEleven__content-part__blockFour-infoTwo">
                    <p className='sectionEleven__content-part__text'>
                      {el.number}
                    </p>

                    <p className='sectionEleven__content-part__text'>
                      {el.name}
                    </p>
                  </div>
                ))}
              </div>
            


          </div>


        


        </div>

      </div>
    </section>
  )
}