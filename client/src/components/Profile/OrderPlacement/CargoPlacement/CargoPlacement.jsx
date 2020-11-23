import React from 'react';

import "./CargoPlacement.css";

const CargoPlacement = ({editCargoPlacementHandler, cargo, cities, regions, placeCargoHandler}) => {
    console.log(cargo)
    if (!cities && !regions) return <></>

    const onSubmit = (e) => {
        e.preventDefault();
        placeCargoHandler();
    }

    return (
        <section className="section-placement">
            <div className="container">
                <div className="placement__inner">
                    <p className="placement__title">Данные груза</p>
                    <form className="placement__form" onSubmit={onSubmit}>

                        <div className="placement__direction">
                            <p className="direction__address">Адреса</p>
                            <p className="placement__direction__title">Откуда</p>
                            <div className="direction__from">
                                <div className="direction__area">
                                    <select className="direction__selection" name="from_region" value={cargo.from_region} onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}>
                                        <option value="">Область</option>
                                        {regions.results.map(region => (
                                            <option key={region.id} value={region.id}>{region.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="direction__city">
                                    <select className="direction__selection" name="from_city" value={cargo.from_city} onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}>
                                        <option value="">Город, район</option>
                                        {cities.results.map(city => (
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="direction__date">25 сен 2020</div>
                            </div>

                            <p className="placement__direction__title">Куда</p>
                            <div className="direction__to">
                                <div className="direction__area">
                                    <select className="direction__selection" name="to_region" value={cargo.to_region} onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}>
                                        <option value="">Область</option>
                                        {regions.results.map(region => (
                                            <option key={region.id} value={region.id}>{region.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="direction__city">
                                    <select className="direction__selection" name="to_city" value={cargo.to_city} onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}>
                                        <option value="">Город, район</option>
                                        {cities.results.map(city => (
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="direction__date">25 сен 2020</div>
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
                                    className="placement__cargo-selection"
                                    placeholder="Название груза"
                                    name="name"
                                    value={cargo.name}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="placement__cargo-fields">
                                <input
                                    type="text"
                                    className="placement__cargo-selection"
                                    placeholder="Вес груза, т"
                                    name="weight"
                                    value={cargo.weight}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="placement__cargo-fields">
                                <input
                                    type="text"
                                    className="placement__cargo-selection"
                                    placeholder="Объем груза, м³"
                                    name="volume"
                                    value={cargo.volume}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="placement__cargo-size">
                                <input
                                    type="text"
                                    className="placement__cargo-selection"
                                    placeholder="Длина, м"
                                    name="length"
                                    value={cargo.length}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="placement__cargo-selection"
                                    placeholder="Ширина, м"
                                    name="width"
                                    value={cargo.width}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="placement__cargo-selection"
                                    placeholder="Высота, м"
                                    name="height"
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
                                    className="placement__cargo-selection"
                                    placeholder="Имя"
                                    name="sender_name"
                                    value={cargo.sender_name}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="placement__cargo-fields">
                                <input
                                    type="text"
                                    className="placement__cargo-selection"
                                    placeholder="Фамилия"
                                    name="sender_surname"
                                    value={cargo.sender_surname}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="placement__cargo-fields">
                                <input
                                    type="text"
                                    className="placement__cargo-selection"
                                    placeholder="Номер телефона"
                                    name="phone_number"
                                    value={cargo.phone_number}
                                    onChange={(e) => editCargoPlacementHandler(e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                        {/*Placement Contacts*/}

                        <div className="placement__payment">
                            <p className="placement__payment-title">Оплата за доставку</p>
                            {/*<div className="placement__payment-chooser">*/}
                            {/*    <div className="placement__payment-fields">*/}
                            {/*        <button className="placement__payment-selection">Наличными</button>*/}
                            {/*        <button className="placement__payment-selection">Картой</button>*/}
                            {/*    </div>*/}
                                <div className="placement__cargo-fields">
                                    <input
                                        type="text"
                                        className="placement__cargo-selection"
                                        placeholder="Сумма, сом"
                                        name="price"
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

export default CargoPlacement;