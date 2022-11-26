import preloadDone from "./preloader.js";
import headerInit from "./header.js";
import partnersAnim from "./partners.js";
import { solutionsTabsInit, solutionsAnim } from "./solutions.js";
import modalInit from "./modals.js";
import gdprAnim from "./gdpr.js";
import toolAnim from "./tool.js";
import conversationAnim from "./conversation.js";
import featuresAnim from "./features.js";
import aboutAnim from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
  headerInit();
  solutionsTabsInit();
  modalInit();
});

window.addEventListener("load", () => {
  preloadDone();
  partnersAnim();
  solutionsAnim();
  gdprAnim();
  toolAnim();
  conversationAnim();
  featuresAnim();
  aboutAnim();
});
