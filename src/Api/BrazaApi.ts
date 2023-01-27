import useSWR from 'swr';
import { Property, SearchFilter } from '../Types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function GetProperties(filter: SearchFilter): Property[] {
  //   const { data, error } = useSWR('', fetcher, { suspense: true });

  //   if (error || !data) return [];

  return [
    {
      id: '1',
      title: 'Casa de praia',
      description:
        'Casa de praia com 3 quartos, 2 banheiros, sala, cozinha e área de serviço',
      price: 100000,
      mainImage: 'https://source.unsplash.com/random',
      city: 'São Paulo',
      state: 'SP',
    },
    {
      id: '2',
      title: 'Casa de praia',
      description:
        'Casa de praia com 3 quartos, 2 banheiros, sala, cozinha e área de serviço',
      price: 100000,
      mainImage: 'https://source.unsplash.com/random',
      city: 'São Paulo',
      state: 'SP',
    },
    {
      id: '3',
      title: 'Casa de praia',
      description:
        'Casa de praia com 3 quartos, 2 banheiros, sala, cozinha e área de serviço',
      price: 100000,
      mainImage: 'https://source.unsplash.com/random',
      city: 'São Paulo',
      state: 'SP',
    },
    {
      id: '4',
      title: 'Casa de praia',
      description:
        'Casa de praia com 3 quartos, 2 banheiros, sala, cozinha e área de serviço',
      price: 100000,
      mainImage: 'https://source.unsplash.com/random',
      city: 'São Paulo',
      state: 'SP',
    },
    {
      id: '5',
      title: 'Casa de praia',
      description:
        'Casa de praia com 3 quartos, 2 banheiros, sala, cozinha e área de serviço',
      price: 100000,
      mainImage: 'https://source.unsplash.com/random',
      city: 'São Paulo',
      state: 'SP',
    },
  ];
}
