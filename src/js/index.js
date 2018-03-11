/**
  * MAIN APP SCRIPTS ENTRY POINT
  */

// extract text from webpack to bundled output file
require("../scss/style.scss");

import MobileMenu from './MobileMenu';
import Modal from './Modal';

var mobileMenu = new MobileMenu();
var modal = new Modal();