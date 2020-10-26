import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import TransportSection from "./components/TransportSection/TransportSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
      <>
        <Navbar />
        <div className="main-menu">
          <div className="container">
            <h2 className="menu-name">Грузоперевозки по всей стране</h2>
          </div>
        </div>

        <section className="section-filteredTransport">
          <div className="container">

            <div className="filter">
              <div className="filter-item">

                <div className="filter-chooser">
                  <p className="filter-search">Искать</p>
                  <div className="filter-searchFields">
                    <a className="filter-goods active" href="/">Груз</a>
                    <a className="filter-transport" href="/">Транспорт</a>
                  </div>
                </div>

                <div className="filter-direction">
                <p className="filter-title">Откуда</p>
                <div className="filter-direction-from">
                  <div className="filter-direction-area">
                    <select className="filter-direction-selection" name="area">
                      <option value="area">Область</option>
                      <option value="osh">Ошская</option>
                      <option value="naryn">Нарынская</option>
                      <option value="issyk_kul">Иссык-Кульская</option>
                    </select>
                  </div>
                  <div className="filter-direction-city">
                    <select className="filter-direction-selection" name="area">
                      <option value="area">Город, район</option>
                      <option value="osh">Ошская</option>
                      <option value="naryn">Нарынская</option>
                      <option value="issyk_kul">Иссык-Кульская</option>
                    </select>
                  </div>
                  <div className="filter-date">25 сен 2020</div>
                </div>

                <p className="filter-title">Куда</p>
                <div className="filter-direction-to">
                  <div className="filter-direction-area">
                    <select className="filter-direction-selection" name="area">
                      <option value="area">Область</option>
                      <option value="osh">Ошская</option>
                      <option value="naryn">Нарынская</option>
                      <option value="issyk_kul">Иссык-Кульская</option>
                    </select>
                  </div>
                  <div className="filter-direction-city">
                    <select className="filter-direction-selection" name="area">
                      <option value="area">Город, район</option>
                      <option value="osh">Ошская</option>
                      <option value="naryn">Нарынская</option>
                      <option value="issyk_kul">Иссык-Кульская</option>
                    </select>
                  </div>
                  <div className="filter-date">25 сен 2020</div>
                </div>
              </div>
                {/*Filter Direction*/}

                <div className="filter-size">
                  <div className="filter-size-information">

                    <div className="filter-weight">
                      <p className="filter-title">Вес груза, т</p>
                      <div className="filter-size-from">
                        <div className="filter-direction-area">
                          <select className="filter-size-selection" name="area">
                            <option value="from">От</option>
                            <option value="osh">Ошская</option>
                            <option value="naryn">Нарынская</option>
                            <option value="issyk_kul">Иссык-Кульская</option>
                          </select>
                        </div>
                        <div className="filter-direction-city">
                          <select className="filter-size-selection" name="area">
                            <option value="to">До</option>
                            <option value="osh">Ошская</option>
                            <option value="naryn">Нарынская</option>
                            <option value="issyk_kul">Иссык-Кульская</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="filter-volume">
                      <p className="filter-title">Объем груза, м³ </p>
                      <div className="filter-size-to">
                        <div className="filter-direction-area">
                          <select className="filter-size-selection" name="area">
                            <option value="from">От</option>
                            <option value="osh">Ошская</option>
                            <option value="naryn">Нарынская</option>
                            <option value="issyk_kul">Иссык-Кульская</option>
                          </select>
                        </div>
                        <div className="filter-direction-city">
                          <select className="filter-size-selection" name="area">
                            <option value="to">До</option>
                            <option value="osh">Ошская</option>
                            <option value="naryn">Нарынская</option>
                            <option value="issyk_kul">Иссык-Кульская</option>
                          </select>
                        </div>
                      </div>
                    </div>

                      <div className="filter-price">
                          <div className="filter-size-to">
                              <div className="filter-direction-area">
                                  <input className="filter-size-selection" type="text" placeholder="Цена от, сом"/>
                              </div>
                              <div className="filter-direction-city">
                                  <input className="filter-size-selection" type="text" placeholder="До"/>
                              </div>
                          </div>
                      </div>

                  </div>
                </div>
                  {/*Filter size*/}

                 <div className="filter-buttons">
                     <div className="filter-reset">
                         <a href="/" className="filter-reset-btn">Сбросить <i className="fa fa-close"/></a>
                     </div>
                     <div className="filter-show">
                         <a href="/" className="filter-show-btn">Показать 941 объявлений</a>
                     </div>
                 </div>



              </div>
            </div>

          </div>
        </section>
        <TransportSection />
        <Footer />
      </>
  );
}

export default App;
