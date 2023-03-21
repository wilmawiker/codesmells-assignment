/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import { createHtmlForError } from "./createHtml";
import { log } from "./handleLogs";

export async function getPodcastsWithAxios(): Promise<any> {
  try {
    // @ts-ignore
    const podcastResponse = await axios.get(import.meta.env.VITE_PODCAST_API_URL);
    return podcastResponse.data;
  } catch (error) {
    createHtmlForError("Oj, något gick fel när vi försökte hämta alla podcasts!");
    log("ERROR: Podcasts couldn't load correctly!");
  }
}
