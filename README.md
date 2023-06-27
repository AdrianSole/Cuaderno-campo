# Instalación y uso

- _(Requisitos previos: Node, MongoDB)_

## 1. Clonar el repositorio

```console
git clone https://github.com/Proyectos-DAW-Los-Enlaces/proyecto-daw-junio-adrian-sole.git
```

## 2. Instalar las dependencias

Desde las carpetas **/cliente** y **/servidor** usar el comando:

```console
npm install
```

## 3. Configurar ruta BBDD

En el archivo **database.ts** cambiar la ruta a la que se conecta mongoDB por la que se conecta en tu equipo:

```ts
(async () => {
    try {
        const db = await mongoose.connect(
            `AQUI VA TU RUTA EJ: mongodb://127.0.0.1:27017/myapp`
        );
        console.log("Database is connected: ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
```

Esto es cambiar el valor en ```mongoose.connect```, este valor se puede obtener a traves de la terminal de comandos.

```console
mongo

db.getMongo()
```

Con el comando ```mongo``` ejecutamos el shell integrado de mongo.

Otra forma de obtenerlo es a traves de **MongoDB Compass**, _(MongoDB Compass es una interfaz gráfica de usuario (GUI) que proporciona una forma visual de interactuar con bases de datos MongoDB. )_.

Para obtener la ruta de la conexion desde **MongoDB Compass**:

![compass](/docs/imgDocs/compass.png)

Pegamos la ruta que copiamos al hacer click en el boton.

## Ejecutar el programa

Desde la ruta **/src/cliente** ejecutar el comando:

```console
npm run dev
```

En otra terminal, desde la ruta **/src/servidor** ejecutar el comando:

```console
npm run dev
```

En otra terminal iniciamos la **BBDD** con el comando:

```console
mongosh
```
