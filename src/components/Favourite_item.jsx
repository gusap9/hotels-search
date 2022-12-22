import "../css/index.css"
import unfav from "../images/unfav.svg"
import fav from "../images/fav.svg"

const Favourite_item = ({ favHotel, choosedDate, countOfDays, name, removeFavHotel }) => {
    return (
        <div>
            <div className="favourite-hotels-list__box">
                <div className="favoutite-hotels-list__name-and-fav">
                    <div className="favoutite-hotels-list__name">
                        "{name}"
                    </div>
                    <div className="favoutite-hotels-list__fav" onClick={() => { removeFavHotel(favHotel.id) }}>
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
                        Price:
                        <div className="favoutite-hotels-list__price-cost">
                            23 924 ₽
                        </div>
                    </div>
                </div>
                
            </div>
            <hr />
        </div>
    )

}

export default Favourite_item;