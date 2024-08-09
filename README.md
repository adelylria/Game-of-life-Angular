# Ejercicio: Implementación del Juego de la Vida

El "Juego de la Vida" es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Se juega en una cuadrícula bidimensional, donde cada celda puede estar viva o muerta. La evolución de las celdas a través del tiempo se rige por un conjunto de reglas simples.

### Objetivo:
Implementar el Juego de la Vida utilizando un lenguaje de programación a tu elección (por ejemplo, Python, Java, C++). El programa debe simular el comportamiento de la cuadrícula a lo largo de varias generaciones y mostrar el resultado en cada paso.

### Requisitos:
1. Inicialización del Tablero:

    - El tablero debe ser una cuadrícula bidimensional de tamaño variable, definido por el usuario.
    - Permitir al usuario especificar el estado inicial del tablero, ya sea cargándolo desde un archivo, generándolo aleatoriamente o permitiendo que el usuario lo dibuje en la consola.

2. Reglas de Evolución:

    - Supervivencia: Una célula viva con 2 o 3 vecinos vivos sobrevive.
    - Muerte por soledad: Una célula viva con menos de 2 vecinos vivos muere.
    - Muerte por sobrepoblación: Una célula viva con más de 3 vecinos vivos muere.
    - Reproducción: Una célula muerta con exactamente 3 vecinos vivos vuelve a la vida.

3. Simulación:

    - Implementar un bucle que permita al juego avanzar a través de un número de generaciones definido por el usuario.
    - Después de cada generación, mostrar el estado actual del tablero.
    - Permitir al usuario pausar, reiniciar o detener la simulación en cualquier momento.

4. Opciones adicionales:

    - Implementar la posibilidad de ajustar la velocidad de la simulación.
    - Permitir al usuario guardar y cargar estados de la simulación.
    - Crear una interfaz gráfica (opcional) para mejorar la visualización del tablero.

### Consideraciones:

- Asegúrate de que el código sea modular y fácil de entender. Divide el problema en funciones o clases según sea necesario.
- Documenta tu código con comentarios que expliquen el propósito de cada parte del programa.
- Realiza pruebas para asegurarte de que todas las reglas se aplican correctamente y que el programa maneja correctamente los casos borde, como los bordes de la cuadrícula.





# GameOfLiveAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


