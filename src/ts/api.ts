export async function getPodcasts() {
  //@ts-ignore
  return await fetch(import.meta.env.VITE_PODCAST_API_URL)
    .then((data) => data.json())
    .then((json) => json)
    .catch((error) => {
      console.error("nått blev fel:", error);
      return null;
    });
}
