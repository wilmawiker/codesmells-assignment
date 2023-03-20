/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";

export async function getPodcastsWithAxios(): Promise<any> {
  try {
    // @ts-ignore
    const podcastResponse = await axios.get(import.meta.env.VITE_PODCAST_API_URL);
    return podcastResponse.data;
  } catch (error) {}
}
