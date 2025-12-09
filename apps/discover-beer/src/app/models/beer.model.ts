export interface Beer {
  id: string;
  name: string;
  brewery: string;
  style: string;
  abv: number;
  ibu: number | null;
  description: string | null;
  imageUrl: string | null;
  position: number;
  createdAt: string;
  updatedAt: string;
}

export interface BeerTest {
  id: string;
  title: string;
  text: string;
  link: string | null;
  beerId: string;
  beer: Beer;
  createdAt: string;
  updatedAt: string;
}
