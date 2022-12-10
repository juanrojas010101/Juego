function juego(minimo, maximo) {
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

let piedra = 1;
let papel = 2;
let tijera = 3;
let cpu = juego(1, 3);

function partido(user, cpu) {
    if (user === cpu) {
        return "User escogio " + user + " la maquina escogio " + cpu + " empate";
    } else if (user === 1 === piedra && cpu === 3 === "tijera" || user === 2 && cpu === 1 || user === 3 && cpu === 2) {
        return "User escogio " + user + " la maquina escogio " + cpu + " gana User";
    } else {
        return "User escogio " + user + " la maquina escogio " + cpu + " gana Cpu";
    }
}

console.log(partido(3, cpu));