import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

kaboom({width: 500, height: 500 });

scene("title", ()=>{
    add([
        color(7, 231, 255),
        rect(800, 800),
    ])
    add([
        text("Snake"),
        pos(250, 250),
        color(0, 0, 0),
        anchor("center")
    ])
    add([
        text("Press Space to Start!", 32), 
        pos(250, 300),
        color(0, 0, 0),
        anchor("center")
    ])

    onKeyDown("space", () =>{
        go("game");
    })
    
} )

scene("game", ()=>{
    add([
        color(237, 191, 255),
        rect(800, 800),
    ])

    let snake = []; 

    snake.push[add([
        rect(30, 30),
        pos(250, 250),
        color(0, 0, 0),
        anchor("center")
    ])]
})


go("title")