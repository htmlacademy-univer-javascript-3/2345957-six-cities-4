import {useAppSelector} from '../../hooks';
import {Offer} from '../../types/offer';
import CityCard from '../cards/city-card';
import {getSorting} from '../../utils.ts';
import {memo} from 'react';

type ListOfCityCardsProps = {
  cities: Offer[];
  listType: 'typical' | 'near';
};

function ListOfCityCards({cities, listType}: ListOfCityCardsProps) {
  const selectedSortType = useAppSelector((state) => state.sortType);

  return (
    <div
      className={`${listType === 'typical' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}
    >
      {getSorting(cities, selectedSortType).map((city) => (
        <CityCard key={city.id} cityCardInfo={city} cityCardType={listType}/>
      ))}
    </div>
  );
}

const ListOfCityCardsMemo = memo(ListOfCityCards);

export default ListOfCityCardsMemo;
