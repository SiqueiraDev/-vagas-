const dados = [
    {
        "imagem": "Imagens/Vagas/dev-web.jpg",
        "titulo": "Estágio em Desenvolvimento Web",
        "descricao": "Trabalhe em projetos inovadores e aprenda com uma equipe experiente.",
        "maisInfo": {
            "bolsa": "R$ 1.200,00",
            "horario": "6 horas diárias",
            "local": "São Paulo, SP",
            "curso": "Ciência da Computação, Sistemas de Informação"
        }
    },
    {
        "imagem": "Imagens/Vagas/marketing.jpg",
        "titulo": "Estágio em Marketing Digital",
        "descricao": "Participe de campanhas digitais e desenvolva suas habilidades de marketing.",
        "maisInfo": {
            "bolsa": "R$ 1.000,00",
            "horario": "4 horas diárias",
            "local": "Rio de Janeiro, RJ",
            "curso": "Marketing, Publicidade"
        }
    },
    {
        "imagem": "Imagens/Vagas/design.jpg",
        "titulo": "Estágio em Design Gráfico",
        "descricao": "Aplique sua criatividade e senso estético em projetos inovadores de design gráfico.",
        "maisInfo": {
            "bolsa": "R$ 1.100,00",
            "horario": "5 horas diárias",
            "local": "Belo Horizonte, MG",
            "curso": "Design, Artes Visuais"
        }
    },
    {
        "imagem": "Imagens/Vagas/analise-dados.jpg",
        "titulo": "Estágio em Análise de Dados",
        "descricao": "Desenvolva suas habilidades analíticas em projetos desafiadores e reais.",
        "maisInfo": {
            "bolsa": "R$ 1.300,00", 
            "horario": "6 horas diárias",
            "local": "Curitiba, PR",
            "curso": "Estatística, Engenharia de Produção"
        }
    }
];

const container = document.getElementById('caixas');

// Função para gerar o HTML das caixas de informação
function gerarCaixas(dados) {
    dados.forEach(item => {
        const caixa = document.createElement('div');
        caixa.classList.add('info-box');

        caixa.innerHTML = `
            <span class="imagem"><img src="${item.imagem}" alt="${item.titulo}"></span>
            <span class="titulo">${item.titulo}</span>
            <span class="descricao">${item.descricao}</span>
            <button class="btn-info" onclick="mostrarInformacao(this)">Mais Informação</button>
            <div class="mais-info">
                <p><strong>Bolsa:</strong> ${item.maisInfo.bolsa}</p>
                <p><strong>Horário:</strong> ${item.maisInfo.horario}</p>
                <p><strong>Local:</strong> ${item.maisInfo.local}</p>
                <p><strong>Curso:</strong> ${item.maisInfo.curso}</p>
            </div>
        `;

        container.appendChild(caixa);
    });
}

// Função para mostrar/ocultar as informações adicionais e expandir a descrição
function mostrarInformacao(botao) {
    const infoBox = botao.closest('.info-box'); // Seleciona a caixa de informação mais próxima
    const descricao = infoBox.querySelector('.descricao'); // Seleciona a descrição dentro da caixa
    const maisInfo = infoBox.querySelector('.mais-info'); // Seleciona a div mais-info dentro da caixa

    // Remove a classe 'active' de todas as caixas
    document.querySelectorAll('.info-box').forEach(box => {
        if (box !== infoBox) {
            box.classList.remove('active');
        }
    });

    // Alterna a classe 'active' para a caixa clicada
    infoBox.classList.toggle('active');

    if (infoBox.classList.contains('active')) {
        botao.textContent = "Menos Informação"; // Muda o texto do botão
    } else {
        botao.textContent = "Mais Informação"; // Volta o texto original do botão
    }
}

// Chama a função passando os dados do JSON
gerarCaixas(dados);