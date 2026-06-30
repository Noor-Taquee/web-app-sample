import "./style.css";
import { createElement } from "../../utils/create-dom.js";

/** Placeholder for *app-panel* */
export const errorScreen = createElement("div", {
  className: "app-panel",
  id: "error-panel",
});

export function showError(
  text: string,
  icon?: HTMLElement,
  button?: HTMLButtonElement,
) {
  errorScreen.innerHTML = "";

  if (!icon) {
    icon = createElement("i", {
      className: "ph-bold ph-seal-warning",
    });
  }
  icon.classList.add("error-icon");

  const textEl = createElement("p", {
    textContent: text,
    className: "error-text",
  });

  errorScreen.append(icon, textEl);
  if (button) errorScreen.append(button);
}
