
class Sprite {
    constructor({ position, imageSrc, scale = 1, framesMax = 1, offsete = {x: 0, y: 0,}}) {
        this.position = position
        this.width = 50
        this.height = 150
        this.image = new Image ()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.offsete = offsete
        
    }

    
    draw() {
        c.drawImage(
            this.image, 
            this.framesCurrent * (this.image.width / this.framesMax) ,
            0,
            this.image.width / this.framesMax,
            this.image.height,

            this.position.x - this.offsete.x, 
            this.position.y - this.offsete.y, 
            (this.image.width / this.framesMax) * this.scale , 
            this.image.height * this.scale
        )

    }

    animateFrame() {
        this.framesElapsed++
        if ( this.framesElapsed % this.framesHold === 0 ){
            if (this.framesCurrent < this. framesMax - 1)
            this.framesCurrent++
        else this.framesCurrent = 0
        }  
    }

    update() {
        this.draw();
        this.animateFrame();
    }
}

class joueur extends Sprite {
    constructor({position, velocity, color = 'red', 
    boka, offset, imageSrc, scale, framesMax = 1,
    offsete = {x: 0, y: 0}, sprites}) {
        
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            offsete
        })

        this.velocity = velocity
        this.width = 50
        this.height = 150  
        this.lastKey;
        this.attackBox = {
            position: {
                x: this.position.x ,
                y: this.position.y
            },
            offset,
            width: 100,
            height: 50
        }
        this.color = color;
        this.isAttacking;
        this.boka = boka;
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.sprites = sprites

        for ( const sprite in this.sprites) {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }

    update() {
        this.draw();
        this.animateFrame();
        this.attackBox.position.x = this.position.x 
        + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y;
        
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y >= canvas.height ){
            this.velocity.y = 0;
        } else this.velocity.y += gravity;
    }

    attack() {
        if (this.attackBox.offset.x === posbox1)
            this.switchSprite('attack1')
        else this.switchSprite('attack2')
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }
    switchSprite (sprite) {
        if ( (this.image === this.sprites.attack1.image && this.framesCurrent <
            this.sprites.attack1.framesMax - 1) ||
            (this.image === this.sprites.attack2.image && this.framesCurrent <
            this.sprites.attack2.framesMax - 1) ) return

        switch (sprite) {
            case 'idle':
                if (this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image
                    this.framesMax = this.sprites.idle.framesMax
                    this.framesCurrent = 0
                }
                
                break;
            case 'idle2':
                if (this.image !== this.sprites.idle2.image){
                    this.image = this.sprites.idle2.image
                    this.framesMax = this.sprites.idle2.framesMax
                    this.framesCurrent = 0
                }
                
                break;
            case 'run': 
                if (this.image !== this.sprites.run.image){
                    this.image = this.sprites.run.image
                    this.framesMax = this.sprites.run.framesMax
                    this.framesCurrent = 0
                }
                
                break;
            case 'run2': 
            if (this.image !== this.sprites.run2.image){
                this.image = this.sprites.run2.image
                this.framesMax = this.sprites.run2.framesMax
                this.framesCurrent = 0
            }
                
                break;
            case 'jump': 
            if (this.image !== this.sprites.jump.image){
                this.image = this.sprites.jump.image
                this.framesMax = this.sprites.jump.framesMax
                this.framesCurrent = 0
            }
            break
            case 'jump2': 
            if (this.image !== this.sprites.jump2.image){
                this.image = this.sprites.jump2.image
                this.framesMax = this.sprites.jump2.framesMax
                this.framesCurrent = 0
            }
            break
            case 'attack1': 
            if (this.image !== this.sprites.attack1.image){
                this.image = this.sprites.attack1.image
                this.framesMax = this.sprites.attack1.framesMax
                this.framesCurrent = 0
            }
            break
            case 'attack2': 
            if (this.image !== this.sprites.attack2.image){
                this.image = this.sprites.attack2.image
                this.framesMax = this.sprites.attack2.framesMax
                this.framesCurrent = 0
            }
            break
        }
    }
}