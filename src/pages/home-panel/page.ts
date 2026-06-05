import { createElement } from "../../utils/create-dom.js";

export const homePanel = createElement("div", {
  id: "home-panel",
  className: "app-panel",
});

//#region panel bar
const panelBar = createElement("div", {
  className: "panel-bar",
});

const panelNameDiv = createElement("div", {
  className: "panel-name-div",
});
const panelName = createElement("p", {
  className: "panel-name",
  textContent: "Home",
});
panelNameDiv.append(panelName);

panelBar.append(panelNameDiv);
//#endregion panel bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});

contentDiv.append();
//#endregion content

homePanel.append(panelBar, contentDiv);
