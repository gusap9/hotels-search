import "../css/index.css"
import house from "../images/house.svg"
import React, { useState, useEffect } from "react";

const Unfavourite_item = ({ hotel, name, choosedDate, countOfDays, unfavToFav }) => {
    return (
        <div>
            <div className="hotels__box">
                <div className="hotels__home">
                    <img src={house} alt="House" className="hotels__home-img" />
                </div>
                <div className="hotels__sec-box">
                    <div className="favoutite-hotels-list__name-and-fav">
                        <div className="favoutite-hotels-list__name">
                            "{name}"
                        </div>
                        <div className="favoutite-hotels-list__unfav" onClick={() => { unfavToFav(hotel.id) }}>
                        </div>
                    </div>
                    <div className="favoutite-hotels-list__date">
                        {choosedDate} - {countOfDays} 
                    </div>
                    <div className="favourite-hotels-list__rating-and-price-box">
                        <div className="favoutite-hotels-list__rating">
                            <div className="favoutite-hotels-list__rating-star"></div>
                            <div className="favoutite-hotels-list__rating-star"></div>
                            <div className="favoutite-hotels-list__rating-star"></div>
                            <div className="favoutite-hotels-list__rating-star"></div>
                            <div className="favoutite-hotels-list__rating-star"></div>
                        </div>
                        <div className="favoutite-hotels-list__price">
                            <div className="favoutite-hotels-list__price-text">Price:</div>
                            <div className="favoutite-hotels-list__price-cost">
                                23 924 ₽
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )

}

export default Unfavourite_item;