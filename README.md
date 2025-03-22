# Lista de Contatos PWA

Este projeto é uma Progressive Web App (PWA) que permite aos usuários gerenciar uma lista de contatos usando Web Components. A aplicação oferece recursos para buscar e filtrar contatos, e funciona offline graças ao service worker.

## Estrutura do Projeto

```
lista_contatos
├── src
│   ├── css
│   │   └── styles.css        # Estilos para a aplicação
│   ├── js
│   │   ├── app.js            # Arquivo JavaScript principal que integra a funcionalidade de contatos
│   │   └── service-worker.js  # Service worker para capacidades offline
│   ├── index.html            # Arquivo HTML principal da aplicação
│   └── manifest.json         # Manifesto da Web App para configurações de PWA
├── package.json              # Arquivo de configuração do npm
└── README.md                 # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <repository-url>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd lista_contatos
   ```

3. Instale as dependências necessárias:
   ```
   npm install
   ```

## Uso

1. Abra `src/index.html` em um navegador web para visualizar a aplicação.
2. Use o campo de busca para filtrar contatos pelo nome.
3. Use o dropdown para filtrar contatos pelo estado (UF).
4. Clique em "Mostrar Detalhes" para ver informações adicionais sobre cada contato.

## Capacidades Offline

A aplicação está equipada com um service worker que faz cache dos recursos essenciais, permitindo que funcione offline. Certifique-se de que seu navegador suporte service workers e que eles estejam habilitados.