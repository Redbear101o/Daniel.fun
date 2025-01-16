import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

kaboom({width: 500, height: 500 });

screen("title", ()=>{
    add([
        text("snake", 32), 
        pos(0, 0)
    ])
} )