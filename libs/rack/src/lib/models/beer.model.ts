export interface Beer {
  id: string;
  name: string;
  brewery: string;
  style: string;
  abv: number;
  ibu?: number;
  description?: string;
}
