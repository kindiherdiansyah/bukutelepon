import { get } from "https://jscroot.github.io/api/croot.js";
import { isiTableKontak } from "./controller/get.js";
import { urlAPI } from "./config/url.js";

get(urlAPI, isiTableKontak);