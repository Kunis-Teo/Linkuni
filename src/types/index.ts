export interface Tag {
  id: number;
  name: string;
  createdAt: number;
}

export interface Category {
  id: number;
  name: string;
  isPinned: boolean;
}

export interface URL {
  id: number;
  url: string;
  title: string;
  memo?: string;
  imageUrl: string;
  isStarred: boolean;
  isWatched: boolean;
  createdAt: number;
  watchedAt: number;
  tags?: Tag[];
  category: Category;
}
