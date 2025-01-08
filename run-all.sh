#!/bin/bash

# Contenedores definidos en el docker-compose.yml
declare -a container_names=("pokemon-tcg-backend" "pokemon-tcg-frontend" "pokemon-tcg-db")

echo "Iniciando proceso para el docker-compose unificado..."

# Detener y eliminar contenedores existentes si están en ejecución
for container_name in "${container_names[@]}"; do
  if [ "$(docker ps -aq -f name=${container_name})" ]; then
    echo "Deteniendo y eliminando el contenedor ${container_name}..."
    docker rm -f $(docker ps -aq -f name=${container_name})
  fi
done

# Eliminar imágenes para asegurar que no se use el caché
echo "Eliminando imágenes y volúmenes huérfanos..."
docker-compose down --rmi all --volumes --remove-orphans

# Reconstruir y levantar los servicios definidos en el docker-compose.yml unificado
echo "Construyendo imágenes sin usar caché..."
docker-compose build --no-cache

echo "Levantando servicios en modo detacheado..."
docker-compose up -d

if [ $? -eq 0 ]; then
  echo "Todos los servicios se han levantado correctamente."
else
  echo "Error al levantar los servicios."
fi

# Pausa al final (opcional)
read -p "Presiona [Enter] para cerrar..."
