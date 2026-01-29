<p align="center">
    <a href="https://github.com/LeticiaBoza/sds-wiki/">
        <img src="https://jm-eletrica.vercel.app/assets/logo-jm-c0e79591.png" width="400"></a>
    <br><br>
<a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white"></a>
<a href="https://react.dev/"><img src="https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white"></a>
<br/>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=flate&logo=javascript&logoColor=%23F7DF1E"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white"></a>
</p>

A <b>JM Soluções em Energia</b>, é uma empresa de engenharia elétrica fundada em 2021 na cidade de São Vicente – SP. Oferecem serviços como: projetos elétricos, laudos, acompanhamento de obras, consultorias e manutenção residencial, predial e industrial. Visando sempre segurança, qualidade e satisfação, atendendo da melhor forma a necessidade de cada cliente.

<img src="https://i.imgur.com/e939G5M.png">

---

### Deploy automático (Vercel)

Cada push nas branches `main` ou `master` dispara o workflow de deploy na Vercel.

**Configuração (uma vez):**

1. Crie um projeto na [Vercel](https://vercel.com) (importe o repositório ou crie vazio e linke depois).
2. Gere um token em [Vercel → Settings → Tokens](https://vercel.com/account/tokens).
3. Obtenha **Organization ID** e **Project ID** no dashboard do projeto (Settings → General) ou rodando `vercel link` localmente e lendo `.vercel/project.json`.
4. No GitHub, vá em **Settings → Secrets and variables → Actions** e crie:
   - `VERCEL_TOKEN` — token da Vercel
   - `VERCEL_ORG_ID` — ID da organização/equipe
   - `VERCEL_PROJECT_ID` — ID do projeto

Depois disso, os commits em `main`/`master` farão o deploy em produção automaticamente.

---

### Entre em Contato 📞

Quer tirar uma dúvida ou solicitar um orçamento?  

Estamos aqui para você! Envie-nos um e-mail em jellyfishdevelopment@gmail.com. Preparamos etapas iniciais e perguntas personalizadas para entender suas necessidades. 📧💬
