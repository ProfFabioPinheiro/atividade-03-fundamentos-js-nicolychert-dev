function boasVindas() {
    const nome = "Nicoly";
    const hora = 15; 

    if (hora >= 0 && hora < 12) {
        console.log("Bom dia, " + nome + "!");
    } else if (hora >= 12 && hora < 19) {
        console.log("Boa tarde, " + nome + "!");
    } else {
        console.log("Boa noite, " + nome + "!");
    }
}

boasVindas();