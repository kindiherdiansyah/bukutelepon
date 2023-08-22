import { addInner } from "https://jscroot.github.io/element/croot.js";
// import { getRandomColor, getRandomColorName } from "https://jscroot.github.io/image/croot.js";
import { isiTabel } from "../temp/table.js";

var MyVar = {};

export function isiTableKontak(results) {
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
            // .replace("#HARIKERJA#", value.biodata.hari_kerja)
            // .replace("#JAMKERJA#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].durasi : ["undefined"])
            // .replace("#JAMMASUK#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_masuk : ["undefined"])
            // .replace("#JAMKELUAR#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_keluar : ["undefined"])
            // .replace("#IDEDIT#", value._id)
            // .replace("#IDHAPUS#", value._id)
            // .replace("#WARNA#", getRandomColor())
            // .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}