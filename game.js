class game{
    constructor(){
        this.canvas = null;
        this.context= null;
        this.modeGame = 1;
        
        this.init();
        this.loop();
    }
    init(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.height = 400;
        this.canvas.width = 400;
        document.body.appendChild(this.canvas);
        
        // const mode1 = document.querySelector(".mode1");
        // console.log(mode1);
        // const mode2 = document.querySelector(".mode2");
        // mode1.addEventListener("click", () => {
        //     this.modeGame = 1;
        // });
        // mode2.addEventListener("click", () => {
        //     this.modeGame = 2;
        // });
        // console.log(modeGame);
        this.snake = new snake(this);
        this.food = new food(this);
    } 
    loop(){
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 100);
    }
    update(){
        this.snake.update();
        if(this.snake.eat(this.food.x,this.food.y)){
            this.food.update();
        }
    }
    draw(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.food.draw();
    }
}

var g = new game();



