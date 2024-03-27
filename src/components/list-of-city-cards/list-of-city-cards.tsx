//import { useState } from 'react';
import {Offer} from '../../types/offer';
import CityCard from '../cards/city-card';

type ListOfCityCardsProps = {
  cities: Offer[];
  listType: 'typical' | 'near';
};

function ListOfCityCards({cities, listType}: ListOfCityCardsProps) {
  //const [activeCard, setActiveCard] = useState({id: 0});
  return (
    <div
      className={`${listType === 'typical' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}
    >
      {cities.map((city) => (
        <CityCard key={city.id} cityCardInfo={city} cityCardType={listType}/>
      ))}
    </div>
  );
}

export default ListOfCityCards;
