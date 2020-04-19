import App from "./components/App.svelte";
import customCss from "./css/custom.css";

const app = new App({
  target: document.getElementById("cards")
});

export default app;

var style = document.createElement('style')
style.type = 'text/css'
style.appendChild(document.createTextNode(customCss))
document.head.appendChild(style)