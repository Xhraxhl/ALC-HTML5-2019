// Comment
/*

Comment

*/

//document.write("<h1> I can't wait for <em>spring!</em> </h1>");


//alert("I'm stealing your vbucks, k?");

//cofirm("Do you like explosives?");

//prompt("What type of explosives do you like?");


Game();

function Game(){
    
    document.write("Nou");
    var playerName = prompt("What is your name?");
    alert("Welcome to the game "+playerName);
    
    Crossroads();
    
    function Crossroads(){
        var crossroads = prompt("You wake up in the middle of an intersection, with no idea how you got there. Unable to see through your blurred eyes you wait until your vision clears. /n -Look around /n - Walk in a direction N,S,E,W").toLowerCase;
        
        if(crossroads == "look around" || crossroads == "look"){
            var crossroadslook = prompt("You notice there is a note beside you, a sign in the middle of the road, and in the distance there is a familiar city to the North, a flying city to the East, a land of ruins to the South, and a castle to the West. /n Read note /n Read sign /n Walk N,S,E,W").toLowerCase;
            
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
            }
            else{
                alert("You dun did something wrong.");
                Crossroads();
            }
        }
        else if(crossroads == "walk north" || crossroads == "north" || crossroads == "n"){
            var roadn1 = prompt("You walk down the north road until you are tired and rest for a bit. /n Look /n Walk N,S,E,W").toLowerCase;
        }
    }
    
    
    
}
