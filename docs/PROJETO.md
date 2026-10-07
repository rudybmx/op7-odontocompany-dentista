# OdontoCompany Franchising — Landing Page para Investidores

> **Cliente:** OP7Franchising
> **Empresa:** OdontoCompany Franchising
> **Propósito:** Landing page para captação de investidores/franqueados
> **Stack:** Next.js 16 + React 19 + Tailwind v4 + GSAP + Framer Motion + Lenis

---

## 📁 Estrutura

```
/root/lp-stack/projects/odontocompany-franchising/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Página principal (1249 linhas)
│   │   ├── layout.tsx            ← Layout raiz (Geist font, Material Icons)
│   │   ├── globals.css           ← Tailwind v4 + Lenis CSS
│   │   ├── loading.tsx           ← Loading state
│   │   ├── actions.ts            ← Server Actions
│   │   └── favicon.ico
│   ├── components/
│   │   ├── KpiRevealCard.tsx     ← KPI reveal animation
│   │   ├── KpiParallaxCard.tsx   ← KPI parallax effect
│   │   ├── CtaFunnel.tsx         ← CTA funnel component
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── button-shiny.tsx  ← Shiny CTA button
│   │       ├── testimonial-slider.tsx ← Slider de depoimentos
│   │       └── video-tab-button.tsx
│   ├── lib/utils.ts              ← Utilitários (cn, cva, etc.)
│   └── middleware.ts             ← Middleware (Next.js 16 deprecado, substituir por proxy)
├── public/
│   ├── eliana.png                ← Imagem da franqueada Eliana
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── package.json                  ← Dependências
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .git/                         ← Repositório git (origem: rudybmx/odontocompany_franchising_lp)
└── *.js                          ← Scripts auxiliares (fix, check, clean)
```

## 🧱 Stack Técnica

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| Next.js | 16.2.6 | Framework React |
| React | 19.2.4 | UI |
| TypeScript | 5.x | Tipagem |
| Tailwind CSS | 4.x | Estilização |
| GSAP | 3.15.0 | Animações scroll (ScrollTrigger) |
| Framer Motion | 12.40.0 | Animações de transição (slider) |
| Lenis | 1.0.42 | Smooth scroll |
| Radix UI Slot | 1.2.4 | Acessibilidade |
| Lucide Icons | 1.16.0 | Ícones |
| CVA / clsx / tailwind-merge | — | Utilitários CSS |

## 🔧 Comandos

```bash
# Desenvolvimento
cd /root/lp-stack/projects/odontocompany-franchising
npm run dev

# Build
npm run build

# Preview do build
npm run start
```

## 🚀 Deploy

**Opção 1 — Vercel (recomendado):**
```bash
cd /root/lp-stack/projects/odontocompany-franchising
npx vercel --prod
```

**Opção 2 — Docker (servidor atual):**
```bash
cd /root/lp-stack/projects/odontocompany-franchising
docker build -t odontocompany-lp .
docker run -d -p 3001:3000 --restart unless-stopped --network proxy \
  --name odontocompany-lp odontocompany-lp
```

## 📝 Notas de Desenvolvimento

- `@studio-freight/lenis` está **deprecado** — migrar para `lenis` (v1.3+)
- Middleware (Next.js 16) deprecado → migrar para `proxy`
- `page_diff.txt` e `page_original.tsx` são artefatos de desenvolvimento — remover do repositório
- Scripts `.js` (fix-copy, fix-market, etc.) são auxiliares de transformação — manter documentados
- Imagem `eliana.png` (663KB) está no repositório — otimizar para webp

## 🔗 Origem

- **GitHub:** https://github.com/rudybmx/odontocompany_franchising_lp.git
- **Domínio sugerido:** `lp-odontocompany.lp.qozt.com.br` (a configurar)
- **Cliente:** OP7Franchising
