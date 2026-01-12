# QRcode Generator Web

Um gerador de QR Code simples e intuitivo baseado em web, desenvolvido com Node.js e Express.

## 📝 Descrição

Este projeto é uma aplicação web que permite aos usuários gerar QR Codes de forma rápida e fácil. Basta inserir o texto desejado e a aplicação cria instantaneamente um QR Code que pode ser baixado.

## ✨ Funcionalidades

- 🎯 Geração instantânea de QR Codes
- 💾 Download do QR Code gerado em formato JPEG
- 📱 Interface responsiva e amigável
- 🚀 Deploy pronto para Vercel
- 🎨 Interface moderna com design clean

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **EJS** - Template engine para renderização de páginas
- **QRCode** - Biblioteca para geração de QR Codes
- **Body-Parser** - Middleware para parsing de requisições

## 📋 Pré-requisitos

- Node.js (versão 12 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/mhfgomes/qrcode-generator-web.git
```

2. Navegue até o diretório do projeto:
```bash
cd qrcode-generator-web
```

3. Instale as dependências:
```bash
npm install
```

## 💻 Como Usar

1. Inicie o servidor:
```bash
npm start
```

2. Acesse a aplicação em seu navegador:
```
http://localhost:3000
```

3. Digite o texto que deseja converter em QR Code no campo "Texto para QRcode"

4. Clique no botão "Criar"

5. O QR Code será gerado e você poderá fazer o download clicando no botão "download"

## 📁 Estrutura do Projeto

```
qrcode-generator-web/
├── public/           # Arquivos estáticos (CSS, imagens)
│   ├── css/
│   └── images/
├── views/            # Templates EJS
│   ├── index.ejs     # Página inicial
│   ├── generate.ejs  # Página de resultado
│   ├── desktop.ejs   # Página sobre app desktop
│   └── 404.ejs       # Página de erro 404
├── server.js         # Arquivo principal do servidor
├── package.json      # Dependências do projeto
└── vercel.json       # Configuração de deploy Vercel
```

## 🌐 Deploy

Este projeto está configurado para deploy no Vercel. Para fazer o deploy:

1. Instale a CLI do Vercel:
```bash
npm install -g vercel
```

2. Execute o comando de deploy:
```bash
vercel
```

## 📄 Licença

Este projeto está licenciado sob a GNU General Public License v3.0 - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**mhfgomes**

## 🤝 Contribuindo

Contribuições, issues e solicitações de features são bem-vindas!

---

Desenvolvido com ❤️ por mhfgomes
