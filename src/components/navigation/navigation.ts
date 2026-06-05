import "./navigation.css";
import { createElement } from "../../utils/create-dom.js";

export const navBar = createElement("div", {
  id: "navigation-bar",
});

const navFocus = createElement("span", {
  id: "nav-focus",
});

const homeBtn = createElement(
  "button",
  {
    className: "nav-btn",
  },
  [
    createElement("i", { className: "ph-bold ph-house" }),
    createElement("p", { textContent: "Home" }),
  ],
);
homeBtn.addEventListener("click", () => {
  window.location.hash = "#home";
});

const exampleBtn = createElement(
  "button",
  {
    className: "nav-btn",
  },
  [
    createElement("i", { className: "ph-bold ph-house" }),
    createElement("p", { textContent: "Example" }),
  ],
);
exampleBtn.addEventListener("click", () => {
  window.location.hash = "#example";
});

const settingsBtn = createElement(
  "button",
  {
    className: "nav-btn",
  },
  [
    createElement("i", { className: "ph-bold ph-gear-fine" }),
    createElement("p", { textContent: "Settings" }),
  ],
);
settingsBtn.addEventListener("click", () => {
  window.location.hash = "#settings";
});

navBar.append(navFocus, homeBtn, exampleBtn, settingsBtn);
