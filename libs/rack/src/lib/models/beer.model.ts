export interface Beer {
  id: string;
  name: string;
  brewery: string;
  style: string;
  abv: number;
  ibu?: number;
  description?: string;
  imageUrl?: string;
}

export interface RackSlot {
  position: number;
  beer: Beer | null;
}
