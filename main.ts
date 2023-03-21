import "./style.scss";
import { createHtmlForPodcasts } from "./src/ts/createHtml";
import { toggleLightMode } from "./src/ts/toggleDarkmode";
import { log } from "./src/ts/handleLogs";

function init(): void {
  toggleLightMode();
  void createHtmlForPodcasts();
  log("Page initialized");
}

init();
