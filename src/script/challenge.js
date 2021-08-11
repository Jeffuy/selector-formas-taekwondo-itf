//DEFINO LOS DESAFIOS
const challenge = [
	"6 puntos con dollyo \n2p",
	"dos blitz \n2p",
	'la combinacion "puño, puño, puño, dolyo" 2 veces \n3p',
	"3 puntos con una patada zona alta \n3p",
	"un contragolpe con giro tip \n2p",
	"dos contragolpes con giro tip \n3p",
	"tres contragolpes con giro tip \n5p",
	"un contragolpe con giro gancho \n2p",
	"un contragolpe con giro gancho \n3p",
	"dos contragolpes con giro gancho \n5p",
	"tres contragolpes con giro gancho \n5p",
	"2 puntos con patada descendente \n3p",
	"4 puntos con patada descendente \n4p",
	"3 puntos con una patada descendente \n4p",
	"que el rival se detenga 3 veces por una yop \n2p",
	"que el rival reciba 3 advertencias por salida \n3p",
	"que el rival retroceda 3 veces por tus amagues \n2p",
	"un punteo con yop y pegar gancho a la cabeza \n4p",
	"un punteo con yop y pegar dolyo a la cabeza con la misma pierna \n4p",
	"un doble punteo con yop y pegar dolyo con la otra pierna \n3p",
	"un esquive por debajo de una yop \n3p",
	"tres contragolpes a una yop del rival \n5p",
	"tres contragolpes a un dollyo del rival \n5p",
	"convertir un punteo en una descendente que puntue \n5p",
	"terminar una pelea sin recibir un solo punto \n5p",
	"terminar una pelea habiendo conseguido mas de 10 puntos \n5p",
	"que el rival te haga 2 puntos al empezar el combate y luego ganar \n3p",
	"que el rival te haga 1 punto al empezar el combate y luego ganar \n2p",
	"que el rival te haga 3 puntos al empezar el combate y luego ganar \n4p",
	"que el rival te haga 4 puntos al empezar el combate y luego ganar \n5p",
	"que el rival te haga 5 puntos al empezar el combate y luego ganar \n6p",
	"una mariposa que puntue \n3p",
	"tres giros seguidos y que por lo menos uno conecte \n4p",
	"puntos con yop, dollyos y puños en la misma pelea \n3p",
	"un antcipo a un dolyo con blitz \n2p",
	"dos anticipos a dolyos con blitz \n3p",
	"tres anticipos a dolyos con blitz \n4p",
	"una yop al cabezal \n2p",
	"un golpe de nudillo descendente, con o sin salto \n2p",
	"un esquive a un blitz saltando hacia atrás con golpe de nudillo \n4p",
	"puntos solo con patadas a zona alta y ganar \n5p",
	"puntos solo con puños y ganar \n5p",
];

  // ELIJO LA FORMA EN BASE A LA DECISION DEL USUARIO
function elegirChallenge() {
	const lista = challenge;
	const result = document.getElementById("result");

	let eleccion;
	let random = 0;
	random = Math.floor(Math.random() * challenge.length);
	eleccion = lista[random];
	result.innerText = `Tienes que hacer ${eleccion}`;
	}

function borrar() {
	const result = document.getElementById("result");
	result.innerText = "";
}
