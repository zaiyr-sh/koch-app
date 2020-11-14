import React from 'react';
import "./TransportSection.css";
import Card from "./Card";
import Preloader from "../common/Preloader/Preloader";

const TransportSection = ({ cargoes }) => {

    if (!cargoes) return <Preloader />

    return (
        <section className="section-card">
            <div className="container">

                <div className="card">
                    {cargoes.map(cargo => (
                        <Card cargo={cargo} key={cargo.id}/>
                    ))}
                </div>
                {/*Card */}

                <div className="card-next">
                    <a className="card-next-btn" href="/">Еще...</a>
                </div>

            </div>
            {/*Container*/}
        </section>
    );
};

export default TransportSection;