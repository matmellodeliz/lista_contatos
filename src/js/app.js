// File: /pwa-contact-list/pwa-contact-list/src/js/app.js

class ContatoCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    padding: 16px;
                    margin: 8px;
                    border-radius: 8px;
                    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
                }
                .detalhes {
                    display: none;
                }
                .mostrar-detalhes {
                    display: block;
                    margin-top: 8px;
                }
            </style>
            <div class="card">
                <slot name="nome"></slot>
                <slot name="telefone"></slot>
                <div class="detalhes">
                    <slot name="endereco"></slot>
                    <slot name="cidade"></slot>
                    <slot name="uf"></slot>
                </div>
                <button class="mostrar-detalhes">Mostrar Detalhes</button>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.botaoDetalhes = this.shadowRoot.querySelector('.mostrar-detalhes');
        this.detalhes = this.shadowRoot.querySelector('.detalhes');

        this.botaoDetalhes.addEventListener('click', () => {
            if (this.detalhes.style.display === 'none' || this.detalhes.style.display === '') {
                this.detalhes.style.display = 'block';
                this.botaoDetalhes.textContent = 'Ocultar Detalhes';
            } else {
                this.detalhes.style.display = 'none';
                this.botaoDetalhes.textContent = 'Mostrar Detalhes';
            }
        });
    }
}

customElements.define('contato-card', ContatoCard);

const enderecos = [
    { nome: 'João da Silva', telefone: '47 98798-12518', endereco: 'Rua XV de novembro, 531', cidade: 'Itajaí', uf: 'SC' },
    { nome: 'Mario da Silva', telefone: '47 98798-48154', endereco: 'Rua XV de outubro, 15', cidade: 'Balneário Camboriú', uf: 'SC' },
    { nome: 'João de Souza', telefone: '48 97887-68154', endereco: 'Rua 13 de julho, 48', cidade: 'Florianópolis', uf: 'SC' },
    { nome: 'João Maria', telefone: '45 99978-78125', endereco: 'Rua 7 de setembro, 654', cidade: 'Curitiba', uf: 'PR' },
    { nome: 'Maria João', telefone: '11 97987-58125', endereco: 'Rua 21 de abril, 654', cidade: 'São Paulo', uf: 'SP' },
    { nome: 'Silva e Souza', telefone: '47 99997-65484', endereco: 'Rua 01 de abril, 21', cidade: 'Itajaí', uf: 'SC' },
    { nome: 'Jacinto Filho', telefone: '85 99914-12184', endereco: 'Rua 25 de dezembro, 151', cidade: 'Rio Branco', uf: 'AC' },
    { nome: 'Telêmaco Borba', telefone: '51 97487-88429', endereco: 'Rua Marechal Rondom, 315', cidade: 'Porto Alegre', uf: 'RS' },
    { nome: 'Hugo Chaves', telefone: '47 94156-98781', endereco: 'Rua Candido Mariano, 651', cidade: 'Blumenau', uf: 'SC' },
    { nome: 'Evita Perón', telefone: '47 98748-61258', endereco: 'Avenida Afonso Pena, 2316', cidade: 'Camboriú', uf: 'SC' }
];

function criarCards(enderecos) {
    const listaContatos = document.getElementById('lista-contatos');
    listaContatos.innerHTML = '';
    enderecos.forEach(endereco => {
        const card = document.createElement('contato-card');
        card.innerHTML = `
            <span slot="nome">${endereco.nome}</span>
            <span slot="telefone">${endereco.telefone}</span>
            <span slot="endereco">${endereco.endereco}</span>
            <span slot="cidade">${endereco.cidade}</span>
            <span slot="uf">${endereco.uf}</span>
        `;
        listaContatos.appendChild(card);
    });
}

document.getElementById('busca-nome').addEventListener('input', (event) => {
    const buscaNome = event.target.value.toLowerCase();
    const enderecosFiltrados = enderecos.filter(endereco => endereco.nome.toLowerCase().includes(buscaNome));
    criarCards(enderecosFiltrados);
});

document.getElementById('filtro').addEventListener('change', (event) => {
    const uf = event.target.value;
    const enderecosFiltrados = uf ? enderecos.filter(endereco => endereco.uf === uf) : enderecos;
    criarCards(enderecosFiltrados);
});

criarCards(enderecos);