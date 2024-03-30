import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {AppRoute, AuthorizationStatus} from '../constants/constants.ts';
import {Offer} from '../../types/offer.ts';
import {Review} from '../../types/review.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/index.ts';
import {listFilling} from '../../store/action.ts';


type AppScreenProps = {
  reviews: Review[];
}

function App({reviews}: AppScreenProps): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  dispatch(listFilling());

  const favorites = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen favorites={favorites}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth} //поменять потом обратно
            >
              <FavoritesScreen favorites={favorites}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen reviews={reviews} favorites={favorites}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
