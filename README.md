
# Jason Morofsky — Portfolio (portfolio_v3)

This repository contains the source for the personal portfolio website hosted at https://jasonmorofsky.com. The site is a single-page React application delivering portfolio content, projects, and contact information; a small Node-based API provides statistics.

**Self-hosting**: The application is self-hosted on a Debian machine. DNS and networking are handled by CloudFlare and a CloudFlare Zero Trust tunnel. Services are containerized with Docker and orchestrated locally with `docker-compose`.

**Repository layout**
- **public**: Front-end React code, build scripts, and static assets. See [public/package.json](public/package.json) and source in [public/src](public/src).
- **api**: Minimal Node-based API that serves stats. See [api/package.json](api/package.json) and [api/src/server.mjs](api/src/server.mjs).
- **nginx**: Nginx configuration used in the public container. See [nginx/default.conf](nginx/default.conf).
- **docker-compose.yml**: Top-level Compose file that builds and runs the `api` and `public` services.

**Technology summary**
- **Front-end**: React (JSX) components in `public/src`, Tailwind CSS for styling (see [public/tailwind.config.js](public/tailwind.config.js)), PostCSS for processing.
- **Back-end**: Node (ES module `.mjs`) — a small server under `api/src` serving and updating `stats.json`.
- **Containerization**: Dockerfiles in `api/` and `public/` and service composition via `docker-compose.yml`.
- **Reverse proxy / static server**: Nginx serves the built static site from the `public` container and proxies API requests to the `api` container using the mounted `nginx/default.conf`.
- **Hosting / networking**: Debian host, CloudFlare DNS and Zero Trust tunnel (CloudFlare Tunnel) for secure connectivity and TLS.

Quick run / development
- To build and run the full stack with Docker Compose:

```bash
docker-compose up --build -d
```

- To inspect logs:

```bash
docker-compose logs -f public
docker-compose logs -f api
```

- Local development (front-end): see [public/package.json](public/package.json) for available npm scripts. Typical steps:

```bash
cd public
npm install
npm run dev
```

- Local development (api): see [api/package.json](api/package.json) for scripts. A `.env` file must be configured in `api/` for GitHub's API auth.
