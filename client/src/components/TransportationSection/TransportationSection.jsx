import React from 'react';

import Preloader from "../common/Preloader/Preloader";
import Card from "../CargoSection/Card";

let offset = 0;

const TransportationSection = ({transportations, onOpenCardModal, getNextTransportations}) => {

    if (!transportations.results) return <Preloader/>

    const loadTransportationsHandler = e => {
        e.preventDefault();
        getNextTransportations(offset += 10);
    }

    return (
        <section className="section__card">
            <div className="container">

                <div className="card">
                    {transportations.results.map(card => (
                        <Card onOpenCardModal={onOpenCardModal} card={card} key={card.id}/>
                    ))}
                </div>
                {/*Card */}

                {transportations.next !== null ? <div className="card__next">
                    <a className="card__next-btn" href="/" onClick={loadTransportationsHandler}>Еще...</a>
                </div> : ""}

            </div>
            {/*Container*/}
        </section>
    );
};

export default TransportationSection;