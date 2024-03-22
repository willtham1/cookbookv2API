# cookbookv2 API
This is the back-end API for the cookbookv2. This is a RESTful API with CRUD operations.

## Tech Stack
- Node.js as our runtime environment
- NestJS our Node.js framework
- Docker for containerizing our database
- PostgreSQL
- Prisma

##
Launch Project
```bash
npm install
npm run dev:start
```
Launch backend container with docker image
Make sure you have docker installed before running
```bash
docker-compose up -d
```
Launch seed
This creates 2 mock data from the seed.ts file
```bash
npx prisma db seed
```
If you make any changes to schema.prisma use
```bash
npx prisma migrate
```