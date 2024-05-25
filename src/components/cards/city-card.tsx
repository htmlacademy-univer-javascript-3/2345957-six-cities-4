import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {getRating} from '../../utils.ts';
import {useAppDispatch} from '../../hooks/index.ts';
import {highlightMarker} from '../../store/offers-process/offers-process.ts';
import AddToFavoritesButton from '../add-to-favorites-button/add-to-favorites-button.tsx';


type CityCardProps = {
  cityCardInfo: Offer;
  cityCardType: 'typical' | 'near' | 'favorite';
};

const CITY_CARD_WIDTH = '260';
const CITY_CARD_HEIGHT = '200';

const FAVORITE_CARD_WIDTH = '150';
const FAVORITE_CARD_HEIGHT = '110';

const BOOKMARK_ICON_WIDTH = 18;
const BOOKMARK_ICON_HEIGHT = 19;

function CityCard({cityCardInfo, cityCardType}: CityCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    previewImage,
  } = cityCardInfo;
  const dispatch = useAppDispatch();
  const getClassName = (cityType: string) => {
    if (cityType === 'typical') {
      return 'cities__card place-card';
    } else if (cityType === 'near') {
      return 'near-places__card place-card';
    } else if (cityType === 'favorite') {
      return 'favorites__card place-card';
    }
    return '';
  };
  return (

    <article
      className={`${getClassName(cityCardType)}`}
      onMouseOver={() => dispatch(highlightMarker({id}))}
      onMouseLeave={() => dispatch(highlightMarker(null))}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${cityCardType === 'favorite' ? 'favorites__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}`}
      >
        <img
          className="place-card__image"
          src={previewImage}
          width={cityCardType === 'favorite' ? FAVORITE_CARD_WIDTH : CITY_CARD_WIDTH}
          height={cityCardType === 'favorite' ? FAVORITE_CARD_HEIGHT : CITY_CARD_HEIGHT}
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <AddToFavoritesButton
            id={id}
            isFavorite={isFavorite}
            iconWidth={BOOKMARK_ICON_WIDTH}
            iconHeight={BOOKMARK_ICON_HEIGHT}
            buttonClass="place-card__bookmark-button"
            activeClass="place-card__bookmark-button--active"
            iconClass="place-card__bookmark-icon"
            buttonText="In bookmarks"
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} state={cityCardInfo} onClick={() => window.scrollTo(0, 0)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default CityCard;
