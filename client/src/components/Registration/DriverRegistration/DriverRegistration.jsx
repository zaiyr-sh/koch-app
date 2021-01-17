import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {withAlert} from "react-alert";

import camera from '../../../assets/images/camera_icon.png';
import "./DriverRegistration.css";
import {validateMaxLength, validateNonEmptyLength} from "../../../helpers/validation-helper";

class DriverRegistration extends Component {

    state = {
        vehiclePassportError: "",
        driverLicenseError: "",
        idPassportError: "",
        vehicleTypeError: "",
        carryingCapacityError: ""
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.registrationDriverError) {
            this.props.alert.error('Ошибка регистрации. Попробуйте заново!');
        }
        if (this.props.isDriverRegister) {
            this.props.alert.success('Вы успешно зарегестрировались! Ожидайте подтверждение администратора.');
            this.props.resetRegistration();
        }
    }

    componentWillUnmount() {
        this.props.resetRegistration();
    }

    validate = () => {
        let vehiclePassportError, driverLicenseError, idPassportError, vehicleTypeError, carryingCapacityError;
        let {vehicle_passport, driver_license, id_passport, vehicle_type, carrying_capacity} = this.props.driver;

        vehiclePassportError = validateNonEmptyLength(vehicle_passport.base64Img);
        driverLicenseError = validateNonEmptyLength(driver_license.base64Img);
        idPassportError = validateNonEmptyLength(id_passport.base64Img);
        vehicleTypeError = validateNonEmptyLength(vehicle_type);
        carryingCapacityError = validateMaxLength(carrying_capacity, 4);

        if (vehiclePassportError || driverLicenseError || idPassportError || vehicleTypeError || carryingCapacityError) {
            this.setState({
                vehiclePassportError,
                driverLicenseError,
                idPassportError,
                vehicleTypeError,
                carryingCapacityError
            });
            return false;
        }
        return true;
    }

    imageHandler = (name, files) => {
        const file = files[0];
        const reader = new FileReader();
        let editRegistrationDriverImageFieldHandler = this.props.editRegistrationDriverImageFieldHandler;
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
        } else {
            editRegistrationDriverImageFieldHandler(name, "", "");
        }
        reader.onloadend = () => {
            editRegistrationDriverImageFieldHandler(name, reader.result, file);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.validate()) this.props.registrationDriver();
    }

    render() {
        let {driver, editRegistrationDriverFieldHandler, cargoTypes, isDriverRegister} = this.props;
        let {
            vehiclePassportError,
            driverLicenseError,
            idPassportError,
            vehicleTypeError,
            carryingCapacityError
        } = this.state;

        if (isDriverRegister) {
            return <Redirect to="/profile/my_profile"/>
        }

        return (
            <section className="section__driver-profile">
                <div className="container">
                    <div className="driver__data">
                        <div className="driver__inner">
                            <h2 className="driver__title">Данные водителя</h2>
                            <p className="driver__activation-title">Закончите, пожалуйста, регистрацию!</p>
                            <form className="driver__form" onSubmit={this.onSubmit}>

                                <div className="driver__transport">
                                    <p className="driver__transport-title">Транспорт</p>
                                    <div className="driver__transport-section">
                                        <div className="driver__transport-type">
                                            <select required value={driver.cargo_type}
                                                    onChange={e => editRegistrationDriverFieldHandler(e.target.name, e.target.value)}
                                                    className="driver__transport-type-selection" name="cargo_type">
                                                <option value="">Тип транспорта</option>
                                                {cargoTypes.results.map(cargo => (
                                                    <option key={cargo.id} value={cargo.id}>{cargo.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="driver__transport-form">
                                            <button
                                                className={driver.vehicle_type === "1" ? 'filter__kind-transport filter__active' : 'filter__kind-transport'}
                                                onClick={(e) => editRegistrationDriverFieldHandler("vehicle_type", e.target.name)}
                                                type="button"
                                                name="1">Грузовик
                                            </button>
                                            <button
                                                className={driver.vehicle_type === "2" ? 'filter__kind-transport filter__active' : 'filter__kind-transport'}
                                                onClick={(e) => editRegistrationDriverFieldHandler("vehicle_type", e.target.name)}
                                                type="button"
                                                name="2">Полуприцеп
                                            </button>
                                            <button
                                                className={driver.vehicle_type === "3" ? 'filter__kind-transport filter__active' : 'filter__kind-transport'}
                                                onClick={(e) => editRegistrationDriverFieldHandler("vehicle_type", e.target.name)}
                                                type="button"
                                                name="3">Сцепка
                                            </button>
                                            <p className="error__description">
                                                {vehicleTypeError}
                                            </p>
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
                                            <p className="error__description-addition">
                                                {carryingCapacityError}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Transport Size*/}

                                <div className="driver__documents">
                                    <p className="driver__documents-title">Документы</p>
                                    <div className="driver__documents-section">
                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={driver.vehicle_passport.base64Img || camera} alt="" id="img"
                                                     className="img"/>
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="vehicle_passport"
                                                id="vehicle_passport"
                                                onChange={(e) => this.imageHandler(e.target.name, e.target.files)}
                                            />
                                            <p className="error__description">
                                                {vehiclePassportError}
                                            </p>
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
                                                <img src={driver.driver_license.base64Img || camera} alt="" id="img"
                                                     className="img"/>
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="driver_license"
                                                id="driver_license"
                                                onChange={(e) => this.imageHandler(e.target.name, e.target.files)}
                                            />
                                            <p className="error__description">
                                                {driverLicenseError}
                                            </p>
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
                                                <img src={driver.id_passport.base64Img || camera} alt="" id="img"
                                                     className="img"/>
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="id_passport"
                                                id="id_passport"
                                                onChange={(e) => this.imageHandler(e.target.name, e.target.files)}
                                            />
                                            <p className="error__description">
                                                {idPassportError}
                                            </p>
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
                                    <button className="client__saveButton">Отправить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withAlert()(DriverRegistration);