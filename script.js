function tip_of_day() {
    var song = document.getElementById('aud')
    var tip = document.getElementById('tip_txt')
    var txt = "Use guardanapos de pano em vez de papel"

    song.play()

    var num = Math.floor(Math.random() * 21)

    switch (num) {
        case 1:
            txt = "Reduza o uso de plástico, opte por embalagens reutilizáveis.";
            break;
        case 2:
            txt = "Leve sua própria sacola ao fazer compras.";
            break;
        case 3:
            txt = "Desligue aparelhos eletrônicos da tomada quando não estiverem em uso.";
            break;
        case 4:
            txt = "Substitua lâmpadas comuns por LEDs de baixo consumo.";
            break;
        case 5:
            txt = "Plante uma árvore ou cultive plantas em casa.";
            break;
        case 6:
            txt = "Opte por transporte público ou bicicleta quando possível.";
            break;
        case 7:
            txt = "Evite o desperdício de água, fechando a torneira ao escovar os dentes.";
            break;
        case 8:
            txt = "Apoie Empresas que adotam políticas sustentáveis.";
            break;
        case 9:
            txt = "Faça compostagem de resíduos orgânicos.";
            break;
        case 10:
            txt = "Compre de produtores locais e apoie mercados regionais.";
            break;
        case 11:
            txt = "Use produtos de limpeza ecológicos e biodegradáveis.";
            break;
        case 12:
            txt = "Doe roupas e objetos que não usa mais.";
            break;
        case 13:
            txt = "Imprima documentos apenas quando necessário.";
            break;
        case 14:
            txt = "Reaproveite vidros e potes para armazenar alimentos.";
            break;
        case 15:
            txt = "Prefira produtos com embalagens recicláveis ou sem embalagem.";
            break;
        case 16:
            txt = "Plante espécies nativas para ajudar a preservar a biodiversidade local.";
            break;
        case 17:
            txt = "Utilize energia solar se possível.";
            break;
        case 18:
            txt = "Participe de mutirões de limpeza em praias, rios ou parques locais.";
            break;
        case 19:
            txt = "Evite descartáveis, usando copos e talheres reutilizáveis.";
            break;
        case 20:
            txt = "Apoie iniciativas de reciclagem e separação de lixo.";
            break;
    }

    tip.innerHTML = txt
}