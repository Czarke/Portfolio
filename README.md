# seanpatterson.me

Personal portfolio site and technical blog. Built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org), and [Tailwind CSS](https://tailwindcss.com). Blog posts are written in MDX.

Live at [seanpatterson.me](https://seanpatterson.me).

## Architecture

The site is deployed to two environments in parallel:

1. **AWS Amplify** — public-facing deployment at [seanpatterson.me](https://seanpatterson.me). Serves the site with SSR, handles DNS and TLS via Route 53.
2. **Homelab Kubernetes** — private deployment at `portfolio.homelab.seanpatterson.me`, reachable over [Tailscale](https://tailscale.com). Container image built on every `main` push, pushed to GHCR, and deployed via ArgoCD from the [homelab-infra](https://github.com/Czarke/homelab-infra) repo.

The Amplify deployment is the source of truth for public traffic. The homelab deployment exists as a second environment to exercise the GitOps pipeline and so I have the site available locally even if Amplify is down.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The GitHub activity graph and recent repos section rely on the GitHub API — set `GITHUB_TOKEN` in a `.env.local` file to avoid rate limits.

## Content

Blog posts live in [`content/`](./content) as `.mdx` files. Frontmatter format:

```mdx
---
title: "Post title"
date: "YYYY-MM-DD"
description: "Short description for the post list page."
---

Body content here.
```

Posts are automatically picked up by the `[slug]` route under [`src/app/blog/`](./src/app/blog).

## Deploy pipeline

See [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

1. Docker image built with the `GITHUB_TOKEN` baked in at build time (needed for the GraphQL contribution calendar)
2. Pushed to `ghcr.io/czarke/portfolio:latest` and `:${sha}`
3. Image tag updated in `homelab-infra/manifests/portfolio/deployment.yaml`
4. ArgoCD syncs the new tag to the cluster

A separate workflow ([`.github/workflows/daily-rebuild.yml`](./.github/workflows/daily-rebuild.yml)) triggers Amplify to rebuild once a day so the GitHub contribution graph stays fresh without client-side API calls.
