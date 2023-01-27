import { Suspense, useState } from 'react';
import useSWR from 'swr';

import { State, City, Property, SearchFilter } from '../../Types';
import { Filter } from '../../components/Filter';
import { PropertyList } from '../PropertyList';

import { GetProperties } from '../../Api/BrazaApi';

const states: State[] = [
  { value: '', name: 'Selecione um estado' },
  { value: 'SP', name: 'São Paulo' },
  { value: 'RJ', name: 'Rio de Janeiro' },
  { value: 'RS', name: 'Rio Grande do Sul' },
];

const cities: City = {
  SP: [
    { value: '', name: 'Selecione uma cidade' },
    { value: '1', name: 'São Paulo' },
  ],
  RJ: [
    { value: '', name: 'Selecione uma cidade' },
    { value: '1', name: 'Rio de Janeiro' },
  ],
  RS: [
    { value: '', name: 'Selecione uma cidade' },
    { value: '1', name: 'Porto Alegre' },
    { value: '2', name: 'Caxias do Sul' },
  ],
};

export default function Search() {
  const [properties, setProperties] = useState<Property[]>([]);

  const onSubitHandler = (searchFilter: SearchFilter) => {
    console.log(searchFilter);
    setProperties(GetProperties(searchFilter));
  };

  return (
    <>
      <Filter
        states={states}
        cities={cities}
        onSubmitHandler={onSubitHandler}
      />
      <Suspense fallback={<div>Carregando...</div>}>
        <PropertyList properties={properties} />
      </Suspense>
    </>
  );
}
