function calcularPartidas(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitorias = calcularPartidas(105, 3);
switch (true) {
    case saldoVitorias <= 10:
        nivel = "Ferro";
        break;

    case saldoVitorias > 10 && saldoVitorias <= 20:
        nivel = "Bronze";
        break;

    case saldoVitorias <= 50:
        nivel = "Prata";
        break;

    case saldoVitorias <= 80:
        nivel = "Ouro";
        break;

    case saldoVitorias <= 90:
        nivel = "Diamante";
        break;

    case saldoVitorias <= 100:
        nivel = "Lendario";
        break;

    default:
        nivel = "Imortal";
}

console.log(
    "O Heroi tem de saldo " +
        saldoVitorias +
        " vitorias e esta no nivel de " +
        nivel
);
