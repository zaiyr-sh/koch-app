import React from 'react';

import "./CargoSection.css";
import Card from "./Card";
import Preloader from "../common/Preloader/Preloader";

let offset = 0;

const CargoSection = ({cargoes, getNextCargoes, onOpenCardModal}) => {

    if (!cargoes.results) return <Preloader/>

    const loadCargoesHandler = e => {
        e.preventDefault();
        getNextCargoes(offset += 10);
    }

    return (
        <section className="section__card">
            <div className="container">

                <div className="card">
                    {cargoes.results.map(card => (
                        <Card onOpenCardModal={onOpenCardModal} card={card} key={card.id}/>
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