import "./app.css";

import { createElement } from "./utils/create-dom.js";

export const app = document.getElementById("app") as HTMLDivElement;

// MARK: theme
app.dataset.theme = "light";

export const panelContainer = createElement("div", {
  className: "panel-container",
});

app.appendChild(panelContainer);
