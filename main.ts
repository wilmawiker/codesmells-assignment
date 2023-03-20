import "./style.scss";
import { createHtmlForPodcasts } from "./src/ts/createHtml";
import { toggleLightMode } from "./src/ts/toggleDarkmode";

function init(): void {
  toggleLightMode();
  void createHtmlForPodcasts();
}

init();
