FROM python:3.9-slim

WORKDIR /app

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y libpq-dev gcc

# Copiar el archivo requirements.txt
COPY ./requirements.txt /app/

# Instalar las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código del proyecto
COPY . /app/

# Configuración de Django
ENV PYTHONUNBUFFERED 1

# Exponer el puerto
EXPOSE 8000

# Comando para iniciar el servidor Django
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
