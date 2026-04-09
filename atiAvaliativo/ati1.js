
function caculDesconto() {
    const produto = 200; 
    const desconto = 15;

    const valorDesc = produto * 15 / 100;
    const valorFinal = produto - valorDesc;

    console.log("Valor original: R$ " + produto);
    console.log("Desconto: R$ " + valorDesc);
    console.log("Valor final: R$ " + valorFinal);
}

caculDesconto();



