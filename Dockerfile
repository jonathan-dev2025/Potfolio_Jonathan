# Frontend Vite → fichiers statiques (Nginx)
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html vite.config.js postcss.config.js tailwind.config.js ./
COPY public ./public
COPY src ./src

ARG VITE_CONTACT_API_URL
ENV VITE_CONTACT_API_URL=${VITE_CONTACT_API_URL}

RUN npm run build

FROM nginx:alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
