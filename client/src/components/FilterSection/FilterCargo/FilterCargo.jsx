import React from 'react';

import "../FilterSection.css";

const FilterCargo = ({ filteredCargoes, editCargoFilterHandler, getFilteredCargoes,
                         cities, regions, editPlaceSelectionHandler,
                         getCargoes, resetFilterCargoes }
                         ) => {

    console.log(filteredCargoes)
    if (!cities && !regions) return <></>

    const resetFilter = () => {
        resetFilterCargoes()
        getCargoes()
    }

    return (
        <>
            <div className="filter-direction">
                <p className="filter-title">Откуда</p>
                <div className="filter-direction-from">
                    <div className="filter-direction-area">
                        <select value={filteredCargoes.from_region} onChange={(e) => editPlaceSelectionHandler(e.target.name, e.target.value)} className="filter-direction-selection" name="from_region">
                            <option value="">Область</option>
                            {regions.results.map(region => (
                                <option key={region.id} value={region.name}>{region.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="filter-direction-city">
                        <select value={filteredCargoes.from_city} onChange={(e) => editPlaceSelectionHandler(e.target.name, e.target.value)}  className="filter-direction-selection" name="from_city">
                            <option value="">Город, район</option>
                            {cities.results.map(city => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="filter-date">25 сен 2020</div>
                </div>

                <p className="filter-title">Куда</p>
                <div className="filter-direction-to">
                    <div className="filter-direction-area">
                        <select value={filteredCargoes.to_region} onChange={(e) => editPlaceSelectionHandler(e.target.name, e.target.value)} className="filter-direction-selection" name="to_region">
                            <option value="">Область</option>
                            {regions.results.map(region => (
                                <option key={region.id} value={region.name}>{region.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="filter-direction-city">
                        <select value={filteredCargoes.to_city} onChange={(e) => editPlaceSelectionHandler(e.target.name, e.target.value)} className="filter-direction-selection" name="to_city">
                            <option value="">Город, район</option>
                            {cities.results.map(city => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))}
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
                                <input className="filter-size-selection"
                                       name="area"
                                       placeholder="От"
                                       value={filteredCargoes.weight}
                                       onChange={(e) => editCargoFilterHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="filter-direction-city">
                                <input className="filter-size-selection"
                                       name="area"
                                       placeholder="До"
                                       value={filteredCargoes.weight}
                                       onChange={(e) => editCargoFilterHandler(e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="filter-volume">
                        <p className="filter-title">Объем груза, м³ </p>
                        <div className="filter-size-to">
                            <div className="filter-direction-area">
                                <input className="filter-size-selection"
                                       name="area"
                                       placeholder="От"
                                       value={filteredCargoes.volume}
                                       onChange={(e) => editCargoFilterHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="filter-direction-city">
                                <input className="filter-size-selection"
                                       name="area"
                                       placeholder="До"
                                       value={filteredCargoes.weight}
                                       onChange={(e) => editCargoFilterHandler(e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="filter-price">
                        <div className="filter-size-to">
                            <div className="filter-direction-area">
                                <input className="filter-size-selection"
                                       name="from_price"
                                       value={filteredCargoes.from_price}
                                       onChange={(e) => editCargoFilterHandler(e.target.name, e.target.value)}
                                       type="text"
                                       placeholder="Цена от, сом"
                                />
                            </div>
                            <div className="filter-direction-city">
                                <input className="filter-size-selection"
                                       name="to_price"
                                       value={filteredCargoes.to_price}
                                       onChange={(e) => editCargoFilterHandler(e.target.name, e.target.value)}
                                       type="text"
                                       placeholder="До"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/*Filter size*/}

            <div className="filter-buttons">
                <div className="filter-reset">
                    <button className="filter-reset-btn" onClick={resetFilter}>Сбросить <i className="fa fa-close"/></button>
                </div>
                <div className="filter-show">
                    <button className="filter-show-btn" onClick={getFilteredCargoes}>Показать объявления</button>
                </div>
            </div>
        </>
    );
};

export default FilterCargo;