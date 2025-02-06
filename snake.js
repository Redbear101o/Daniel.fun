import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

kaboom({width: 500, height: 500, maxFPS: 11});

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
    let score = 0;
    add([
        color(237, 191, 255),
        rect(800, 800),
    ])
    let score_label = add([
        text("Score: "+score),
        pos(10,10),
        color(0,0,0)
    ])
    onKeyDown("a", ()=>{
        direction = "left"
    })

    onKeyDown("d", ()=>{
        direction = "right"
    })

    onKeyDown("w", ()=>{
        direction = "up" 
    })

    onKeyDown("s", ()=>{
        direction = "down"
    })

    let direction = ""; 

    let snake = []; 

    let apple = add([
        pos(400, 250 ),
        color(228, 8, 10),
        rect(30, 30),
        area(),
        body(),
        "apple"
    ]);
    snake.push(add([
        rect(30, 30),
        pos(250,250),
        color(0, 0, 0),
        area(),
        body(),
        anchor("center") 
    ]))
    onUpdate(()=>{
        let head = [snake[0].pos.x, snake[0].pos.y]
        if(direction == "left"){
            snake[0].pos.x -= 30;
        }
        if(direction == "right"){
            snake[0].pos.x += 30;
        }
        if(direction == "up"){
            snake[0].pos.y -= 30;
        }
        if(direction == "down"){
            snake[0].pos.y += 30;
        }
        for(let i =1; i < snake.length; i++){
            let placeholder = [snake[i].pos.x, snake[i].pos.y]
            snake[i].pos.x = head[0]
            snake[i].pos.y = head[1]
            head[0] = placeholder[0]
            head[1] = placeholder[1]
        }
        if(snake[0].pos.x < 0 || snake[0].pos.x > width()-30 || snake[0].pos.y < 0 || snake[0].pos.y > height()-30){
            go("gameover")
        }
        //debug.log("snake length: "+snake.length)
    })
    snake[0].onCollide("apple", (a)=> {
        a.destroy()
        score += 1
        score_label.text = "Score: "+score;
        snake.push(add([
            rect(30, 30),
            pos(snake[snake.length-1].pos),
            color(0, 0, 0),
            area(),
            anchor("center") 
        ]))
        apple = add([
            pos(Math.random()*(width()-30), Math.random()*(height()-30)),
            color(228, 8, 10),
            rect(30,30),
            area(),
            "apple"
        ]);
    })
})

scene("gameover", ()=>{
    add([
        color(7, 191, 255),
        rect(800, 800),
    ])
    let label = add([
        text("You Lose\nWomp Womp\n\nPress SPACE \nto play again"),
        pos(200, 170),
        color(0,0,0),
        anchor("center")
    ])
    onKeyDown("space", () =>{
        go("game");
    })
})

    

go("title")