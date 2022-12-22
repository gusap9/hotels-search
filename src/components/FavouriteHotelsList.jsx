import React, { useState, useEffect } from "react";
import Favourite_item from "./Favourite_item";
import Unfavourite_item from "./Unfavourite_item";

const FavouriteHotelsList = ({ choosedDate, countOfDays, favHotels, setFavHotels }) => {
    const removeFavHotel = (id) => {
        setFavHotels([...favHotels.filter(favHotel => favHotel.id !== id)])
    }
    
    if (favHotels.length > 0) {
        return (
            <div className="second-column__hotels-list">
                {favHotels.map(favHotel => (
                    <Favourite_item favHotel={favHotel} name={favHotel.label} key={favHotel.id} choosedDate={choosedDate} countOfDays={countOfDays} removeFavHotel={removeFavHotel} />
                ))}
            </div>
        )
    }
}

export default FavouriteHotelsList;
