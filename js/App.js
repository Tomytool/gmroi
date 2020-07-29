function limpiar() {
    document.getElementById("formulario").reset();
}

function calculo() {
    var venta_cal = document.getElementById("venta").value;
    var margen_cal = document.getElementById("margen").value;
    var inventario_cal = document.getElementById("inventario").value;
    var gmroi_cal = document.getElementById("GmRoi").value;


    margen_cal = margen_cal / 100;

    if (gmroi_cal == 0) {
        var resultado1 = (venta_cal * 4 * 13 * margen_cal) / inventario_cal;
        document.getElementById("valor_buscado").innerHTML = "El GmRoi es:  ";
    }

    if (venta_cal == 0) {
        var resultado1 = (gmroi_cal * inventario_cal) / (3 * 13 * margen_cal);
        document.getElementById("valor_buscado").innerHTML = "La venta es:  ";
    }

    if (margen_cal == 0) {
        var resultado1 = (gmroi_cal * inventario_cal) / (4 * 13 * venta_cal);
        document.getElementById("valor_buscado").innerHTML = "El margen es:  ";
    }

    if (inventario_cal == 0) {
        var resultado1 = (venta_cal * 4 * 13 * margen_cal) / gmroi_cal;
        document.getElementById("valor_buscado").innerHTML = "El Inventario es:  ";
    }

    document.getElementById("resultado").innerHTML = roundto(resultado1, 2);
}