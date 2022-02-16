// WORLD OBJECTS
const p1 = {
  name: '',
  level: 0,
  HP: 0,
  GP: 0, 
  STR: 0, 
  DEF: 0,
  AB: 0, 
  XP: 0,
  weapons: [{}],
  items: [{}],
  wins: [{}],
  isAlive: false,
}
const worldItems = [
    {name: 'coins',},
    {name: 'ale',},
    {name: 'mead',},
    {name: 'purse',},
    {name: 'potion',},
    {name: 'arrows',},
    {name: 'shield',},
    {name: 'leather-gloves',},
    {name: 'mega-potion',},
    {name: 'helm',},
]
const worldWeapons = [
    {
        name: 'training sword',
        str: 3,
    },
    {
        name: 'dagger',
        str: 5,
    },
    {
        name: 'bow',
        str: 7,
    },
    {
        name: 'sword',
        str: 9,
    },
]

// ELEMENTS
const character = document.getElementById('character')
const inputEl = document.getElementById('input-el')
const welcome = document.getElementById('welcome')
const townSquare = document.getElementById('townSquare')
const house = document.getElementById('house')
const bedroom = document.getElementById('bedroom')
const chest = document.getElementById('chest')
const tavern = document.getElementById('tavern')
const room = document.getElementById('room')
const shop = document.getElementById('shop')
const arena = document.getElementById('arena')
const stage = document.getElementById('stage')
const forest = document.getElementById('forest')
const bridge = document.getElementById('bridge')
const creek = document.getElementById('creek')
const hut = document.getElementById('hut')
const hut2 = document.getElementById('hut2')
const champion = document.getElementById('champion')
const hell = document.getElementById('hell')

// ITEMS
const coins = document.getElementById('coins')
const ale = document.getElementById('ale')
const mead = document.getElementById('mead')
const purse = document.getElementById('purse')
const potion = document.getElementById('potion')
const arrows = document.getElementById('arrows')
const shield = document.getElementById('shield')
const gloves = document.getElementById('leather-gloves')
const megaPot = document.getElementById('mega-potion')
const helm = document.getElementById('helm')

// WEAPONS
const trainSword = document.getElementById('training-sword')
const dagger = document.getElementById('dagger')
const bow = document.getElementById('bow')
const sword = document.getElementById('sword')

// PLAYER
const welPlayer = document.getElementById('wel-player')
const welStats = document.getElementById('wel-stats')
const townPlayer = document.getElementById('town-player')
const townStats = document.getElementById('town-stats')
const housePlayer = document.getElementById('house-player')
const houseStats = document.getElementById('house-stats')
const bedPlayer = document.getElementById('bed-player')
const bedStats = document.getElementById('bed-stats')
const chestPlayer = document.getElementById('chest-player')
const chestStats = document.getElementById('chest-stats')
const tavPlayer = document.getElementById('tav-player')
const tavStats = document.getElementById('tav-stats')
const roomPlayer = document.getElementById('room-player')
const roomStats = document.getElementById('room-stats')
const shopPlayer = document.getElementById('shop-player')
const shopStats = document.getElementById('shop-stats')
const arenaPlayer = document.getElementById('arena-player')
const arenaStats = document.getElementById('arena-stats')
const stagePlayer = document.getElementById('stage-player')
const stageStats = document.getElementById('stage-stats')
const forestPlayer = document.getElementById('forest-player')
const forestStats = document.getElementById('forest-stats')
const bridgePlayer = document.getElementById('bridge-player')
const bridgeStats = document.getElementById('bridge-stats')
const creekPlayer = document.getElementById('creek-player')
const creekStats = document.getElementById('creek-stats')
const hutPlayer = document.getElementById('hut-player')
const hutStats = document.getElementById('hut-stats')
const hut2Player = document.getElementById('hut2-player')
const hut2Stats = document.getElementById('hut2-stats')
const champPlayer = document.getElementById('champion-player')
const champStats = document.getElementById('champion-stats')
const hellPlayer = document.getElementById('hell-player')
const hellStats = document.getElementById('hell-stats')

// WELCOME BUTTONS
const readyBtn = document.getElementById('ready-btn')
const playerBtn = document.getElementById('player-btn')
const rollDice = document.getElementById('roll-btns')
const hpBtn = document.getElementById('hp-btn')
const strBtn = document.getElementById('str-btn')
const defBtn = document.getElementById('def-btn')
const abBtn = document.getElementById('ab-btn')
const gpBtn = document.getElementById('gp-btn')
const townBtn = document.getElementById('town-btn')
// TOWN BUTTONS
const expTown = document.getElementById('explore-town')
const fountainBtn = document.getElementById('fountain-btn')
const coinBtn = document.getElementById('coin-btn')
const monkBtn = document.getElementById('monk-btn')
const maidBtn = document.getElementById('maid-btn')
const houseBtn = document.getElementById('house-btn')
const forestBtn = document.getElementById('forest-btn')
const tavBtn = document.getElementById('tav-btn')
const shopBtn = document.getElementById('shop-btn')
const arenaBtn = document.getElementById('arena-btn')
// HOUSE BUTTONS
const bedBtn = document.getElementById('bedroom-btn')
const houseTownBtn = document.getElementById('house-town-btn')
const levelBtn = document.getElementById('level-btn')
const bedHouseBtn = document.getElementById('bed-house-btn')
const chestBtn = document.getElementById('chest-btn')
const expChest = document.getElementById('explore-chest')
const closeChest = document.getElementById('close-chest')
const chestBedBtn = document.getElementById('chest-bed-btn')
// TAVERN BUTTONS
const expTav = document.getElementById('explore-tavern')
const bartendBtn = document.getElementById('bartender-btn')
const barBtns = document.getElementById('bar-btns')
const barYes = document.getElementById('bar-yes-btn')
const barNo = document.getElementById('bar-no-btn')
const drunkardBtn = document.getElementById('drunkard-btn')
const drunkBtns = document.getElementById('drunk-btns')
const drunkYes = document.getElementById('drunk-yes-btn')
const drunkNo = document.getElementById('drunk-no-btn')
const meadBtn = document.getElementById('mead-btn')
const aleBtn = document.getElementById('ale-btn')
const tableBtn = document.getElementById('search-table')
const purseBtn = document.getElementById('purse-btn')
const tavTownBtn = document.getElementById('tav-town-btn')
// ROOM BUTTONS
const roomBtn = document.getElementById('room-btn')
const expRoom = document.getElementById('explore-room')
const potionBtn = document.getElementById('potion-btn')
const restBtn = document.getElementById('rest-btn')
const tavRetBtn = document.getElementById('tav-ret-btn')
// SHOP BUTTONS
const expShop = document.getElementById('explore-shop')
const shopItemBtn = document.getElementById('shop-item-btn')
const trainSwordBtn = document.getElementById('t-sword-btn')
const daggerBtn = document.getElementById('dagger-btn')
const bowBtn = document.getElementById('bow-btn')
const swordBtn = document.getElementById('sword-btn')
const shopTownBtn = document.getElementById('shop-town-btn')
// ARENA BUTTONS
const expArena = document.getElementById('explore-arena')
const arenaTownBtn = document.getElementById('arena-town-btn')
const stageBtn = document.getElementById('stage-btn')
const helmBtn = document.getElementById('helm-btn')
// STAGE BUTTONS
const ringBtn = document.getElementById('ring-btn')
const initBtn = document.getElementById('init-btn')
const opBtn = document.getElementById('op-btn')
const fightBtn = document.getElementById('fight-btn')
const arenaRetBtn = document.getElementById('arena-ret-btn')
const challengeBtns = document.getElementById('challenge')
let opponent = document.getElementById('opponent')
let opStats = document.getElementById('op-stats')
// FOREST BUTTONS
const expForest = document.getElementById('explore-forest')
const soldierBtn = document.getElementById('soldier-btn')
const arrowBtn = document.getElementById('arrow-btn')
const treeBtn = document.getElementById('tree-btn')
const forestTownBtn = document.getElementById('forest-town-btn')
// BRIDGE BUTTONS
const bridgeBtn = document.getElementById('bridge-btn')
const expBridge = document.getElementById('explore-bridge')
const trollFight = document.getElementById('troll-btn')
const trollInit = document.getElementById('troll-init')
const shieldBtn = document.getElementById('shield-btn')
const bridgeForestBtn = document.getElementById('forest-ret-btn')
const hutBtn = document.getElementById('hut-btn')
// CREEK BUTTONS
const creekBtn = document.getElementById('creek-btn')
const creekBridgeBtn = document.getElementById('creek-bridge-btn')
// HUT BUTTONS
const expHut = document.getElementById('explore-hut')
const gloveBtn = document.getElementById('glove-btn')
const tarGuard1 = document.getElementById('targ-guard1')
const tarGuard2 = document.getElementById('targ-guard2')
const tarWitch = document.getElementById('targ-witch')
const bridgeRetBtn = document.getElementById('bridge-ret-btn')
const hut2Btn = document.getElementById('hut2-btn')
// HUT 2 BUTTONS
const expHut2 = document.getElementById('explore-hut2')
const megaPotBtn = document.getElementById('mega-pot-btn')
const hutRetBtn = document.getElementById('hut-ret-btn')
// CHAMP BUTTONS
// HELL BUTTONS
const expHell = document.getElementById('explore-hell')
const demonBtn = document.getElementById('demon-btn')
const lawBtn = document.getElementById('lawyer-btn')
const restartBtn = document.getElementById('restart-btn')

// CONTENT
const townCont = document.getElementById('town-content')
const chestCont = document.getElementById('chest-content')
const tavCont = document.getElementById('tavern-content')
const roomCont = document.getElementById('room-content')
const shopCont = document.getElementById('shop-content')
const arenaCont = document.getElementById('arena-content')
const stageCont = document.getElementById('stage-content')
const forestCont = document.getElementById('forest-content')
const bridgeCont = document.getElementById('bridge-content')
const hutCont = document.getElementById('hut-content')
const hut2Cont = document.getElementById('hut2-content')
const hellCont = document.getElementById('hell-content')
const ambush = document.getElementById('ambush')

// MESSAGES / DIALOGUE 
const townMsg = document.getElementById('town-message')
const townTalk = document.getElementById('town-dialogue')
const bedMsg = document.getElementById('bedroom-message')
const tavMsg = document.getElementById('tavern-message')
const barTalk = document.getElementById('bar-dialogue')
const roomMsg = document.getElementById('room-message')
const shopMsg = document.getElementById('shop-message')
const shopTalk = document.getElementById('shop-dialogue')
const arenaMsg = document.getElementById('arena-message')
const arenaTalk = document.getElementById('arena-dialogue')
const stageMsg = document.getElementById('stage-message')
const stageTalk = document.getElementById('stage-dialogue')
const forestMsg = document.getElementById('forest-message')
const forestTalk = document.getElementById('forest-dialogue')
const bridgeMsg = document.getElementById('bridge-message')
const bridgeTalk = document.getElementById('bridge-dialogue')
const hutMsg = document.getElementById('hut-message')
const hutTalk = document.getElementById('hut-dialogue')
const hut2Msg = document.getElementById('hut2-message')
const hut2Talk = document.getElementById('hut2-dialogue')
const champMsg = document.getElementById('champion-message')
const hellMsg = document.getElementById('hell-message')
const hellTalk = document.getElementById('hell-dialogue')

// QUOTES
const monkQuotes = [
    'Monk: Rest is an excellent way to replenish your HP.',
    'Monk: A keen eye leaves no table unturned.',
    'Monk: Everything in moderation - especially the local mead!',
    'Monk: He who fights and runs away, can run away another day.',
    'Monk: Beware a wolf wearing sheep wool...',
    'Monk: Even wise-men play the fool...',
]
const maidQuotes = [
    'Old Woman: The forest is lovely, so long as you stay out of the deeper parts!',
    'Old Woman: I lost my purse in the tavern... I hope no one picks it up... ',
    'Old Woman: This fountain is sure to bring you good fortune!',
    `Old Woman: My son was a brave warrior...`,
]
const soldierQuotes = [
    'Soldier: I like swords.',
    'Soldier: I like swords..',
    'Soldier: I like swords...',
    'Soldier: Watch the road ahead, there may be some villainy afoot...',
    'Soldier: This forest has known many battles...',
    'Soldier: Do you like swords?',
    'Soldier: Did I mention, I like swords?',
]
const barReject = [
    `Bartender: Well, what do you want then?`,
    `Bartender: We don't serve anything else here!`,
    `Bartender: If you're just going to waste my time....`,
    `Bartender: I've had it with you drunkards!!`,
]
const shopReject = [
    `Shopkeep: C'mon, mate... you know you can't afford that!`,
    `Shopkeep: I'm not haggling with you.`,
    `Shopkeep: You're f%$#*^@ joking right?`,
    `Shopkeep: No.`,
]
const demonQuotes = [
  `Demon: `,
  `Demon: `,
  `Demon: `,
  `Demon: `,
  `Demon: `,
]
const lawyerQuotes = [
  `Lawyer: `,
  `Lawyer: `,
  `Lawyer: `,
  `Lawyer: `,
  `Lawyer: `,
]

// DISPLAY PLAYER FUNCTIONS
function showFirstPlayer(){
    welPlayer.style.display = 'block';
    welStats.style.display = 'block';
    welStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideFirstPlayer(){
    welPlayer.style.display = 'none';
    welStats.style.display = 'none';
}
function showTownPlayer(){
    townPlayer.style.display = 'block';
    townStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideTownPlayer(){
    townPlayer.style.display = 'none';
}
function showHousePlayer(){
    housePlayer.style.display = 'block';
    houseStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideHousePlayer(){
    housePlayer.style.display = 'none';
}
function showBedPlayer(){
    bedPlayer.style.display = 'block';
    bedStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideBedPlayer(){
    bedPlayer.style.display = 'none';
}
function showChestPlayer(){
    chestPlayer.style.display = 'block';
    chestStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideChestPlayer(){
    chestPlayer.style.display = 'none';
}
function showTavPlayer(){
    tavPlayer.style.display = 'block';
    tavStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideTavPlayer(){
    tavPlayer.style.display = 'none';
}
function showRoomPlayer(){
    roomPlayer.style.display = 'block';
    roomStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideRoomPlayer(){
    roomPlayer.style.display = 'none';
}
function showShopPlayer(){
    shopPlayer.style.display = 'block';
    shopStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideShopPlayer(){
    shopPlayer.style.display = 'none';
}
function showArenaPlayer(){
    arenaPlayer.style.display = 'block';
    arenaStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideArenaPlayer(){
    arenaPlayer.style.display = 'none';
}
function showStagePlayer(){
    stagePlayer.style.display = 'block';
    stageStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideStagePlayer(){
    stagePlayer.style.display = 'none';
}
function showForestPlayer(){
    forestPlayer.style.display = 'block';
    forestStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideForestPlayer(){
    forestPlayer.style.display = 'none';
}
function showBridgePlayer(){
    bridgePlayer.style.display = 'block';
    bridgeStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideBridgePlayer(){
    bridgePlayer.style.display = 'none';
}
function showCreekPlayer(){
  creekPlayer.style.display = 'block';
  creekStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideCreekPlayer(){
  creekPlayer.style.display = 'none';
}
function showHutPlayer(){
    hutPlayer.style.display = 'block';
    hutStats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideHutPlayer(){
    hutPlayer.style.display = 'none';
}
function showHut2Player(){
    hut2Player.style.display = 'block';
    hut2Stats.textContent = `NAME: ${p1.name} | LEV: ${p1.level} / 3 | HP: ${p1.HP} | XP: ${p1.XP} / 30 | STR: ${p1.STR} | DEF: ${p1.DEF} | AB: ${p1.AB} | GP: ${p1.GP} |`;
}
function hideHut2Player(){
    hut2Player.style.display = 'none';
}
function showChampPlayer(){
    champPlayer.style.display = 'block';
    champStats.textContent = `${p1.name} is the champion!!`;
}
function hideChampPlayer(){
    champPlayer.style.display = 'none';
}
function showHellPlayer(){
    hellPlayer.style.display = 'block';
    hellStats.textContent = `NAME: ZOMBIE-${p1.name} | LEV: XX | HP: XX | XP: XX | STR: XX | DEF: XX | AB: XX | GP: XX |`;
}
function hideHellPlayer(){
    hellPlayer.style.display = 'none';
}
// DISPLAY OPPONENT
function displayOpponent(){
  opponent.style.display = 'block';
  opStats.style.display = 'block';
}
function hideOpponent(){
  opponent.style.display = 'none';
  opStats.style.display = 'none';
}

// DISPLAY BACKGROUND FUNCTIONS
function displayWel(){
    welcome.style.display = 'block';
    readyBtn.style.display = 'block';
}
function displayTown(){
    townSquare.style.display = 'block';
    showTownPlayer()
}
function displayHouse(){
  house.style.display = 'block';
  showHousePlayer();
}
function displayBed(){
  houseHide();
  bedroom.style.display = 'block';
  showBedPlayer();
}
function displayChest(){
  chest.style.display = 'block';
  showChestPlayer();
}
function displayTav(){
  tavern.style.display = 'block';
  showTavPlayer();
}
function displayRoom(){
  room.style.display = 'block';
  showRoomPlayer();
}
function displayShop(){
  shop.style.display = 'block';
  showShopPlayer();
}
function displayArena(){
  arena.style.display = 'block';
  showArenaPlayer();
}
function displayStage(){
  stage.style.display = 'block';
  showStagePlayer();
}
function displayForest(){
  forest.style.display = 'block';
  showForestPlayer();
}
function displayBridge(){
  bridge.style.display = 'block';
  showBridgePlayer();
}
function displayCreek(){
  creek.style.display = 'block';
  showCreekPlayer();
}
function displayHut(){
  hut.style.display = 'block';
  showHutPlayer();
}
function displayHut2(){
  hut2.style.display = 'block';
  showHut2Player();
}
function displayChampion(){
  champion.style.display = 'block';
  champMsg.textContent = `Congratulations ${p1.name}! You did it!`
  showChampPlayer();
}
function displayHell(){
  hell.style.display = 'block';
  showHellPlayer();
}
// HIDE FUNCTIONS
function welcomeHide(){
    welcome.style.display = 'none';
    hideFirstPlayer()
}
function townHide(){
    hideTownPlayer();
    townSquare.style.display = 'none';
    townCont.style.display = 'none';
}
function houseHide(){
  house.style.display = 'none';
  hideHousePlayer()
}
function bedHide(){
  bedroom.style.display = 'none';
  hideBedPlayer()
}
function chestHide(){
  chest.style.display = 'none';
  hideChestPlayer();
  hideChestCont();
}
function tavHide(){
  tavern.style.display = 'none';
  hideTavCont();
  hideTavPlayer();
}
function roomHide(){
  room.style.display = 'none';
  hideRoomCont();
  hideRoomPlayer();
}
function shopHide(){
  shop.style.display = 'none';
  hideShopCont();
  hideShopPlayer();
}
function arenaHide(){
  arena.style.display = 'none';
  hideArenaCont();
  hideArenaPlayer();
}
function stageHide(){
  stage.style.display = 'none';
  hideStageCont()
  hideStagePlayer();
}
function forestHide(){
  forest.style.display = 'none';
  hideForestCont()
  hideForestPlayer()
}
function bridgeHide(){
  bridge.style.display = 'none';
  hideBridgeCont();
  hideBridgePlayer();
}
function creekHide(){
  creek.style.display = 'none';
}
function hutHide(){
  hut.style.display = 'none';
  hideHutCont();
  hideHutPlayer();
}
function hut2Hide(){
  hut2.style.display = 'none';
  hideHut2Cont();
  hideHut2Player();
}
function championHide(){
  champion.style.display = 'none'
  hideChampPlayer()
}
function hellHide(){
  hell.style.display = 'none';
  hideHellCont();
  hideHellPlayer();
}
// CONTENT FUNCTIONS
function showTownCont(){
  townCont.style.display = 'block';
}
function hideTownCont(){
  townCont.style.display = 'none';
}
function showChestCont(){
  chestCont.style.display = 'block';
}
function hideChestCont(){
  chestCont.style.display = 'none';
}
function showTavCont(){
  tavCont.style.display= 'flex';
  tableBtn.style.display = 'block';
}
function hideTavCont(){
  tavCont.style.display = 'none';
  tableBtn.style.display = 'none';
}
function showRoomCont(){
  roomCont.style.display = 'block';
  potionBtn.style.display = 'block';
  roomMsg.textContent = `${p1.name}, you found a potion!`;
}
function hideRoomCont(){
  roomCont.style.display = 'none';
}
function showShopCont(){
  shopCont.style.display = 'block';
}
function hideShopCont(){
  shopCont.style.display = 'block';
}
function showArenaCont(){
  arenaCont.style.display = 'block';
  helmBtn.style.display = 'block';
  arenaMsg.textContent = `${p1.name}, you found a helm!`;
}
function hideArenaCont(){
  arenaCont.style.display = 'none';
}
function showStageCont(){
  stageCont.style.display = 'block';
}
function hideStageCont(){
  stageCont.style.display = 'none';
}
function showForestCont(){
  forestCont.style.display = 'block';
}
function hideForestCont(){
  forestCont.style.display = 'none';
}
function showBridgeCont(){
  bridgeCont.style.display = 'block';
}
function hideBridgeCont(){
  bridgeCont.style.display = 'none';
}
function showHutCont(){
  hutCont.style.display = 'block';
}
function hideHutCont(){
  hutCont.style.display = 'none';
}
function showHut2Cont(){
  hut2Cont.style.display = 'block';
}
function hideHut2Cont(){
  hut2Cont.style.display = 'none';
}
function showHellCont(){
  hellCont.style.display = 'block';
}
function hideHellCont(){
  hellCont.style.display = 'none';
}
function displayAmbush(){
  ambush.style.display = 'block';
}
// WORLD FUNCTIONS
function showRollBtns(){
  rollDice.style.display = 'flex'
}
function rollHP(min = 10,  max = 20) {
    min = Math.ceil(10);
    max = Math.floor(20);
    return Math.floor(Math.random() * (max - min) + min); 
}
function rollStrength(min = 1, max = 10) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min) + min);
}
function rollDef(min = 1,  max = 10) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min) + min); 
}
function rollAb(min = 1,  max = 12) {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min) + min); 
}
function rollGp(min = 1,  max = 7) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min); 
}
function newChar(){
    character.style.display = 'block';
    playerBtn.style.display = 'block';
    inputEl.style.display = 'block';
    readyBtn.style.display = 'none';
    p1.name = '';
    p1.level = 0;
    p1.HP = 0;
    p1.GP = 0; 
    p1.STR = 0;
    p1.DEF = 0;
    p1.AB = 0;
    p1.XP = 0;
    p1.INIT = 0;
    p1.weapons = [];
    p1.items = [];
    p1.vanquished =[];
    p1.isAlive = false;
}
function hpCheck(){
  if (p1.HP >= 1) {
    p1.isAlive = true;
  } else if (p1.HP <= 0) {
    p1.isAlive = false
    killPlayer()
  }
}
function killPlayer(){
  tavHide()
  displayHell()
  hellMsg.textContent = `${p1.name}, you am ded`;
}
function playerWin(){
  bedHide()
  displayChampion()
}
// NAV BUTTONS
townBtn.addEventListener('click', function(){
  welcomeHide()
  displayTown()
})
townBtn.addEventListener('click', function(){
    welcomeHide()
    displayTown()
})
houseBtn.addEventListener('click', function(){
    townHide()
    displayHouse()
})
houseTownBtn.addEventListener('click', function(){
    houseHide()
    displayTown()
})
bedBtn.addEventListener('click', function(){
    houseHide()
    displayBed()
})
bedHouseBtn.addEventListener('click', function(){
    bedHide()
    displayHouse()
})
chestBtn.addEventListener('click', function(){
    bedHide()
    displayChest()
})
chestBedBtn.addEventListener('click', function(){
    chestHide()
    displayBed()
})
tavBtn.addEventListener('click', function(){
    townHide()
    displayTav()
})
tavTownBtn.addEventListener('click', function(){
    tavHide()
    displayTown()
})
roomBtn.addEventListener('click', function(){
    tavHide()
    displayRoom()
})
tavRetBtn.addEventListener('click', function(){
    roomHide()
    displayTav()
})
shopBtn.addEventListener('click', function(){
    townHide()
    displayShop()
})
shopTownBtn.addEventListener('click', function(){
    shopHide()
    displayTown()
})
arenaBtn.addEventListener('click', function(){
    townHide()
    displayArena()
})
arenaTownBtn.addEventListener('click', function(){
    arenaHide()
    displayTown()
})
stageBtn.addEventListener('click', function(){
    arenaHide()
    displayStage()
})
arenaRetBtn.addEventListener('click', function(){
    stageHide()
    displayArena()
})
forestBtn.addEventListener('click', function(){
    townHide()
    displayForest()
})
forestTownBtn.addEventListener('click', function(){
    forestHide()
    displayTown()
})
bridgeBtn.addEventListener('click', function(){
    forestHide()
    displayBridge()
})
bridgeForestBtn.addEventListener('click', function(){
    bridgeHide()
    displayForest()
})
creekBtn.addEventListener('click', function(){
    bridgeHide()
    displayCreek()
})
creekBridgeBtn.addEventListener('click', function(){
  creekHide()
  displayBridge()
})
hutBtn.addEventListener('click', function(){
  displayHut()
  bridgeHide()
})
bridgeRetBtn.addEventListener('click', function(){
  displayBridge()
  hutHide()
})
hut2Btn.addEventListener('click', function(){
  displayHut2()
  hutHide()
})
hutRetBtn.addEventListener('click', function(){
  hut2Hide()
  displayHut()
})
restartBtn.addEventListener('click', function(){
  hellHide()
  displayWel()
})
// EXPLORE BTNS
expTown.addEventListener('click', function(){
  showTownCont()
})
expChest.addEventListener('click', function(){
  showChestCont()
})
closeChest.addEventListener('click', function(){
  hideChestCont()
})
expTav.addEventListener('click', function(){
  showTavCont()
})
expRoom.addEventListener('click', function(){
  showRoomCont()
})
expShop.addEventListener('click', function(){
  trainSword.style.display = 'block';
  trainSwordBtn.style.display = 'block';
  shopMsg.textContent =`${p1.name}, you found a training-sword!`;
})
shopItemBtn.addEventListener('click', function(){
  showShopCont()
})
expArena.addEventListener('click', function(){
  showArenaCont()
})
ringBtn.addEventListener('click', function(){
  showStageCont()
  ringBtn.style.display = 'none';
})
expForest.addEventListener('click', function(){
  showForestCont()
})
expBridge.addEventListener('click', function(){
  showBridgeCont()
})
expHut.addEventListener('click', function(){
  showHutCont()
})
expHut2.addEventListener('click', function(){
  showHut2Cont()
})
expHell.addEventListener('click', function(){
  showHellCont()
})
// WELCOME BUTTONS
hpBtn.addEventListener('click', function(){
    p1.HP = rollHP()
    showFirstPlayer()
    hpBtn.style.display = 'none';
})
strBtn.addEventListener('click', function(){
    p1.STR = rollStrength()
    showFirstPlayer()
    strBtn.style.display = 'none';
})
defBtn.addEventListener('click', function(){
    p1.DEF = rollDef()
    showFirstPlayer()
    defBtn.style.display = 'none';
})
abBtn.addEventListener('click', function(){
    p1.AB = rollAb()
    showFirstPlayer()
    abBtn.style.display = 'none';
})
gpBtn.addEventListener('click', function(){
    p1.GP = rollGp()
    showFirstPlayer()
    gpBtn.style.display = 'none';
})
readyBtn.addEventListener('click', function(){
  newChar()
})
playerBtn.addEventListener('click', function(){
    p1.name = inputEl.value;
    p1.isAlive = true;
    playerBtn.style.display = 'none';
    inputEl.style.display = 'none';
    townBtn.style.display = 'block';
    showRollBtns()
    showFirstPlayer()  
})
// TOWN BUTTONS
fountainBtn.addEventListener('click', function(){
  coins.style.display = 'inline-flex';
  coinBtn.style.display = 'block';
  fountainBtn.style.display = 'none';
  townMsg.textContent = `${p1.name}, you found 5 gold coins!`;
})
coinBtn.addEventListener('click', function(){
  coins.style.display = 'none';
  coinBtn.style.display = 'none';
  p1.GP += 5;
  p1.XP += 3;
  townMsg.textContent = ``;
  showTownPlayer()
})
monkBtn.addEventListener('click', function(){
  townTalk.textContent = monkQuotes[Math.floor(Math.random()*monkQuotes.length)]
})
maidBtn.addEventListener('click', function(){
  townTalk.textContent = maidQuotes[Math.floor(Math.random()*maidQuotes.length)]
})
// BEDROOM
levelBtn.addEventListener('click', function(){
  if (p1.level >= 3) {
  playerWin()
  } else if (p1.XP >= 30) {
    p1.level += 1;
    p1.HP += 10;
    p1.STR += 5;
    p1.DEF +=5;
    p1.AB +=2;
    p1.XP = 0;
    bedMsg.textContent = `You leveled up!`;
    showBedPlayer()
  } else if (p1.XP < 30) {
    bedMsg.textContent = `You do not have enough XP to level up yet!`;
  }
})
// TAVERN 
bartendBtn.addEventListener('click', function(){
  barTalk.textContent = `Bartender: Would you like a pint of ale?`;
  barBtns.style.display = 'inline-flex';
})
barYes.addEventListener('click', function(){
  if (p1.GP >= 3){
    ale.style.display = 'block';
    aleBtn.style.display = 'block';
    barTalk.textContent = `Bartender: Here ya' go!`;
    p1.GP -= 3;
    barBtns.style.display = 'none';
    showTavPlayer()
  } else {
    barTalk.textContent = `Bartender: This ale isn't free ya' know!`;
    barBtns.style.display = 'none';
  }
})
barNo.addEventListener('click', function(){
  barTalk.textContent = barReject[Math.floor(Math.random()*barReject.length)]
  barBtns.style.display = 'none';
})
aleBtn.addEventListener('click', function(){
  ale.style.display = 'none';
  aleBtn.style.display = 'none';
  barTalk.textContent = ``;
  p1.XP += 10;
  p1.HP -= 2;
  p1.items.push(worldItems[1])
  hpCheck()
  showTavPlayer()
})
drunkardBtn.addEventListener('click', function(){
  barTalk.textContent = `Drunkard: **grumble grumble** yu wunt som meeeeaaad?? **hic grumble**`;
  drunkBtns.style.display = 'inline-flex';
})
drunkYes.addEventListener('click', function(){
  if (p1.GP >= 15){
    mead.style.display = 'block';
    meadBtn.style.display = 'block';
    barTalk.textContent = `Drunkard: **grumble** careful- thas som stee-rong shtuff... **hic**`;
    p1.GP -= 3;
    drunkBtns.style.display = 'none';
    showTavPlayer()
  } else {
    barTalk.textContent = `Drunkard: Heyyy **grumble** whadderya tryin' ter pull?! **hic**`;
    drunkBtns.style.display = 'none';
  }
})
drunkNo.addEventListener('click', function(){
  barTalk.textContent = `Drunkard: **grumble** whassamaddur?? **hic** Yu feared of my meeeaaad?? **hic**`;
  drunkBtns.style.display = 'none';
})
meadBtn.addEventListener('click', function(){
  mead.style.display = 'none';
  meadBtn.style.display = 'none';
  barTalk.textContent = ``;
  p1.XP += 20;
  p1.HP -= 5;
  tavMsg.textContent = `${p1.name} consumes mead **oooh, warm and spicy...**`;
  p1.items.push(worldItems[2])
  hpCheck()
  showTavPlayer()
})
tableBtn.addEventListener('click', function(){
  purse.style.display = 'block';
  purseBtn.style.display = 'block';
  tableBtn.style.display = 'none';
  tavMsg.textContent = `${p1.name}, you found a coin purse!`
})
purseBtn.addEventListener('click', function(){
  purse.style.display = 'none';
  purseBtn.style.display = 'none';
  p1.XP += 10;
  p1.GP += 15;
  p1.items.push(worldItems[3])
  tavMsg.textContent = ``;
  showTavPlayer()
})
// ROOM
potionBtn.addEventListener('click', function(){
  p1.HP += 10;
  p1.XP += 10;
  roomMsg.textContent = ``;
  potion.style.display = 'none';
  potionBtn.style.display = 'none';
  p1.items.push(worldItems[4])
  showRoomPlayer()
})
restBtn.addEventListener('click', function(){
  p1.HP += 20;
  p1.XP += 10;
  roomMsg.textContent = `${p1.name}, you take a short nap and wake feeling refreshed!`
  showRoomPlayer()
})
// SHOP
trainSwordBtn.addEventListener('click', function(){
  p1.weapons.push(worldWeapons[0])
  p1.STR += 3;
  p1.DEF += 1;
  p1.XP += 10;
  p1.AB += 2;
  trainSword.style.display = 'none';
  trainSwordBtn.style.display = 'none';
  shopMsg.textContent = ``;
  showShopPlayer()
})
daggerBtn.addEventListener('click', function(){
  if (p1.GP >= 10) {
    p1.GP -= 10;
    p1.STR += 5;
    p1.AB += 1;
    p1.XP += 10;
    p1.weapons.push(worldWeapons[1])
    dagger.style.display = 'none';
    shopMsg.textContent = `${p1.name}, you bought a dagger!`;
    showShopPlayer()
  } else {
    shopMsg.textContent = `Shopkeep: you need a few more coins mate...`;
  }
})
bowBtn.addEventListener('click', function(){
  if (p1.GP >= 30) {
    p1.GP -= 30;
    p1.STR += 7;
    p1.AB += 3;
    p1.XP += 20;
    p1.weapons.push(worldWeapons[2])
    bow.style.display = 'none';
    shopMsg.textContent = `${p1.name}, you bought a bow!`;
    showShopPlayer()
  } else {
    shopMsg.textContent = `Shopkeep: Why not spring for something cheaper?`;
  }
})
swordBtn.addEventListener('click', function(){
  if (p1.GP >= 100) {
    p1.GP -= 100;
    p1.STR += 10;
    p1.AB += 5;
    p1.XP += 30;
    p1.weapons.push(worldWeapons[3])
    sword.style.display = 'none';
    shopMsg.textContent = `${p1.name}, you bought a sword!`;
    showShopPlayer()
  } else {
    shopMsg.textContent = shopReject[Math.floor(Math.random()*shopReject.length)]
  }
})
// ARENA
helmBtn.addEventListener('click', function(){
  arenaMsg.textContent = ``;
  p1.items.push(worldItems[9])
  p1.DEF += 5;
  helm.style.display = 'none';
  helmBtn.style.display = 'none';
  showArenaPlayer()
})
// STAGE
opBtn.addEventListener('click', function(){
  challengeBtns.style.display = 'flex';
  opBtn.style.display = 'none';
})
initBtn.addEventListener('click', function(){
  fightBtn.style.display = 'block';
  initBtn.style.display = 'none';
  displayOpponent()
})


// FOREST

// BRIDGE

// CREEK

// HUT

// HUT2

// CHAMPION

// HELL