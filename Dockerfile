## developemnt
FROM node:16-alpine AS development

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run" ,"start"]


## builder
FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --only=prod

COPY . .

RUN npm run build


## production with nginx
FROM nginx:1.21.0-alpine AS production

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
