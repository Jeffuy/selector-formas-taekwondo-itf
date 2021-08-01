const formasPrimero = [
  "Chon-Ji",
  "Dangun",
  "Dosan",
  "Won Hyo",
  "Yulgok",
  "Joon Gun",
  "Toi Gye",
  "Hwarang",
  "Choong Moo",
  "Gae Baek",
  "Po Eun",
  "Kwang Gae",
];

const formasSegundo = [
  "Chon-Ji",
  "Dangun",
  "Dosan",
  "Won Hyo",
  "Yulgok",
  "Joon Gun",
  "Toi Gye",
  "Hwarang",
  "Choong Moo",
  "Gae Baek",
  "Po Eun",
  "Kwang Gae",
  "Eu Iam",
  "Choong Jang",
  "Juche",
];

const formasTercero = [
  "Chon-Ji",
  "Dangun",
  "Dosan",
  "Won Hyo",
  "Yulgok",
  "Joon Gun",
  "Toi Gye",
  "Hwarang",
  "Choong Moo",
  "Gae Baek",
  "Po Eun",
  "Kwang Gae",
  "Eu Iam",
  "Choong Jang",
  "Juche",
  "Sam Il",
  "Choi Jong",
  "Yoo Sin",
];

const formasCuarto = [
  "Chon-Ji",
  "Dangun",
  "Dosan",
  "Won Hyo",
  "Yulgok",
  "Joon Gun",
  "Toi Gye",
  "Hwarang",
  "Choong Moo",
  "Gae Baek",
  "Po Eun",
  "Kwang Gae",
  "Eu Iam",
  "Choong Jang",
  "Juche",
  "Sam Il",
  "Choi Jong",
  "Yoo Sin",
  "Moon Moo",
  "Ul Ji",
  "Yong Gae",
];

function grado() {
  let grado = document.querySelector('input[name="grado"]:checked').value;
  let listaDeFormas;
  if (grado == "1") {
    listaDeFormas = formasPrimero;
  } else if (grado == "2") {
    listaDeFormas = formasSegundo;
  } else if (grado == "3") {
    listaDeFormas = formasTercero;
  } else {
    listaDeFormas = formasCuarto;
  }
  return listaDeFormas;
}

function elegirFormas() {
  const lista = grado();
  const result = document.getElementById("result");
  let cantidad = document.querySelector('input[name="cantidad"]:checked').value;
  let eleccion;
  let random = 0;
  let random2 = 0;
  let random3 = 0;

  if (cantidad == 1) {
    random = Math.floor(Math.random() * lista.length);
    eleccion = lista[random];
    result.innerText = `La forma elegida es ${eleccion}`;
  } else if (cantidad == 2) {
    while (random == random2) {
      random = Math.floor(Math.random() * lista.length);
      random2 = Math.floor(Math.random() * lista.length);
    }
    eleccion = `${lista[random]} y ${lista[random2]}`;
    result.innerText = `Las formas elegidas son ${eleccion}`;
  } else {
    while (random == random2 || random == random3 || random2 == random3) {
      random = Math.floor(Math.random() * lista.length);
      random2 = Math.floor(Math.random() * lista.length);
      random3 = Math.floor(Math.random() * lista.length);
    }
    eleccion = `${lista[random]}, ${lista[random2]} y ${lista[random3]}`;
    result.innerText = `Las formas elegidas son ${eleccion}`;
  }
}
