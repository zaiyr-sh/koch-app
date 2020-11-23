import React from 'react';

import "./CargoSection.css";
import Card from "./Card";
import Preloader from "../common/Preloader/Preloader";

const CargoSection = ({ cargoes,  getNextCargoes, onOpenCardModal }) => {

    let offset = 0;
    if (!cargoes.results) return <Preloader />

    const loadCargoesHandler = e => {
        e.preventDefault();
        getNextCargoes(offset+=10);
    }

    return (
        <section className="section-card">
            <div className="container">

                <div className="card">
                    {cargoes.results.map(cargo => (
                        <Card onOpenCardModal={onOpenCardModal} cargo={cargo} key={cargo.id}/>
                    ))}
                </div>
                {/*Card */}

                {cargoes.next !== null ? <div className="card__next">
                    <a className="card__next-btn" href="/" onClick={loadCargoesHandler}>Еще...</a>
                </div> : ""}

            </div>
            {/*Container*/}
        </section>
    );
};

export default CargoSection;