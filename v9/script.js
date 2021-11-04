//imports
import { el } from "./modules/helpers";
import { empty } from "./modules/helpers";
import { fetchNews } from "./modules/news";

const fjoldiFretta = 5;
const main = document.querySelector("main");

function route() {
    let url = window.location;
    if (url.includes("/?category=")) {
        let suburl = url.substring(url.getIndexOf("=") + 1, url.length);
        fetchNews(suburl);
    }
    else {
        fetchNews();
    }
}

window.onpopstate = () => {
    // skoða https://developer.mozilla.org/en-US/docs/Web/API/History_API
}

route();