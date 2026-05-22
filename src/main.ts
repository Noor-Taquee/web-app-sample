import "./index.css";
import "./styles/colors.css";
import "./styles/animations.css";

import "./router.js";

import { examplePanel } from "./pages/example-panel/page.js";
import { homePanel } from "./pages/home-panel/page.js";
import { settingsPanel } from "./pages/settings-panel/page.js";

homePanel.dataset.index = "0";
examplePanel.dataset.index = "1";
settingsPanel.dataset.index = "2";

