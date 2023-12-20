# stage 1 - build environment

FROM node:latest as build

WORKDIR /build
RUN apt-get update

COPY . .

# install dependencies and build
RUN yarn install
RUN yarn build


# stage 2 - production environment
FROM nginx:1.23
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# copy the build result from stage 1
COPY --from=build /build/build ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
