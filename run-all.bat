@echo off
SET container_names=pokemon-tcg-backend pokemon-tcg-frontend pokemon-tcg-db

echo Iniciando proceso para el docker-compose unificado...

REM Detener y eliminar contenedores existentes si están en ejecución
FOR %%i IN (%container_names%) DO (
  docker ps -aq -f name=%%i > nul
  IF %ERRORLEVEL% EQU 0 (
    echo Deteniendo y eliminando el contenedor %%i...
    docker rm -f %%i
  )
)

REM Eliminar imágenes para asegurar que no se use el caché
echo Eliminando imágenes y volúmenes huérfanos...
docker-compose down --rmi all --volumes --remove-orphans

REM Reconstruir y levantar los servicios definidos en el docker-compose.yml unificado
echo Construyendo imágenes sin usar caché...
docker-compose build --no-cache

echo Levantando servicios en modo detacheado...
docker-compose up -d

IF %ERRORLEVEL% EQU 0 (
  echo Todos los servicios se han levantado correctamente.
) ELSE (
  echo Error al levantar los servicios.
)

REM Pausa al final
pause
