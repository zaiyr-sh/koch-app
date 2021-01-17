import React from 'react';

import "../FilterSection.css";

class FilterTransport extends React.Component {

    state = {
        button: ""
    }

    resetFilter = () => {
        this.props.resetFilterTransportation();
        this.props.getTransportations();
    }

    handleClick = (button) => {
        this.setState({button})
    }


    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.button === "reset") {
            this.resetFilter();
        }
        if (this.state.button === "show") {
            this.props.getFilteredTransportations();
        }
    }

    render() {
        let {
            filteredTransportations, editTransportationFilterHandler,
            cities, regions, editPlaceSelectionHandler
        } = this.props;
        let {button} = this.state;

        return (
            <form className="filter__form" onSubmit={this.onSubmit}>
                <div className="filter-direction">
                    <p className="filter-title">Откуда</p>
                    <div className="filter-direction-from">
                        <div className="filter-direction-area">
                            <select value={filteredTransportations.from_region}
                                    onChange={(e) => editPlaceSelectionHandler(e.target.name, e.target.value)}
                                    className="filter-direction-selection" name="from_region">
                                <option value="">Область</option>
                                {regions.results.map(region => (
                                    <option key={region.id} value={region.id}>{region.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="filter-direction-city">
                            <select value={filteredTransportations.from_city}
                                    onChange={(e) => editPlaceSelectionHandler(e.target.name, e.target.value)}
                                    className="filter-direction-selection" name="from_city">
                                <option value="">Город, район</option>
                                {cities.results.map(city => (
                                    <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <p className="filter-title">Куда</p>
                    <div className="filter-direction-to">
                        <div className="filter-direction-area">
                            <select value={filteredTransportations.to_region}
                                    onChange={(e) => editPlaceSelectionHandler(e.target.name, e.target.value)}
                                    className="filter-direction-selection" name="to_region">
                                <option value="">Область</option>
                                {regions.results.map(region => (
                                    <option key={region.id} value={region.id}>{region.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="filter-direction-city">
                            <select value={filteredTransportations.to_city}
                                    onChange={(e) => editPlaceSelectionHandler(e.target.name, e.target.value)}
                                    className="filter-direction-selection" name="to_city">
                                <option value="">Город, район</option>
                                {cities.results.map(city => (
                                    <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                {/*Filter Direction*/}

                <div className="filter-size">
                    <div className="filter-size-information">

                        <div className="filter-weight">
                            <p className="filter-title">Вес груза, т</p>
                            <div className="filter-size-from">
                                <div className="filter-direction-size">
                                    <input className="filter-size-selection"
                                           type="number"
                                           required={filteredTransportations.to_weight !== "" && button === "show"}
                                           min="0"
                                           name="from_weight"
                                           placeholder="От"
                                           value={filteredTransportations.from_weight}
                                           onChange={(e) => editTransportationFilterHandler(e.target.name, e.target.value)}
                                    />
                                </div>
                                <div className="filter-direction-size">
                                    <input className="filter-size-selection"
                                           type="number"
                                           required={filteredTransportations.from_weight !== "" && button === "show"}
                                           min="0"
                                           name="to_weight"
                                           placeholder="До"
                                           value={filteredTransportations.to_weight}
                                           onChange={(e) => editTransportationFilterHandler(e.target.name, e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="filter-volume">
                            <p className="filter-title">Объем груза, м³ </p>
                            <div className="filter-size-to">
                                <div className="filter-direction-size">
                                    <input className="filter-size-selection"
                                           type="number"
                                           required={filteredTransportations.to_volume !== "" && button === "show"}
                                           min="0"
                                           name="from_volume"
                                           placeholder="От"
                                           value={filteredTransportations.from_volume}
                                           onChange={(e) => editTransportationFilterHandler(e.target.name, e.target.value)}
                                    />
                                </div>
                                <div className="filter-direction-size">
                                    <input className="filter-size-selection"
                                           type="number"
                                           required={filteredTransportations.from_volume !== "" && button === "show"}
                                           min="0"
                                           name="to_volume"
                                           placeholder="До"
                                           value={filteredTransportations.to_volume}
                                           onChange={(e) => editTransportationFilterHandler(e.target.name, e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="filter-kind">
                            <button
                                className={filteredTransportations.vehicle_type === "грузовик" ? 'filter-transport-kind filter-active' : 'filter-transport-kind'}
                                onClick={(e) => editPlaceSelectionHandler("vehicle_type", e.target.name)}
                                type="button"
                                name="грузовик">Грузовик
                            </button>
                            <button
                                className={filteredTransportations.vehicle_type === "полуприцеп" ? 'filter-transport-kind filter-active' : 'filter-transport-kind'}
                                onClick={(e) => editPlaceSelectionHandler("vehicle_type", e.target.name)}
                                type="button"
                                name="полуприцеп">Полуприцеп
                            </button>
                            <button
                                className={filteredTransportations.vehicle_type === "сцепка" ? 'filter-transport-kind filter-active' : 'filter-transport-kind'}
                                onClick={(e) => editPlaceSelectionHandler("vehicle_type", e.target.name)}
                                type="button"
                                name="сцепка">Сцепка
                            </button>
                        </div>

                    </div>
                </div>
                {/*Filter size*/}

                <div className="filter-buttons">
                    <div className="filter-reset">
                        <button className="filter-reset-btn" onClick={() => this.handleClick("reset")}>Сбросить <i
                            className="fa fa-close"/></button>
                    </div>
                    <div className="filter-show">
                        <button className="filter-show-btn" onClick={() => this.handleClick("show")}>Показать
                            объявления
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default FilterTransport;