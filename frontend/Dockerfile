# Usamos la imagen base de Node.js
FROM node:20.12.2-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

# Instalar las dependencias del frontend
RUN npm install

# Copiar todo el código del frontend al contenedor
COPY ./ app/

# Exponer el puerto 3000 para Next.js
EXPOSE 3000

# Comando para iniciar la aplicación de Next.js
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
