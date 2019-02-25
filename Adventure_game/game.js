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
    arrows:0,
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
var castleSettings = {
    metNobles:0,
    questionAsked:0,
    hasHouse:0,
}
var crossroadSettings = 0


Game();

function Game(){

    var inv = function(){
        alert("Coins: "+inventory.coins+"\n Weapons: "+inventory.weapon+"\n Food: "+inventory.food);
    }
    var exit = function(){
        GameEND();
    }
    
    const worldName = [Math.floor(Math.random() * 3)]
    
    var worldNames = ["Flehr","Flahr","Flohr"]

    document.write("This game is a WIP, it is imcomplete, so please be understanding if there are areas or commands that do not work.");
    alert("At the moment the Castle area is the only area that is coded, so go in the other directions at your own risk.")
    var playerName = prompt("What is your name?");
    while(!confirm("Are you sure you want your name to be "+playerName+"?")){
        playerName = prompt("Then what do you want your name to be?");
    }
    alert("Welcome to "+worldNames[worldName]+" "+playerName+".");
    
    Crossroads();
    
    function Crossroads(){
        // This function is a complete mess of code, the rest are more organized.
        if(crossroadSettings == 1){
            var crossRoads = prompt("You are at the crossroads between civilizations. \n N,S,E,W").toLowerCase();
            switch(crossRoads){
                case "n":
                    Nroad1();
                break;
                case "s":
                    alert("Thats not finished.");
                    Crossroads()
                break;
                case "w":
                    Wroad1();
                break;
                case "e":
                    alert("Unfinished area.");
                    Crossroads();
                break;
                default:
                    Crossroads();
                break;
            }
        }
        
        else{   
            var crossRoads = prompt("You wake up in the middle of an intersection, with no idea how you got there. Unable to see through your blurred eyes you wait until your vision clears. \n Look around \n Walk in a direction N,S,E,W").toLowerCase();

            crossroadSettings ++;

            CrossRLook();

            function CrossRLook(){
                if( crossRoads == "look" || crossRoads == "look around"){
                    //document.write(".\n The stuff works ok?")
                    var crossRoadsLook = prompt("You notice that your are in military fatigues, with a note in a pocket, you are in the middle of the road next to a sign, and in the distance there is a familiar looking city to the North, a flying city to the East, a land of ruins to the South, and a castle to the West. \n Read note \n Read sign").toLowerCase();
                
                    if( crossRoadsLook == "read note"){
                        alert("You did this to yourself "+playerName+" enjoy your new life. And don't bother trying to come back, you can't. \n - X");
                        CrossRLook();
                    }
                    else if( crossRoadsLook == "read sign"){
                        var crossSign = prompt("Welcome to "+worldNames[worldName]+", if you wish to exit the game, type exit to leave the game. To Resume type exit then hit cancel.").toLowerCase();
                        if( crossSign == "exit"){
                            var exitGame = confirm("Are you sure you wish to exit?");
                            if( exitGame){
                                exit();
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
    }
    function Nroad1(){
        alert("Thats not finished.");
        Crossroads();
        //var roadN1 = prompt("You walk along the road until you are tired and need to rest. The City looks closer than it used to. \n N,S,E,W \n Look around").toLowerCase();
        //if( roadN1 == "look" || roadN1 == "look around"){
        //    var roadn1Look = prompt("The City is in the distance, the crossroads are behind you. Though farther away now you can still see the castle to the West, the flying city to the East, and the ruins to the South.  \n N,S,E,W \n Look around")
        //}
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
        else{
            Wroad2();
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
            break;
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
    function GuardHouse1(){
        var firstGuardHouse = prompt("You step into the guardhouse see rows of bunks, but no guards are inside. \n Look around \n Leave").toLowerCase();
        switch(firstGuardHouse){
            case "leave":
                KeepPathE();
            break;
            case "look" || "look around":
                var guardHouseLook = prompt("You notice a bow on the wall, a door on the other side, and that there actually is a guard sleeping on one of the beds. \n Take bow \n Open the door \n Wake guard").toLowerCase();
                switch(guardHouseLook){
                    case "take bow" || "bow":
                        inventory.weapon ++;
                        alert("You take the bow and dash back outside before the guard can notice.");
                        alert("You now have "+inventory.weapon+" weapons.");
                        KeepPathE();
                    break;
                    case "open the door" || "open door" || "door":
                        alert("You step outside and into the middle of some houses.");
                        CastleHousing1();
                    break;
                    case "wake guard" || "wake the guard":
                        alert("The guard opens his eyes, sits up, and stares at you, 'Can't just let a man get in some sleep can you boss?', and flops back down onto the bed.");
                        alert("Cunfused you walk back outside.");
                        KeepPathE();
                    break;
                    default:
                        GuardHouse1();
                    break;
                }
            break;
            default:
                GuardHouse1();
            break;
        }
    }
    function CastleHousing1(){
        if(castleSettings.hasHouse == 1){
            var firstCastleHouses = prompt("You walk back behind the guardhouse and see multiple houses. \n N,E,S,W \n Enter your house").toLowerCase();
            switch(firstCastleHouses){
                case "n":
                    GuardHouse1();
                break;
                case "s":
                    alert("There is a wall there.");
                    CastleHousing1();
                break;
                case "w":
                    CSFarm2();
                break;
                case "e":
                    alert("You can't climb that wall mate.");
                    CastleHousing1();
                break;
                case "enter house" || "house":
                    CastlePCHouse();
                break;
                default:
                    alert("You trying to find an easter egg or something?");
                    CastleHousing1();
                break;
            }
        }
        else{
            var firstCastleHouses = prompt("You walk back behind the guardhouse and see multiple houses. \n N,E,S,W").toLowerCase();
            switch(firstCastleHouses){
                case "n":
                    GuardHouse1();
                break;
                case "s":
                    alert("There is a wall there.");
                    CastleHousing1();
                break;
                case "w":
                    CSFarm2();
                break;
                case "e":
                    alert("You can't climb that wall mate.");
                    CastleHousing1();
                break;
                default:
                    alert("You trying to find an easter egg or something?");
                    CastleHousing1();
                break;
            }
        }
    }
    function CastleStablesE1(){

    }
    function CastleStablesE2(){

    }
    function CastleStablesW1(){
        let eastStables1 = prompt("You step into the north end of the stables, but realize there are no horses, just empty stalls. \n N,S,E,W \n Look around").toLowerCase();
        switch(eastStables1){
            case "look" || "look around":
                alert("That path isn't programmed.");
                CastleStablesW1();
            break;
            case "n":
                KeepPathW();
            break;
            case "s":
                CastleStablesW2();
            break;
            case "e":
                alert("Yeah... Mate theres a freaking wall there.");
                CastleStablesW1();
            break;
            case "w":
                CSCourtyard1();
            break;
            default:
                alert("I HAVE BEEN GIVING YOU COMMANDS THIS WHOLE FREAKIN TIME");
                CastleStablesW1();
            break;
        }
    }
    function CastleStablesW2(){
        let eastStables2 = prompt("You walk into the south end of the stables, but there is still nothing there. \n N,E,S,W \n Look around").toLowerCase();
        switch(eastStables2){
            case "look" || "look around":
                alert("I haven't programmed that path yet");
                CastleStablesW2();
            break;
            case "n":
                CastleStablesW1();
            break;
            case "s":
                alert("Really? you ran into another wall.");
                CastleStablesW2();
            break;
            case "e":
                CSFarm1();
            break;
            case "w":
                alert("Mate, you hit ANOTHER wall... \n I guess I could tell you if there are walls somewhere. \n But wheres the fun in that?");
                CastleStablesW2();
            break;
            default:
                alert("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                CastleStablesW2();
            break;
        }
    }
    function CSCourtyard1(){
        let southCourtyard1 = prompt("You are right next to the southwest wall of the Keep, across the fields you can see all the way to the south wall. \n N,S,E,W").toLowerCase();
        switch(southCourtyard1){
            case "n":
                var southYardClimb = confirm("You notice that you might be able to climb up the wall. Do you wish to climb the wall?");
                if(southYardClimb){
                    KeepClimb();
                }
                else{
                    CSCourtyard1();
                }
            break;
            case "s":
                CSFarm1();
            break;
            case "e":
                CSCourtyard2();
            break;
            case "w":
                CastleStablesW1();
            break;
            default:
                alert("Please stop bothering me, as a program I am getting sick of all these weird things you say.");
                CSCourtyard1();
            break;
        }
    }
    function KeepClimb(){
        let climbKeep = prompt("You start to climb, once you are around the middle of the tower, enough to see over the walls, you get a bit tired and rest against the wall. \n Climb higher \n Go back down").toLowerCase();
        switch(climbKeep){
            case "climb higher" || "higher" || "climb":
                KeepTop();
            break;
            case "go back down" || "down" || "go back" || "go down":
                CSCourtyard1();
            break;
            default:
                alert("Tada! You got stuck.");
                KeepClimb();
            break;
        }
    }
    function KeepTop(){
        let keepRoof = prompt("You are at the top of the keep and can see far out into the forests to the north, east, and south, but you notice that the world just stops if you look west far enough. \n Go back down \n Rest").toLowerCase();
        switch(keepRoof){
            case "go back down" || "down" || "go back" || "go down":
                KeepClimb();
            break;
            case "rest":
                alert("You go to sleep and wake up later.");
                KeepTop();
            break;
            default:
                KeepTop();
            break;
        }
    }
    function GameEND(){
        alert("Game Ended, you left early.");
    }
    function CSCourtyard2(){
        let southCourtyard2 = prompt("You are right next to the southeast wall of the Keep, across the fields you can see all the way to the south wall. \n N,S,E,W").toLocaleLowerCase();
        switch(southCourtyard2){
            case "n":
                alert("You might've just ran into the Keep wall.");
                CSCourtyard2();
            break;
            case "s":
                CSFarm2();
            break;
            case "e":
                KeepPathE();
            break;
            case "w":
                CSCourtyard1();
            break;
            default:
                alert("Please stop bothering me, just type in the stupid commands");
                CSCourtyard2();
            break;

        }
    }
    function CNCourtyard1(){
        let northCourtyard1 = prompt("You are at the northwest wall of the keep, you can see farms to the north, and buildings to both the east and west. \n N,S,E,W").toLowerCase();
        switch(northCourtyard1){
            case "s":
                alert("What are you gonna do? \n I mean besides running into the wall.");
                CNCourtyard1();
            break;
            case "w":
                GuardHouse2();
            break;
            case "n":
                CNFarm1();
            break;
            case "e":
                CNCourtyard2();
            break;
            default:
                alert("How would you feel if you prompted somebody to do things and they did somthing else?");
                CNCourtyard1();
            break;
        }
    }
    function CNCourtyard2(){
        let northCourtyard2 = prompt("You are at the northeast wall of the keep, you can see to the north wall and the buildings to the east and west. \n N,S,E,W").toLowerCase();
        switch(northCourtyard2){
            case "n":
                CNFarm2();
            break;
            case "s":
                alert("Walking into walls is a great passtime isn't it?");
            break;
            case "w":
                CNCourtyard1();
            break;
            case "e":
                KeepPathE();
            break;
            default:
                alert("COMMANDS");
                CNCourtyard2();
            break;
        }
    }
    function CSFarm1(){
        let southFarm1 = prompt("You step into a large area of farmland, across the field you can see the east and south walls. \n N,S,E,W").toLowerCase();
        switch(southFarm1){
            case "n":
                CSCourtyard1();
            break;
            case "s":
                CSFarm3();
            break;
            case "e":
                CSFarm2();
            break;
            case "w":
                CastleStablesW2();
            break;
            default:
                alert("You are getting real annoying with all that nonsense you type in.");
                CSFarm1();
            break;
        }
    }
    function CSFarm2(){
        let southFarm2 = prompt("You step into a large area of farmland, across the field you can see the west and south walls. \n N,S,E,W").toLowerCase();
        switch(southFarm2){
            case "n":
                CSCourtyard2();
            break;
            case "s":
                CSFarm4();
            break;
            case "e":
                CastleHousing1();
            break;
            case "w":
                CSFarm1();
            break;
            default:
                alert("You are getting real annoying with all that nonsense you type in.");
                CSFarm2();
            break;
        }
    }
    function CSFarm3(){
        let southFarm3 = prompt("You step into a large area of farmland, across the field you can see the Keep and the east side of the castle. \n N,S,E,W").toLowerCase();
        switch(southFarm3){
            case "n":
                CSFarm1();
            break;
            case "s":
                alert("You ran right into a wall.");
                CSFarm3();
            break;
            case "e":
                CSFarm4();
            break;
            case "w":
                alert("Yeah... Thats a wall");
                CSFarm3();
            break;
            default:
                alert("You are speaking some other language with all that nonsense you type in.");
                CSFarm3();
            break;
        }
    }
    function CSFarm4(){
        let southFarm4 = prompt("You step into a large area of farmland, across the field you can see the Keep and the west side of the castle. \n N,S,E,W").toLowerCase();
        switch(southFarm4){
            case "n":
                CSFarm2();
            break;
            case "s":
                alert("That may or may not have been a wall");
                CSFarm4();
            break;
            case "e":
                alert("WALLS ARE EVERYWHERE!");
                CSFarm4();
            break;
            case "w":
                CSFarm3();
            break;
            default:
                alert("You don't even read this do you?");
                CSFarm4();
            break;
        }
    }
    function CNFarm1(){
        let northFarm1 = prompt("You step into a large area of farmland, you can see across the field to the north and east walls. \n N,S,E,W").toLowerCase();
        switch(northFarm1){
            case "n":
                CNFarm3();
            break;
            case "s":
                CNCourtyard1();
            break;
            case "e":
                CNFarm2();
            break;
            case "w":
                CastleHousing2();
            break;
            default:
                alert("You are getting real annoying with all that nonsense you type in.");
                CNFarm1();
            break;
        }
    }
    function CNFarm2(){
        let northFarm2 = prompt("You are in a large field, you can see across to the west and north walls. \n N,S,E,W").toLowerCase();
        switch(northFarm2){
            case "n":
                CNFarm4();
            break;
            case "s":
                CNCourtyard2();
            break;
            case "e":
                CastleStablesE1();
            break;
            case "w":
                CNFarm1();
            break;
            default:
                alert("Commands that are given usually work better.");
                CNFarm2();
            break;
        }
    }
    function CNFarm3(){
        let northFarm3 = prompt("You are in the northwest field and can see the Keep and east wall across the farmland. \n N,E,S,W").toLowerCase();
        switch(northFarm3){
            case "n":
                alert("I got you to run into ANOTHER wall. \n HA");
                CNFarm3();
            break;
            case "s":
                CNFarm1();
            break;
            case "e":
                CNFarm4();
            break;
            case "w":
                alert("AAAAAND!!!! \n another wall");
                CNFarm3();
            break;
            default:
                alert("Aren't prompted commands a beautiful thing?");
                CNFarm3();
            break;
        }

    }
    function CNFarm4(){
        let northFarm4 = prompt("You are in large swath of farmland, across the fields you can see the keep and the west wall. \n N,S,E,W").toLowerCase();
        switch(northFarm4){
            case "n":
                alert("HA \n another wall");
                CNFarm4();
            break;
            case "s":
                CNFarm2();
            break;
            case "e":
                alert("GUESS WHAT? \n You walked into a wall... again.");
            break;
            case "w":
                CNFarm3();
            break;
            default:
                alert("Hey, listen, Hey listen... \n Don't let them take advantage of your slipstream.");
                CNFarm4();
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
                alert("Sorry but this is unfinished.");
                Keep();
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
            var keepSmith = prompt("What would you like to buy? \n Bow \n Armor \n Arrows \n Leave").toLowerCase();
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
                else if(keepSmith == "arrows" || "buy arrows"){
                    while(!confirm("Are you sure you want to purchase "+buyArrows+" for 1 coin per arrow?")){
                        buyArrows = propmt("How many arrows do you want to buy?");
                    }
                    for(i = 1; i <= buyArrows; i++){
                        inventory.arrows ++;
                        inventory.coins --;
                    }
                    alert("You have "+inventory.coins+" left");
                    alert("You have purchest "+buyArrows+" arrows.");
                    KeepSmith();
                }
                else if(keepSmith == "leave"){
                    Keep();
                }
                else{
                    KeepSmith();
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
        alert("This may or may not be broke");
        Keep();
    }
    function MeetKeepNobles(){
        castleSettings.metNobles ++;
        alert("You walk in, and join their cirlce standing around the map table, with them still staring at you. One of the nobles shakes off his suprise and asks, 'And who might you be?', you respond saying, 'I go by "+playerName+", who might all of you be?'");
        alert("'What might your business be here in the Castle of "+worldNames[worldName]+" be?' One noble asks, but another, friendlier looking noble steps in 'Sorry about Klein he isn't very friendly to strangers such as yourself barging into our meetings, I am Reighn the master of the Keep.'");
        var nobleQuestions1 = prompt("'Could we ask where you got your fine armor?' Reighn asks. \n You look down realizing that your military fatigues had somehow morphed into a quite expensive looking suit of armor. \n Tell truth \n Make up story").toLowerCase();
        switch(nobleQuestions1){
            case "tell truth" || "truth":
                NobleTruths();
            break;
            case "make up story" || "story":
                NobleLies();
            break;
            default:
                alert("Could you maybe, kinda, just, possibly, use one of the options I just gave you?");
                MeetKeepNobles();
            break;
        }
    }
    function NobleTruths(){
        if(castleSettings.questionAsked == 0){    
            alert("You tell the nobles your story, how you woke up in the middle of a crossroad, and ended up walking into this castle, right into the middle of their meeting.");
            var nobleTruth = prompt("'So you have no recollection of how you actually got here, and you can walk on the roads? This is the biggest breakthrough since the last traveler that showed up here!' \n Traveler? \n Go on").toLowerCase();
            switch(nobleTruth){
                case "traveler?" || "traveler":
                    alert("'So you haven't heard of what you are? A traveler, is one who is not from our realm of "+worldNames[worldName]+", is one who can walk the roads, and is not held in by the borders of the settlements. There used to be many of you, but we haven't heard from any travelers in over 200 years. At the moment you're the only living traveler we have heard of.'");
                    castleSettings.questionAsked ++;
                    NobleTruths();
                break;
                case "go on":
                castleSettings.questionAsked ++;
                NobleTruths(); 
                break;   
                default:
                    alert("RESTARTING FUNCTION BECAUSE YOU CAN'T TYPE IN A COMMAND THAT I GAVE YOU");
                    NobleTruths();
                break; 
            }
        }
        else{
            alert("'You should go make yourself at home, there are some houses behind the south eastern guardhouse. The empty one can be yours. We need to discuss this.' You take the hint to leave, and go straight to your new house.");
            castleSettings.hasHouse ++;
            CastlePCHouse();
        }    
    }
    function CastlePCHouse(){
        alert("Outfitting this would take a looongg while, so I just made it exist for now so I can come back to this \n Sorry");
        CastleHousing1();
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