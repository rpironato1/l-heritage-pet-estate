<div align="center">

# L'Héritage Pet Estate

### Curadoria de Vida para o Extraordinário

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![License](https://img.shields.io/badge/License-Proprietary-gold?style=for-the-badge)](LICENSE)

<br />

<img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1200&auto=format&fit=crop" alt="L'Héritage Pet Estate" width="100%" style="border-radius: 12px; max-width: 800px;" />

<br />
<br />

**Uma plataforma digital imersiva para o primeiro Private Members Club dedicado ao bem-estar animal de ultra-luxo.**

[Demo ao Vivo](#demo) · [Arquitetura](#arquitetura) · [Instalação](#instalação) · [Contato](#contato)

---

<br />

**Desenvolvido por [Rodolfo Pironato](https://github.com/rpironato1)**

**[TurnBold](https://turnboldwt.com)** | Digital Product

</div>

<br />

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Demo](#demo)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitetura](#arquitetura)
- [Features](#features)
- [Performance](#performance)
- [Design System](#design-system)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Padrões de Código](#padrões-de-código)
- [Roadmap](#roadmap)
- [Autor](#autor)
- [Licença](#licença)

---

## Sobre o Projeto

O **L'Héritage Pet Estate** é uma aplicação web de alta fidelidade desenvolvida para oferecer uma experiência de usuário sofisticada, fluida e performática. O projeto reflete a exclusividade da marca através de animações meticulosas, transições suaves e um design system rigoroso.

### O Desafio

Criar uma experiência digital que transmita os valores de um Private Members Club de ultra-luxo para pets, onde cada interação deve comunicar:

- **Exclusividade** - Estética refinada sem padrões genéricos
- **Serenidade** - Animações fluidas e transições suaves
- **Confiança** - Performance impecável e navegação intuitiva
- **Sofisticação** - Design system coeso e tipografia elegante

### A Solução

Aplicação construída seguindo princípios de **Neuroarquitetura Digital**, onde cada elemento visual e interativo foi projetado para evocar sensações específicas de luxo e cuidado.

---

## Demo

### Screenshots

<div align="center">

| Desktop | Mobile |
|---------|--------|
| ![Desktop](https://via.placeholder.com/400x250/1A1F18/D4AF37?text=Desktop+View) | ![Mobile](https://via.placeholder.com/200x350/1A1F18/D4AF37?text=Mobile+View) |

</div>

### Páginas Disponíveis

| Página | Descrição |
|--------|-----------|
| **Home** | Landing page com Hero parallax, serviços e membership |
| **Solicitar Convite** | Formulário multi-step para candidatura ao clube |
| **Explorar o Estate** | Tour virtual com seções parallax imersivas |
| **Serviços** | Detalhamento de Spa, Gastronomia e Suítes |
| **Contato** | Informações e formulário de contato |
| **Área de Membros** | Portal de acesso exclusivo (SSO-ready) |
| **Páginas Legais** | Termos, Privacidade e Código de Ética |

---

## Stack Tecnológico

### Core

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 19.x | UI Framework com Concurrent Features |
| **TypeScript** | 5.8 | Type Safety e Developer Experience |
| **Vite** | 6.x | Build Tool com HMR ultrarrápido |
| **Tailwind CSS** | 4.x | Utility-First CSS com Design Tokens |

### Animações & Interações

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **GSAP** | 3.x | Animation Platform de alta performance |
| **ScrollTrigger** | 3.x | Animações baseadas em scroll |
| **Lenis** | 1.x | Smooth Scrolling com física realista |

### Utilitários

| Tecnologia | Propósito |
|------------|-----------|
| **Lucide React** | Icon Library moderna e tree-shakeable |
| **pnpm** | Package Manager otimizado |

---

## Arquitetura

### Visão Geral

```
┌─────────────────────────────────────────────────────────────────┐
│                        PRESENTATION LAYER                        │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   Layout    │  │    Pages    │  │      UI Components      │  │
│  │  (Navbar,   │  │  (Home,     │  │  (Button, Typography,   │  │
│  │   Footer)   │  │   Contact)  │  │   OptimizedImage)       │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                        APPLICATION LAYER                         │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────┐  ┌───────────────────────────────┐ │
│  │    Animation Context    │  │       State Management        │ │
│  │  (Lenis + ScrollTrigger)│  │    (React State + Context)    │ │
│  └─────────────────────────┘  └───────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│                        FEATURE MODULES                           │
├─────────────────────────────────────────────────────────────────┤
│  ┌────────┐ ┌────────┐ ┌──────────┐ ┌────────┐ ┌─────────────┐  │
│  │  Auth  │ │  Hero  │ │ Services │ │ Estate │ │ Membership  │  │
│  └────────┘ └────────┘ └──────────┘ └────────┘ └─────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Padrão Arquitetural

O projeto segue **Feature-Sliced Design (FSD)**, uma arquitetura modular que promove:

- **Isolamento** - Cada feature é autocontida
- **Escalabilidade** - Fácil adição de novos módulos
- **Manutenibilidade** - Baixo acoplamento entre features
- **Testabilidade** - Módulos independentes e testáveis

---

## Features

### Implementadas

- [x] **Landing Page Imersiva** - Hero com parallax e GSAP animations
- [x] **Smooth Scrolling** - Lenis com física inercial
- [x] **Code Splitting** - Lazy loading de páginas com React.lazy
- [x] **Design Responsivo** - Mobile-first com breakpoints otimizados
- [x] **Formulários Interativos** - Multi-step com validação
- [x] **Page Transitions** - Fade transitions com scroll reset
- [x] **Performance Otimizada** - GPU acceleration e async decoding
- [x] **Acessibilidade** - Semantic HTML e focus management

### Highlights Técnicos

#### Smooth Scroll com Lenis
```typescript
// Integração GSAP + Lenis para sincronização perfeita
gsap.ticker.add((time) => {
  lenisRef.current?.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
```

#### Code Splitting Agressivo
```typescript
// Lazy loading de páginas para bundle otimizado
const ContactPage = lazy(() =>
  import('./features/contact/ContactPage')
    .then(module => ({ default: module.ContactPage }))
);
```

#### GPU-Accelerated Animations
```typescript
// Uso estratégico de force3D para composição na GPU
gsap.to(element, {
  y: -50,
  force3D: true,
  willChange: 'transform'
});
```

---

## Performance

### Métricas de Build

| Métrica | Valor |
|---------|-------|
| **Bundle Size (gzip)** | ~130 KB |
| **CSS (gzip)** | ~8 KB |
| **Build Time** | < 3s |
| **Lazy Chunks** | 3-6 KB cada |

### Core Web Vitals

| Métrica | Target | Status |
|---------|--------|--------|
| **LCP** | < 2.5s | ✅ Otimizado |
| **FID** | < 100ms | ✅ Otimizado |
| **CLS** | < 0.1 | ✅ Otimizado |
| **TBT** | < 200ms | ✅ Code Splitting |

### Otimizações Implementadas

1. **Decodificação Assíncrona de Imagens**
   - Componente `OptimizedImage` com `decoding="async"`
   - Lazy loading nativo com `loading="lazy"`
   - Skeleton loading durante carregamento

2. **Gestão de Memória**
   - Cleanup rigoroso de animações GSAP
   - Destruição de instâncias ScrollTrigger
   - Refs com garbage collection otimizado

3. **Bundle Optimization**
   - Tree-shaking agressivo
   - Chunks separados por rota
   - CSS code splitting

---

## Design System

### Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `estate-900` | `#1A1F18` | Backgrounds escuros |
| `estate-800` | `#2C3329` | Contraste secundário |
| `estate-50` | `#F5F5F0` | Backgrounds claros |
| `gold-400` | `#D4AF37` | CTAs e acentos |
| `gold-600` | `#C5A028` | Hover states |

### Tipografia

| Família | Peso | Uso |
|---------|------|-----|
| **Cormorant Garamond** | 300-600 | Títulos e displays |
| **Montserrat** | 200-500 | Body e UI elements |

### Componentes

```
ui/
├── Button.tsx          # 4 variantes: primary, outline, gold, text
├── Typography.tsx      # DisplayHeading, SectionHeading, BodyText
└── OptimizedImage.tsx  # Lazy load + animation + skeleton
```

---

## Instalação

### Pré-requisitos

- **Node.js** 20.x ou superior
- **pnpm** 8.x ou superior (recomendado)

### Setup

```bash
# 1. Clone o repositório
git clone https://github.com/turnbold/l-heritage-pet-estate.git

# 2. Entre no diretório
cd l-heritage-pet-estate

# 3. Instale as dependências
pnpm install

# 4. Inicie o servidor de desenvolvimento
pnpm run dev
```

O servidor estará disponível em `http://localhost:3251`

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm run dev` | Inicia servidor de desenvolvimento (porta 3251) |
| `pnpm run build` | Gera build de produção em `/dist` |
| `pnpm run preview` | Preview do build de produção |

---

## Estrutura de Pastas

```
l-heritage-pet-estate/
├── public/                    # Assets estáticos
│   ├── _redirects             # Configuração Netlify SPA
│   └── _headers               # Headers de segurança
│
├── src/                       # Código fonte
│   ├── features/              # Feature Modules (FSD)
│   │   ├── auth/              # Autenticação e login
│   │   ├── contact/           # Página de contato
│   │   ├── estate/            # Tour do estate
│   │   ├── hero/              # Hero section
│   │   ├── invitation/        # Formulário de convite
│   │   ├── layout/            # Navbar e Footer
│   │   ├── legal/             # Páginas legais
│   │   ├── membership/        # Área de membros
│   │   ├── services/          # Catálogo de serviços
│   │   ├── ui/                # Design System
│   │   └── utils/             # Contextos e helpers
│   │
│   ├── App.tsx                # Componente raiz e roteamento
│   ├── index.tsx              # Entry point React
│   ├── index.css              # Estilos globais + Tailwind
│   └── constants.ts           # Constantes e configurações
│
├── index.html                 # Entry point Vite
├── vite.config.ts             # Configuração Vite
├── tsconfig.json              # Configuração TypeScript
├── tailwind.config.js         # Configuração Tailwind (se aplicável)
└── package.json               # Dependências e scripts
```

---

## Padrões de Código

### TypeScript

- **Strict Mode** habilitado
- **Zero `any`** - Tipagem explícita obrigatória
- **Paths Alias** - `@/*` para imports limpos

### Componentes

- **Functional Components** com hooks
- **Props tipadas** com interfaces
- **Cleanup** em useEffect para animações

### CSS

- **Utility-First** com Tailwind
- **Design Tokens** - Zero CSS hardcoded
- **Mobile-First** - Breakpoints `md:` e `lg:`

### Commits

```
feat: add new feature
fix: resolve bug
refactor: improve code structure
docs: update documentation
style: format code
perf: improve performance
```

---

## Roadmap

### v1.0 (Atual)
- [x] Landing page completa
- [x] Sistema de navegação
- [x] Formulários de contato e convite
- [x] Design responsivo
- [x] Animações GSAP + Lenis

### v1.1 (Planejado)
- [ ] Integração com backend
- [ ] Sistema de autenticação real
- [ ] Dashboard de membros
- [ ] Integração de pagamentos

### v2.0 (Futuro)
- [ ] PWA Support
- [ ] Multi-idioma (i18n)
- [ ] CMS para conteúdo
- [ ] Analytics avançado

---

## Autor

<div align="center">

### Rodolfo Pironato

**Senior Software Engineer & Digital Product Architect**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rodolfopironato)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rodolfopironato)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://rodolfopironato.com)

<br />

---

### TurnBold

**Digital Product Studio**

*Transformamos ideias em produtos digitais de alto impacto.*

[![Website](https://img.shields.io/badge/Website-turnbold.com-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://turnbold.com)

<br />

**Especialidades:**
- Product Design & Strategy
- Frontend Engineering (React, Next.js, Vue)
- Mobile Development (React Native, Flutter)
- Cloud Architecture (AWS, GCP, Vercel)

</div>

---

## Licença

Este projeto é **proprietário e confidencial**.

```
Copyright (c) 2024 TurnBold Digital Product Studio
Todos os direitos reservados.

O uso, cópia, modificação ou distribuição não autorizada
de qualquer parte do código ou design é estritamente proibida.
```

---

<div align="center">

**L'Héritage Pet Estate** — *Curadoria de Vida para o Extraordinário*

Desenvolvido com dedicação por **[Rodolfo Pironato](https://github.com/rodolfopironato)** @ **[TurnBold](https://turnbold.com)**

<br />

*Est. MMXXIV*

</div>
