import { useSelector, useDispatch } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { AppBarWrap, FilterBtn, InfoText } from './AppBar.styled';
import { filterStatus } from 'redux/constants';
import {
  selectActiveStatus,
  selectError,
  selectLoadingStatus,
} from 'redux/selectors';
import { setActiveStatusValue } from 'redux/activeStatusSlice';
import { selectCountedContacts } from 'redux/selectors';

const AppBar = () => {
  const currentStatus = useSelector(selectActiveStatus);
  const dispatch = useDispatch();
  const counter = useSelector(selectCountedContacts);
  const isloading = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);

  return (
    <AppBarWrap>
      <div>
        <InfoText>
          Total in contacts: <span> {counter.all} </span>
        </InfoText>
        <InfoText>
          Saved in favourites: <span> {counter.favourites} </span>
        </InfoText>
      </div>

      <div>
        <FilterBtn
          selected={currentStatus === filterStatus.favourite}
          onClick={() => dispatch(setActiveStatusValue(filterStatus.favourite))}
          type="button"
        >
          Favourite
        </FilterBtn>
        <FilterBtn
          selected={currentStatus === filterStatus.all}
          onClick={() => dispatch(setActiveStatusValue(filterStatus.all))}
          type="button"
        >
          All
        </FilterBtn>
        {isloading && !error && (
          <BarLoader
            cssOverride={{
              padding: '2px',
              marginTop: '5px',
              borderRadius: '4px',
            }}
            height={10}
            width="100%"
            color="#36d7b7"
          />
        )}
      </div>
    </AppBarWrap>
  );
};

export default AppBar;
