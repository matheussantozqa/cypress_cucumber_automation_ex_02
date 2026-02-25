FROM cypress/included:13.6.0

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["npx", "cypress", "run", "--env", "allure=true"]