// Preços do Bar do Tio Chico (Ajuste os valores se precisar)
const precos = {
    cerveja: 6.00,
    coca2l: 12.00,
    cocalata: 5.00,
    fanta: 5.00,
    pithulinha: 3.00,
    skiny: 5.00,
    cachaca: 4.00
};

function mudarQtd(id, mudanca) {
    const campo = document.getElementById(id);
    let valor = parseInt(campo.value) + mudanca;
    if (valor < 0) valor = 0;
    campo.value = valor;
    calcularTotal();
}

function calcularTotal() {
    let total = 0;
    for (let item in precos) {
        let elemento = document.getElementById(item);
        if (elemento) {
            total += parseInt(elemento.value) * precos[item];
        }
    }
    document.getElementById('valor-total').innerText = total.toFixed(2).replace('.', ',');
}

function enviarPedido(opcao) {
    let texto = "*NOVO PEDIDO - BAR DO TIO CHICO* 🍻\n\n";
    let total = document.getElementById('valor-total').innerText;
    let temItem = false;

    for (let item in precos) {
        let qtd = document.getElementById(item).value;
        if (qtd > 0) {
            texto += `✅ ${item.toUpperCase()}: ${qtd}\n`;
            temItem = true;
        }
    }

    if (!temItem) return alert("Por favor, adicione algum item primeiro!");

    texto += `\n💰 *VALOR TOTAL: R$ ${total}*`;
    const num = "5568992380864"; // Número principal
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(texto)}`, '_blank');
}
