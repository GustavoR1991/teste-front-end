# Teste Front-End — Econverse

Página de e-commerce desenvolvida em **React + TypeScript + Sass**, a partir do layout do Figma, com vitrine de produtos consumindo um JSON e modal de detalhes do produto.

## Tecnologias

- React 19 + TypeScript
- Vite
- Sass (SCSS) — variáveis, mixins, aninhamento e `@use`
- ESLint
- Sem bibliotecas de UI

## Requisitos

- Node.js **20.19+** ou **22.12+**
- npm

## Como rodar

```bash
# 1. instalar as dependências
npm install

# 2. rodar em modo de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173**.

> ⚠️ Use `npm run dev` (ou `npm run preview`). O JSON de produtos é buscado através de um **proxy do Vite**, porque o servidor da Econverse não libera CORS. Abrir o `index.html` direto no navegador não carrega os produtos.

## Como compilar e testar

```bash
npm run lint      # verifica o código com o ESLint
npm run build     # checa os tipos (TypeScript) e gera a versão de produção em /dist
npm run preview   # serve a versão de produção em http://localhost:4173
```

O projeto não tem testes automatizados; a validação é feita com o `lint`, o `build` (que inclui a checagem de tipos) e testes manuais em várias larguras de tela (360px a 1920px).

## Estrutura

```
src/
├── components/        # um componente por pasta (index.tsx + style.scss)
│   ├── header/
│   ├── home/          # banner + composição da página
│   ├── categories/
│   ├── product-shelf/ # vitrine (título, abas, carrossel)
│   ├── product-card/
│   ├── product-modal/
│   ├── partners/
│   ├── brands/
│   ├── newsletter/
│   ├── footer/
│   └── policy/
├── hooks/
│   └── useProducts.ts # busca do JSON (loading / erro)
├── types/
│   └── product.ts     # tipagem dos produtos
├── utils/
│   └── formatPrice.ts # formatação em Real (R$)
└── styles/
    ├── _mixins.scss   # container, breakpoints e faixa com rolagem
    └── global.scss    # reset e paleta de cores (variáveis CSS)
```

## Funcionalidades

- Vitrine consumindo o [JSON de produtos](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json), com paginação pelas setas
- Modal com as informações do produto clicado (fecha pelo X, pela tecla Esc ou clicando fora), feito com a tag nativa `<dialog>`
- Contador de quantidade no modal
- Layout responsivo (celular, tablet, notebook e desktop)
- HTML semântico e acessibilidade (`header`, `main`, `nav`, `section`, `article`, `footer`, labels e `aria-*`)

## Decisões

- **Preço em centavos:** o campo `price` do JSON foi interpretado como centavos (ex.: `14990` → R$ 149,90).
- **Preço antigo e parcelas:** o JSON não traz esses dados; o preço antigo é calculado (+10%) e o parcelamento é em 2x, apenas para reproduzir o layout.
- **Descrição do modal:** o `descriptionShort` do JSON é igual ao nome do produto, então o modal usa o texto do layout como descrição.
- **Abas e categorias:** são fixas ("Celular" e "Tecnologia" ativos), porque o JSON contém apenas celulares.
- **Alinhamento:** pequenas diferenças de posicionamento (1–7px) no Figma foram normalizadas para manter um alinhamento consistente com o grid de 80px.
- **Responsividade:** o Figma tem apenas a versão desktop (1440px); as versões de tablet e celular foram adaptadas mantendo os mesmos elemento
