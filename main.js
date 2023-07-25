// las anotaciones que ire haciendo son para tener una ayuda de memoria de lo que voy haciedo para un futuro repaso

function convertirDivisas() {
    const monto = prompt('Ingrese el monto en Pesos Argentinos (ARS):');
    if (monto === null || monto === '') {
        alert('Ingreso inválido. Intente nuevamente.');
        return;
    }

    const monedaDestino = prompt('Seleccione la moneda de destino (USD o EUR):');
    if (monedaDestino !== 'USD' && monedaDestino !== 'EUR') {
        alert('Moneda de destino inválida. Intente nuevamente.');
        return;
    }

    // tasas de cambio (a futuro tendre mas)
    const tasasDeCambio = {
        USD: 1 / 550,
        EUR: 1 / 557,
    };

    if (tasasDeCambio[monedaDestino]) {
        const tasaDeCambio = tasasDeCambio[monedaDestino];
        const resultado = (monto * tasaDeCambio).toFixed(2);
        alert(`Equivalente en ${monedaDestino}: ${resultado}`);
    } else {
        alert('No se encontró la tasa de cambio para la moneda seleccionada.');
    }
}
