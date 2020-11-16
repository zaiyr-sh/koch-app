import React from 'react';
import {NavLink} from "react-router-dom";

import "./FilterSection.css";
import FilterCargo from "./FilterCargo/FilterCargo";
import FilterTransport from "./FilterTransport/FilterTransport";

class FilterSection extends React.Component {

    state = {
        display: "cargo"
    };

    changeDisplay = (e) => {
        e.preventDefault()
        let display = e.target.name
        this.setState({display});
    }

    renderInner() {
        let { display } = this.state;

        if (display === "cargo") {
            return <FilterCargo />
        } else if (display === "transport") {
            return <FilterTransport />
        }
    }
    render() {
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
                                        <NavLink className="filter-goods" exact={true} activeClassName="filter-active" onClick={e => this.changeDisplay(e)} name="cargo" to="/">Груз</NavLink>
                                        <NavLink className="filter-transport" activeClassName="filter-active" name="transport" onClick={e => this.changeDisplay(e)} to="/">Транспорт</NavLink>
                                    </div>
                                </div>

                                {this.renderInner()}

                            </div>
                            {/*Filter Item*/}
                        </div>

                    </div>
                </section>
            </>
        );
    }
};

export default FilterSection;