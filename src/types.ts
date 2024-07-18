export interface TvShow {
  name: string;
  id: string;
  image: {
    medium: string;
  } | null;
  summary: string;
  genres: string[];
  language: string;
  premiered: string;
}
export interface TvShows {
  score: number;
  show: TvShow;
}

