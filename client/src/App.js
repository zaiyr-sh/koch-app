import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
      <>
        <Navbar />
        <section className="section-card">
          <div className="container">

            <div className="card">
              <div className="card_item">
                <div className="card_inner">

                  <div className="card_name">
                    Цемент в мешках
                  </div>
                  <div className="card-direction">
                    <div className="card-direction-from">Бишкек, Арча-Бешик</div>
                    <div className="card-direction-to">Талас, Шекер</div>
                  </div>
                  <div className="card-main-information">
                    <div className="card-details">
                      <div className="card-date">25.09.2020 - 01.01.2021</div>
                      <div className="card-volume">4.0т / 41м³</div>
                    </div>
                    <div className="card-price">13 500 c</div>
                  </div>
                  <div className="card-line"></div>
                  <div className="card-addition-information">
                    <div className="card-period">6 часов назад</div>
                    <a className="card_addition_btn" href="/">Подробнее</a>
                  </div>
                </div>
              </div>

              <div className="card_item">
                <div className="card_inner">

                  <div className="card_name">
                    Цемент в мешках
                  </div>
                  <div className="card-direction">
                    <div className="card-direction-from">Бишкек, Арча-Бешик</div>
                    <div className="card-direction-to">Талас, Шекер</div>
                  </div>
                  <div className="card-main-information">
                    <div className="card-details">
                      <div className="card-date">25.09.2020 - 01.01.2021</div>
                      <div className="card-volume">4.0т / 41м³</div>
                    </div>
                    <div className="card-price">13 500 c</div>
                  </div>
                  <div className="card-line"></div>
                  <div className="card-addition-information">
                    <div className="card-period">6 часов назад</div>
                    <a className="card_addition_btn" href="/">Подробнее</a>
                  </div>
                </div>
              </div>

              <div className="card_item">
                <div className="card_inner">

                  <div className="card_name">
                    Цемент в мешках
                  </div>
                  <div className="card-direction">
                    <div className="card-direction-from">Бишкек, Арча-Бешик</div>
                    <div className="card-direction-to">Талас, Шекер</div>
                  </div>
                  <div className="card-main-information">
                    <div className="card-details">
                      <div className="card-date">25.09.2020 - 01.01.2021</div>
                      <div className="card-volume">4.0т / 41м³</div>
                    </div>
                    <div className="card-price">13 500 c</div>
                  </div>
                  <div className="card-line"></div>
                  <div className="card-addition-information">
                    <div className="card-period">6 часов назад</div>
                    <a className="card_addition_btn" href="/">Подробнее</a>
                  </div>
                </div>
              </div>

              <div className="card_item">
                <div className="card_inner">

                  <div className="card_name">
                    Цемент в мешках
                  </div>
                  <div className="card-direction">
                    <div className="card-direction-from">Бишкек, Арча-Бешик</div>
                    <div className="card-direction-to">Талас, Шекер</div>
                  </div>
                  <div className="card-main-information">
                    <div className="card-details">
                      <div className="card-date">25.09.2020 - 01.01.2021</div>
                      <div className="card-volume">4.0т / 41м³</div>
                    </div>
                    <div className="card-price">13 500 c</div>
                  </div>
                  <div className="card-line"></div>
                  <div className="card-addition-information">
                    <div className="card-period">6 часов назад</div>
                    <a className="card_addition_btn" href="/">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export default App;
