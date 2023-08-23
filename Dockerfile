# Stage 1: Build the React.js application
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the built application using a lightweight HTTP server
FROM node:14-alpine

WORKDIR /app

COPY --from=build /app/build /app/build

RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-s", "build", "-l", "8080"]
