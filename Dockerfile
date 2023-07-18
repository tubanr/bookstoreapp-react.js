FROM node:20.3.1-alpine

ENV NODE_ENV development

WORKDIR /code/ux

COPY ./package.json /code/ux
# COPY ./package-lock.json /code/ux
RUN npm cache clean --force
RUN npm install --silent 

COPY ./ /code/ux

EXPOSE 3000

CMD ["npm", "start"]