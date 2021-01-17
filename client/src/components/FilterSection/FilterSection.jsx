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
            <div className="main-menu">
                <div className="container">
                    <h2 className="menu-name">Грузоперевозки по всей стране</h2>
                </div>
            </div>

            <section className="section-filteredTransport">
                <div className="container">

                    <div className="filter">
                        <div className="filter-item">

                            <div className="filter-chooser">
                                <p className="filter-search">Искать</p>
                                <div className="filter-searchFields">
                                    <button
                                        className={display === 'cargo' ? 'filter-goods filter-active' : 'filter-goods'}
                                        onClick={e => changeDisplay(e)} name="cargo">Груз
                                    </button>
                                    <button
                                        className={display === 'transportation' ? 'filter-transport filter-active' : 'filter-transport'}
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