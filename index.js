// PROGRAMA QUE PERMITE COMPRAR IMPRESORAS, LAPTOPS O MONITORES

function calcular_cuota(cuota, compra) {
    let cuota_total = compra / cuota;
    return cuota_total;
}

function precio_total(compra) {
    let total;
    if (compra == "impresoras") {
        total = impresora + (impresora * 0.21);
    }
    else if (compra == "laptops") {
        total = laptops + (laptops * 0.21);
    }
    else {
        total = monitores + (monitores * 0.21);
    }
    return total;
}

function imprimir_resultados(cuota_seleccionada, compra, compra_seleccionada) {
    console.log("<---- ",compra.toUpperCase()," ---->");
    console.log("Precio: ",compra_seleccionada);
    console.log(cuota_seleccionada," Cuotas de ",calcular_cuota(cuota_seleccionada, precio_total(compra)));
    console.log("Precio final mas IVA: ",precio_total(compra));
}

let bandera = true;
let impresora = 20000;
let laptops = 50000;
let monitores = 15000;

while (bandera == true) {
    let compra = prompt("¿Qué desea comprar? Tenemos impresoras, laptops y monitores. Escriba FIN si desea terminar su compra.");
    compra = compra.toLowerCase();
    if (compra == "impresoras") {
        let compra_seleccionada = impresora;
        let cuota_seleccionada = prompt("¿En cuantas cuotas desea hacerlo? El maximo es de 12");
        imprimir_resultados(cuota_seleccionada, compra, compra_seleccionada);
    }
    else if (compra == "laptops") {
        let compra_seleccionada = laptops;
        let cuota_seleccionada = prompt("¿En cuantas cuotas desea hacerlo? El maximo es de 12");
        imprimir_resultados(cuota_seleccionada, compra, compra_seleccionada);
    }
    else if (compra == "monitores") {
        let compra_seleccionada = monitores;
        let cuota_seleccionada = prompt("¿En cuantas cuotas desea hacerlo? El maximo es de 12");
        imprimir_resultados(cuota_seleccionada, compra, compra_seleccionada);
    }
    else if (compra == "fin") {
        bandera = false;
    }
    else {
        console.log("Verifique si lo que escribio es correcto")
    }
}