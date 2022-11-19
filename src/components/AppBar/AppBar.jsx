import { AppBarWrap, FilterBtn, InfoText } from './AppBar.styled';
import { filterStatus } from 'redux/constants';

const AppBar = () => {
  const activeStatus = null;

  return (
    <AppBarWrap>
      <div>
        <InfoText>
          Total in contacts: <span>0</span>
        </InfoText>
        <InfoText>
          Saved in favourites: <span>0</span>
        </InfoText>
      </div>
      <div>
        <FilterBtn
          selected={activeStatus === filterStatus.fauvorite}
          type="button"
        >
          Favourtie
        </FilterBtn>
        <FilterBtn selected={activeStatus === filterStatus.all} type="button">
          All
        </FilterBtn>
      </div>
    </AppBarWrap>
  );
};

export default AppBar;
