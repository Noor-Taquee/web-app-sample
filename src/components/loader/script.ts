import "./style.css";
import { createElement } from "../../utils/create-dom.js";

/** Placeholder for *app-panel* */
export const loaderScreen = createElement("div", {
  className: "app-panel",
  id: "loading-panel",
});

const icon = createElement("i", {
  className: "ph-bold ph-spinner loading-icon spin",
});

const text = createElement("p", {
  textContent: "loading...",
  className: "loading-text",
});

loaderScreen.append(icon, text);
