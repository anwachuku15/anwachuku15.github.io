import spotify from "../../assets/images/spotify/spotifyclone.png";
import rapcaviar from "../../assets/images/spotify/rapcaviar.png";
import rapcaviar2 from "../../assets/images/spotify/rapcaviar2.png";

import amazon from "../../assets/images/amazon/home.png";
import cart from "../../assets/images/amazon/cart.png";
import checkout from "../../assets/images/amazon/checkout.png";

import facebook from "../../assets/images/facebook/facebook.png";

// import mobileinterface from "../../assets/images/svgs/mobileinterface.svg";
import mobiledevelopment from "../../assets/images/svgs/mobiledevelopment.svg";
import mobileapp from "../../assets/images/svgs/mobileapp.svg";

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
    stack: "React / Node / Express / Firebase Hosting",
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
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur cupidatat norum.",
    images: [facebook, mobiledevelopment, mobileapp],
    url: "https://facebookclone-mern-c56cd.firebaseapp.com/",
    github: "https://github.com/anwachuku15/LNB",
  },
  // {
  //   id: 4,
  //   linkTo: "/lnb-mobile-app",
  //   name: "LNB",
  //   description:
  //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur cupidatat norum.",
  //   images: [mobileinterface, mobiledevelopment, mobileapp],
  //   url: "https://github.com/anwachuku15/LNB",
  //   github: "https://github.com/anwachuku15/LNB",
  // },
];
