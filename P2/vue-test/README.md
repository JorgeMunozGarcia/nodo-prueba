# nodo-test

> Prueba practica

# instalar dependencias
npm install

# correr el proyecto
npm run dev

```

Este ejercicio consta en obtener el detalle de cada personaje de Game Of Thrones a través del api (https://api.got.show/api/characters/byId/:id)
donde ":id" es el id del personaje en especifico que se desea obtener la información.

Dentro de la carpeta "src", podremos encontrar todo el core del sistema.
La carpeta "components", contiene todos los componentes utilizados (List.Vue), aquí debería agregarse el componente (Detail.vue), para poder mostrar el detalle de cada personaje.

Dentro de la carpeta "services", se encuentran 2 archivos:
    1. main.service, es el archivo principal donde se tiene la url base del api
    2. got.service, contiene un conjunto de funciones encargadas cada una de realizar un llamado a un endpoint en especifico del api de GoT, 
       en este archivo se debe programar la lógica de la función "getACharacter" para solicitar el detalle de un carácter de GoT.

El archivo App.Vue, es el archivo principal que presenta Vue JS, donde se van instanciando cada uno de los componentes que se desea visualizar (con la ayuda del vue-router "https://router.vuejs.org/guide/")

El archivo "main.js", es el archivo principal de configuración del sistema, en el esta instanciado y configurado el Vue-Router, y si se desea utilizar alguna librería de tercero que requiera ser configurada en Vue, en este archivo es donde debe configurarse.

El archivo "routes.js", es el archivo principal de rutas del sistema, donde se asocia una url a un componente, en este archivo se debera agregar la ruta "/detail" y asociarla al componente (Detail.vue).

El resto de archivos son configuraciones extras de vue-cli.

Todo estilo que se le de a ambos componentes viene como un plus y sera considerado en la evaluación de la prueba.

Adicionalmente si se desea consumir y aplicar otros recursos del api, también sera considerado como un plus al momento de evaluar la prueba.
```



## Cambios incluidos en Fork 📄

Se incluyen las siguientes dependencias o paquetes (basicamente para dar estilos al proyecto)
* [bootstrap-vue](https://github.com/bootstrap-vue/bootstrap-vue)
* [sass-loader](https://github.com/webpack-contrib/sass-loader)
* [node-sass](https://github.com/sass/node-sass)
* [gsap](https://github.com/greensock/GreenSock-JS)

## Detalle solucion empleada ⌨️

_Para el empleo de la solucion se creo un componente de **Detalle** del personaje y este es invocado a traves de su url desde metodo pre definido en componente **List**_
```
goToDetail(id)
```

_En el archivo ruotes se incluyo la nueva ruta de detalle del personaje (/details/:id) y luego se invova como un dialogo modal desde el listado inicial_

_Al invocarse el detalle, en los parametros de la url viaja el id del personaje, este se evalua en el evento **created** y desde aca se llama a la API para obtener el detalle (a traves del servicio **gotService**)_

_Una vez obtenida la informacion desde la API, se recorren las propiedades del objeto y se muestran en el dialogo modal_

_Finalmente, al presionar el boton cerrar del dialogo modal, se vuelve al listado de personajes (**this.$router.go(-1)**)_