#### 1. Builder
FROM node:latest as portfolio_build

RUN npm install react-scripts -g --silent

WORKDIR /applications

COPY package.json /applications/
COPY package-lock.json /applications/

RUN npm ci

ENV PATH /applications/node_modules/.bin:$PATH
COPY public /applications/public
COPY src /applications/src
#COPY .env.production .

RUN npm run build

#### 2. Leaf
FROM nginx:stable-alpine as portfolio
COPY --from=portfolio_build /applications/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENV HTTPS true

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
