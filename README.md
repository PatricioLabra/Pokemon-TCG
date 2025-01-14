# **Pokemon-TCG**    ![pokeball](https://github.com/user-attachments/assets/f8703dd3-38f2-4ec0-81c9-a679d1d747f4)
Guía para ejecutar la aplicación en un ambiente local.

## **Requisitos Previos**
- Tener **Docker** instalado en tu máquina.
- Tener **Python** y **Nodejs** instalado.

---

## **Ejecución de la Aplicación con Docker**
1. **Copiar el archivo `.env` (de docker)**  
   Coloca el archivo `.env` en la **ruta base del proyecto** (`Pokemon-TCG`).

2. **Ejecutar el script**  
   Usa el archivo `run-all.sh` o `run-all.bat` para levantar la aplicación. Este script:  
   - Ejecuta el **docker-compose**.  
   - Crea los contenedores necesarios para el **frontend**, **backend** y la **base de datos**.  
   - Restaura la base de datos desde el backup proporcionado.

---

## **Ejecución Manual (Frontend y Backend Locales)**

### **1. Preparar el entorno**
- Copia el archivo `.env` (de desarrollo):
  - **Frontend**: Coloca el `.env` en la ruta base del frontend.
  - **Backend**: Coloca el `.env` en la carpeta `./django_project`.

---

### **2. Configurar y ejecutar el backend (desde la ruta ./backend)**
1. **Crear entorno virtual**  
   ```bash
   python -m venv venv
   ```
2. **Activar entorno virtual**  
   - En Windows:  
     ```bash
     .\venv\Scripts\activate
     ```  
   - En Mac/Linux:  
     ```bash
     source venv/bin/activate
     ```
3. **Instalar dependencias**  
   ```bash
   pip install -r requirements.txt
   ```
4. **Aplicar migraciones** (opcional)  
   ```bash
   python manage.py migrate
   ```
5. **Ejecutar el servidor del backend**  
   ```bash
   python manage.py runserver
   ```

---

### **3. Configurar y ejecutar el frontend (desde la ruta ./frontend)**
1. **Instalar dependencias**  
   ```bash
   npm install
   ```
2. **Levantar el servidor del frontend**  
   ```bash
   npm run dev
   ```

---

## **Notas Adicionales**
- La base de datos condicionalmente debe ser levantada con docker. 
- Si encuentras problemas, verifica que el archivo `.env` esté correctamente configurado.
- Usa los logs de Docker o los servidores locales para identificar posibles errores.


![pikachu-deliciousdaywithpokemon](https://github.com/user-attachments/assets/35edb554-fe48-4fbe-8717-86a4c32e998e)



