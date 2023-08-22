import { addInner } from "https://jscroot.github.io/element/croot.js";
import { isiTabel } from "../temp/table.js";

var MyVar = {};

export function isiTableKontak(results) {
    results.reverse();
    MyVar.length = results.length;
    results.sort((a, b) => new Date(b.datetime) - new Date(a.datetime)); //sort by datetime in descending order (OPTIONAL)
    results.forEach(isiRow);
    console.log(results);
}

function isiRow(value) {
    document.getElementById("jml").textContent = MyVar.length + " Data";

    let content =
        isiTabel.replace("#NAMAKONTAK#", value.nama_kontak)
            .replace("#NOHP#", value.nomor_hp)
            .replace("#ALAMAT#", value.alamat)
            .replace("#KETERANGAN#", value.keterangan);
    addInner("iniTabel", content);
}