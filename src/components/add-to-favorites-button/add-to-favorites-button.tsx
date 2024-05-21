import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {APIRoute, AuthorizationStatus, FavouriteStatus} from '../../constants/constants';
import {changeFavouriteStatusAction} from '../../store/api-actions';
import {useEffect, useState} from 'react';

type AddToFavouritesButtonProps = {
  isFavorite: boolean;
  id: string;
  iconWidth: number;
  iconHeight: number;
  buttonText: string;
  buttonClass: string;
  activeClass: string;
  iconClass: string;
};

function AddToFavouritesButton(props: AddToFavouritesButtonProps): JSX.Element {
  const {
    isFavorite: initialFavoriteStatus,
    id,
    buttonText,
    iconHeight,
    iconWidth,
    buttonClass,
    activeClass,
    iconClass,
  } = props;

  const [isFavorite, setIsFavorite] = useState(initialFavoriteStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  // Update isFavorite state when initialFavoriteStatus prop changes
  useEffect(() => {
    setIsFavorite(initialFavoriteStatus);
  }, [initialFavoriteStatus, id]); // Include id in dependency array to handle id change

  const handleBookmarkClick = async () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(APIRoute.Login);
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(
        changeFavouriteStatusAction({
          offerId: id,
          status: isFavorite ? FavouriteStatus.Remove : FavouriteStatus.Add,
        })
      ).unwrap();

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <button
      className={`bookmark-button button ${buttonClass} ${isFavorite ? activeClass : ''}`}
      type="button"
      disabled={isSubmitting}
      onClick={handleBookmarkClick}
    >
      <svg
        className={`bookmark-icon ${iconClass}`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{buttonText}</span>
    </button>
  );
}

export default AddToFavouritesButton;
