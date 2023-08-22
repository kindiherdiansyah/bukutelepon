import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { onClick, getValue } from "https://jscroot.github.io/element/croot.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


function pushData(){

    let data = {
        nama_kontak : getValue("nama_kontak"),
        nomor_hp : getValue("nomor_hp"),
        alamat : getValue("alamat"),
        keterangan : getValue("keterangan")
    }

    postWithToken(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);