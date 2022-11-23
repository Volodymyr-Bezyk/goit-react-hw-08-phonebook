import { useSelector, useDispatch } from 'react-redux';
import { BarLoader } from 'react-spinners';

import { selectors } from 'redux/index';
import { filterStatus } from 'redux/constants';
import { setActiveStatusValue } from 'redux/activeStatusSlice';
import { AppBarWrap, FilterBtn, InfoText } from './AppBar.styled';

const AppBar = () => {
  const dispatch = useDispatch();

  const currentStatus = useSelector(selectors.selectActiveStatus);
  const counter = useSelector(selectors.selectCountedContacts);
  const isloading = useSelector(selectors.selectLoadingStatus);
  const error = useSelector(selectors.selectError);

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
