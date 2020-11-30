import React from 'react';

import "../OrderPlacement.css";
import {placementSuccessActionCreator} from "../../../../redux/reducers/placement-reducer";
import {withAlert} from "react-alert";

class CargoPlacement extends React.Component {

    state = {
        nameError: "",
        surnameError: "",
        phoneNumberError: "",
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isPlaced){
            this.props.alert.success('Вы успешно опубликовали!');
            placementSuccessActionCreator(false);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.placeCargoHandler();
        }
    }

    validate = () => {
        let nameError = "";
        let surnameError = "";
        let phoneNumberError = "";
        let {sender_name, sender_surname, phone_number } = this.props.cargo;

        if (/\d/.test(sender_name) || (sender_name.length <= 1)) {
            nameError = "Поле должно быть от 2 и выше символов длиной и не содержать чисел";
        }
        if (/\d/.test(sender_surname) || (sender_surname.length <= 1)) {
            surnameError = "Поле должно быть от 2 и выше символов длиной и не содержать чисел";
        }
        if (/[a-zA-Z]/g.test(phone_number) || (phone_number.length !== 10)) {
            phoneNumberError = "Неправильно введенный формат номера телефона";
        }

        if (phoneNumberError || nameError || surnameError ) {
            this.setState({ phoneNumberError, nameError, surnameError });
            return false;
        }
        return true;
    }

    render() {
        let {editCargoPlacementHandler, cargo, cities, regions} = this.props;
        let {nameError, surnameError, phoneNumberError} = this.state;

        if (!cities && !regions) return <></>

        return (
            <section className="section-placement">
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
                                            {cities.results.map(city => (
                                                <option key={city.id} value={city.id}>{city.name}</option>
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
                                            {cities.results.map(city => (
                                                <option key={city.id} value={city.id}>{city.name}</option>
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
                                    placeholder="Комментарий к отправке ..."
                                    name="place_comment"
                                    value={cargo.place_comment}
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
                                </div>
                                <div className="placement__cargo-size">
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
                                    <input
                                        type="text"
                                        className="placement__cargo-selection name-selection"
                                        placeholder="Номер телефона"
                                        name="phone_number"
                                        maxLength="10"
                                        required
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