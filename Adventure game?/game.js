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
var keepSetting = {
    metNobles = 0
}

Game();

function Game(){
    
    var worldNames = ["Flehr","Flahr","Flohr"]

    document.write("This game is a WIP, it is imcomplete, so please be understanding if there are areas or commands that do not work.");
    alert("At the moment the Castle area is the only area that is coded, so go in the other directions at your own risk.")
    var playerName = prompt("What is your name?");
    alert("Welcome to "+worldNames[Math.floor(Math.random() * 3)]+" "+playerName+".");
    
    Crossroads();
    
    function Crossroads(){
        var crossRoads = prompt("You wake up in the middle of an intersection, with no idea how you got there. Unable to see through your blurred eyes you wait until your vision clears. \n Look around \n Walk in a direction N,S,E,W").toLowerCase();

        CrossRLook();
        
        function CrossRLook(){
            if( crossRoads == "look" || crossRoads == "look around"){
                //document.write(".\n The stuff works ok?")
                var crossRoadsLook = prompt("You notice there is a note beside you, a sign in the middle of the road, and in the distance there is a familiar city to the North, a flying city to the East, a land of ruins to the South, and a castle to the West. \n Read note \n Read sign").toLowerCase();
             
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
                }
                else{
                    Crossroads();
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
                Crossroads();
            }
            else if( crossRoads == "walk e" || crossRoads == "e"){
                alert("Incomplete area.");
                Crossroads();
            }
            else{
                alert("Aight, type a command thats given.");
                Crossroads();
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
        var roadW2 = prompt("You resume walking for a while. You are starting to see the true size of the casle now. \n N,S,E,W \n Look around").toLowerCase();
        if(roadW2 == "look" || roadW2 == "look around"){
            alert("You can now barely see the flying city in the distance, the castle is now huge, and the city and ruins are farther away than before.");
            Wroad2();
        }
        else if(roadW2 == "n" || roadW2 == "walk n"){
            alert("Incomplete area");
            Wroad2();
        }
        else if(roadW2 == "w" || roadW2 == "walk w"){
            Wroad3();
        }
        else if(roadW2 == "s" || roadW2 == "walk s"){
            alert("Incomplete area");
            Wroad2();
        }
        else if(roadW2 == "e" || roadW2 == "walk e"){
            Wroad1();
        }
    }
    function Wroad3(){
        var roadW3 = prompt("You are now just outside the castle, the other cities are no longer visable. \n N,S,E,W \n Look").toLowerCase();
        switch(roadW3){
            case "n" || "walk n":
                alert("Incomplete area");
                Wroad3();
            break;
            case "s" || "walk s":
                alert("Incomplete area");
                Wroad3();
            break;
            case "e" || "walk e":
                Wroad2();
            break;
            case "w" || "walk w":
                CastleGateE();
            break;
            case "look" || "look around":
                alert("There isn't much around besides forest and the pathway that you are on.");
                Wroad3();
            break;
            default:
                alert("Please stick to the options given.");
                Wroad3();
        }
    }
    function CastleGateE(){
        var castleEGate = prompt("Walking through the giant gates you can see past the castle walls, and into the giant forest to the east. \n E,W \n Look around").toLowerCase();
        switch(castleEGate){
            case "n" || "walk n":
                alert("There is a wall there.");
                CastleGateE();
            break;
            case "s" || "walk s":
                alert("There is a wall there.");
                CastleGateE();
            break;
            case "w" || "walk w":
                KeepPathE();
            break;
            case "e" || "walk e":
                Wroad3();
            break;
            case "look" || "look around":
                var castleEGateLook = prompt("You notice some stairs in the corner that you could climb up. \n Climb stairs \n Ignore").toLowerCase();
                if(castleEGateLook == "climb" || "climb stairs"){
                    var aboveEGate = prompt("Now on top of the East gate you notice you can actually see the ruins and city vary distantly in the east. \n N,S \n Climb down");
                    if(aboveEGate == "climb down" || aboveEGate == "down"){
                        CastleGateE();
                    }
                    else if(aboveEGate == "n" || aboveEGate == "walk n"){
                        Wall1NE();
                    }
                    else if(aboveEGate == "s" || aboveEGate == "walk s"){
                        Wall1SE();
                    }
                    else{
                        alert("You slipped back down to the gate.");
                        CastleGateE();
                    }
                }
                else{
                    CastleGateE();
                }
            default:
                alert("I've been giving you options you know");
            break;
        }
    }
    function KeepPathE(){
        var ePathKeep = prompt("Walking into the castle you can see it is even bigger than you had fist thought. \n Look around \n N,S,E,W").toLowerCase();
        switch(ePathKeep){
            case "w" || "walk w":
                Keep();
            break;
            case "n" || "walk n":
                StablesNE1();
            break;
            case "s" || "walk s":
                GuardHouse1();
            break;
            case "e" || "walk e":
                CastleGateE();
            break;
            case "look" || "look around":
                var eKeepPathLook = prompt("You see the giant keep in the center, stables north of you, some houses south of you, and the exit behind you. \n N,S,E,W");
                switch(eKeepPathLook){
                    case "w" || "walk w":
                        alert("You enter the Keep.");
                        Keep();
                    break;
                    case "n" || "walk n":
                        StablesNE1();
                    break;
                    case "s" || "walk s":
                        GuardHouse1();
                    break;
                    case "e" || "walk e":
                        CastleGateE();
                    break;
                    default:
                        KeepPathE();
                    break;
                }
            break;
            default:
                alert("Please use a given option.");
                KeepPathE();
            break;
        }
    }
    function Keep(){
        var insideKeep = prompt("You walk into a large entryway with multiple passages. \n Upstairs \n West tower \n Look \n Leave").toLowerCase();
        switch(insideKeep){
            case "upstairs" || "go upstairs":
                var keepUpstairs = prompt("You climb the stairs until you arrive at a doorway. \n Enter \n Go back down").toLowerCase();
                if(keepUpstairs == "enter" || keepUpstairs == "enter doorway"){
                    if(metNobles == 1){
                        Keepthrone();
                    }
                    else{
                        KeepThrone1();
                    }
                }
                else if(keepUpstairs == "down" || keepUpstairs == "go down"){
                    Keep();
                }
                else{
                    Keep();
                }
            break;
            case "west tower" || "go to west tower":
                var westtower = prompt("You walk to the west tower. \n Upstairs \n East tower \n Look \n Leave").toLowerCase();
            break;
            case "leave":
                KeepPathE();
            break;
            case "look" || "look around":
                var keepLook = prompt("You look around and only notice a Smith in one of the corners \n Buy \n Keep").toLowerCase();
                if(keepLook == "buy"){
                    KeepSmith();
                }
                else{
                    Keep();
                }
            break;
            default:
                alert("Type an option thats given please.");
                Keep();
            break;
        }
    }
    function KeepSmith(){
        alert("The Blacksmith looks over at you, scowls and the slowly walks over to see what you want.");
            var keepSmith = prompt("What would you like to buy? \n Bow \n Armor \n Leave").toLowerCase();
                if( keepSmith == "bow" || keepSmith == "buy bow"){
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
                else if(keepSmith == "armor" || keepSmith == "buy armor"){
                    var weaponBuy = confirm("Are you sure you want to buy this Armor?");
                        if(weaponBuy){
                            inventory.armor ++;
                            alert("You now have "+inventory.armor+" sets of armor!");
                            inventory.coins = inventory.coins - 20;
                            alert("You now have "+inventory.coins+" coins left.");
                            KeepSmith();
                        }
                }
                else if(keepSmith == "leave"){
                    Keep();
                }
                else{
                    Keep();
                }
    }
    function KeepThrone1(){
        var throneRoom = prompt("You walk into the throne room, and realize instantly that you barged right into the middle of a meeting. The group of five nobles is staring at you from around their map table, clearly annoyed. \n Greet them \n Apologize and leave").toLowerCase();
        switch(throneRoom){
            case "greet them" || "greet":
                MeetKeepNobles();
            break;
            case "apologize and leave" || "leave" || "apologize":
                Keep();
            break;
            default:
                alert("You panicked and ran all the way out of the keep.");
                KeepPathE();
            break;
        }
    }
    function Keepthrone(){

    }
    function MeetKeepNobles(){
        keepSetting.metNobles ++;
        alert("You walk in, and join their cirlce standing around the map table, with them still staring at you. One of the nobles shakes off his suprise and asks, 'And who might you be?', you respond saying, 'I go by "+playerName+", who might all of you be?'");

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