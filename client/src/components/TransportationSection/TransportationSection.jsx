import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import Card from "../CargoSection/Card";

const TransportationSection = ({transportations, onOpenCardModal, loadTransportationsHandler}) => {
    if (!transportations.results) return <Preloader />

    return (
        <section className="section-card">
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