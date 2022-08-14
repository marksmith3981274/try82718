FROM node:16-slim
WORKDIR /mnt
COPY index.js .
COPY package.json .
COPY package-lock.json .
RUN npm i
EXPOSE 3000
CMD node .