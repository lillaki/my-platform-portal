# Build Your Own Platform

Welcome to the **Platform Build Guide**. This page is authored in Markdown so it's easy to maintain, review, and contribute to.

> Tip: Edit `src/content/build-your-platform.md` to change this content. Add images to `/public/images` and reference them like `![alt text](/images/your-image.png)`.

## Core principles

- Self-service
- Standardization
- Observability
- Security by default

## Quick start

1. Define target users and workflows
2. Choose a technical foundation (cloud, runtime, data)
3. Create golden templates
4. Automate onboarding
5. Document everything

## Images

You can embed images easily:

![Example placeholder](/images/background.jpeg)

## Code snippets

Use fenced code blocks. They get a **Copy** button automatically.

```bash
# Create a new service from a template
npx create-my-service my-api
cd my-api
git init && git add . && git commit -m "feat: bootstrap"
```

```ts
// src/index.ts
import express from "express";

const app = express();
app.get("/healthz", (_, res) => res.json({ ok: true }));
app.listen(3000, () => console.log("Up on :3000"));
```

### Inline code

Use `inline code` for short bits.

## Next steps

- Link to your internal docs
- Add architecture diagrams
- Include a checklist for production readiness
