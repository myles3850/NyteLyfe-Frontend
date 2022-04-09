FROM node:latest as builder
WORKDIR /usr/src/build
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest as site
COPY --from=builder /usr/src/build/build /usr/share/nginx/html 
EXPOSE 80