# Usa la imagen oficial de PostgreSQL
FROM postgres:15

# Copia el archivo de respaldo de la base de datos al contenedor
COPY database_backup.sql /docker-entrypoint-initdb.d/

# Define los permisos si los hay
RUN chmod a+r /docker-entrypoint-initdb.d/*
