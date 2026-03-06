function enviarPedido(opcao) {
    // Quantidades das Cervejas
    const antarctica = document.getElementById('antarctica').value;
    const skol = document.getElementById('skol').value;
    const amstel = document.getElementById('amstel').value;
    
    // Quantidades das Bebidas
    const coca2l = document.getElementById('coca2l').value;
    const pepsi3l = document.getElementById('pepsi3l').value;
    const guarana = document.getElementById('guarana').value;
    const cocalata = document.getElementById('cocalata').value;
    const fanta = document.getElementById('fanta').value;
    const pithulinha = document.getElementById('pithulinha').value;
    const cachaca = document.getElementById('cachaca').value;
    
    // Outros e Skiny
    const skiny = document.getElementById('skiny').value;
    const salgadinho = document.getElementById('salgadinho').value;
    const cigarro = document.getElementById('cigarro').value;

    // Verifica se algo foi preenchido
    if (!antarctica && !skol && !amstel && !coca2l && !pepsi3l && !guarana && !cocalata && !fanta && !pithulinha && !cachaca && !skiny && !salgadinho && !cigarro) {
        alert("Por favor, informe a quantidade de algum item.");
        return;
    }

    // Monta o texto
    let texto = "*PEDIDO - BAR DO TIO CHICO* 🍻\n\n";
    texto += "Olá! Segue minha encomenda:\n";
    
    if (antarctica > 0) texto += `🍺 Antarctica: ${antarctica}\n`;
    if (skol > 0) texto += `🍺 Skol: ${skol}\n`;
    if (amstel > 0) texto += `🍺 Amstel: ${amstel}\n`;
    if (coca2l > 0) texto += `🥤 Coca 2L: ${coca2l}\n`;
    if (pepsi3l > 0) texto += `🥤 Pepsi 3L: ${pepsi3l}\n`;
    if (guarana > 0) texto += `🥤 Guaraná: ${guarana}\n`;
    if (cocalata > 0) texto += `🥤 Coca Lata: ${cocalata}\n`;
    if (fanta > 0) texto += `🥤 Fanta Lata: ${fanta}\n`;
    if (pithulinha > 0) texto += `🥤 Pithulinha: ${pithulinha}\n`;
    if (cachaca > 0) texto += `🥃 Cachaça: ${cachaca}\n`;
    if (skiny > 0) texto += `🥨 Skiny: ${skiny}\n`;
    if (salgadinho > 0) texto += `🥨 Salgadinhos: ${salgadinho}\n`;
    if (cigarro > 0) texto += `🚬 Cigarros: ${cigarro}\n`;

    const mensagemFinal = encodeURIComponent(texto);
    let numeroWhats = (opcao === 1) ? "5568992380864" : "5568992569482"; 

    window.open(`https://wa.me/${numeroWhats}?text=${mensagemFinal}`, '_blank');
}