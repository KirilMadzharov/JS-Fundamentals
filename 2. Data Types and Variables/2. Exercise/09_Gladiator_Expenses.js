function gladiatorExpenses(lostBattles, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetBroken = Math.floor(lostBattles / 2);
    let swordBroken = Math.floor(lostBattles / 3);
    let shieldBroken = Math.floor(lostBattles / 6);
    let armorBroken = Math.floor(shieldBroken / 2);

    let repairExpenses = helmetBroken * helmetPrice + swordBroken * swordPrice +
        shieldBroken * shieldPrice + armorBroken * armorPrice;

    console.log(`Gladiator expenses: ${repairExpenses.toFixed(2)} aureus`);
}
