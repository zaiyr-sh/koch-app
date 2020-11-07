import React from 'react';
import "./TransportSection.css";
import Card from "./Card";

const TransportSection = ({ cargoes }) => {
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