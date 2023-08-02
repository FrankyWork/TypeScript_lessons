function helloMethod(hello, doing){
    return `${hello} ${doing}`
}

const helloWorld = document.getElementById("header");
helloWorld.innerHTML = helloMethod("HelloWorld!", "I'm learning TypeScript!")
