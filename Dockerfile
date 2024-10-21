FROM node:21-alpine

WORKDIR /app/frontend

COPY package*.json .

RUN npm install

COPY . .

#RUN NEXT_DISABLE_ESLINT=true npm run build
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
