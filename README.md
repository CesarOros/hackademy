# hackademy

Este pequeño proyecto fue realizado para concursar por una beca en hackademy; la finalidad de este es crear un endpoint con python (se le agregó el detalle de html, javascript y css) para darle un plus a su funcionalidad. El formulario en HTML te pide 3 datos: nombre, correo y kilometros; si los kilometros ingresados son mayores a 4 se insertará en una base de datos, por el contrario mandará un mensaje de que debe esforzarse un poco mas.
Para que esto funcione se creó un endpoint con php, para poder correrlo se necesita instalar la siguiente libreria:

$ pip install endpoints

El archivo usado está dentro de la carpeta api con el nombre de controllers.py.
Para poder usar este endpoint de manera local se debe ejecutar la siguiente linea en la misma direccion en la que se encuentra el archivo

$ endpoints --prefix=controllers --host=localhost:8000

Con esto se tendrá abierto el endpoint para recibir las solicitudes:
esta sería la URL usada: http://127.0.0.1:8000/

La aplicación tambien requiere el uso de una libreria de mysql, esta puede ser instalada con el siguiente comando(se puede usar cualquier base de datos, pero se tendrán que cambiar algunas lineas en el archivo de conexion.py):

$ pip install pymysql

En cuestión de la base de datos cree una base local con wamp server llamada hackademy y dentro de ella una tabla con los siguientes campos: id(auto_increment), nombre(texto), correo(texto), kilometros(float), fecha_inserción(date).

En cuestion de la parte del front end es HTML5 y CSS. La funcionalidad se le dió con JQuery para que se le pudieran enviar los datos al endpoint.
Para probar la aplicación solo se tendría que abrir el archivo index.html y listo. (no olvides de abrir tu servidor en donde está alojada la base de datos, en mi caso fue en wamp server, y el endpoint)
