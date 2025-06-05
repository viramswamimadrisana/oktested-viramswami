import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faChevronDown, faChevronUp, faArrowRight, faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
  faBars, faTimes, faChevronDown, faChevronUp, faArrowRight, 
  faMapMarkerAlt, faPhoneAlt, faEnvelope,
  faWhatsapp, faFacebookF, faYoutube, faInstagram
);