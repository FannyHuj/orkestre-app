# Étape 1 : Build Angular
FROM node:21 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build 

# Étape 2 : Serve avec Nginx
FROM nginx:latest

COPY --from=build /app/dist/orkestre-app/browser /usr/share/nginx/html

EXPOSE 80
