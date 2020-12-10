import spotify from "../../assets/images/spotify/spotifyclone.png";
import rapcaviar from "../../assets/images/spotify/rapcaviar.png";
import rapcaviar2 from "../../assets/images/spotify/rapcaviar2.png";

import lightmode from "../../assets/images/lnb/lightmode.png";
import darkmode from "../../assets/images/lnb/darkmode.png";
import eventmediapost from "../../assets/images/lnb/eventmediapost.png";
import userprofile from "../../assets/images/lnb/userprofile.png";
import signin from "../../assets/images/lnb/signin.png";

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

// TODO: Add LNB project

export const darkscreen = darkmode;
export const login = signin;
export const projects = [
  {
    id: 1,
    linkTo: "/spotify-clone",
    name: "Spotify Clone",
    stack: "React / Firebase",
    description:
      "A Spotify clone that allows existing Spotify users to play music from up to 50 of their most recent playlists. Built with React and deployed through Firebase Hosting.",
    images: [rapcaviar, rapcaviar2, spotify],
    url: "https://spotify-clone-ed27e.web.app/",
    github: "https://github.com/anwachuku15/spotify-clone",
  },
  {
    id: 2,
    linkTo: "",
    name: "LNB",
    stack: "React Native (Expo) / React Navigation / Firebase",
    description:
      "A social networking app built with React Native (optimized for iOS). Implemented Firebase for full backend support, including for authentication, database management, and storage. Features real-time updates, instant messaging, and push notifications. ",
    description2:
      "This is app is currently in beta testing via Apple Test Flight.",
    images: [lightmode, eventmediapost, userprofile],
    url: "",
    github: "https://github.com/anwachuku15/LNB",
  },
  {
    id: 3,
    linkTo: "/amazon-clone",
    name: "Amazon Clone",
    stack: "React / Node / Express / Firebase",
    description:
      "A full stack Amazon clone with full e-commerce functionality including Stripe payment processsing. Implemented Firebase for user authentication, database management, hosting, and further backend logic with Node (Firebase Cloud Functions).",
    images: [amazon, cart, checkout],
    url: "https://clone-7b53f.web.app/",
    github: "https://github.com/anwachuku15/amazon-clone",
  },
  {
    id: 4,
    linkTo: "/collabo",
    name: "Collabo",
    stack: "React / Node / Express / Firebase",
    description:
      "Twitter-esque app allowing authenticated users to create posts and receive notifications each time a post is liked or commented by other users. Implemented Firebase for authentication, database management, hosting, and cloud functions.",
    images: [profile, post, signup],
    url: "https://social-3be8a.firebaseapp.com/",
    github: "https://github.com/anwachuku15/social-client",
  },
  {
    id: 5,
    linkTo: "/landingpage",
    name: "Business Landing Page",
    stack: "React / Firebase",
    description:
      "Business landing page clone with responsive web design. Hosted through Firebase.",
    images: [carousel, services, contact],
    url: "https://officium-f28bd.web.app/",
    github: "https://github.com/anwachuku15/officium",
  },
  {
    id: 6,
    linkTo: "/facebook-clone",
    name: "Facebook Clone",
    stack: "MERN / Heroku / Firebase",
    description:
      "Facebook home page clone allowing users to create posts. Features Google user authentication. Utilized Firebase for frontend hosting. Deployed the backend through Heroku.",
    images: [facebook, facebook, facebook],
    url: "https://facebookclone-mern-c56cd.firebaseapp.com/",
    github: "https://github.com/anwachuku15/LNB",
  },
];
