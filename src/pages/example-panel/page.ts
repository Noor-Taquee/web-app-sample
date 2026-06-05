import { createElement } from "../../utils/create-dom.js";

export const examplePanel = createElement("div", {
  id: "example-panel",
  className: "app-panel",
});

//#region panel Bar
const panelBar = createElement("div", {
  className: "panel-bar",
});

const panelNameDiv = createElement("div", {
  className: "panel-name-div",
});
const backBtn = createElement(
  "button",
  {
    className: "toggle-btn",
  },
  [createElement("i", { className: "ph-bold ph-caret-left" })],
);
const panelName = createElement("p", {
  className: "panel-name",
  textContent: "Example",
});
panelNameDiv.append(backBtn, panelName);
backBtn.addEventListener("click", () => {
  window.location.hash = "#home";
});

panelBar.append(panelNameDiv);
//#endregion panel Bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});

contentDiv.append();
//#endregion content

examplePanel.append(panelBar, contentDiv);
