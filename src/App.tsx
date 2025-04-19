
import './App.css'
import img1 from './assets/images/image.webp'
import {tours} from "./constants";

function App() {

  return (
      <>
          <div>
              <img width={'100%'} src={img1} className="logo" alt="armenia"/>
          </div>
          <h1>Туры по Армении</h1>
          <h3>
              📍 Выезд утром из Еревана
              📍 Индивидуальные экскурсии
              📍 Возможна встреча в аэропорту
              📍 Стоимость — за машину, не за человека
              📍 Можно по готовому маршруту, а можно по вашему
          </h3>
          <div>Часто маршруты проходят через монастыри🙂. Но наши экскурсии это не поездки по монастырям — это путешествия по самым живописным уголкам Армении. Просто так сложилось, что монастыри часто строили именно там, где особенно красиво и спокойно. Так что природа, горы, виды — всё это в приоритете.
          </div>
          <div className="contacts">
              контакты:
              <div><a className="link" href={'https://t.me/oskar7070'} target={'_blank'}>Telegram</a></div>
          </div>

          <div className={'cards'}>
          {tours.map((el, i) => <div className="card">
                  <span className={'tour'}>Тур №{i + 1}</span>
                  <span className={'title'}>Направление:</span>
                  <div className={'block'}>
                      {el.place.map(pl => <span>{' '}•{' '} <a className={'links'}>{pl.row}</a></span>)}
                  </div>
                  <div className={'block'}>
                      <span>1 чел. {el.price} драм</span>
                      <span>1-4 чел. {el.price1} драм</span>
                      <span>5-7 чел. {el.price2} драм</span>
                  </div>
                  {el.time && <span>Поездка займет примерно от {el.time} часов</span>}
                  <div className={'block'}>
                      <span>{el.comment1}</span>
                      <span>{el.comment2}</span>
                      <span>{el.comment3}</span>
                  </div>
              </div>)}
          </div>
      </>
  )
}

export default App
