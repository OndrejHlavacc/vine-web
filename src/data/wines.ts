export const wines = [
  {
    id: 1,
    name: "Pálava pozdní sběr 2022",
    description: "Polosuché bílé víno s květinovými tóny a jemnou kořenitostí",
    price: 299,
    image: "https://images.unsplash.com/photo-1566754436893-98224ee05be3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "white",
    year: 2022,
    region: "Morava"
  },
  {
    id: 2,
    name: "Frankovka barrique 2020",
    description: "Suché červené víno zrající v dubových sudech s plným tělem",
    price: 389,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "red",
    year: 2020,
    region: "Morava"
  },
  {
    id: 3,
    name: "Rulandské modré rosé 2023",
    description: "Svěží růžové víno s tóny lesního ovoce a příjemnou kyselinkou",
    price: 259,
    image: "https://images.unsplash.com/photo-1558901591-9cb536f0eb5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "rose",
    year: 2023,
    region: "Morava"
  }
] as const;