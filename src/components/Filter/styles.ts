import styled from 'styled-components';
import {
  Row as BoostrapRow,
  Col as BoostrapCol,
  Form as BoostrapForm,
} from 'react-bootstrap';

export const Select = styled(BoostrapForm.Select)`
  border-color: ${(props: any) => (props.isInvalid ? 'red' : 'initial')};
`;

export const Row = styled(BoostrapRow)``;

export const FilterRow = styled(BoostrapRow)`
  margin-bottom: 10px;
`;

export const Col = styled(BoostrapCol)``;
