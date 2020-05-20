let who = ['el perro', 'mi mamá', 'el gato', 'mi tortuga'];
let what = ['se comió mi tarea', 'escondió las llaves', 'lanzó por la ventana el projecto', 'rompió mi ropa'];
let when = ['antes de clases', 'justo ahora', 'cuando estaba a punto de salir', 'mientras almorzaba'];

let whoRandom = Math.floor(Math.random() * who.length );
let whatRandom = Math.floor(Math.random() * what.length);
let whenRandom = Math.floor(Math.random() * when.length);

let frase = who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom];

document.querySelector("#excuse").innerHTML = frase;