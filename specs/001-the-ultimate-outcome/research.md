# Research for Project Management System

## Performance Goals

- **Decision**: Start with a target of 500 requests per second for the API, with a p95 latency of under 200ms.
- **Rationale**: This is a reasonable starting point for a new project management system. It can be adjusted as we gather more data on usage patterns.
- **Alternatives considered**: Higher performance targets were considered but deemed unnecessary for the initial version.

## Constraints

- **Decision**: The application should be able to run on a single server with 2GB of RAM.
- **Rationale**: This is a common and cost-effective server configuration.
- **Alternatives considered**: None.

## Scale/Scope

- **Decision**: The initial version should support up to 1,000 users and 10,000 tasks.
- **Rationale**: This is a reasonable scope for the initial version and can be scaled up in the future.
- **Alternatives considered**: None.
