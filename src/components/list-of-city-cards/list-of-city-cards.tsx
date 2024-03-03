//import { useState } from 'react';
import {Offer} from '../../types/offer';
import CityCard from '../cards/city-card';

type ListOfCityCardsProps = {
  cities: Offer[];
};

function ListOfCityCards({cities}: ListOfCityCardsProps) {
  //const [activeCard, setActiveCard] = useState({id: 0});
  return (
    <div className="cities__places-list places__list tabs__content">
      {cities.map((city) => (
        <CityCard key={city.id} cityCardInfo={city}/>
      ))}
    </div>
  );
}

export default ListOfCityCards;
