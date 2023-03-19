import "./style.scss";
import { createHtmlForPodcasts } from "./src/ts/createHtml";
import { toggleLightMode } from "./src/ts/toggleDarkmode";

async function init() {
  toggleLightMode();
  await createHtmlForPodcasts();
}

init();
