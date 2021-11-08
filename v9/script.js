//imports
import { el } from "./modules/helpers";
import { empty } from "./modules/helpers";
import { fetchNews } from "./modules/news";

const fjoldiFretta = 5;
const main = document.querySelector("main");

function route() {
    let url = window.location;
    if (url.search != "") {
        fetchNews(url.search.substring(10))
    }
    else {
        fetchNews(url.pathname)
    }
}

window.onpopstate = () => {
    // skoða https://developer.mozilla.org/en-US/docs/Web/API/History_API
}

route();