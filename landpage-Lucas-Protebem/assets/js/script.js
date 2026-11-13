// 1. MENU RESPONSIVO PARA CELULAR
const botaoMenuMobile = document.getElementById('botao-menu-mobile');
const menuNavegacao = document.getElementById('menu-navegacao');

botaoMenuMobile.addEventListener('click', () => {
    menuNavegacao.classList.toggle('ativo');
});

// Fecha o menu ao clicar em algum link no celular
const linksMenu = document.querySelectorAll('#menu-navegacao a');
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuNavegacao.classList.remove('ativo');
    });
});

// 2. SELECIONAR PLANO AUTOMATICAMENTE AO CLICAR NOS CARDS
const botoesPlanos = document.querySelectorAll('.botao-selecionar-plano');
const selectPlano = document.getElementById('tipo-plano');
const secaoCotacao = document.getElementById('cotacao-rapida');

botoesPlanos.forEach(botao => {
    botao.addEventListener('click', () => {
        const planoEscolhido = botao.getAttribute('data-plano');
        selectPlano.value = planoEscolhido;
        secaoCotacao.scrollIntoView({ behavior: 'smooth' });
    });
});

// 3. ENVIAR DADOS DO FORMULÁRIO DIRETO PARA O SEU WHATSAPP
const formularioCotacao = document.getElementById('formulario-cotacao');

formularioCotacao.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que a página recarregue

    const nome = document.getElementById('nome-cliente').value;
    const veiculo = document.getElementById('modelo-veiculo').value;
    const plano = document.getElementById('tipo-plano').value;
    const cidade = document.getElementById('cidade-cliente').value;

    const telefoneLucas = '5575999878628';

    const mensagem = `Olá Lucas! Vim pelo seu site e gostaria de fazer uma cotação na *Protebem*:\n\n` +
                     `*Nome:* ${nome}\n` +
                     `*Veículo:* ${veiculo}\n` +
                     `*Plano:* ${plano}\n` +
                     `*Cidade:* ${cidade}`;

    const urlWhatsApp = `https://wa.me/${telefoneLucas}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');
});