const player1 = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    points: 0,
};

const player2 = {
    name: "Luigi",
    speed: 3,
    maneuverability: 4,
    power: 4,
    points: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

async function getRandonBlock(){
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "STRAIGHT"
            break;
        case random < 0.66:
            result = "CURVE"
            break;
        default:
            result = "HEAD TO HEAD"
    }
    return result
}

async function logRollResult(CharacterName, block, diceResult, atrtribute){
    console.log('${CharacterName} 🎲 rolou um dado de ${block} ${diceResult1}')
}

async function playRaceEngine(Character1, Character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Round ${round} 🏁`);

        let block = await getRandonBlock()
        console.log(`Bloco: ${block}`);
    }


    let diceResulte1 = await rollDice();
    let diceResulte2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if(block === "STRAIGHT"){
        totalTestSkill1 = Character1.speed + diceResulte1;
        totalTestSkill2 = Character2.speed + diceResulte2;

        await logRollResult(Character1.name,
            "speed", 
            diceResulte1, 
            Character1.speed);

        await logRollResult(Character2.name,
            "speed", 
            diceResulte2, 
            Character2.speed);
    }
    if(block === "CURVE"){
        totalTestSkill1 = Character1.maneuverability + diceResulte1;
        totalTestSkill2 = Character2.maneuverability + diceResulte2;

         await logRollResult(Character1.name,
            "maneuverability", 
            diceResulte1, 
            Character1.maneuverability);

        await logRollResult(Character2.name,
            "maneuverability", 
            diceResulte2, 
            Character2.maneuverability);
    }
    if(block === "HEAD TO HEAD"){
        powerResult1 = Character1.power + diceResulte1;
        powerResult2 = Character2.power + diceResulte2;    


         await logRollResult(Character1.name,
            "power", 
            diceResulte1, 
            Character1.power);

        await logRollResult(Character2.name,
            "power", 
            diceResulte2, 
            Character2.power);
    }
}


(async function main(){
    console.log(
        `🏁🚨 Race between ${player1.name} and ${player2.name} começando...\n`
    );

    await playRaceEngine(player1, player2)
})(); 



(async function main(){
    console.log(
        `🏁🚨 Race between ${player1.name} and ${player2.name} começando...\n`
    );

    await playRaceEngine(player1, player2)
})(); 

