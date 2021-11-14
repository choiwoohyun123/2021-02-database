
const setup = () => {
    document.getElementById("valMatch").max = document.getElementById("js-range").value;
    document.getElementById("valSet").innerHTML= document.getElementById("js-range").value;
 }

const clicking = () => {
    var matchCom = Math.floor(document.getElementById("valMatch").max * Math.random());
    var matchUser = document.getElementById("valMatch").value;
    
    if(matchCom > matchUser)
    { 
    document.getElementById("result").innerHTML = "You choose: " + matchUser +
     ", the machine choose: " + matchCom + "<br><strong>You lost!</strong>";
    }
    else 
    {
     document.getElementById("result").innerHTML = "You choose: " + matchUser + 
    ", the machine choose: " + matchCom + "<br><strong>You Win!</strong>";
    }
 }