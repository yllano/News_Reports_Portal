# ---- Etapa 1: Build ----
FROM node:20-alpine AS build

WORKDIR /app

# Copiar manifiestos primero para aprovechar caché de Docker
COPY portal-idea/package*.json ./
RUN npm install

# Copiar el resto del código fuente y compilar
COPY portal-idea/ .
RUN npm run build

# ---- Etapa 2: Serve ----
FROM nginx:stable-alpine AS serve

# Copiar el build estático al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
