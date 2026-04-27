<div align="center">

# 💧 J.R Água e Gás

**Distribuidora de Água Mineral e Gás de Cozinha — Jandira, SP**

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

---

Website institucional e catálogo digital desenvolvido para uma distribuidora de água mineral e gás de cozinha localizada em Jandira, SP.  
O objetivo principal é apresentar os produtos, serviços e direcionar o cliente para atendimento e conversão via **WhatsApp**.

</div>

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🏠 **Página Inicial** | Hero section com animações de água (bolhas, ondas, gotículas) em CSS puro |
| 📦 **Catálogo de Produtos** | Água mineral (Crystal, Klarina) e gás (Supergasbras, Liquigás, Ultragaz) com preços de retirada e entrega |
| 📖 **Página Sobre** | História da empresa, mapa de cobertura e horários de funcionamento dinâmicos (aberto/fechado em tempo real) |
| 🎁 **Cartão Fidelidade** | Visual interativo do programa "comprou 10, leva 1 grátis" |
| 💬 **Integração WhatsApp** | FAB flutuante + CTAs contextuais com mensagens pré-definidas em todas as páginas |
| 📱 **Mobile-First** | Layout responsivo otimizado para smartphones |

---

## 🛠 Tecnologias

- **React 19** — Biblioteca principal para construção da interface
- **Vite 8** — Build tool e dev server ultrarrápido
- **Tailwind CSS 4** — Framework CSS utilitário com design system customizado
- **React Router 7** — Navegação SPA com rotas
- **Lucide React** — Ícones SVG leves e consistentes

---

## 📦 Estrutura do Projeto

```
├── public/
│   └── images/              # Fotografias dos produtos
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── LoyaltyCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── WaterEffects.jsx
│   │   └── WhatsAppFAB.jsx
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Produtos.jsx
│   │   └── Sobre.jsx
│   ├── App.jsx              # Configuração de rotas
│   ├── index.css            # Design system + animações
│   └── main.jsx             # Ponto de montagem React
├── index.html               # HTML base com SEO
├── vite.config.js
└── package.json
```

---

## 🚀 Como Executar

**Pré-requisito:** [Node.js](https://nodejs.org/) (versão LTS recomendada)

```bash
# Clone o repositório
git clone https://github.com/ExodiaD/JRaguaegas.git
cd JRaguaegas

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O servidor será iniciado em **http://localhost:5173/**

---

## 📜 Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila a aplicação para produção (`dist/`) |
| `npm run preview` | Servidor local para visualizar a build |
| `npm run lint` | Executa o ESLint para verificar o código |

---

## 🎨 Identidade Visual

| Elemento | Valor |
|---|---|
| **Cor Primária** | Azul Bic (`#1e3a8a`) |
| **Cor Secundária** | Amarelo Vivo (`#facc15`) |
| **Cor de Acento** | Vermelho (uso mínimo) |
| **Tipografia** | Inter (Google Fonts) |

---

<div align="center">

**Feito com 💙 para J.R Água e Gás — Jandira, SP**

📍 Rua Patrícia, 43 — Sagrado Coração, Jandira

</div>