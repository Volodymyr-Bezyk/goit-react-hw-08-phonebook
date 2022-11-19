import { useSelector, useDispatch } from 'react-redux';
import { AppBarWrap, FilterBtn, InfoText } from './AppBar.styled';
import { filterStatus } from 'redux/constants';
import { selectActiveStatus } from 'redux/selectors';
import { setActiveStatusValue } from 'redux/activeStatusSlice';
import { selectCountedContacts } from 'redux/selectors';

const AppBar = () => {
  const currentStatus = useSelector(selectActiveStatus);
  const dispatch = useDispatch();
  const counter = useSelector(selectCountedContacts);

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
      </div>
    </AppBarWrap>
  );
};

export default AppBar;
