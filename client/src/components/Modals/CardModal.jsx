import React from 'react';
import './Modal.css';
import close from "../../assets/images/close_modal_icon.png";

const CardModal = ({card, closeOpenCard}) => {

    if(Object.keys(card).length === 0) return <></>;

    return (
        <div className="overlay">
            <div className="popup">
                <div className="popup__close" onClick={closeOpenCard}><img src={close} alt="close"/></div>
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
                                <p className="card__date">25.09.2020 - 01.01.2021</p>
                                <p className="card__volume">{card.weight}т / {card.volume}м³</p>
                            </div>
                            <div className="card__price">{card.price}c</div>
                        </div>

                        <div className="card__line"></div>

                        <div className="card__comment">
                            <p className="card__comment-title">Комментарий к отправке</p>
                            <p className="card__comment-content">Каждый веб-разработчик знает, что такое текст-”рыба”. Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на</p>
                        </div>

                        <div className="card__comment">
                            <p className="card__comment-title">Комментарий к грузу</p>
                            <p className="card__comment-content">Каждый веб-разработчик знает, что такое текст-”рыба”. Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на</p>
                        </div>

                        <div className="card__personal-information">
                            <p className="card__fullname">Алымбек Бакаев</p>
                            <p className="card__phone-numbers">+996 555 093 938 / 704 344 569</p>
                        </div>

                        <div className="card__addition-information">
                            <p className="card__period">{new Date(card.date_published).getHours()} часов назад</p>
                        </div>

                    </div>
            </div>
        </div>
    )
};

export default CardModal;