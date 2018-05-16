var level = 1;
document.getElementById('lvl').innerHTML = level;
var HighestLevel = 1 ;
document.getElementById('high').innerHTML = HighestLevel;
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one forx you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x
    this.y = y    
    this.speed = Math.floor(Math.random()*100);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed*dt
    if (this.x>510){                                                // bug reset after go over the board
        this.x  = -20;
    }

    if(this.x < player.x + 25 && this.x + 55 > player.x){           // collosion between bug and player
        if(this.y < player.y + 60 && this.y + 40 > player.y){
            level = 1;
            HighestLevel = level;
            document.getElementById('high').innerHTML = HighestLevel;
          
            player.reset();
        }
    }

    if(level ===2){													// increase speed after player complete each level
        this.x = this.x + this.speed*dt + 1 
    } if(level ===3){
        this.x = this.x + this.speed*dt + 1.5
    } if(level ===4){
        this.x = this.x + this.speed*dt +2
    } if(level ===5){
        this.x = this.x+this.speed*dt +2.5
    } if (level ===6){
        this.x = this.x+this.speed*dt +3
    } if( level ===7){
        this.x = this.x+this.speed*dt +3.5
    } if(level ===8){
        this.x = this.x + this.speed*dt +4
    } if (level === 9){
        this.x = this.x + this.speed*dt+ 5
    } if( level === 10){															// highest level of game , I will update new version later
        alert("You are too fast , we will update new version for you later!!!")
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x,y){							// display player
    this.x = x
    this.y = y
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
    
}

Player.prototype.render = function(){
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(move){
    if (move === "left") {										// player move left
        if (this.x > 35) {
            this.x = this.x - 100;
        }
    }
    if (move === "right") {										// player move right
        if (this.x < 400) {
            this.x = this.x + 100;
        }
    }
    if (move === "up") {										// player go up 
        if (this.y > 50) {
            this.y = this.y -90;
        } else {												// player reach water
            this.reset()										// reset player 
            level++;
            document.getElementById('lvl').innerHTML = level;		// update level 	        
        	HighestLevel++;
        	document.getElementById('high').innerHTML = HighestLevel;
        }
    }
    if (move === "down") {										// player go down
        if (this.y < 400) {
            this.y = this.y + 100;
        }
    }
}
Player.prototype.reset = function(){							// function player reset
    this.x = 200
    this.y = 400
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const enemy1 = new Enemy(-20,50,300);
const enemy2 = new Enemy(-10,135,200);
const enemy3 = new Enemy(5,220,200);
const enemy4 = new Enemy(50,300,500)
const enemy5 = new Enemy(-100,50,400)
const allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5]

const player = new Player(200,400); 



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
