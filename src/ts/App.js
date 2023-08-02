function helloMethod(hello, doing) {
    return "".concat(hello, " ").concat(doing);
}
var helloWorld = document.getElementById("header");
helloWorld.innerHTML = helloMethod("HelloWorld!", "I'm learning TypeScript!");
