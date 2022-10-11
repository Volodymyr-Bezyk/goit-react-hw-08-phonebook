import styled from 'styled-components';
import bg from 'img/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg';

export const Wrapper = styled.div`
  display: flex;
  background-image: url('${bg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${p => p.theme.sizes.h.full};
`;
