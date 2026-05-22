import { createElement } from "../../utils/create-dom.js";

export const settingsPanel = createElement("div", {
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
  const backBtn = createElement("button", {
    className: "toggle-btn",
  }, [
    createElement("i", { className: "ph-bold ph-caret-left" })
  ]);
  const panelName = createElement("p", {
    className: "panel-name",
    textContent: "Settings",
  });
panelNameDiv.append( backBtn, panelName );
backBtn.addEventListener("click", () => {
  window.location.hash = "#home";
});

panelBar.append( panelNameDiv );
//#endregion panel bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});

contentDiv.append(  );
//#endregion content

settingsPanel.append( panelBar, contentDiv );