#!/bin/bash

# Rutas de las subcarpetas
declare -a services=("database" "backend" "frontend")

# Iterar sobre cada carpeta y ejecutar docker-compose up
for service in "${services[@]}"; do
  echo "Levantando servicios en la carpeta $service..."

  # Eliminar contenedores existentes si están en ejecución
  container_name="pokemon-tcg-${service}"
  if [ "$(docker ps -aq -f name=${container_name})" ]; then
    echo "Deteniendo y eliminando el contenedor ${container_name}..."
    docker rm -f $(docker ps -aq -f name=${container_name})
  fi

  # Eliminar imágenes para asegurar que no se use el caché
  echo "Eliminando imágenes de caché para el servicio ${service}..."
  docker-compose -f ./$service/docker-compose.yml down --rmi all --volumes --remove-orphans
  
  # Levantar el servicio con build sin caché
  (cd $service && docker-compose build --no-cache)
  (cd $service && docker-compose up -d)
  
  if [ $? -eq 0 ]; then
    echo "Servicio $service levantado correctamente."
  else
    echo "Error al levantar el servicio $service."
  fi
done

echo "Todos los servicios se han levantado."

# Pausa al final
read -p "Presiona [Enter] para cerrar..."
