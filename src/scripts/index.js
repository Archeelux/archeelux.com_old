import {
  library,
  icon,
  dom
} from "../../node_modules/@fortawesome/fontawesome-svg-core";

import {
  faInstagram,
  faGithub,
  faDev,
  faLinkedin
} from "../../node_modules/@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faGithub, faDev, faLinkedin);

dom.i2svg();
