import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import "./DriverRegistration.css";

class DriverRegistration extends Component {

    // state={
    //     vehicle_passport: camera,
    //     driver_license: camera,
    //     id_passport: camera,
    // }

    imageHandler = (files, name) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.props.editRegistrationDriverFieldHandler(name, reader.result)
            }
        }
        reader.readAsDataURL(files[0])
    };

    onSubmit = (e) => {
        e.preventDefault();
        // const data = new FormData()
        // data.append('vehicle_passport', this.state.vehicle_passport)
        // data.append('driver_license', this.state.driver_license)
        // data.append('id_passport', this.state.id_passport)
    }

    render() {

        let {driver, editRegistrationDriverFieldHandler} = this.props;
        console.log(driver)

        return (
            <section className="section-driverProfile">
                <div className="container">
                    <div className="driver__data">
                        <div className="driver__inner">
                            <h2 className="driver__title">Данные водителя</h2>
                            <form className="driver__form" onSubmit={this.onSubmit}>

                                <div className="driver__transport">
                                    <p className="driver__transport-title">Транспорт</p>
                                    <div className="driver__transport-section">
                                        <div className="driver__transport-type">
                                            <select value={driver.cargo_type} onChange={e => editRegistrationDriverFieldHandler(e.target.name, e.target.value)} className="driver__transport-type-selection" name="cargo_type">
                                                <option value="">Тип транспорта</option>
                                                <option value="4">Рефрижератор</option>
                                            </select>
                                        </div>
                                        <div className="driver__transport-form">
                                            <button
                                                className={driver.vehicle_type === "грузовик" ? 'filter-transport-kind filter-active' : 'filter-transport-kind'}
                                                onClick={(e) => editRegistrationDriverFieldHandler("vehicle_type", e.target.name)}
                                                type="button"
                                                name="грузовик">Грузовик
                                            </button>
                                            <button
                                                className={driver.vehicle_type  === "полуприцеп" ? 'filter-transport-kind filter-active' : 'filter-transport-kind'}
                                                onClick={(e) => editRegistrationDriverFieldHandler("vehicle_type", e.target.name)}
                                                type="button"
                                                name="полуприцеп">Полуприцеп
                                            </button>
                                            <button
                                                className={driver.vehicle_type  === "сцепка" ? 'filter-transport-kind filter-active' : 'filter-transport-kind'}
                                                onClick={(e) => editRegistrationDriverFieldHandler("vehicle_type", e.target.name)}
                                                type="button"
                                                name="сцепка">Сцепка
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Transport*/}

                                <div className="driver__transport-size">
                                    <div className="driver__transport-size-section">
                                        <div className="driver__transport-volume">
                                            <input className="driver__transport-volume-selection"
                                                   type="number"
                                                   required
                                                   min="0"
                                                   name="carrying_capacity"
                                                   placeholder="Объем багажа, м³"
                                                   value={driver.carrying_capacity}
                                                   onChange={(e) => editRegistrationDriverFieldHandler(e.target.name, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Transport Size*/}

                                <div className="driver__documents">
                                    <p className="driver__documents-title">Документы</p>
                                    <div className="driver__documents-section">
                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={driver.vehicle_passport} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                required
                                                name="vehicle_passport"
                                                id="vehicle_passport"
                                                onChange={(e) => this.imageHandler(e.target.files, e.target.name)}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="vehicle_passport">
                                                    Выберите фото
                                                </label>
                                            </div>
                                            <p className="driver__documents-name">
                                                Свидетельства о ТС “Тех.Паспорт”
                                            </p>
                                        </div>

                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={driver.driver_license} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                required
                                                name="driver_license"
                                                id="driver_license"
                                                onChange={(e) => this.imageHandler(e.target.files, e.target.name)}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="driver_license">
                                                    Выберите фото
                                                </label>
                                            </div>
                                            <p className="driver__documents-name">
                                                Водительское удостоверенние
                                            </p>
                                        </div>

                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={driver.id_passport} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                required
                                                name="id_passport"
                                                id="id_passport"
                                                onChange={(e) => this.imageHandler(e.target.files, e.target.name)}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="id_passport">
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

export default DriverRegistration;