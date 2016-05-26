codigo-embebido
===============
![Thumb](http://www.e-quipu.pe/dinamic/equipo/original/croppedImg_7ib5eEHdRf.jpeg)

url: http://spocksbeard1306.github.io/codigo-embebido/

### Config.json
El archivo `config.json` contiene informacion que se utilizara en el proceso de construcción.

### Como utilizar
Instalar dependencias
``` bash
$ npm install
```
Para construir (por ahora solo sass).
``` bash
$ npm run build
```
Para construir continuamente.
``` bash
$ npm run dev
```
Para construir y minimizar.
``` bash
$ npm run deploy
```
### Estructura de carpetas

Codigo-embebido

sass: Contiene los archivos scss. Al ejecutar en el terminal, dentro de la carpeta del proyecto
``` bash
$ sass --watch sass/main.scss:public/stylesheets/main.css 	

creándose así el directorio stylesheets dentro de la carpeta public	

views: Contiene los archivos .jade. Al ejecutar en el terminal, dentro de la carpeta contenedora del proyecto:
``` bash
$ jade --watch codigo-embebido/views/index.jade --out codigo-embebido -P

obtendremos el archivo index.html compilado (footer.jade compila junto a index.jade)

Asimismo, con 
``` bash
$ jade --watch codigo-embebido/views/new.jade --out codigo-embebido -P

obtendremos el archivo new.html inmediatamente dentro a codigo-embebido

Por otro lado, 
``` bash
$ jade --watch codigo-embebido/views/question.jade --out codigo-embebido -P

trae question.html

	

   