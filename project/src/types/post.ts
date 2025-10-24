export interface UserType {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface PostType {
  id: string;
  user: UserType;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  timestamp: string;
  isLiked: boolean;
  isSaved: boolean;
}