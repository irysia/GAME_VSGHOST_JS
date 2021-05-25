/////////////////////////////////////////////////////////////////////////////////////////
//ECRAN DE JEU variables
let screen_game = document.getElementById('screen_game');
const game_height = 500;
const game_width = 1000;

//////////////////////////////////////////
//DECOUPAGE ZONE de l'écran de jeu pour définir comportement des monstres selon une zone
//       0                              1000px (X)
//       |**********|**********|**********|
//       |*  LT     |    MT    |   RT    *|
//       |*         |          |         *|
//       |*----1---------2----------3----*|
//       |*         |          |         *|
//       |*  LB     |   MB     |   RB    *|
// 500px |**********|**********|**********|
// (Y)
//(*)>>zone de teleportation du fantôme
// LT/MT/RT/LB/MB/RB >>zone de déplacement du fantôme

// //on définit le cadre global du jeu
//on définit le cadre global du jeu avec une marge intérieure de 5px
const minX = 5;
const maxX = game_width-5;
const minY = 5;
const maxY = game_height-5;

// zone 1 LT
const maxZ1_X = game_width/3;
const maxZ1_Y = game_height/2;
// zone 2 MT
const maxZ2_X = maxZ1_X + (game_width/3);
const maxZ2_Y = game_height/2;
// zone 3 RT
const maxZ3_X = maxZ2_X + (game_width/3);
const maxZ3_Y = game_height/2;
// zone 4 LB
const maxZ4_X = game_width/3;
const maxZ4_Y = maxZ3_Y + (game_height/2);
// zone 5 MB
const maxZ5_X = maxZ3_X + (game_width/3);
const maxZ5_Y = maxZ1_Y + (game_height/2);
// zone 6 RB
const maxZ6_X = maxZ5_X + (game_width/3);
const maxZ6_Y = maxZ1_Y + (game_height/2);

///////////////////////////////////////////
//traitement style cadre jeu
screen_game.style.height = game_height + "px";
screen_game.style.width = game_width + "px";
screen_game.style.margin = "0 auto";
screen_game.style.border = "1px solid black";
screen_game.style.position = "relative";


//////////////////////////////////////////////////////////////////////////////////////////
//DATA JEU variables
let game_data = document.getElementById('game_data');
const data_height = 50;
const data_width = 1000;

//traitement style cadre data
game_data.style.backgroundColor ="black";
game_data.style.color ="white";
game_data.style.height = data_height + "px";
game_data.style.width = data_width + "px";
game_data.style.margin = "0 auto";
game_data.style.border = "1px solid black";
game_data.style.display ="flex";
game_data.style.justifyContent ="center";
game_data.style.alignItems ="center";

////////////////////////////////
//Chronomètre variables
let timer = document.getElementById('timer');
let timer_value = 0;

//traitement style chronomètre
timer.textContent = timer_value;
timer.style.color ="white";
timer.style.fontSize ="2rem";
timer.style.display ="flex";
timer.style.justifyContent ="center";
timer.style.alignItems ="center";
timer.style.margin ="0";

// fonction chronomètre
function countDown(){
    if (timer_value >= 0){
        timer_value = timer_value +1;
        timer.textContent = timer_value;
    }  
}
setInterval(countDown,1000);


//////////////////////////////////////////////////////////////////////////////
//PERSONNAGE variables
let game_character = document.getElementById('game_character');

const player_width = 42;
const player_height = 48;
let playerX = 3;
let playerY = 30;


//traitement visuel du personnage joueur
game_character.style.position = "relative";
game_character.style.top = playerY + "px";
game_character.style.left = playerX + "px";
game_character.style.zIndex ="1";

//DEPLACEMENTS PERSONNAGE
function stepRight(){
    game_character.style.left = (playerX -= 10) +"px";
}
function stepLeft(){
    game_character.style.left = (playerX += 10) +"px";
}
function stepUp(){
    game_character.style.top = (playerY -= 10) +"px";
}
function stepDown(){
    game_character.style.top = (playerY += 10) +"px";
}

////////////////////////////////////////////////////////////////////////////////
//mise en place des obstacles variables 
let game_wall1 = document.getElementById('game_wall1');
let game_wall2 = document.getElementById('game_wall2');
let game_wall3 = document.getElementById('game_wall3');
let game_wall4 = document.getElementById('game_wall4');

//dimensions et position
const wall1_top =107;
const wall1_left =50;
const wall1_width =800;
const wall1_height =30;

const wall2_top =295;
const wall2_left =160;
const wall2_width =749;
const wall2_height =30;

const wall3_top =267;
const wall3_left =160;
const wall3_width =30;
const wall3_height =100;

const wall4_top =205;
const wall4_left =799;
const wall4_width =200;
const wall4_height =30;

//visuel et position obstacles
game_wall1.style.position = "absolute";
game_wall1.style.top = wall1_top + "px";
game_wall1.style.left = wall1_left + "px";
game_wall1.style.width = wall1_width +"px";
game_wall1.style.height = wall1_height +"px";

game_wall2.style.position = "absolute";
game_wall2.style.top = wall2_top + "px";
game_wall2.style.left = wall2_left +"px";
game_wall2.style.width = wall2_width + "px";
game_wall2.style.height = wall2_height + "px";

game_wall3.style.position = "absolute";
game_wall3.style.top = wall3_top + "px";
game_wall3.style.left = wall3_left +"px";
game_wall3.style.width = wall3_width +"px";
game_wall3.style.height = wall3_height +"px";

game_wall4.style.position = "absolute";
game_wall4.style.top = wall4_top + "px";
game_wall4.style.left = wall4_left +"px";
game_wall4.style.width = wall4_width + "px";
game_wall4.style.height = wall4_height +"px";

/////////////////////////////////////////////////////////////////////////////////////////////////////
//mise en place win zone
let game_winZone = document.getElementById('game_winZone');
let exit = document.getElementById('exit');

//dimension & position
const winZone_height = 150;
const winZone_width =150;
const winZone_top = 290;
const winZone_left =505;

// traitement visuel win zone & boutton replay/exit nxtlevl?
game_winZone.style.display= "flex";
game_winZone.style.justifyContent= "center";
game_winZone.style.alignItems= "center";
game_winZone.style.backgroundColor= "black";
game_winZone.style.border= "1px solid white";
game_winZone.style.height= winZone_height+ "px";
game_winZone.style.width= winZone_width + "px";
game_winZone.style.position= "relative";
game_winZone.style.top= winZone_top + "px";
game_winZone.style.left= winZone_left + "px";

exit.style.backgroundColor="rgba(0,0,0,0)";
exit.style.outline="none";
exit.style.border="none";
exit.style.fontFamily="'Major Mono Display', monospace";
exit.style.color="white";
exit.style.fontSize="2rem";

//mise en place bouton restart
exit.addEventListener('click',function(e){
    window.location.reload();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////
////mise en place des monstres variables

let ghost_1 = document.getElementById('ghost_1');
let ghost_2 = document.getElementById('ghost_2');
let ghost_3 = document.getElementById('ghost_3');

//blue ghost
let ghost_1_X = 20;
let ghost_1_Y = 100;
const ghost_1_width = 24;
const ghost_1_height = 32;

ghost_1.style.top = ghost_1_Y + "px";
ghost_1.style.left = ghost_1_X + "px";
ghost_1.style.position ="absolute";
ghost_1.style.zIndex ="1";

//purple ghost
let ghost_2_X = 900;
let ghost_2_Y = 150;
const ghost_2_width = 24;
const ghost_2_height = 32;

ghost_2.style.top = ghost_2_Y + "px";
ghost_2.style.left = ghost_2_X + "px";
ghost_2.style.position ="absolute";
ghost_2.style.zIndex ="1";

//orange ghost
let ghost_3_X = 400;
let ghost_3_Y = 200;
const ghost_3_width = 24;
const ghost_3_height = 32;

ghost_3.style.top = ghost_3_Y + "px";
ghost_3.style.left = ghost_3_X + "px";
ghost_3.style.position ="absolute";
ghost_3.style.zIndex ="1";

//création d'un nombre aléatoire pour teleportation fantôme, x aléatoire et y aléatoire pour traitement de la position
// sur x :
let newX;
function rdmX(){
     newX = (Math.floor(Math.random() * 800));
}
//sur y:
let newY;
function rdmY(){
    newY = (Math.floor(Math.random() * 260));
}


//déplacement des monstres
function ghost_move_1(){
    
    if(((ghost_1_X > minX) & ((ghost_1_X + ghost_1_width) <= maxZ1_X) & (ghost_1_Y > minY) & ((ghost_1_Y + ghost_1_height) <= maxY)) | ((ghost_1_X > maxZ2_X) & ((ghost_1_X + ghost_1_width)< maxX) & (ghost_1_Y > minY) & ((ghost_1_Y + ghost_1_height)<maxY)) ){      
        //G1va vers gauche et descend
        ghost_1.style.top = (ghost_1_Y += 10) +"px";
        ghost_1.style.left = (ghost_1_X += 10) +"px";
    
        //on balise les extrémités du cadres et téléporte le fantôme à un nouvel endroit pour que les déplacements puissent reprendre
    }else if (( ghost_1_X <= minX ) | ((ghost_1_Y + ghost_1_height) >= (maxY-ghost_1_height))|(ghost_1_Y <= minY) | ((ghost_1_X + ghost_1_width) >= (maxX-ghost_1_width)) ){
        rdmX();
        rdmY();
        ghost_1.style.top = (ghost_1_Y = newY) +"px";
        ghost_1.style.left = (ghost_1_X = newX) +"px"; 
        //2eme teleportation pour éviter la redondance   
    // }else if ( ){
    //     rdmY();
    //     rdmX();
    //     ghost_1.style.top = (ghost_1_Y = newY) +"px";
    //     ghost_1.style.left = (ghost_1_X = newX) +"px";

    }else if (((ghost_1_X + ghost_1_width) > maxZ1_X) & (ghost_1_Y > minY) & ((ghost_1_Y + ghost_1_height) < maxY)){
        //G1va vers droite et monte
        ghost_1.style.top = (ghost_1_Y -= 10) +"px";
        ghost_1.style.left = (ghost_1_X += 10) +"px";
    }  
    if ( (! ((playerX+player_width < ghost_1_X) | (playerX > ghost_1_X+ghost_1_width)) & ((playerY+player_height > ghost_1_Y) | (playerY > ghost_1_Y+ghost_1_height)) ) ){
        exit.value="RETRY";
        window.alert("Ghost 1 scared you  by ! Try again ! You survived " + timer.textContent + "s");
        location.reload();
    } 
}    

setInterval(ghost_move_1,200);

function ghost_move_2(){
    if (((ghost_2_X > minX) & ((ghost_2_X + ghost_2_width) <= maxZ1_X) & (ghost_2_Y > minY) & ((ghost_2_Y + ghost_2_height) <= maxY)) | ((ghost_2_X > maxZ2_X) & ((ghost_2_X + ghost_2_width)< maxX) & (ghost_2_Y > minY) & ((ghost_2_Y + ghost_2_height)<maxY)) ){    
        //G2 va vers droite et descend
        ghost_2.style.top = (ghost_2_Y +=10) + "px";
        ghost_2.style.left = (ghost_2_X -=10) + "px";
        //on balise les extrémités du cadres et téléporte le fantôme à un nouvel endroit pour que les déplacements puissent reprendre
    }else if (( ghost_2_X <= minX ) | ((ghost_2_Y + ghost_2_height) >= (maxY-ghost_2_height))| (ghost_2_Y <= minY) | ((ghost_2_X + ghost_2_width) >= (maxX-ghost_2_width))){
        rdmX();
        rdmY();
        ghost_2.style.top = (ghost_2_Y =newY ) + "px";
        ghost_2.style.left = (ghost_2_X =newX) + "px";
        //2eme teleportation pour éviter la redondance
    }else if (((ghost_2_X + ghost_2_width) > maxZ1_X) & (ghost_2_Y > minY) & ((ghost_2_Y + ghost_2_height) < maxY)){    
        //G2 va vers gauche et monte
        ghost_2.style.top = (ghost_2_Y -=10) + "px";
        ghost_2.style.left = (ghost_2_X -=10) + "px";
    }
    //inverse de "pas de collision" à droite joueur puis gauche puis bas puis haut GHOST 2 purple
    if ( ( !((playerX+player_width < ghost_2_X) | (playerX > ghost_2_X+ghost_2_width)) & ((playerY+player_height > ghost_2_Y) | (playerY > ghost_2_Y+ghost_2_height)) ) ){
        exit.value="RETRY";
        window.alert("Ghost 2 scared you  by ! Try again ! You survived " + timer.textContent + "s");
        location.reload();
    }

}

setInterval(ghost_move_2,100);

function ghost_move_3(){
    if (((ghost_3_X > minX) & ((ghost_3_X + ghost_3_width) <= maxZ1_X) & (ghost_3_Y > minY) & ((ghost_3_Y + ghost_3_height) <= maxY)) | ((ghost_3_X > maxZ2_X) & ((ghost_3_X + ghost_3_width)< maxX) & (ghost_3_Y > minY) & ((ghost_3_Y + ghost_3_height)<maxY))){
        //va vers gauche et descend
        ghost_3.style.top = (ghost_3_Y += 10) +"px";
        ghost_3.style.left = (ghost_3_X += 10) +"px";
        //on balise les extrémités du cadres et téléporte le fantôme à un nouvel endroit pour que les déplacements puissent reprendre
    }else if (( ghost_3_X <= minX ) | ((ghost_3_Y + ghost_3_height) >= (maxY-ghost_3_height))| (ghost_3_Y <= minY) | ((ghost_3_X + ghost_3_width) >= (maxX-ghost_3_width))){
        rdmX();
        rdmY();
        ghost_3.style.top = (ghost_3_Y =newY ) + "px";
        ghost_3.style.left = ((ghost_3_X =newX)-50) + "px";
        
    }else if (((ghost_3_X + ghost_3_width) > maxZ1_X) & (ghost_3_Y > minY) & ((ghost_3_Y + ghost_3_height) < maxY)){
        //va vers droite et monte
        ghost_3.style.top = (ghost_3_Y -= 10) +"px";
        ghost_3.style.left = (ghost_3_X += 10) +"px";
    }
       //inverse de "pas de collision" à droite joueur puis gauche puis bas puis haut GHOST 3 orangeS
     if ( (! ((playerX+player_width < ghost_3_X) | (playerX > ghost_3_width)) & ((playerY+player_height >ghost_3_Y) | (playerY > ghost_3_Y+ghost_3_height) ))  ) {
        exit.value="RETRY";
        window.alert("Ghost 3 scared you  by ! Try again ! You survived " + timer.textContent + "s");
        location.reload()
    }
}  

setInterval(ghost_move_3,100);

//on créer la fonction permettant d'étudier les déplacements du personnage:
let character_move = function(e){
    e.stopPropagation();
    e.preventDefault();
    //gestion déplacements personnage et limites du cadre de jeu
    if ( e.key == 'z'){
        if (playerY <= minY){
            game_character.style.top = playerY + "px";
        }else{
            stepUp();
        }
    }else if ( e.key == 's'){
        if ((playerY+player_height) < maxY){
            stepDown();
        }else{
            game_character.style.top = playerY + "px";
        }
    }else if ( e.key == 'q'){
        if (playerX <= minX){
            game_character.style.left = playerX + "px";
        }else{
            stepRight();
        }
    }else if ( e.key == 'd'){
        if ((playerX+player_width) >= maxX){
            game_character.style.left = playerX + "px";
        }else{
            stepLeft();
        }
    }
    ///////////////////////////////////////////
    //comparaison position joueur, obstables & winning zone, MONSTRES

    //WINNING ZONE
    if ( (playerX > (winZone_left + player_width)) & (playerX  < (winZone_left-player_width)) & (playerY >= (winZone_top-player_height)) & (playerY < (winZone_top-player_height))){   
        exit.value="RETRY";
        window.alert("You Win ! Get Better ! Your time is " + timer.textContent + "s");
        location.reload();
    //OBSTACLES
    //obstacle 1 -barre horizontale start - obstacle 2 barre hori middle - obstacle3 barre verti middle
    }else if ( ((playerX+player_width) >= wall1_left) & (playerX <= (wall1_left + wall1_width)) & ((playerY+player_height) >= wall1_top) & (playerY <= (wall1_top+wall1_height)) |
      ((playerX+player_width) >= wall2_left) & (playerX  <= (wall2_left+wall2_width)) & ((playerY+player_height) >= wall2_top) & (playerY <= (wall2_top+wall2_height)) |
      ((playerX+player_width) >= wall3_left) & (playerX <= (wall3_left+wall3_width)) & ((playerY+player_height) >= wall3_top) & (playerY <= (wall3_top + wall3_height)) | 
      ((playerX+player_width) >= wall4_left) & ((playerY+player_height) >= wall4_top) & (playerY <= (wall4_top+wall4_height)) ){
        
        exit.value="RETRY";
        window.alert("Care walls, you are not a ghost! Try again ! You survived " + timer.textContent + "s");
        location.reload();

    //LES MONSTRES
    // }else if ( ((playerX+player_width) == ghost_1_X) | (playerX == (ghost_1_X+ghost_1_width))  | ((playerY+player_height) == ghost_1_Y) | (playerY == (ghost_1_Y+ghost_1_height))  |
    //  ((playerX+player_width) == ghost_2_X) | (playerX == (ghost_2_X+ghost_2_width)) | ((playerY+player_height) == ghost_2_Y) | (playerY == (ghost_2_Y+ghost_2_height)) | 
    //  ((playerX+player_width) == ghost_3_X) | (playerX == (ghost_3_X+ghost_3_width)) | ((playerY+player_height) == ghost_3_Y) | (playerY == (ghost_3_Y+ghost_3_height)) ) {
    
    //on fait la comparaison entre le haut du joueur et le bas du fantôme
    // }else if( ((playerX >= ghost_1_X) & ((playerX+player_width)<=(ghost_1_X+ghost_1_width)) & (playerY<= (ghost_1_Y+ghost_1_height))) | ((playerX >= ghost_2_X)& ((playerX+player_width)<=(ghost_2_X+ghost_2_width)) & (playerY<= (ghost_2_Y+ghost_2_height))) | ((playerX >= ghost_3_X)& ((playerX+player_width)<=(ghost_3_X+ghost_3_width)) & (playerY<= (ghost_3_Y+ghost_3_height))) ){
    //     exit.value="RETRY";
    //     window.alert("Ghost scared you by TOP! Try again ! You survived " + timer.textContent + "s");
    //     location.reload();
    //on fait la comparaison entre la gauche du joueur et la droite du fantôme
    // }else if (  (playerX<=(ghost_1_X+ghost_1_width)) & (playerY>=ghost_1_Y) &((playerY+player_height)<=(ghost_1_Y+ghost_1_height)) | (playerX<=(ghost_2_X+ghost_2_width)) & (playerY>=ghost_2_Y) &((playerY+player_height)<=(ghost_2_Y+ghost_2_height)) | (playerX<=(ghost_3_X+ghost_3_width)) & (playerY>=ghost_3_Y) &((playerY+player_height)<=(ghost_3_Y+ghost_3_height)) ){
    //     exit.value="RETRY";
    //     window.alert("Ghost scared you by LEFT! Try again ! You survived " + timer.textContent + "s");
    //     location.reload();
        
    //on fait la comparaison entre la droite du joueur et la gauche du fantôme
    // }else if ( ((playerX+player_width)>=ghost_1_X) & (playerY>=ghost_1_Y) & ((playerY+player_height)<=(ghost_1_Y+ghost_1_height)) | ((playerX+player_width)>=ghost_2_X) & (playerY>=ghost_2_Y) & ((playerY+player_height)<=(ghost_2_Y+ghost_2_height)) | ((playerX+player_width)>=ghost_3_X) & (playerY>=ghost_3_Y) & ((playerY+player_height)<=(ghost_3_Y+ghost_3_height)) ){
    //     exit.value="RETRY";
    //     window.alert("Ghost scared you by RIGHT ! Try again ! You survived " + timer.textContent + "s");
    //     location.reload();
    //on fait la comparaison entre le bas du joueur et le haut du fantôme
    // } else if ( ((playerX>= ghost_1_X) & ((playerX+player_width)<= (ghost_1_X+ghost_1_width)) & ((playerY)+player_height)>=ghost_1_Y) | ((playerX>= ghost_2_X) & ((playerX+player_width)<= (ghost_2_X+ghost_2_width)) & ((playerY)+player_height)>=ghost_2_Y) | ((playerX>= ghost_3_X) & ((playerX+player_width)<= (ghost_3_X+ghost_3_width)) & ((playerY)+player_height)>=ghost_3_Y) ){
    //     exit.value="RETRY";
    //     window.alert("Ghost scared you  by BOTTOM! Try again ! You survived " + timer.textContent + "s");
    //     location.reload();
    //LES MONSTRES 
    //inverse de "pas de collision" à droite joueur puis gauche puis bas puis haut GHOST 1 blue
    }else if ( (! ((playerX+player_width < ghost_1_X) | (playerX > ghost_1_X+ghost_1_width)) & ((playerY+player_height > ghost_1_Y) | (playerY > ghost_1_Y+ghost_1_height)) ) ){
        exit.value="RETRY";
        window.alert("Ghost 1 scared you  by ! Try again ! You survived " + timer.textContent + "s");
        location.reload();
    //inverse de "pas de collision" à droite joueur puis gauche puis bas puis haut GHOST 2 purple
    }else if ( ( !((playerX+player_width < ghost_2_X) | (playerX > ghost_2_X+ghost_2_width)) & ((playerY+player_height > ghost_2_Y) | (playerY > ghost_2_Y+ghost_2_height)) ) ){
        exit.value="RETRY";
        window.alert("Ghost 2 scared you  by ! Try again ! You survived " + timer.textContent + "s");
        location.reload();
    //inverse de "pas de collision" à droite joueur puis gauche puis bas puis haut GHOST 3 orangeS
    }else if ( (! ((playerX+player_width < ghost_3_X) | (playerX > ghost_3_width)) & ((playerY+player_height >ghost_3_Y) | (playerY > ghost_3_Y+ghost_3_height) ))  ) {
        exit.value="RETRY";
        window.alert("Ghost 3 scared you  by ! Try again ! You survived " + timer.textContent + "s");
        location.reload()
    
    //DANS TOUS LES AUTRES CAS (AFFICHAGE)
    }else{
        //obstacle1 -barre horizontale start - affichage
        if((playerX >= 5) & (playerX  <=853) & (playerY >= 60) & (playerY <= 145)) {
            game_wall1.style.background ="rgb(236,84,43)";
            game_wall1.style.background = "linear-gradient(180deg, rgba(236,84,43,1) 21%, rgba(107,46,45,1) 65%)";
            
        //obstacle2 barre hori middle- affichage
        }else if ((playerX > 130) & (playerX  <= 913) & (playerY >= 240) & (playerY < 335)){
            game_wall2.style.background ="rgb(236,84,43)";
            game_wall2.style.background = "linear-gradient(180deg, rgba(236,84,43,1) 21%, rgba(107,46,45,1) 65%)";

         //obstacle3 barre vertimiddle- affichage
        }else if ((playerX > 110) & (playerX  <= 193) & (playerY >= 210) & (playerY < 380)){
            game_wall3.style.background ="rgb(236,84,43)";
            game_wall3.style.background = "linear-gradient(180deg, rgba(236,84,43,1) 21%, rgba(107,46,45,1) 65%)";
        
        
        //obstacle3 barre hori middle- affichage
        }else if ( ((playerX > 750) & (playerY >= 150) & (playerY < 245)) ){
            game_wall4.style.background ="rgb(236,84,43)";
            game_wall4.style.background = "linear-gradient(180deg, rgba(236,84,43,1) 21%, rgba(107,46,45,1) 65%)";
        //winning zone -- affichage
        }else if ((playerX > 500) & (playerX  < 600) & (playerY >= 330) & (playerY < 431)){
            game_winZone.style.backgroundColor= "green";
            exit.value="RETRY";
        }else{
            game_winZone.style.backgroundColor= "black";
            game_wall1.style.background= "rgb(47,236,43)";
            game_wall1.style.background="linear-gradient(180deg, rgba(47,236,43,1) 21%, rgba(107,46,45,1) 65%)";
            game_wall2.style.background= "rgb(47,236,43)";
            game_wall2.style.background="linear-gradient(180deg, rgba(47,236,43,1) 21%, rgba(107,46,45,1) 65%)";
            game_wall3.style.background= "rgb(47,236,43)";
            game_wall3.style.background="linear-gradient(180deg, rgba(47,236,43,1) 21%, rgba(107,46,45,1) 65%)";
            game_wall4.style.background= "rgb(47,236,43)";
            game_wall4.style.background="linear-gradient(180deg, rgba(47,236,43,1) 21%, rgba(107,46,45,1) 65%)";
        }
    }
}
//on ajoute un listener sur le clavier joueur pour comprendre les demandes de déplacements 
document.addEventListener('keydown',character_move);

