// interfaces/index.ts

export interface ButtonProps {
    title: string;
    styles: string;
}

export interface CardProps {
    image: string;
    name: string;
    price: number;
    rating: number;
}

export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
        category: string[];
        price: number
        offers: {
            bed: string;
            shower: string;
            occupants: string;
        },
        image: string;
        discount: string
}

export interface Property {
  title: string;
  location: string;
  price: number;
  description: string;
  imageUrl: string
  // Add other fields as needed
}