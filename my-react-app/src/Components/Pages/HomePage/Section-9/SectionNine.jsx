import './SectionNine.scss';
import jsonDate from '../../../../API/Rus.json';
import Group from './Images/Group.png';
import Instagram from './Images/instagram-fill.svg'
import Telegram from './Images/telegram-fill.svg'
import Speaker from './Images/speakerr.png';
import telegramSmall from './Images/telegram-small.svg'

export const SectionNine = () => {
  return (
    <section className='sectionNine'>

      <div className="sectionNine__content">
        <h1 className='sectionNine__content-title'>
          {jsonDate['section-9']['title']}
        </h1>

        <div className="sectionNine__content__card">
          <div className="sectionNine__content__card-content">
            <div className="sectionNine__content__card-content__header">

              <img className='sectionNine__content__card-content__header-Gruop' src={Group} alt="Group" />

              <div className="sectionNine__content__card-content__header-instagram">
                <img className='sectionNine__content__card-content__header-instagram-image' src={Instagram} alt="Instagram" />
                <p className='sectionNine__content__card-content__header-instagram-text'>Instagram</p>
              </div>

              <div className="sectionNine__content__card-content__header-telegram">
                <img className='sectionNine__content__card-content__header-telegram-image' src={Telegram} alt="telegram" />
                <p className='sectionNine__content__card-content__header-telegram-text'>Telegram канал</p>
              </div>

            </div>

            <div className="sectionNine__content__card-content__line" />

            <div className="sectionNine__content__card-content__text-container">
              <p className='sectionNine__content__card-content__text-container__text'>
                PM Affiliates — это партнерская программа-рекламодатель известной букмекерской <br />
                компании Parimatch.
              </p>
              <p className='sectionNine__content__card-content__text-container__text'>
                Партнерка предоставляет три самые популярные модели сотрудничества: СPA, Revenue <br />
                Share и гибрид. При этом готовы рассмотреть каждый кейс индивидуально и всегда идем <br />
                навстречу своим партнерам.
              </p>
              <p className='sectionNine__content__card-content__text-container__text'>
                В арсенале PM Affiliates прямые офферы от рекламодателя по самой высокой ставке на <br />
                рынке, собственное мобильное приложение для iOS, сочные промо-материалы под <br />
                актуальные события и многое другое.
              </p>

              <p className='sectionNine__content__card-content__text-container__text'>
                👉&nbsp;&nbsp;Подробности на <span className='sectionNine__content__card-content__text-container__text-span'>
                  сайте
                </span>
              </p>
            </div>

            <div className="speakers">
              <img className='speakers-image' src={Speaker} alt="Speaker" />
              <div className="containerNine">
              <div className="speakers__content">
                <p className='speakers__content-name'>
                  Maxim Makovetskyi
                </p>
                <p className='speakers__content-text'>
                  Head of Affiliates
                </p>
              </div>
              <img className='speakers__small-image' src={telegramSmall} alt="telegramSmall" />

              </div>

            </div>



          </div>
        </div>
      </div>
    </section>
  )
}