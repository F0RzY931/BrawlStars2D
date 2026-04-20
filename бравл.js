// Внутри функции updateBullets, при уничтожении врага:
if(e.hp <= 0) {
    enemies.splice(j,1);
    enemiesKilledThisWave++;
    
    // Начисление очков: 10 для редких бойцов, 5 для обычных
    const currentBrawler = BRAWLERS[player.brawlerId];
    const pointsGain = (currentBrawler.rarity === "rare") ? 10 : 5;
    player.score += pointsGain;
    
    // Шанс выпадения гема 30%
    if(Math.random() < 0.3) {
        gemsItems.push({
            x: e.x, y: e.y, radius: 7,
            value: Math.floor(Math.random()*3)+1
        });
    }
    j--;
}