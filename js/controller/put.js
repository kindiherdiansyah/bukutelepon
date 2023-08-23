// import { postWithToken } from "https://jscroot.github.io/api/croot.js";
// import { putData } from "https://jscroot.github.io/api/croot.js";
import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://jscroot.github.io/element/croot.js";
import { urlPUT, AmbilResponse} from "../config/url_put.js";


function pushData(){

    let data = {
        nama_kontak : getValue("nama_kontak"),
        nomor_hp : getValue("nomor_hp"),
        alamat : getValue("alamat"),
        keterangan : getValue("keterangan")
    }

    putData(urlPUT, data, AmbilResponse);
    // postWithToken(urlPUT,"Token","UHU", data, AmbilResponse);

}

onClick("button", pushData);
