import React, {Component} from 'react';
import "./DriverProfile.css";
import camera from "../../../../assets/images/camera_icon.png";
import {NavLink} from "react-router-dom";

class DriverProfile extends Component {

    state={
        technicalPassport: camera,
        driverLicence: camera,
        idPassport: camera,
    }

    imageHandler = (files, name) => {
        debugger
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({[name]: reader.result})
            }
        }
        reader.readAsDataURL(files[0])
    };

    render() {
        return (
            <section className="section-driverProfile">
                <div className="container">
                    <div className="driver__data">
                        <div className="driver__inner">
                            <h2 className="driver__title">Данные водителя</h2>
                            <form className="driver__form">
                                <div className="driver__name">
                                    <input
                                        type="text"
                                        className="driver__field"
                                        placeholder="Имя"
                                        name="name"
                                    />
                                </div>
                                <div className="driver__surname">
                                    <input
                                        type="text"
                                        className="driver__field"
                                        placeholder="Фамилия"
                                        name="surname"
                                    />
                                </div>

                                <div className="driver__direction">
                                    <p className="driver__direction-title">Местоположение</p>
                                    <div className="driver__direction-from">
                                        <div className="driver__direction-area">
                                            <select className="driver__direction-selection" name="area">
                                                <option value="bishkek">Бишкек</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                        <div className="driver__direction-area">
                                            <select className="driver__direction-selection" name="area">
                                                <option value="area">Тунгуч</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Direction*/}

                                <div className="driver__transport">
                                    <p className="driver__transport-title">Транспорт</p>
                                    <div className="driver__transport-section">
                                        <div className="driver__transport-type">
                                            <select className="driver__transport-type-selection" name="area">
                                                <option value="bishkek">Рефрижератор</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                        <div className="driver__transport-form">
                                            <NavLink className="filter-goods" exact={true} activeClassName="filter-active"name="cargo" to="/">Груз</NavLink>
                                            <NavLink className="filter-transport" activeClassName="filter-active" name="transport"  to="/">Транспорт</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Transport*/}

                                <div className="driver__transport-size">
                                    <div className="driver__transport-size-section">
                                        <div className="driver__transport-weight">
                                            {/*<input type="number" className="driver__transport-type-selection" min="1" max="50" defaultValue="30"/>*/}
                                            <select className="driver__transport-type-selection" name="area">
                                                <option value="bishkek">30т</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                        <div className="driver__transport-volume">
                                            <select className="driver__transport-type-selection" name="area">
                                                <option value="bishkek">70м³</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                        <div className="driver__transport-comments">
                                        <textarea id="transport-comments" className="transport-comments">

                                        </textarea>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Transport Size*/}

                                <div className="driver__documents">
                                    <p className="driver__documents-title">Документы</p>
                                    <div className="driver__documents-section">
                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={this.state.technicalPassport} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="technicalPassport"
                                                id="technicalPassport"
                                                onChange={(e) => this.imageHandler(e.target.files, e.target.name)}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="technicalPassport">
                                                    Выберите фото
                                                </label>
                                            </div>
                                            <p className="driver__documents-name">
                                                Свидетельства о ТС “Тех.Паспорт”
                                            </p>
                                        </div>

                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={this.state.driverLicence} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="driverLicence"
                                                id="driverLicence"
                                                onChange={(e) => this.imageHandler(e.target.files, e.target.name)}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="driverLicence">
                                                    Выберите фото
                                                </label>
                                            </div>
                                            <p className="driver__documents-name">
                                                Водительское удостоверенние
                                            </p>
                                        </div>

                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={this.state.idPassport} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="idPassport"
                                                id="idPassport"
                                                onChange={(e) => this.imageHandler(e.target.files, e.target.name)}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="idPassport">
                                                    Выберите фото
                                                </label>
                                            </div>
                                            <p className="driver__documents-name">
                                                Паспорт ID
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Documents*/}

                                <div className="driver__button">
                                    <button className="client__saveButton">Сохранить изменения</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

};

export default DriverProfile;