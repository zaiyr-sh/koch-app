import React from 'react';

import './Modal.css';
import close from "../../assets/images/close_modal_icon.png";
import {
    dates_with_leading_zeros,
    hours_with_leading_zeros,
    minutes_with_leading_zeros,
    months_with_leading_zeros
} from "../../helpers/date-helper";

const CardModal = ({card, closeCard}) => {

    let placeComments = () => {
        return (card.from_place_comment !== undefined && card.to_place_comment !== undefined) ? (
            <>
                <div className="card__comment">
                    <p className="card__comment-title">Комментарий к месту отбытия</p>
                    <p className="card__comment-content">{card.from_place_comment}</p>
                </div>

                <div className="card__comment">
                    <p className="card__comment-title">Комментарий к месту достаки</p>
                    <p className="card__comment-content">{card.to_place_comment}</p>
                </div>
            </>
        ) : <></>
    }

    if (Object.keys(card).length === 0) return <></>;

    return (
        <div className="overlay">
            <div className="popup">
                <div className="popup__close" onClick={closeCard}><img src={close} alt="close"/></div>
                <div className="card__inner">
                    <div className="card__name">
                        {card.name}
                    </div>
                    <div className="card__direction">
                        <p className="card__direction-from">{card.from_city}, {card.from_region}</p>
                        <p className="card__direction-to">{card.to_city}, {card.to_region}</p>
                    </div>
                    <div className="card__main-information">
                        <div className="card__details">
                            <p className="card__volume">{card.weight}т</p>
                            <p className="card__date">{hours_with_leading_zeros(new Date(card.from_shipment_date))}.{months_with_leading_zeros(new Date(card.from_shipment_date))}.{new Date(card.from_shipment_date).getFullYear()} - {dates_with_leading_zeros(new Date(card.to_shipment_date))}.{months_with_leading_zeros(new Date(card.to_shipment_date))}.{new Date(card.to_shipment_date).getFullYear()}</p>
                        </div>
                        <div className="card__price">{card.price}c</div>
                    </div>

                    <div className="card__line"></div>

                    {placeComments()}

                    <div className="card__comment">
                        <p className="card__comment-title">Комментарий к грузу</p>
                        <p className="card__comment-content">{card.cargo_comment}</p>
                    </div>

                    <div className="card__personal-information">
                        <p className="card__fullname">{card.user.name} {card.user.surname}</p>
                        <p className="card__phone-numbers">{card.user.phone_number}</p>
                    </div>

                    <div className="card__addition-information">
                        <p className="card__period"><p
                            className="card__period">{dates_with_leading_zeros(new Date(card.date_published))}.{months_with_leading_zeros(new Date(card.date_published))}.{new Date(card.date_published).getFullYear()},
                            в {hours_with_leading_zeros(new Date(card.date_published))}:{minutes_with_leading_zeros(new Date(card.date_published))} ч.</p>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default CardModal;