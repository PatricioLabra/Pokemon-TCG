# Usa la imagen oficial de PostgreSQL
FROM postgres:15

# Copia el archivo de respaldo de la base de datos al contenedor
COPY database_backup.sql /docker-entrypoint-initdb.d/

# (Opcional) Copia otros scripts que desees ejecutar al inicio
#COPY init.sql /docker-entrypoint-initdb.d/

# Asegúrate de que los permisos sean correctos para los archivos copiados
RUN chmod a+r /docker-entrypoint-initdb.d/*
