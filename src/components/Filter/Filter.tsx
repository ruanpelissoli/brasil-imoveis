import { useState } from 'react';
import { useFormik } from 'formik';
import { Form, Button, Accordion } from 'react-bootstrap';
import * as Yup from 'yup';
import { State, City, SearchFilter } from '../../Types';
import { Col, FilterRow, Row, Select } from './styles';

type FilterProps = {
  states: State[];
  cities: City;
  onSubmitHandler: (values: SearchFilter) => void;
};

const initialValues: SearchFilter = {
  state: '',
  city: '',
  type: 'Aluguel',
};

export default function Filter({
  states,
  cities,
  onSubmitHandler,
}: FilterProps) {
  const [citiesList, setCitiesList] = useState(cities.RS);
  const [roomUnits, setRoomUnits] = useState(1);
  const [bathroomUnits, setBathroomUnits] = useState(1);
  const [parkingSpaces, setParkingSpaces] = useState(1);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      state: Yup.string().required('Obrigatório'),
      city: Yup.string().required('Obrigatório'),
    }),

    onSubmit: (values) => {
      onSubmitHandler(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col>
          <Form.Group className='mb-3'>
            <Select
              id='state'
              name='state'
              aria-label='Estado'
              value={formik.values.state}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.state && formik.touched.state}
              onChange={(e: React.ChangeEvent<any>) => {
                formik.handleChange(e);
                if (e.target.value !== '')
                  setCitiesList((cities as any)[e.target.value]);
                else setCitiesList([]);
              }}
            >
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.name}
                </option>
              ))}
            </Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className='mb-3'>
            <Select
              id='city'
              name='city'
              aria-label='Cidade'
              value={formik.values.city}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isInvalid={formik.errors.city && formik.touched.city}
            >
              {citiesList.map((city: any) => (
                <option key={city.value} value={city.name}>
                  {city.name}
                </option>
              ))}
            </Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Filtros</Accordion.Header>
            <Accordion.Body>
              <FilterRow>
                <Col sm={12} md={4}>
                  <Form.Select
                    id='type'
                    name='type'
                    aria-label='Tipo'
                    value={formik.values.type}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  >
                    <option key='Aluguel' value='Aluguel'>
                      Aluguel
                    </option>
                    <option key='Compra' value='Compra'>
                      Compra
                    </option>
                  </Form.Select>
                </Col>
              </FilterRow>
              <Row>
                <Col sm={12} md={4}>
                  <Form.Label>Quartos ({roomUnits}):</Form.Label>
                  <Form.Range
                    id='roomUnits'
                    name='roomUnits'
                    min={1}
                    max={4}
                    step={1}
                    value={roomUnits}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setRoomUnits(parseInt(e.target.value));
                    }}
                  />
                </Col>
                <Col sm={12} md={4}>
                  <Form.Label>Banheiros ({bathroomUnits}):</Form.Label>
                  <Form.Range
                    id='bathroomUnits'
                    name='bathroomUnits'
                    min={1}
                    max={4}
                    step={1}
                    value={bathroomUnits}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setBathroomUnits(parseInt(e.target.value));
                    }}
                  />
                </Col>
                <Col sm={12} md={4}>
                  <Form.Label>Vagas de Garagem ({parkingSpaces}):</Form.Label>
                  <Form.Range
                    id='garageUnits'
                    name='garageUnits'
                    min={1}
                    max={4}
                    step={1}
                    value={parkingSpaces}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setParkingSpaces(parseInt(e.target.value));
                    }}
                  />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Form.Group className='d-flex justify-content-end'>
          <Button variant='primary' type='submit' className='float-right mt-3'>
            Buscar
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
}
