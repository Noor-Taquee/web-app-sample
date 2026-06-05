import { createElement } from "./utils/create-dom.js";
import { navBar } from "./components/navigation/navigation.js";

export const app = document.getElementById("app") as HTMLDivElement;

// MARK: theme
app.dataset.theme = "light";

export const panelContainer = createElement("div", {
  className: "panel-container",
});

app.append(panelContainer, navBar);
