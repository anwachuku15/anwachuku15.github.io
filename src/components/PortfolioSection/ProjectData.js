import composemusic from "../../assets/images/composemusic.svg";
import sendgift from "../../assets/images/sendgift.svg";
import mobileinterface from "../../assets/images/mobileinterface.svg";
import mediaplayer from "../../assets/images/mediaplayer.svg";
import playlist from "../../assets/images/playlist.svg";
import deliveries from "../../assets/images/deliveries.svg";
import orderdelivered from "../../assets/images/orderdelivered.svg";
import mobiledevelopment from "../../assets/images/mobiledevelopment.svg";
import mobileapp from "../../assets/images/mobileapp.svg";

export const projects = [
  {
    id: 1,
    linkTo: "/spotify-clone",
    name: "Spotify Clone",
    description:
      "A Spotify clone that allows Spotify Premium users to play music from up to 50 of their most recent playlists.",
    images: [composemusic, mediaplayer, playlist],
    url: "https://spotify-clone-ed27e.web.app/",
    github: "https://github.com/anwachuku15/spotify-clone",
  },
  {
    id: 2,
    linkTo: "/amazon-clone",
    name: "Amazon Clone",
    description:
      "A full stack Amazon clone with Stripe integration and Firebase back end.",
    images: [sendgift, deliveries, orderdelivered],
    url: "https://github.com/anwachuku15/amazon-clone",
    github: "https://github.com/anwachuku15/amazon-clone",
  },
  {
    id: 3,
    linkTo: "/lnb-mobile-app",
    name: "LNB",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur cupidatat norum.",
    images: [mobileinterface, mobiledevelopment, mobileapp],
    url: "https://github.com/anwachuku15/LNB",
    github: "https://github.com/anwachuku15/LNB",
  },
];
