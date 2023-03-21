import { getPodcastsWithAxios } from "./api";
import { log } from "./handleLogs";

const podCastContainer: HTMLDivElement = document.querySelector(".podcastList") as HTMLDivElement;

export async function createHtmlForPodcasts(): Promise<void> {
  const podCasts = await getPodcastsWithAxios();
  podCasts.programs.forEach((podcast: any) => {
    const podcastInList: HTMLDivElement = createArticleForPodcastList() as HTMLDivElement;
    podCastContainer.appendChild(podcastInList);

    createImgForPodcast(podcastInList, podcast);

    const podcastTitleAndDesc: HTMLDivElement = createContainerForTitleAndDesc(podcastInList);

    createTitleForPodcast(podcastTitleAndDesc, podcast);
    createDescriptionForPodcast(podcastTitleAndDesc, podcast);
    createLinkToPodcast(podcastTitleAndDesc, podcast);
  });
  log("Podcast loaded succesfully!");
}

function createArticleForPodcastList(): HTMLElement {
  const podcastInList = document.createElement("article");
  podcastInList.setAttribute("class", "podcast");
  return podcastInList;
}

function createContainerForTitleAndDesc(podcastInList: HTMLDivElement): HTMLDivElement {
  const podcastTitleAndDesc = document.createElement("div");
  podcastTitleAndDesc.setAttribute("class", "podcast__name");
  podcastInList.appendChild(podcastTitleAndDesc);
  return podcastTitleAndDesc;
}

function createLinkToPodcast(podcastTitleAndDesc: HTMLDivElement, podcast: any): void {
  const linkToPodcast = document.createElement("a");
  const linkText = document.createTextNode("Lyssna här");
  linkToPodcast.setAttribute("href", podcast.programurl);
  linkToPodcast.setAttribute("class", "podcast__link");
  linkToPodcast.appendChild(linkText);
  podcastTitleAndDesc.appendChild(linkToPodcast);
}
function createImgForPodcast(podcastInList: HTMLDivElement, podcast: any): void {
  const podcastImg = document.createElement("IMG");
  podcastImg.setAttribute("src", podcast.socialimage);
  podcastImg.setAttribute("class", "podcast__img");
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  podcastImg.setAttribute("alt", `Omslag för podcasten: ${podcast.name}`);
  podcastImg.setAttribute("width", "100");
  podcastImg.setAttribute("height", "100");
  podcastInList.appendChild(podcastImg);
}

function createDescriptionForPodcast(podcastTitleAndDesc: HTMLDivElement, podcast: any): void {
  const podcastDesc = document.createElement("p");
  const desc = document.createTextNode(podcast.description);
  podcastDesc.setAttribute("class", "podcast__desc");
  podcastDesc.appendChild(desc);
  podcastTitleAndDesc.appendChild(podcastDesc);
}

function createTitleForPodcast(podcastTitleAndDesc: HTMLDivElement, podcast: any): void {
  const podcastTitle = document.createElement("h2");
  podcastTitle.setAttribute("class", "podcast__title");
  const programName = document.createTextNode(podcast.name);
  podcastTitle.appendChild(programName);
  podcastTitleAndDesc.appendChild(podcastTitle);
}

export function createHtmlForError(errorMsg: string): void {
  const presentError = document.createElement("h1");
  const errorMsgToPresent = document.createTextNode(errorMsg);
  presentError.appendChild(errorMsgToPresent);
  document.body.appendChild(presentError);
}
