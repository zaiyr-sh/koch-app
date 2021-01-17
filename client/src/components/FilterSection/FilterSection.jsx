import React from 'react';

import "./FilterSection.css";
import FilterCargoContainer from "./FilterCargo/FilterCargoContainer";
import FilterTransportContainer from "./FilterTransport/FilterTransportContainer";

const FilterSection = ({display, editDisplayHandler}) => {

    const changeDisplay = (e) => {
        e.preventDefault()
        const display = e.target.name
        editDisplayHandler(display)
    }

    const renderInner = () => {
        if (display === "cargo") {
            return <FilterCargoContainer/>
        } else if (display === "transportation") {
            return <FilterTransportContainer/>
        }
    }

    return (
        <>
            <div className="main__menu">
                <div className="container">
                    <h2 className="menu__name">Грузоперевозки по всей стране</h2>
                </div>
            </div>

            <section className="section__filteredTransport">
                <div className="container">

                    <div className="filter">
                        <div className="filter__item">

                            <div className="filter__chooser">
                                <p className="filter__search">Искать</p>
                                <div className="filter__search-fields">
                                    <button
                                        className={display === 'cargo' ? 'filter__goods filter__active' : 'filter__goods'}
                                        onClick={e => changeDisplay(e)} name="cargo">Груз
                                    </button>
                                    <button
                                        className={display === 'transportation' ? 'filter__transport filter__active' : 'filter__transport'}
                                        onClick={e => changeDisplay(e)} name="transportation">Транспорт
                                    </button>
                                </div>
                            </div>

                            {renderInner()}

                        </div>
                        {/*Filter Item*/}
                    </div>

                </div>
            </section>
        </>
    );
};

export default FilterSection;