# Menggunakan image Node.js sebagai base
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json untuk menginstall dependensi
COPY package*.json ./
RUN npm install

# Copy seluruh proyek ke dalam container
COPY . .

# Build aplikasi React
RUN npm run build

# Stage kedua, menggunakan Nginx untuk production
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
