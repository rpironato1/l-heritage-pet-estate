# Política de Segurança

## Versões Suportadas

| Versão | Suportada |
|--------|-----------|
| 1.0.x  | ✅ Sim    |
| < 1.0  | ❌ Não    |

## Reportando Vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança, por favor:

1. **NÃO** abra uma issue pública
2. Envie um email para: security@turnbold.com
3. Inclua detalhes da vulnerabilidade
4. Aguarde confirmação antes de divulgar

### O que incluir no relatório

- Descrição da vulnerabilidade
- Passos para reproduzir
- Impacto potencial
- Sugestão de correção (se houver)

### Tempo de Resposta

- **Confirmação inicial**: 48 horas
- **Avaliação completa**: 7 dias
- **Correção**: Dependendo da severidade

## Práticas de Segurança Implementadas

### Headers HTTP

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: [configurado]
```

### Proteções

- HTTPS enforced em produção
- CSP headers configurados
- Sanitização de inputs
- Sem exposição de dados sensíveis no client

### Dependências

- Atualizações regulares de dependências
- Monitoramento via `pnpm audit`
- Lockfile versionado

## Contato

- **Email**: security@turnbold.com
- **Website**: https://turnbold.com

---

**TurnBold Security Team**
