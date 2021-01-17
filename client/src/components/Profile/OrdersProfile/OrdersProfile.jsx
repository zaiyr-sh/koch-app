import React from 'react';

import Card from "../../CargoSection/Card";
import Preloader from "../../common/Preloader/Preloader";

let offset = 0;

const OrdersProfile = ({userOrders, getNextOrders, onOpenCardModal}) => {

    if (!userOrders.results) return <Preloader/>

    const loadOrdersHandler = e => {
        e.preventDefault();
        getNextOrders(offset += 10);
    }

    return (
        <section className={userOrders.results.length !== 0 ? "section__card" : ""}>
            <div className="container">

                <div className="card">
                    {userOrders.results.map(card => (
                        <Card onOpenCardModal={onOpenCardModal} card={card} key={card.id}/>
                    ))}
                </div>
                {/*Card */}

                {userOrders.next !== null ? <div className="card__next">
                    <a className="card__next-btn" href="/" onClick={loadOrdersHandler}>Еще...</a>
                </div> : ""}

            </div>
            {/*Container*/}
        </section>
    );
};

export default OrdersProfile;