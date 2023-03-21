export function log(msg: string): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  if (import.meta.env.VITE_DEBUGGING !== "false") {
    console.log(msg);
  }
}
