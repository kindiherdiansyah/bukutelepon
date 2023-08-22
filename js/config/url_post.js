export let urlPOST = "https://go-kontak-2997a9d9d62c.herokuapp.com/insert"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}