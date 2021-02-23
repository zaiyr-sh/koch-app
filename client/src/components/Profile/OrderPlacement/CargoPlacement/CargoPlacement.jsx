import React from 'react';
import {withAlert} from "react-alert";
import {Redirect} from "react-router-dom";

import "../OrderPlacement.css";
import {
    validateMaxLength,
    validateMinLength,
    validatePersonName,
    validatePhoneNumber
} from "../../../../helpers/validation-helper";
import NumberFormat from "react-number-format";

class CargoPlacement extends React.Component {

    state = {
        nameError: "",
        surnameError: "",
        phoneNumberError: "",
        cargoNameError: "",
        weightError: "",
        volumeError: "",
        lengthError: "",
        widthError: "",
        heightError: "",
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isPlaced) {
            this.props.alert.success('Вы успешно опубликовали!');
            this.props.placementSuccess(false);
            this.setState({
                nameError: "",
                surnameError: "",
                phoneNumberError: "",
                cargoNameError: "",
                weightError: "",
                volumeError: "",
                lengthError: "",
                widthError: "",
                heightError: ""
            });
        }
    }

    componentWillUnmount() {
        this.props.resetPlacementCargoHandler();
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.validate()) this.props.placeCargoHandler();
    }

    validate = () => {
        let nameError, surnameError, phoneNumberError, cargoNameError, weightError, volumeError, lengthError,
            widthError, heightError;
        let {sender_name, sender_surname, phone_number, name, weight, volume, length, width, height} = this.props.cargo;

        nameError = validatePersonName(sender_name);
        surnameError = validatePersonName(sender_surname);
        phoneNumberError = validatePhoneNumber(phone_number);
        cargoNameError = validateMinLength(name, 2);
        weightError = validateMaxLength(weight, 4);
        volumeError = validateMaxLength(volume, 4);
        lengthError = validateMaxLength(length, 4);
        widthError = validateMaxLength(width, 4);
        heightError = validateMaxLength(height, 4);

        if (phoneNumberError || nameError || surnameError || cargoNameError || weightError || volumeError || lengthError || widthError || heightError) {
            this.setState({
                nameError,
                surnameError,
                phoneNumberError,
                cargoNameError,
                weightError,
                volumeError,
                lengthError,
                widthError,
                heightError
            });
            return false;
        }
        return true;
    }

    render() {
        if (this.props.isPlaced) return <Redirect to="/"/>;
        let {editCargoPlacementHandler, cargo, regions} = this.props;
        let {
            nameError,
            surnameError,
            phoneNumberError,
            cargoNameError,
            weightError,
            volumeError,
            lengthError,
            widthError,
            heightError
        } = this.state;

        return (
            <section className="section__placement">
                <div className="container">
                    <div className="placement__inner">
                        <p className="placement__title">Данные груза</p>
                        <form className="placement__form" onSubmit={this.onSubmit}>

                            <div className="placement__direction">
                                <p className="direction__address">Адреса</p>
                                <p className="placement__direction__title">Откуда</p>
                                <div className="direction__from">
                                    <div className="direction__area">
                                        <select className="direction__selection" name="from_region" required
                                                value={cargo.from_region}
                                                onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}>
                                            <option value="">Область</option>
                                            {regions.results.map(region => (
                                                <option key={region.id} value={region.id}>{region.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="direction__city">
                                        <select className="direction__selection" name="from_city" required
                                                value={cargo.from_city}
                                                onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}>
                                            <option value="">Город, район</option>
                                            {regions.results.filter(region => region.id === parseInt(cargo.from_region)).map(region => (
                                                region.cities.map(city => (
                                                    <option key={city.id} value={city.id}>{city.name}</option>
                                                ))
                                            ))}
                                        </select>
                                    </div>
                                    <div className="direction__date"><input className="direction__selection-date"
                                                                            required value={cargo.from_shipment_date}
                                                                            onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                                                            type="date" lang="fr-CA"
                                                                            id="from_shipment_date"
                                                                            name="from_shipment_date"/></div>
                                </div>
                                <div className="placement__comment">
                                <textarea
                                    className="comment__sender"
                                    placeholder="Комментарий к месту отбытия ..."
                                    name="from_place_comment"
                                    value={cargo.from_place_comment}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                                </div>

                                <p className="placement__direction__title">Куда</p>
                                <div className="direction__to">
                                    <div className="direction__area">
                                        <select className="direction__selection" name="to_region" required
                                                value={cargo.to_region}
                                                onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}>
                                            <option value="">Область</option>
                                            {regions.results.map(region => (
                                                <option key={region.id} value={region.id}>{region.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="direction__city">
                                        <select className="direction__selection" name="to_city" required
                                                value={cargo.to_city}
                                                onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}>
                                            <option value="">Город, район</option>
                                            {regions.results.filter(region => region.id === parseInt(cargo.to_region)).map(region => (
                                                region.cities.map(city => (
                                                    <option key={city.id} value={city.id}>{city.name}</option>
                                                ))
                                            ))}
                                        </select>
                                    </div>
                                    <div className="direction__date"><input className="direction__selection-date"
                                                                            required value={cargo.to_shipment_date}
                                                                            onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                                                            type="date" id="to_shipment_date"
                                                                            name="to_shipment_date"/></div>
                                </div>
                                <div className="placement__comment">
                                <textarea
                                    className="comment__sender"
                                    placeholder="Комментарий к месту доставки ..."
                                    name="to_place_comment"
                                    value={cargo.to_place_comment}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                                </div>
                            </div>
                            {/*Placement Direction*/}

                            <div className="placement__cargo">
                                <p className="placement__cargo__title">Груз</p>
                                <div className="placement__cargo-fields">
                                    <input
                                        type="text"
                                        className="placement__cargo-selection name-selection"
                                        placeholder="Название груза"
                                        name="name"
                                        required
                                        value={cargo.name}
                                        onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description-order">
                                        {cargoNameError}
                                    </p>
                                </div>
                                <div className="placement__cargo-fields">
                                    <input
                                        type="number"
                                        min="0"
                                        className="placement__cargo-selection"
                                        placeholder="Вес груза, т"
                                        name="weight"
                                        required
                                        value={cargo.weight}
                                        onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description-order">
                                        {weightError}
                                    </p>
                                </div>
                                <div className="placement__cargo-fields">
                                    <input
                                        type="number"
                                        min="0"
                                        className="placement__cargo-selection"
                                        placeholder="Объем груза, м³"
                                        name="volume"
                                        required
                                        value={cargo.volume}
                                        onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description-order">
                                        {volumeError}
                                    </p>
                                </div>
                                <div className="placement__cargo-size">
                                    <div className="placement__cargo-size-fields">
                                        <input
                                            type="number"
                                            min="0"
                                            className="placement__cargo-selection"
                                            placeholder="Длина, м"
                                            name="length"
                                            required
                                            value={cargo.length}
                                            onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                        />
                                        <p className="error__description-order">
                                            {lengthError}
                                        </p>
                                    </div>
                                    <div className="placement__cargo-size-fields">
                                        <input
                                            type="number"
                                            min="0"
                                            className="placement__cargo-selection"
                                            placeholder="Ширина, м"
                                            name="width"
                                            required
                                            value={cargo.width}
                                            onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                        />
                                        <p className="error__description-order">
                                            {widthError}
                                        </p>
                                    </div>
                                    <div className="placement__cargo-size-fields">
                                        <input
                                            type="number"
                                            min="0"
                                            className="placement__cargo-selection"
                                            placeholder="Высота, м"
                                            name="height"
                                            required
                                            value={cargo.height}
                                            onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                        />
                                        <p className="error__description-order">
                                            {heightError}
                                        </p>
                                    </div>
                                </div>
                                <div className="placement__comment">
                                <textarea
                                    className="comment__cargo"
                                    placeholder="Комментарий к грузу ..."
                                    name="cargo_comment"
                                    value={cargo.cargo_comment}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                                </div>
                            </div>
                            {/*Placement Cargo*/}

                            <div className="placement__contacts">
                                <p className="placement__contacts-title">Контакты</p>
                                <div className="placement__cargo-fields">
                                    <input
                                        type="text"
                                        className="placement__cargo-selection name-selection"
                                        placeholder="Имя"
                                        name="sender_name"
                                        required
                                        value={cargo.sender_name}
                                        onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description-order">
                                        {nameError}
                                    </p>
                                </div>
                                <div className="placement__cargo-fields">
                                    <input
                                        type="text"
                                        className="placement__cargo-selection name-selection"
                                        placeholder="Фамилия"
                                        name="sender_surname"
                                        required
                                        value={cargo.sender_surname}
                                        onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description-order">
                                        {surnameError}
                                    </p>
                                </div>
                                <div className="placement__cargo-fields">
                                    <NumberFormat
                                        format="+996#########"
                                        placeholder="Номер телефона"
                                        className="placement__cargo-selection name-selection"
                                        required
                                        type="text"
                                        name="phone_number"
                                        value={cargo.phone_number}
                                        onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description-order">
                                        {phoneNumberError}
                                    </p>
                                </div>
                            </div>
                            {/*Placement Contacts*/}

                            <div className="placement__payment">
                                <p className="placement__payment-title">Оплата за доставку</p>
                                <div className="placement__cargo-fields">
                                    <input
                                        type="text"
                                        className="placement__cargo-selection"
                                        placeholder="Сумма, сом"
                                        name="price"
                                        required
                                        value={cargo.price}
                                        onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                    />
                                </div>
                                {/*</div>*/}
                            </div>
                            {/*Placement Payment*/}

                            <div className="placement__button">
                                <button className="placement__place-button">Разместить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default withAlert()(CargoPlacement);