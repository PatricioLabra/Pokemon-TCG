FROM node:22-alpine

WORKDIR /app

# Copiar los archivos de configuración
COPY package.json package-lock.json /app/

# Instalar dependencias
RUN npm install

# Copiar el código del proyecto
COPY . /app/

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar el servidor Next.js
CMD ["npm", "run", "dev"]
