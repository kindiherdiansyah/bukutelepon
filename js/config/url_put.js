const urlParams = new URLSearchParams(window.location.search);
const kontakId = urlParams.get('kontakId');

export let urlPUT = "https://go-kontak-2997a9d9d62c.herokuapp.com/update/" + kontakId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}
