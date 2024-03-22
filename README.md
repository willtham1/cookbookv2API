# cookbookv2 API
This is the back-end API for the cookbookv2. This is a RESTful API with CRUD operations.

## Tech Stack
- Node.js as our runtime environment
- NestJS our Node.js framework
- Docker for containerizing our database
- PostgreSQL
- Prisma

## How to
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

## Demo Pictures
![Get](https://github.com/willtham1/cookbookv2API/blob/main/assets/Get.png)
![Get by ID](https://github.com/willtham1/cookbookv2API/blob/main/assets/Get%20with%20ID.png)
![Post](https://github.com/willtham1/cookbookv2API/blob/main/assets/Post.png)
![Patch/Put](https://github.com/willtham1/cookbookv2API/blob/main/assets/Patch.png)
![Delete](https://github.com/willtham1/cookbookv2API/blob/main/assets/Delete.png)
