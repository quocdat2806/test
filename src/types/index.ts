type TCategory = {
  id: number;
  title: string;
};

type TOrigin = {
  name: string;
  url: string;
};

type TLocation = {
  name: string;
  url: string;
};

type TCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: TOrigin;
  location: TLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type THomeData = {
  info: {
    count: number;
    pages: number;
    next: number;
    prev: number | null;
  };
  results?: TCharacter[];
};
export type {TCategory, THomeData, TCharacter};
