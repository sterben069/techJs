const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1030;
canvas.height = 650;

alert("C'est un jeu qui s'inspire de 'police voleur' et fanenjika. L' un des personnages venait de cambrioler la boutique et le l'autre va le poursuivre.\n Reglement: \n Le joueur 1 a 120s pour essayer d'attaquer le joueur 2 tandis que le joueur 2 va s'enfuir. Apres 120 secondes, le joueur 1 va abondonner et le joueur 2 gagnera la partie (Oui, la population s'ennuie tres facilement).\nCommande:\nJoueur1:\n w = gauche\n c = droite\n s = sauter\n j = attaquer\nJoueur 2:\n direction gauche = gauche\n direction droite = droite\n direction haut = haut")

c.fillRect(0, 0, canvas.width, canvas.height)   

const gravity = 0.7;

const background1 = new Sprite ( {
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/649f8ef0e1_50190210_titre-8.jpg',
    scale: 1
} )
const background = new Sprite ( {
    position: {
        x: 5,
        y: 0
    },
    imageSrc: './img/bb2fa5_3f2d72bce684495ab0fcc57487582879_mv2.webp',
    scale: 1.6
} )
const plat = new Sprite ( {
    position: {
        x: 370,
        y: 550
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat2 = new Sprite ( {
    position: {
        x: 470,
        y: 450
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat3 = new Sprite ( {
    position: {
        x: 70,
        y: 450
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat4 = new Sprite ( {
    position: {
        x: 650,
        y: 350
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat5 = new Sprite ( {
    position: {
        x: 170,
        y: 250
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat6 = new Sprite ( {
    position: {
        x: 570,
        y: 250
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )

const plat7 = new Sprite ( {
    position: {
        x: -160,
        y: 210
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat8 = new Sprite ( {
    position: {
        x: 930,
        y: 210
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat9 = new Sprite ( {
    position: {
        x: 70,
        y: 100
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat10 = new Sprite ( {
    position: {
        x: 570,
        y: 100
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )
const plat11 = new Sprite ( {
    position: {
        x: 320,
        y: 100
    },
    imageSrc: './img/Sans titre.png',
    scale: 0.38
} )


const shop = new Sprite ( {
    position: {
        x: 700,
        y: 390
    },
    imageSrc: './img/decorations/shop_anim.png',
    scale: 2,
    framesMax: 6
} )

const posbox1 = 0;
const posbox2 = -130;

const player = new joueur ({
    position: {
        x: 0, y: 460
    },
    velocity: {
        x: 0, y: 10
    },
    offset: {
        x: posbox1, y: 0
    },
    boka: 1,
    imageSrc: './img/Martial Hero/Idle.png',
    framesMax: 8,
    scale: 1.5,
    offsete: {
        x: 125, y: 32
    },
    sprites: {
        idle: {
            imageSrc: './img/Martial Hero/Idle.png',
            framesMax: 8
        },
        idle2: {
            imageSrc: './img/Martial Hero/Idle2.png',
            framesMax: 8
        },
        run: {
            imageSrc: './img/Martial Hero/Run.png',
            framesMax: 8
        },
        run2: {
            imageSrc: './img/Martial Hero/Run2.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './img/Martial Hero/Jump.png',
            framesMax: 2
        },
        jump2: {
            imageSrc: './img/Martial Hero/Jump2.png',
            framesMax: 2
        },
        attack1: {
            imageSrc: './img/Martial Hero/Attack1.png',
            framesMax: 6
        },
        attack2: {
            imageSrc: './img/Martial Hero/Attack12.png',
            framesMax: 6
        }
    }
})


const enemy = new joueur ({
    position: {
        x: 750, y:460
    }, 
    velocity: {
        x: 0, y: 10
    },
    offset: {
        x: posbox2, y: 0
    },
    boka: 0,
    imageSrc: './img/Martial Hero2/Idle.png',
    framesMax: 4,
    scale: 1.5,
    offsete: {
        x: 120, y: 42
    },
    sprites: {
        idle: {
            imageSrc: './img/Martial Hero2/Idle.png',
            framesMax: 4
        },
        idle2: {
            imageSrc: './img/Martial Hero2/Idle2.png',
            framesMax: 4
        },
        run: {
            imageSrc: './img/Martial Hero2/Run.png',
            framesMax: 8
        },
        run2: {
            imageSrc: './img/Martial Hero2/Run2.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './img/Martial Hero2/Jump.png',
            framesMax: 2
        },
        jump2: {
            imageSrc: './img/Martial Hero2/Jump2.png',
            framesMax: 2
        },
        attack1: {
            imageSrc: './img/Martial Hero2/Attack1.png',
            framesMax: 4
        },
        attack2: {
            imageSrc: './img/Martial Hero2/Attack12.png',
            framesMax: 4
        }        
    }
})
    


console.log(player)

const keys= {
    w: {
        pressed: false
    },
    c: {
        pressed: false
    },
    s: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }

}

class Platform {
    constructor({ x , y, width, height}) {
        this.position = {
            x, y
        }
        this.width = width
        this.height = height
    }

    draw () {
        c.fillStyle = 'rgb(117, 76, 23)'
        c.fillRect ( this.position.x, this.position.y, this.width, this.height)
    }
}

const platforms = [new Platform ({
        x: 400,
        y: 550,
    width: 200,
    height: 20,
}), new Platform ({
    x: 500,
    y: 450,
width: 200,
height: 20,
}), new Platform ({
    x: 100,
    y: 450,
width: 200,
height: 20,
}), new Platform ({
    x: 200,
    y: 250,
width: 200,
height: 20,
}), new Platform ({
    x: 680,
    y: 350,
width: 200,
height: 20,
}), new Platform ({
    x: 600,
    y: 250,
width: 200,
height: 20,
}), new Platform ({
    x: -130,
    y: 210,
width: 200,
height: 20,
}), new Platform ({
    x: 950,
    y: 210,
width: 200,
height: 20,
}), , new Platform ({
    x: 100,
    y: 100,
width: 200,
height: 20,
}), new Platform ({
    x: 350,
    y: 100,
width: 200,
height: 20,
}), new Platform ({
    x: 600,
    y: 100,
width: 200,
height: 20,
})]
let lastKey;
let i= 0;

function rectcollision ( {
    rect1, rect2
}) {
    return (
        rect1.attackBox.position.x + rect1.attackBox.width >= 
        rect2.position.x && rect1.attackBox.position.x <=
        rect2.position.x +rect2.width && 
         rect1.attackBox.position.y + rect1.attackBox.height
         >= rect2.position.y && rect1.attackBox.position.y <= 
         rect2.position.y + rect2.height
    )
}

function collision ( player ) {
    platforms.forEach((platform) => {
        if (player.position.y + player.height <= platform.position.y
            && player.position.y + player.height + player.velocity.y >=
            platform.position.y && player.position.x + player.width >= 
            platform.position.x && player.position.x <= platform.position.x
            + platform.width ) {
            player.velocity.y = 0
        }
    })   
}

let timer = 120;
let fin;
function decrease_timer () {
    if (timer >0) {
        fin = setTimeout( decrease_timer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    } 
    
    if (i == 1){
        clearTimeout(fin)
        document.querySelector('#w2').innerHTML = 'Joueur 1 a gagné '
        document.querySelector('#w2').style.display = 'flex'
    }
            
    if (timer === 0 ) {
        if ( i == 0){
            document.querySelector('#w2').innerHTML = 'Joueur 2 a gagné'
            document.querySelector('#w2').style.display = 'flex'
        }  
    }
}

decrease_timer();

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'Black'
    c.fillRect(0, 0 , canvas.width, canvas.height);
    background1.update();

    background.update();
    shop.update();

    
    platforms.forEach ( (platform) => {
        platform.draw();
    } )

    plat.update();
    plat2.update();
    plat3.update();
    plat4.update();
    plat5.update();
    plat6.update();
    plat7.update();
    plat8.update();
    plat9.update();
    plat10.update();
    plat11.update();


    player.update();
    enemy.update();

    player.velocity.x = 0;

    //Player movement
    if (keys.w.pressed && player.lastKey ==='w' && player.position.x !== 0) {
        player.velocity.x = -5;
        player.attackBox.offset.x = posbox2;
        player.switchSprite('run2')
    } else if (keys.c.pressed && player.lastKey === 'c'
    && player.position.x !== 980) {
        player.velocity.x = 5;
        player.attackBox.offset.x = posbox1;
        player.switchSprite('run')
    } else if (player.attackBox.offset.x === posbox1) {
        player.switchSprite('idle')
    } else player.switchSprite('idle2')

    if ( player.velocity.y < 0 && player.attackBox.offset.x === 
        posbox1) {
        player.switchSprite('jump')
    } else if ( player.velocity.y < 0 && player.attackBox.offset.x === 
        posbox2) 
        player.switchSprite('jump2')

    enemy.velocity.x = 0;
    //Enemy movement
    if (keys.ArrowLeft.pressed && enemy.lastKey ==='ArrowLeft'
    && enemy.position.x !== 0) {
        enemy.velocity.x = -5;
        enemy.attackBox.offset.x = posbox2;
        enemy.switchSprite('run2')
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'
    && enemy.position.x !== 980) {
        enemy.velocity.x = 5;
        enemy.attackBox.offset.x = posbox1;
        enemy.switchSprite('run')
    } else if (enemy.attackBox.offset.x === posbox1) {
        enemy.switchSprite('idle')
    } else enemy.switchSprite('idle2')

    if ( enemy.velocity.y < 0 && enemy.attackBox.offset.x === 
        posbox1) {
        enemy.switchSprite('jump')
    } else if ( enemy.velocity.y < 0 && enemy.attackBox.offset.x === 
        posbox2) 
        enemy.switchSprite('jump2')

    //Platforme collision
    collision (player);
    collision (enemy);

    //Detect collision
    if (rectcollision ({
            rect1: player, rect2: enemy
    }) &&
         player.isAttacking && player.boka == 1) {
            player.isAttacking = false
            i = 1;
            console.log('aot')
        }

    if (rectcollision ({
            rect1: enemy, rect2: player
    }) &&
         enemy.isAttacking) {
            enemy.isAttacking = false;
            setTimeout( () => {
                player.velocity.x = 0
            } , 30000)
            i=0
            console.log('ao')
        }
}


animate();

window.addEventListener('keydown', (event)=>{
    console.log(event.key);
    switch (event.key) {
        case 'c': 
            keys.c.pressed = true;
            player.lastKey = 'c';
            break;
        case 'w':
            player.lastKey = 'w';
            keys.w.pressed = true;
            break;
        case 's':
            if (player.velocity.y === 0)
            player.velocity.y = -13;
            break;

        case  'j': 
            player.attack();
            break;

        case 'ArrowRight': 
            keys.ArrowRight.pressed = true;
            enemy.lastKey ='ArrowRight'
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = 'ArrowLeft';
            break;
        case 'ArrowUp':
            if (enemy.velocity.y === 0)
            enemy.velocity.y = -13;
            break;
        case '5':
            enemy.attack();
            break;
        }
    console.log(event.key);  
})
 
window.addEventListener('keyup', (event)=>{
    switch (event.key) {
        case 'c': 
            keys.c.pressed = false;
            break;
            case 'w': 
            keys.w.pressed = false;
            break;

            //Enemy 
            case 'ArrowRight': 
            keys.ArrowRight.pressed = false;
            break;
            case 'ArrowLeft': 
            keys.ArrowLeft.pressed = false;
            break;
    } 
    console.log(event.key);  
})