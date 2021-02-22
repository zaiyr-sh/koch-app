import React from 'react';
import {withAlert} from "react-alert";
import {Redirect} from "react-router-dom";

import '../OrderPlacement.css';
import {validateMaxLength} from "../../../../helpers/validation-helper";

class TransportationPlacement extends React.Component {

    state = {
        weightError: "",
        volumeError: "",
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.validate()) this.props.placeTransportationHandler();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isPlaced) {
            this.props.alert.success('Вы успешно опубликовали!');
            this.props.placementSuccess(false);
            this.setState({weightError: "", volumeError: ""});
        }
        if (this.props.placementError) {
            this.props.alert.error('Ошибка публикации. Возможно ваш аккаунт еще не подтвержден. Попробуйте позже!');
        }
    }

    componentWillUnmount() {
        this.props.resetPlacementTransportationHandler();
    }

    validate = () => {
        let weightError, volumeError;
        let {weight, volume} = this.props.transportation;

        weightError = validateMaxLength(weight, 4);
        volumeError = validateMaxLength(volume, 4);

        if (weightError || volumeError) {
            this.setState({weightError, volumeError});
            return false;
        }
        return true;
    }

    render() {
        if (this.props.isPlaced) return <Redirect to="/"/>;
        let {editTransportationPlacementHandler, transportation, regions} = this.props;
        let {weightError, volumeError} = this.state;

        return (
            <section className="section__placement">
                <div className="container">
                    <div className="placement__inner">
                        <p className="placement__title">Данные транспортного средства</p>
                        <form className="placement__form" onSubmit={this.onSubmit}>

                            <div className="placement__direction">
                                <p className="direction__address">Адреса</p>
                                <p className="placement__direction__title">Откуда</p>
                                <div className="direction__from">
                                    <div className="direction__area">
                                        <select className="direction__selection" name="from_region" required
                                                value={transportation.from_region}
                                                onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}>
                                            <option value="">Область</option>
                                            {regions.results.map(region => (
                                                <option key={region.id} value={region.id}>{region.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="direction__city">
                                        <select className="direction__selection" name="from_city" required
                                                value={transportation.from_city}
                                                onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}>
                                            <option value="">Город, район</option>
                                            {regions.results.filter(region => region.id === parseInt(transportation.from_region)).map(region => (
                                                region.cities.map(city => (
                                                    <option key={city.id} value={city.id}>{city.name}</option>
                                                ))
                                            ))}
                                        </select>
                                    </div>
                                    <div className="direction__date"><input className="direction__selection-date"
                                                                            required
                                                                            value={transportation.from_shipment_date}
                                                                            onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}
                                                                            type="date" lang="fr-CA"
                                                                            id="from_shipment_date"
                                                                            name="from_shipment_date"/></div>
                                </div>

                                <p className="placement__direction__title">Куда</p>
                                <div className="direction__to">
                                    <div className="direction__area">
                                        <select className="direction__selection" name="to_region" required
                                                value={transportation.to_region}
                                                onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}>
                                            <option value="">Область</option>
                                            {regions.results.map(region => (
                                                <option key={region.id} value={region.id}>{region.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="direction__city">
                                        <select className="direction__selection" name="to_city" required
                                                value={transportation.to_city}
                                                onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}>
                                            <option value="">Город, район</option>
                                            {regions.results.filter(region => region.id === parseInt(transportation.to_region)).map(region => (
                                                region.cities.map(city => (
                                                    <option key={city.id} value={city.id}>{city.name}</option>
                                                ))
                                            ))}
                                        </select>
                                    </div>
                                    <div className="direction__date"><input className="direction__selection-date"
                                                                            required
                                                                            value={transportation.to_shipment_date}
                                                                            onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}
                                                                            type="date" id="to_shipment_date"
                                                                            name="to_shipment_date"/></div>
                                </div>
                                <div className="placement__comment">
                                <textarea
                                    className="comment__sender"
                                    placeholder="Комментарий к транспортному средству ..."
                                    name="vehicle_comment"
                                    value={transportation.vehicle_comment}
                                    onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}
                                />
                                </div>
                            </div>
                            {/*Placement Direction*/}

                            <div className="placement__transport">
                                <p className="placement__transport__title">Транспорт</p>
                                <div className="placement__transport-fields">
                                    <input
                                        type="number"
                                        min="0"
                                        className="placement__transport-selection"
                                        placeholder="Грузоподъемность, т"
                                        name="weight"
                                        required
                                        value={transportation.weight}
                                        onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description-order">
                                        {weightError}
                                    </p>
                                </div>
                                <div className="placement__transport-fields">
                                    <input
                                        type="number"
                                        min="0"
                                        className="placement__transport-selection"
                                        placeholder="Объем багажа, м³"
                                        name="volume"
                                        required
                                        value={transportation.volume}
                                        onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description-order">
                                        {volumeError}
                                    </p>
                                </div>
                            </div>
                            {/*Placement Cargo*/}

                            <div className="placement__payment">
                                <p className="placement__payment-title">Оплата за доставку</p>
                                <div className="placement__transport-fields">
                                    <input
                                        type="text"
                                        className="placement__transport-selection"
                                        placeholder="Сумма, сом"
                                        name="price"
                                        required
                                        value={transportation.price}
                                        onChange={(e) => editTransportationPlacementHandler(e.target.name, e.target.value)}
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

export default withAlert()(TransportationPlacement);