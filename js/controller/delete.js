// import { deleteData } from "https://bukulapak.github.io/api/process.js";
// import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
// import { urlDELETE, AmbilResponse} from "../config/url_delete.js";


function deleteData(IDHAPUS) {
    var kontakId = IDHAPUS;
    var target_url = "https://go-kontak-2997a9d9d62c.herokuapp.com/delete/" + kontakId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}