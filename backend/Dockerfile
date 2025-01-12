# Usamos la imagen base de Python
FROM python:3.12-slim

# Definir el directorio de trabajo en el contenedor
WORKDIR /app

# Instalar dependencias del sistema necesarias para la base de datos PostgreSQL
RUN apt-get update && apt-get install -y libpq-dev gcc

# Copiar el archivo requirements.txt al contenedor
COPY requirements.txt /app/

# Instalar las dependencias de Python
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copiar todo el código del proyecto al contenedor
COPY ./ app/

# Configuración de Django
ENV PYTHONUNBUFFERED 1

# Exponer el puerto donde Django ejecutará el servidor
EXPOSE 8000

# Comando para aplicar las migraciones y luego iniciar el servidor Django
CMD ["sh", "-c", "python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8000"]
