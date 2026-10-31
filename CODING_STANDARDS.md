# Coding standards

Judgement calls for review. Mechanical rules live in `pnpm check`.

- **Literal Tailwind classes.** Write every class name as a whole string in source; Tailwind v4 only generates classes it can read there. Pick a variant from a lookup map (`{ client: "text-client" }`), never build one with a template like `` `text-${kind}` `` or `var(--color-${kind})`.
