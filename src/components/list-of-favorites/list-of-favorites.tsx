import { Link } from 'react-router-dom';
import {Offer} from '../../types/offer';
import CityCard from '../cards/city-card';
import { useAppDispatch } from '../../hooks';
import { cityChange } from '../../store/other-process/other-process';

type ListFavoritesProps = {
  favorites: Offer[];
}


function ListFavorites({favorites}: ListFavoritesProps): JSX.Element {
  const favoritesMap = favorites.reduce(
    (acc: Record<string, Offer[]>, place: Offer) => {
      const city = place.city.name;
      acc[city] = [...(acc[city] ?? []), place];
      return acc;
    },
    {}
  );
  const dispatch = useAppDispatch();
  const handleCityClick = (city: string) => {
    dispatch(cityChange(city));
  };
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoritesMap).map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link to="/" className="locations__item-link" onClick={() => handleCityClick(city)}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {favoritesMap[city].map((place) => (
                <CityCard key={place.id} cityCardInfo={place} cityCardType={'favorite'}/>
              ))}
            </div>
          </li>
        ))}

      </ul>
    </section>
  );
}

export default ListFavorites;

