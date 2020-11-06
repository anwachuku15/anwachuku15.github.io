import spotify from "../../assets/images/spotify/spotifyclone.png";
import rapcaviar from "../../assets/images/spotify/rapcaviar.png";
import rapcaviar2 from "../../assets/images/spotify/rapcaviar2.png";

import amazon from "../../assets/images/amazon/home.png";
import cart from "../../assets/images/amazon/cart.png";
import checkout from "../../assets/images/amazon/checkout.png";

import facebook from "../../assets/images/facebook/facebook.png";

import profile from "../../assets/images/collabo/profile.png";
import post from "../../assets/images/collabo/post.png";
import signup from "../../assets/images/collabo/signup.png";

import carousel from "../../assets/images/landingpage/carousel.png";
import services from "../../assets/images/landingpage/services.png";
import contact from "../../assets/images/landingpage/contact.png";

export const projects = [
  {
    id: 1,
    linkTo: "/spotify-clone",
    name: "Spotify Clone",
    stack: "React / Firebase Hosting",
    description:
      "A Spotify clone that allows existing Spotify users to play music from up to 50 of their most recent playlists. Built with React and deployed through Firebase Hosting.",
    images: [rapcaviar, rapcaviar2, spotify],
    url: "https://spotify-clone-ed27e.web.app/",
    github: "https://github.com/anwachuku15/spotify-clone",
  },
  {
    id: 2,
    linkTo: "/amazon-clone",
    name: "Amazon Clone",
    stack: "React / Node / Express / Firebase Cloud Functions & Hosting",
    description:
      "A full stack Amazon clone with full e-commerce functionality, Stripe payment processsing, and user authentication.",
    images: [amazon, cart, checkout],
    url: "https://clone-7b53f.web.app/",
    github: "https://github.com/anwachuku15/amazon-clone",
  },
  {
    id: 3,
    linkTo: "/facebook-clone",
    name: "Facebook Clone",
    stack: "MERN / Firebase Hosting / Heroku",
    description:
      "Facebook home page clone allowing users to create posts. Features Google user authentication.",
    images: [facebook, facebook, facebook],
    url: "https://facebookclone-mern-c56cd.firebaseapp.com/",
    github: "https://github.com/anwachuku15/LNB",
  },
  {
    id: 4,
    linkTo: "/collabo",
    name: "Collabo",
    stack: "React / Node / Express / Firebase Cloud Functions & Hosting",
    description:
      "Twitter-esque app allowing authenticated users to create posts and receive notifications each time a post is liked or commented by other users.",
    images: [profile, post, signup],
    url: "https://social-3be8a.firebaseapp.com/",
    github: "https://github.com/anwachuku15/social-client",
  },
  {
    id: 5,
    linkTo: "/landingpage",
    name: "Business Landing Page Clone",
    stack: "React / Hosting",
    description: "Business landing page clone with responsive web design.",
    images: [carousel, services, contact],
    url: "https://officium-f28bd.web.app/",
    github: "https://github.com/anwachuku15/officium",
  },
];
