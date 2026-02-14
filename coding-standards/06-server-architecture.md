# Server Architecture

- Minimal: api, services, utils, types
- No repository layer
- API routes: parse request, call service, return Nexus-Req response
- Services: business logic only
- Utilities: shared helper functions, fully tested
- Types: separate file
- Human-friendly endpoint names