let appKutu = document.querySelector("#app");

let oyuncuBirKutu = document.createElement("div");
let oyuncuIkiKutu = document.createElement("div");
let oynaButonu = document.createElement("button");
let oyunSayac = document.createElement("span");

let oyunSayacAdet = 0;

function rastgeleSayi(minimum, maksimum) {
  return Math.floor(Math.random() * maksimum) + minimum;
}

function sonucUret() {
  let sonuc = rastgeleSayi(1, 3);
  return sonuc;
}

function sahneOlustur() {
  appKutu.append(oyuncuBirKutu);
  appKutu.append(oyuncuIkiKutu);
  appKutu.append(oynaButonu);
  appKutu.append(oyunSayac); // appKutu.append(oyuncuBirKutu, oyuncuIkiKutu, oynaButonu, oyunSayac) şeklinde de yazılabilir.
  oyuncuBirKutu.classList.add("bg-primary", "p-5", "h1", "text-center");
  oyuncuIkiKutu.classList.add("bg-info", "p-5", "h1", "text-center");
  oynaButonu.classList.add("btn", "btn-success");
  oyunSayac.classList.add("badge", "bg-info");
  oynaButonu.textContent = "Oyna";
  oynaButonu.addEventListener("click", oyna);
}

function oyna() {
  let birinciOyuncuSonuc = sonucUret();
  let ikinciOyuncuSonuc = sonucUret();

  if (birinciOyuncuSonuc === 1) birinciOyuncuSonuc = "Taş";
  if (birinciOyuncuSonuc === 2) birinciOyuncuSonuc = "Kağıt";
  if (birinciOyuncuSonuc === 3) birinciOyuncuSonuc = "Makas";

  //veya

  ikinciOyuncuSonuc = ikinciOyuncuSonuc === 1 ? "Taş" : ikinciOyuncuSonuc === 2 ? "Kağıt" : "Makas";

  oyuncuBirKutu.textContent = birinciOyuncuSonuc;
  oyuncuIkiKutu.textContent = ikinciOyuncuSonuc;

  oyunSayacAdet = oyunSayacAdet + 1;
  oyunSayac.textContent = oyunSayacAdet;
}

sahneOlustur();
