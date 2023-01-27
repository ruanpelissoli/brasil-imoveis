export type SearchFilter = {
  state: string;
  city: string;
  type: 'Aluguel' | 'Compra';
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;
  squarefoot?: number;
  infrastructure?: { description: string; checked: boolean }[];
};
