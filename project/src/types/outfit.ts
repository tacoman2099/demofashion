export interface OutfitType {
  id: string;
  title: string;
  imageUrl: string;
  creator: string;
  likes: number;
  createdAt: string;
  isNew?: boolean;
  items?: string[]; // IDs of closet items used in this outfit
}