const toggleLightModeButton: HTMLButtonElement = document.querySelector(".toggle-btn") as HTMLButtonElement;
toggleLightModeButton.addEventListener("click", toggleLightMode);

export function toggleLightMode(): void {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    toggleLightModeButton.innerHTML = "Välj ljust läge";
  } else {
    toggleLightModeButton.innerHTML = "Välj mörkt läge";
  }
}
