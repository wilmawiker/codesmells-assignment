import { getPodcasts } from "./api";

const podCastContainer: HTMLDivElement = document.querySelector(
  ".podcastList"
) as HTMLDivElement;

let i = 0;

export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach((podcast) => {
    const podcastInList = createInnerArticle();

    createImg();

    const podcastTitleAndDesc = createTextDiv();

    createHeader();
    createP();
    createLink();

    function createInnerArticle() {
      const podcastInList = document.createElement("article");
      podcastInList.setAttribute("class", "podcast");
      podcastInList.setAttribute("tabindex", "1");
      podCastContainer.appendChild(podcastInList);
      return podcastInList;
    }

    function createTextDiv() {
      const podcastTitleAndDesc = document.createElement("div");
      podcastTitleAndDesc.setAttribute("class", "podcast__name");
      podcastInList.appendChild(podcastTitleAndDesc);
      return podcastTitleAndDesc;
    }

    function createLink() {
      const linkToPodcast = document.createElement("a");
      const linkText = document.createTextNode("Lyssna här");
      linkToPodcast.setAttribute("href", podcast.programurl);
      linkToPodcast.setAttribute("class", "podcast__link");
      linkToPodcast.setAttribute("tabindex", "1");
      linkToPodcast.appendChild(linkText);
      podcastTitleAndDesc.appendChild(linkToPodcast);
    }
    function createImg() {
      const podcastImg = document.createElement("IMG");
      podcastImg.setAttribute("src", podcast.socialimage);
      podcastImg.setAttribute("class", "podcast__img");
      podcastImg.setAttribute("width", "100");
      podcastImg.setAttribute("height", "100");
      podcastInList.appendChild(podcastImg);
    }

    function createP() {
      const podcastDesc = document.createElement("p");
      const desc = document.createTextNode(podcast.description);
      podcastDesc.setAttribute("class", "podcast__desc");
      podcastDesc.appendChild(desc);
      podcastTitleAndDesc.appendChild(podcastDesc);
    }

    function createHeader() {
      const podcastTitle = document.createElement("h2");
      podcastTitle.setAttribute("class", "podcast__title");
      const programName = document.createTextNode(podcast.name);
      podcastTitle.appendChild(programName);
      podcastTitleAndDesc.appendChild(podcastTitle);
    }
  });
}

export default createHtml;
