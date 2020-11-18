import React from 'react';
import Card from "../../CargoSection/Card";

const OrdersProfile = ({userOrders}) => {
    return (
        <section className="section-card">
            <div className="container">

                <div className="card">
                    {userOrders.map(cargo => (
                        <Card cargo={cargo} key={cargo.id}/>
                    ))}
                </div>
                {/*Card */}

                <div className="card__next">
                    <a className="card__next-btn" href="/">Еще...</a>
                </div>

            </div>
            {/*Container*/}
        </section>
    );
};

export default OrdersProfile;