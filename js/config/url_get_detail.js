// Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const kontakId = urlParams.get("kontakId");

export let urlFetch =
  "https://go-kontak-2997a9d9d62c.herokuapp.com/kontak/" + kontakId;
