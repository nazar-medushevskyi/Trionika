import './SectionSeven.scss';
import jsonDate from '../../../../API/Rus.json';

import YouTube from './Images/play-button.svg';

export const SectionSeven = () => {
  return (
    <section className="sectionSeven">

      <header className="sectionSeven__header">
        <h1 className='sectionSeven__title'>
          Традиционно afterparty - грандиозное событие, <br />
          завершающее SEMPRO CONFERENCE. <br />
          Зажигательные танцы, реки алкоголя, насыщенная <br />
          шоу программа. Предлагаем посмотреть, как было <br />
          круто на AFTERPARTY 2020
        </h1>

        <h3 className='sectionSeven__title-little'>
          SEMPRO <br />
          AFTERPARTY <br />
          2020
        </h3>
      </header>

      <div className="sectionSeven__backContent">
        <img
          className='sectionSeven__backContent-image'
          src={YouTube}
          alt="YouTube"
        />
        <p className='sectionSeven__backContent-text'>
          {jsonDate['section-7']['youtube']}
        </p>
      </div>
    </section>
  )
}