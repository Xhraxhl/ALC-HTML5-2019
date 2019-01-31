// Comment
/*

Comment

*/

//document.write("<h1> I can't wait for <em>spring!</em> </h1>");


//alert("I'm stealing your vbucks, k?");

//cofirm("Do you like explosives?");

//prompt("What type of cars do you like?");


Game();

function Game(){
    
    document.write("This game is a WIP, it is imcomplete, so please be understanding if there are areas or commands that do not work. \n - Clark Allen");
    var playerName = prompt("What is your name?");
    alert("Welcome to the game "+playerName);
    
    Crossroads();
    
    function Crossroads(){
        var crossroads = prompt("You wake up in the middle of an intersection, with no idea how you got there. Unable to see through your blurred eyes you wait until your vision clears. \n -Look around \n - Walk in a direction N,S,E,W").toLowerCase();

        CrossRLook();
        
        function CrossRLook(){
            if( crossroads == "look" || crossroads == "look around"){
                //document.write(".\n The stuff works ok?")
                var crossroadslook = prompt("You notice there is a note beside you, a sign in the middle of the road, and in the distance there is a familiar city to the North, a flying city to the East, a land of ruins to the South, and a castle to the West. \n Read note \n Read sign \n Crossroad").toLowerCase();
             
                if( crossroadslook == "read note"){
                    alert("You did this to yourself "+playerName+" enjoy your new life. And don't bother trying to come back, you can't. \n - X");
                    CrossRLook();
                }
                else if( crossroadslook == "read sign"){
                    var crosssign = prompt("Welcome to x type help to get a command list, you can only access this list from this sign. Or type exit to leave the game. To Resume type exit then hit cancel.").toLowerCase();
                    if( crosssign == "help" || crosssign == "h"){
                        alert("command list");
                        CrossRLook();
                    }
                    else if( crosssign == "exit"){
                        var exitgame = confirm("Are you sure you wish to exit?");
                        if( exitgame){
                            alert(playerName+" has left the game.");
                        }
                        else{
                            CrossRLook();
                        }
                    }
                    else if( crossroadslook == "crossroad"){
                        Crossroads();
                    }

                }
            }
            else if( crossroads == "walk n" || crossroads == "n"){
                Nroad1();
            }
            else{
                alert("Aight, type a command thats given.");
                CrossRLook();
            }
        }
    
    }
    function Nroad1(){
        var roadn1 = prompt("You walk along the road until you are tired and need to rest. The City looks closer than it used to. \n N,S,E,W \n Look around").toLowerCase();
        if( roadn1 == "look" || roadn1 == "look around"){
            var roadn1Look = prompt("The City is in the distance, the crossroads are behind you. Though farther away now you can still see the castle to the West, the flying city to the East, and the ruins to the South.")
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