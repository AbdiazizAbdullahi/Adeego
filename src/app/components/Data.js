import { Instagram } from "lucide-react";

export const features = [
  {
    heading: () => {
      return (
        <h1 className="font-vest-b tracking-tighter text-3xl md:text-5xl lg:text-7xl lg:max-w-lg ">
          Express delivery. 
        </h1>
      );
    },
    description:
      "Get your order delivered to your door in 30 minutes, at no extra cost.",
    image: "https://firebasestorage.googleapis.com/v0/b/adeego-6d3be.appspot.com/o/AdeegoWebImages%2Fdelivery.png?alt=media&token=8207d336-a464-4ab5-bf32-182c2fe4b9a8",
  },
  {
    heading: () => (
      <h1 className="font-vest-b tracking-tighter text-3xl md:text-5xl lg:text-7xl lg:max-w-lg ">
        Over 6000+ items in stock
      </h1>
    ),
    description:
      "Enjoy a diverse inventory with thousands of products available, ensuring you'll find what you're looking for. Our extensive range means more choices for you.",
    image: "https://firebasestorage.googleapis.com/v0/b/adeego-6d3be.appspot.com/o/AdeegoWebImages%2Fstock.png?alt=media&token=6507550a-0a43-4991-94c8-f4db7e0906d5",
  },
  {
    heading: () => (
      <h1 className="font-vest-b tracking-tighter text-3xl md:text-5xl lg:text-7xl lg:max-w-lg ">
        Reorder Favorites
      </h1>
    ),
    description:
      "Quickly add items to your Favorites list for fast checkout when reordering.",
    image: "https://firebasestorage.googleapis.com/v0/b/adeego-6d3be.appspot.com/o/AdeegoWebImages%2Ffavourite.png?alt=media&token=8d22fea4-976c-4b27-9e2d-22ebd6f31c7b",
  },
];

export const TestimonialsData = [
  {
    message:
      "The app is excellent it has nice security features easy to access and customer support is excellent",
    user: "Zakaria Issack",
  },
  {
    message: "Orders on time it's far better than the others",
    user: "Abdulkhalaq",
  },
  {
    message: "Goodbye to crowded aisles and long checkout lines you won't be missed .Adeego, a life changer",
    user: "Kinglamarr",
  },
  {
    message: "Wow! I love this app gives fast delivery",
    user: "Mohamed suleiy",
  },
];

export const socialLinks = [
  {
    social: "Instagram",
    icon: () => <Instagram className="size-5" />,
    link: "",
  },
  {
    social: "Twitter",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 72 72"
        viewBox="0 0 72 72"
        id="twitter-x"
        className="size-5"
      >
        <switch>
          <g>
            <path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66    h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z" />
          </g>
        </switch>
      </svg>
    ),
    link: "",
  },
  {
    social: "Tiktok",
    icon: () => (
      <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="tiktok">
        <path d="M6.977 15.532a2.791 2.791 0 0 0 2.791 2.792 2.859 2.859 0 0 0 2.9-2.757L12.7 3h2.578A4.8 4.8 0 0 0 19.7 7.288v2.995a4.676 4.676 0 0 1-.443.022 4.8 4.8 0 0 1-4.02-2.172v7.4a5.469 5.469 0 1 1-5.469-5.469c.114 0 .226.01.338.017v2.7a2.909 2.909 0 0 0-.338-.034 2.791 2.791 0 0 0-2.791 2.785Z" />
      </svg>
    ),
    link: "",
  },
];
