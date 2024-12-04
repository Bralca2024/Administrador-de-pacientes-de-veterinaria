## Breve explicación

Aplicación de seguimiento y administración de pacientes de veterinaria que permite a los usuarios ver, agregar, editar y eliminar citas. La información se almacena en `localStorage`, garantizando la persistencia de datos.

## Clonar repositorio

Para comenzar a trabajar con este proyecto, sigue los siguientes pasos para clonar el repositorio:

### 1. Copia la URL del Repositorio

- Ve a la página del repositorio en GitHub.
- Haz clic en el botón **Code**.
- Copia la URL del repositorio.

### 2. Abre tu Terminal

- Si estás en **Windows**, puedes usar Git Bash o cualquier terminal compatible con Git.
- En **macOS** y **Linux**, puedes usar la terminal predeterminada.

### 3. Escribe el Comando para Clonar

- En la terminal, navega hasta el directorio donde deseas clonar el repositorio. Por ejemplo:
  ```bash
  cd "C:\Users\Usuario\Desktop\GitHub Clone"
  ```
- Usa el siguiente comando, reemplanzando la URL_DEL_REPOSITORIO por la URL que copiaste:

```bash
  `git clone URL_DEL_REPOSITORIO`
```

### 4.- Accede al repositorio clonado

- Después de clonar, ingresa al directorio del proyecto clonado con el comando:

```bash
`cd "nombre_del_repositorio"`
```

Una vez dentro del directorio, puedes comenzar a trabajar con el proyecto y utilizar otros comandos de Git para gestionar el código.

## Instalar dependencias

Estos son los pasos a seguir para instalar todas las dependencias necesarias para que el proyecto se ejecute adecuadamente.

### 1. Abrir el Proyecto en tu Editor de Código

- Si utilizas **Visual Studio Code (VSCode)**, puedes abrir el editor y arrastrar la carpeta del proyecto seleccionado directamente a la ventana del editor.

- Otra forma de hacerlo es acceder a la carpeta donde está ubicado el proyecto. Selecciona la ruta correspondiente y escribe `cmd` en la barra de direcciones del explorador de archivos. Esto abrirá la terminal en esa ubicación. Una vez abierta la terminal, simplemente escribe el siguiente comando:
  ```bash
  code .
  ```

### 2. Abrir la terminal

- Una vez dentro del editor, accede a la terminal. Para ello, localízate en la parte superior de VSCode y haz clic en el menú `...`. Selecciona la opción `Terminal > Nueva Terminal`.

- Otra opción más práctica es utilizar el atajo de teclado `Ctrl + Shift + ñ`.

### 3. Ubicar e instalar las dependencias

- Asegúrate de estar en la carpeta del proyecto (por ejemplo, `C:\Users\Usuario\Desktop\Administrador de pacientes`). Si no lo estás, navega a ella con el siguiente comando:

```bash
cd "C:\Users\Usuario\Desktop\Administrador de pacientes"
```

- Instala los paquetes necesarios ejecutando el siguiente comando:

```bash
npm i
```

## Correr la aplicación

- Una vez que se hayan instalado todas las dependencias, ejecuta el siguiente comando en la terminal.

```bash
npm run dev
```
