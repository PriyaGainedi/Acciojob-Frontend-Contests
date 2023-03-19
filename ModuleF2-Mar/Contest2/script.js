var sports = {};


function OpeningCeremony(sports,Race100M){
    setTimeout(function(){
        console.log("Let the games begin");
        sports["red"] = 0; sports["green"] = 0; sports["blue"] = 0; sports["yellow"] = 0;
        console.log(sports);
        Race100M(sports,LongJump);
    },1000);
}

function Race100M(sports,LongJump){
    setTimeout(function(){
        var times = {"red":Math.floor(Math.random() * 5 + 10),"green":Math.floor(Math.random() * 5 + 10),"blue":Math.floor(Math.random() * 5 + 10),"yellow":Math.floor(Math.random() * 5 + 10)};
        const sorted = Object.fromEntries(
            Object.entries(times).sort(([, a], [, b]) => a - b)
        )
        var minKey = Object.keys(sorted)[0];
        var secondminKey = Object.keys(sorted)[1];
        sports[minKey] = 50;
        sports[secondminKey] = 25;
        console.log(sports);
        const sortedsports = Object.fromEntries(
            Object.entries(sports).sort(([, a], [, b]) => b - a)
        )
        var sportskeys = Object.keys(sortedsports);
        console.log(sportskeys[0],"won Race100M");
        LongJump(sports,HighJump);
    },3000);
}

function LongJump(sports,HighJump){
    setTimeout(function(){
        var colors = ['red', 'green', 'blue', 'yellow'];
        var selectedcolor = colors[Math.floor(Math.random() * colors.length)];
        sports[selectedcolor] = sports[selectedcolor]+150;
        console.log(sports);
        const sortedsports = Object.fromEntries(
            Object.entries(sports).sort(([, a], [, b]) => b - a)
        )
        var sportskeys = Object.keys(sortedsports);
        console.log(sportskeys[0],"won LongJump");
        HighJump(sports,AwardCeremony);
    },2000);  
}

function HighJump(sports,AwardCeremony){
    let color = prompt("Enter Color of High Jump: ");
    if (color == null || color == "") {
        console.log("Event was cancelled");
    } else {
     sports[color] = sports[color] + 100;
    }
    console.log(sports);
    const sortedsports = Object.fromEntries(
        Object.entries(sports).sort(([, a], [, b]) => b - a)
    )
    var sportskeys = Object.keys(sortedsports);
    console.log(sportskeys[0],"won HighJump");
    AwardCeremony(sports);
}

function AwardCeremony(sports){
    console.log(sports);
    const sortedsports = Object.fromEntries(
        Object.entries(sports).sort(([, a], [, b]) => b - a)
    )
    var sportskeys = Object.keys(sortedsports);
    var sportsvalues = Object.values(sortedsports);

    console.log(sportskeys[0],"came first with", sportsvalues[0]);
    console.log(sportskeys[1],"came second with", sportsvalues[1]);
    console.log(sportskeys[2],"came third with", sportsvalues[2]);
    console.log(sportskeys[3],"came fourth with", sportsvalues[3]);

    
}
OpeningCeremony(sports,Race100M);