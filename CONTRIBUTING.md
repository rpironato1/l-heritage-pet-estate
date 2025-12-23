# Guia de Contribuição

Obrigado pelo interesse em contribuir com o L'Héritage Pet Estate! Este documento fornece diretrizes para manter a qualidade e consistência do código.

---

## Código de Conduta

Este projeto segue um Código de Conduta que todos os contribuidores devem respeitar. Por favor, seja respeitoso e profissional em todas as interações.

---

## Requisitos de Desenvolvimento

### Ambiente

- **Node.js** 20.x ou superior
- **pnpm** 8.x ou superior
- **Editor** com suporte a TypeScript e ESLint

### Setup Inicial

```bash
# Clone o repositório
git clone https://github.com/turnbold/l-heritage-pet-estate.git
cd l-heritage-pet-estate

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev
```

---

## Padrões de Código

### TypeScript

```typescript
// ✅ Correto - Tipos explícitos
interface UserProps {
  name: string;
  email: string;
  onSubmit: (data: FormData) => void;
}

// ❌ Incorreto - Uso de any
const handleData = (data: any) => { ... }
```

### Componentes React

```typescript
// ✅ Correto - Functional component com tipos
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ❌ Incorreto - Sem tipagem, props inline
export const Button = (props) => {
  return <button {...props} />;
};
```

### Estilização com Tailwind

```typescript
// ✅ Correto - Design tokens
<div className="bg-estate-900 text-gold-400 p-6">

// ❌ Incorreto - Valores hardcoded
<div className="bg-[#1A1F18] text-[#D4AF37] p-[24px]">
```

### Imports

```typescript
// ✅ Correto - Ordem de imports
import React, { useState, useEffect } from 'react';      // React
import { gsap } from 'gsap';                             // Libs externas
import { Button } from '@/features/ui/Button';           // Componentes internos
import { IMAGES } from '@/constants';                    // Constantes
import type { ServiceData } from './types';              // Types

// ❌ Incorreto - Imports desorganizados
import { IMAGES } from '@/constants';
import React from 'react';
import { Button } from '@/features/ui/Button';
```

---

## Estrutura de Pastas

### Criando uma Nova Feature

```
features/
└── nova-feature/
    ├── NovaFeature.tsx      # Componente principal
    ├── components/          # Sub-componentes (se necessário)
    │   └── SubComponent.tsx
    ├── hooks/               # Hooks customizados (se necessário)
    │   └── useNovaFeature.ts
    ├── types.ts             # Tipos da feature
    └── index.ts             # Exports públicos
```

### Regras de Estrutura

1. **Máximo 300 linhas** por arquivo `.tsx`
2. **Um componente principal** por feature
3. **Exports explícitos** via `index.ts`
4. **Tipos colocados** em arquivos separados quando > 20 linhas

---

## Commits

### Formato

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos Permitidos

| Tipo | Descrição |
|------|-----------|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `style` | Formatação (sem mudança de código) |
| `refactor` | Refatoração |
| `perf` | Melhoria de performance |
| `test` | Adição/correção de testes |
| `chore` | Tarefas de manutenção |

### Exemplos

```bash
# Boa mensagem de commit
feat(services): add service detail page with parallax

# Commit de correção
fix(navbar): resolve mobile menu toggle on iOS

# Commit de documentação
docs(readme): update installation instructions
```

---

## Pull Requests

### Checklist

Antes de abrir um PR, verifique:

- [ ] Código segue os padrões estabelecidos
- [ ] Não há erros de TypeScript (`pnpm run build`)
- [ ] Componentes são responsivos (mobile/tablet/desktop)
- [ ] Animações estão suaves (60fps)
- [ ] Não há console.log ou debuggers
- [ ] README atualizado se necessário

### Template de PR

```markdown
## Descrição
Breve descrição das mudanças

## Tipo de Mudança
- [ ] Nova feature
- [ ] Correção de bug
- [ ] Refatoração
- [ ] Documentação

## Screenshots (se aplicável)
[Adicione screenshots aqui]

## Checklist
- [ ] Build passa sem erros
- [ ] Testado em mobile
- [ ] Testado em desktop
```

---

## Animações

### Boas Práticas GSAP

```typescript
// ✅ Correto - Com cleanup
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(element, {
      y: -50,
      duration: 1,
      force3D: true,
    });
  }, ref);

  return () => ctx.revert();
}, []);

// ❌ Incorreto - Sem cleanup (memory leak)
useEffect(() => {
  gsap.to(element, { y: -50 });
}, []);
```

### Performance

- Use `force3D: true` para GPU acceleration
- Evite animações em propriedades que causam reflow (width, height)
- Prefira `transform` e `opacity`
- Limite animações simultâneas

---

## Testes

### Manuais (Obrigatórios)

Antes de submeter:

1. **Navegação** - Todas as rotas funcionam
2. **Responsividade** - Mobile, tablet, desktop
3. **Animações** - Smooth scrolling, parallax
4. **Console** - Zero erros

### Automatizados (Futuro)

```bash
# Executar testes (quando implementados)
pnpm run test
```

---

## Dúvidas

Para dúvidas sobre contribuição:

- Abra uma issue com a tag `question`
- Entre em contato: contact@turnbold.com

---

**Mantido por:** Rodolfo Pironato @ TurnBold
