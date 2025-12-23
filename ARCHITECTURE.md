# Arquitetura do Sistema

> Documentação técnica detalhada da arquitetura do L'Héritage Pet Estate

---

## Visão Geral

O L'Héritage Pet Estate é uma Single Page Application (SPA) construída com foco em:

- **Performance** - Carregamento rápido e interações fluidas
- **Manutenibilidade** - Código modular e bem organizado
- **Escalabilidade** - Arquitetura preparada para crescimento
- **Experiência do Usuário** - Animações suaves e navegação intuitiva

---

## Stack Tecnológico

### Camada de Apresentação

```
┌─────────────────────────────────────────────────────────────┐
│                         REACT 19                             │
├─────────────────────────────────────────────────────────────┤
│  Concurrent Features │ Suspense │ Lazy Loading │ Hooks      │
└─────────────────────────────────────────────────────────────┘
```

### Camada de Estilização

```
┌─────────────────────────────────────────────────────────────┐
│                      TAILWIND CSS 4                          │
├─────────────────────────────────────────────────────────────┤
│  Utility-First │ Design Tokens │ Responsive │ Dark Mode     │
└─────────────────────────────────────────────────────────────┘
```

### Camada de Animação

```
┌─────────────────────────────────────────────────────────────┐
│                    GSAP + LENIS                              │
├─────────────────────────────────────────────────────────────┤
│  ScrollTrigger │ Parallax │ Smooth Scroll │ GPU Acceleration│
└─────────────────────────────────────────────────────────────┘
```

### Ferramentas de Build

```
┌─────────────────────────────────────────────────────────────┐
│                        VITE 6                                │
├─────────────────────────────────────────────────────────────┤
│  HMR │ ESBuild │ Rollup │ Code Splitting │ Tree Shaking     │
└─────────────────────────────────────────────────────────────┘
```

---

## Padrão Arquitetural: Feature-Sliced Design

### Por que FSD?

O Feature-Sliced Design foi escolhido por oferecer:

1. **Separação Clara de Responsabilidades**
   - Cada feature é autocontida
   - Dependências explícitas
   - Fácil navegação no código

2. **Escalabilidade Horizontal**
   - Novas features não afetam existentes
   - Times podem trabalhar em paralelo
   - Merge conflicts minimizados

3. **Testabilidade**
   - Features isoladas são fáceis de testar
   - Mocks simplificados
   - Cobertura mensurável por módulo

### Estrutura de Camadas

```
┌─────────────────────────────────────────────────────────────┐
│                          APP                                 │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ App.tsx - Orquestração, Roteamento, Providers         │  │
│  └───────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                        FEATURES                              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│  │  auth   │ │  hero   │ │services │ │ estate  │    ...    │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
├─────────────────────────────────────────────────────────────┤
│                         SHARED                               │
│  ┌─────────────────┐ ┌─────────────────┐                    │
│  │       ui/       │ │     utils/      │                    │
│  │ Button, Typo... │ │ AnimationCtx... │                    │
│  └─────────────────┘ └─────────────────┘                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Módulos do Sistema

### 1. Layout (`features/layout/`)

Componentes estruturais que aparecem em todas as páginas.

```typescript
// Navbar.tsx
interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

// Footer.tsx
interface FooterProps {
  onNavigate: (page: string) => void;
}
```

**Responsabilidades:**
- Navegação global
- Branding
- Links institucionais
- CTA principal

### 2. Hero (`features/hero/`)

Seção de destaque da landing page.

**Características:**
- Parallax com GSAP ScrollTrigger
- Tipografia animada
- CTAs com hover effects
- Background image otimizada

### 3. Services (`features/services/`)

Catálogo de serviços oferecidos.

```typescript
// serviceData.ts
interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

const SERVICE_DETAILS: Record<string, ServiceDetail>;
```

**Módulos:**
- `Services.tsx` - Grid de cards
- `ServiceCard.tsx` - Card individual
- `ServiceDetailPage.tsx` - Página de detalhes
- `serviceData.ts` - Dados estruturados

### 4. UI (`features/ui/`)

Design System compartilhado.

```typescript
// Button.tsx
type ButtonVariant = 'primary' | 'outline' | 'gold' | 'text';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

// Typography.tsx
const DisplayHeading: React.FC<{ children: React.ReactNode }>;
const SectionHeading: React.FC<{ children: React.ReactNode }>;
const BodyText: React.FC<{ children: React.ReactNode }>;

// OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}
```

### 5. Utils (`features/utils/`)

Contextos e utilitários compartilhados.

```typescript
// AnimationContext.tsx
interface SmoothScrollContextValue {
  lenis: Lenis | null;
}

const SmoothScrollProvider: React.FC<{ children: React.ReactNode }>;
const Reveal: React.FC<{ children: React.ReactNode; delay?: number }>;
```

---

## Sistema de Roteamento

### State-Based Router

O projeto utiliza roteamento baseado em estado React em vez de bibliotecas externas.

```typescript
type Page =
  | 'home'
  | 'login'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'ethics'
  | 'service-spa'
  | 'service-gastronomy'
  | 'service-suites'
  | 'request-invitation'
  | 'explore-estate';

const [currentPage, setCurrentPage] = useState<Page>('home');
```

**Vantagens:**
- Zero dependências externas
- Bundle size reduzido
- Controle total sobre transições
- Simplicidade para SPAs de médio porte

### Transições de Página

```typescript
const navigate = (page: string) => {
  setIsTransitioning(true);

  setTimeout(() => {
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  }, 500);
};
```

---

## Sistema de Animações

### Lenis Smooth Scroll

```typescript
// Inicialização
const lenisRef = useRef<Lenis | null>(null);

useEffect(() => {
  lenisRef.current = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });
}, []);
```

### GSAP Integration

```typescript
// Sincronização GSAP + Lenis
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.ticker.add((time) => {
    lenisRef.current?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}, []);
```

### Reveal Animation Component

```typescript
const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        }
      }
    );
  }, [delay]);

  return <div ref={ref}>{children}</div>;
};
```

---

## Otimizações de Performance

### 1. Code Splitting

```typescript
// Lazy loading de páginas
const LoginPage = lazy(() =>
  import('./features/auth/LoginPage')
    .then(m => ({ default: m.LoginPage }))
);

const ContactPage = lazy(() =>
  import('./features/contact/ContactPage')
    .then(m => ({ default: m.ContactPage }))
);
```

### 2. Image Optimization

```typescript
// OptimizedImage component
const OptimizedImage: React.FC<Props> = ({ src, alt, priority }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && <Skeleton />}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={loaded ? 'opacity-100' : 'opacity-0'}
      />
    </div>
  );
};
```

### 3. GPU Acceleration

```typescript
// Animações GPU-accelerated
gsap.to(element, {
  y: -50,
  force3D: true,
  willChange: 'transform',
});
```

### 4. Memory Management

```typescript
// Cleanup em useEffect
useEffect(() => {
  const ctx = gsap.context(() => {
    // Animações aqui
  });

  return () => ctx.revert(); // Cleanup
}, []);
```

---

## Padrões de Código

### Componentes

```typescript
// Padrão de componente funcional
interface ComponentProps {
  prop1: string;
  prop2?: number;
  onAction: () => void;
}

export const Component: React.FC<ComponentProps> = ({
  prop1,
  prop2 = 0,
  onAction,
}) => {
  // Hooks
  const [state, setState] = useState(initialState);
  const ref = useRef<HTMLDivElement>(null);

  // Effects
  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    };
  }, [dependencies]);

  // Handlers
  const handleClick = () => {
    onAction();
  };

  // Render
  return (
    <div ref={ref} onClick={handleClick}>
      {/* JSX */}
    </div>
  );
};
```

### Estilização

```typescript
// Tailwind com design tokens
<button className={cn(
  "px-6 py-3 font-sans text-sm tracking-wider uppercase",
  "bg-gold-400 text-estate-900",
  "hover:bg-gold-500 transition-colors duration-300",
  "focus:outline-none focus:ring-2 focus:ring-gold-400",
  className
)}>
  {children}
</button>
```

---

## Considerações de Segurança

### Headers HTTP (Cloudflare/Netlify)

```
# _headers
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; img-src 'self' https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;
```

### Práticas Implementadas

- Sanitização de inputs em formulários
- Validação client-side
- HTTPS enforced
- CSP headers configurados
- Sem exposição de dados sensíveis

---

## Deployment

### Build de Produção

```bash
pnpm run build
```

**Output:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [lazy-chunks].js
├── _redirects
└── _headers
```

### Plataformas Suportadas

- **Vercel** - Deploy automático via Git
- **Netlify** - SPA routing configurado
- **Cloudflare Pages** - Edge deployment
- **AWS S3 + CloudFront** - CDN global

---

## Métricas e Monitoramento

### Performance Budget

| Métrica | Budget | Atual |
|---------|--------|-------|
| First Contentful Paint | < 1.5s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Total Blocking Time | < 200ms | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |
| Bundle Size (gzip) | < 150KB | ✅ |

---

## Referências

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [Feature-Sliced Design](https://feature-sliced.design/)

---

**Documento mantido por:** Rodolfo Pironato @ TurnBold

*Última atualização: Dezembro 2024*
