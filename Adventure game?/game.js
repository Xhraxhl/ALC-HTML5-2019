// Comment
/*

Comment

*/

//document.write("<h1> I can't wait for <em>spring!</em> </h1>");


//alert("I'm stealing your vbucks, k?");

//cofirm("Do you like explosives?");

//prompt("What type of cars do you like?");

var inventory = {
    coins:100,
    armor:0,
    weapon:0,
    food:0,
}
var pcStats = {
    life:100,
    attack:0,
    armor_rating:0,
}
var enemy = {
    life:50,
    attack:10,
    armor_rating:0,
}

Game();

function Game(){
    
    document.write("This game is a WIP, it is imcomplete, so please be understanding if there are areas or commands that do not work.");
    alert("At the moment the Castle area is the only area that is coded, so go in the other directions at your own risk.")
    var playerName = prompt("What is your name?");
    alert("Welcome to the game "+playerName);
    
    Crossroads();
    
    function Crossroads(){
        var crossRoads = prompt("You wake up in the middle of an intersection, with no idea how you got there. Unable to see through your blurred eyes you wait until your vision clears. \n -Look around \n - Walk in a direction N,S,E,W").toLowerCase();

        CrossRLook();
        
        function CrossRLook(){
            if( crossRoads == "look" || crossRoads == "look around"){
                //document.write(".\n The stuff works ok?")
                var crossRoadsLook = prompt("You notice there is a note beside you, a sign in the middle of the road, and in the distance there is a familiar city to the North, a flying city to the East, a land of ruins to the South, and a castle to the West. \n Read note \n Read sign \n Crossroad").toLowerCase();
             
                if( crossRoadsLook == "read note"){
                    alert("You did this to yourself "+playerName+" enjoy your new life. And don't bother trying to come back, you can't. \n - X");
                    CrossRLook();
                }
                else if( crossRoadsLook == "read sign"){
                    var crossSign = prompt("Welcome to x type help to get a command list, you can only access this list from this sign. Or type exit to leave the game. To Resume type exit then hit cancel.").toLowerCase();
                    if( crossSign == "help" || crossSign == "h"){
                        alert("command list");
                        CrossRLook();
                    }
                    else if( crossSign == "exit"){
                        var exitGame = confirm("Are you sure you wish to exit?");
                        if( exitGame){
                            alert(playerName+" has left the game.");
                        }
                        else{
                            CrossRLook();
                        }
                    }
                    else if( crossRoadsLook == "crossroad"){
                        Crossroads();
                    }
                }
            }
            else if( crossRoads == "walk n" || crossRoads == "n"){
                Nroad1();
            }
            else if( crossRoads == "walk w" || crossRoads == "w"){
                Wroad1();
            }
            else if( crossRoads == "walk s" || crossRoads == "s"){
                alert("Incomplete area.");
                CrossRLook();
            }
            else if( crossRoads == "walk e" || crossRoads == "e"){
                alert("Incomplete area.");
                CrossRLook();
            }
            else{
                alert("Aight, type a command thats given.");
                CrossRLook();
            }
        } 
    }
    function Nroad1(){
        var roadN1 = prompt("You walk along the road until you are tired and need to rest. The City looks closer than it used to. \n N,S,E,W \n Look around").toLowerCase();
        if( roadN1 == "look" || roadN1 == "look around"){
            var roadn1Look = prompt("The City is in the distance, the crossroads are behind you. Though farther away now you can still see the castle to the West, the flying city to the East, and the ruins to the South.  \n N,S,E,W \n Look around")
        }
    }
    function Wroad1(){
        var roadW1 = prompt("You walk along the road for a while and then sit down to rest. The Castle looks closer than it used to. \n N,S,E,W \n Look around").toLowerCase();
        if( roadW1 == "look" || roadW1 == "look around"){
            var roadW1Look = prompt("The Castle is closer than before. You can still see the Ruins and the City, the Flying City is faded into the distance.  \n N,S,E,W").toLowerCase();
            if(roadW1Look == "n" || roadW1Look == "walk n"){
                alert("Incomplete area");
                Wroad1();
            }
            else if(roadW1Look == "w" || roadW1Look == "walk w"){
                Wroad2();
            }
            else if(roadW1Look == "s" || roadW1Look == "walk s"){
                alert("Incomplete area");
                Wroad1();
            }
            else if(roadW1Look == "e" || roadW1Look == "walk e"){
                alert("Incomplete area");
                Wroad1();
            }
            else{
                alert("Please use a suggested command.");
                Wroad1();
            }
        }
        else if(roadW1 == "n" || roadW1 == "walk n"){
            alert("Incomplete area");
            Wroad1();
        }
        else if(roadW1 == "w" || roadW1 == "walk w"){
            Wroad2();
        }
        else if(roadW1 == "s" || roadW1 == "walk s"){
            alert("Incomplete area");
            Wroad1();
        }
        else if(roadW1 == "e" || roadW1 == "walk e"){
            alert("Incomplete area");
            Wroad1();
        }
        else{
            alert("Please use a suggested command.");
            Wroad1();
        }
    }
    function Wroad2(){
        var roadW2 = prompt("You resume walking for a while. \n N,S,E,W \n Look around");
        if(roadW2 == "look" || roadW2 == "look around"){
            var roadW2Look = prompt("You can now barely see the flying city in the distance, the castle is now huge, and the city and ruins are farther away than before.");
        }
    }
    function Wroad3(){

    }
    function KeepSmith(){
        alert("The Blacksmith looks over at you, scowls and the slowly walks over to see what you want.");
            var keepSmith = prompt("What would you like to buy? \n Bow \n Armor \n Leave").toLowerCase();
                if( keepSmith == "weapon"){
                    var weaponBuy = confirm("Are you sure you want to buy this Bow?");
                        if(weaponBuy){
                            inventory.weapon ++;
                            alert("You now have "+inventory.weapon+" weapons!");
                            inventory.coins = inventory.coins - 10;
                            alert("You now have "+inventory.coins+" coins!");
                            KeepSmith();
                        }
                        else{
                            KeepSmith();
                        }
                }
    }

}
                /* old broken function
                if(crossroads == "look around" || crossroads == "look"){    
                    var crossroadslook = prompt("You notice there is a note beside you, a sign in the middle of the road, and in the distance there is a familiar city to the North, a flying city to the East, a land of ruins to the South, and a castle to the West. /n Read note /n Read sign /n Walk N,S,E,W").toLowerCase;
                
                    CrossRSign();
                
                    function CrossRSign(){  
                        if(crossroadslook == "read sign"){
                            var crossroadssign = prompt("Welcome to x type help to get a command list, you can only access this list from this sign. Or type exit to leave the game.").toLowerCase;

                            if(crossroadssign == "help"){
                            alert("command list");
                            }
                            else if(crossroadssign == "exit"){
                                var resume = confirm("Do you wish to exit?");
                                if(resume){
                                    Crossroads();
                                }
                                else{
                                    alert("You died standing there.");
                                }
                            }
                            else{
                                CrossRLook();
                            }
                        
                        }
                
                    else if(crossroadslook == "read note"){
                    alert("You did this to yourself "+playerName+" enjoy your new life. And don't bother trying to come back, you can't");
                    }
                    else{
                        alert("You dun did something wrong.");
                        Crossroads();
                    }
                    } 
                }
                else if(crossroads == "walk north" || crossroads == "north" || crossroads == "n"){
                    function RoadN1(){
                    var roadn1 = prompt("You walk down the north road until you are tired and rest for a bit. /n Look /n Walk N,S,E,W").toLowerCase;
                    }
                }*/

    /* Example Function
    
    function Swamp(){
        var swampEnv = prompt("This is bad, go away. \n swim \n follow path").toLowerCase;

        if( swampEnv == "follow" || swampEnv == "follow path"){
            var swampPath = prompt("You enter on the path, and in the distance you see a hut. You see a light burning inside as you approach the hut. \n Enter the hut \n Walk away").toLowerCase;
            if( swampPath == "enter" || swampPath == "enter hut" || swampPath == "enter the hut"){
                alert("You enter the hut, and see a brighter than normal fire in the fireplace. A larg pot is nearby with a bubbling solution inside.")
            }
            else if( swampPath == "walk away"){
                alert("You walk away from the swamp.");
            }
            else{
                alert("Seriously? Just type a real command.");

            }
        }
        else if(swampEnv == "swim"){
            alert("you swam away");
        }
        else{
            alert("Type a real command");
            Swamp();
        }
    } End of example function */