/*******************
       * GAME VARIABLES
       *******************/
      const roomSize = 110;
      const mapDiv = document.getElementById("map");
      const battleMenu = document.getElementById("battleMenu");
      const battleLog = document.getElementById("battleLog");
      const enemyInfo = document.getElementById("enemyInfo");
      const levelUpMenu = document.getElementById("levelUpMenu");
      const deathMenu = document.getElementById("deathMenu");
      const battleTint = document.getElementById("battleTint");
      const inventoryMenu = document.getElementById("inventoryMenu");
      const shopMenu = document.getElementById("shopMenu");
      const shopItemsDiv = document.getElementById("shopItems");
      const casinoMenu = document.getElementById("casinoMenu");
      const betInput = document.getElementById("betInput");
      const placeBetBtn = document.getElementById("placeBetBtn");
      const casinoGameArea = document.getElementById("casinoGameArea");
      const casinoEnemyTotalEl = document.getElementById("casinoEnemyTotal");
      const casinoPlayerTotalEl = document.getElementById("casinoPlayerTotal");
      const standBtn = document.getElementById("standBtn");
      const hitButtons = document.querySelectorAll(".hitBtn");
	  
	  const libraryButton = document.getElementById("libraryButton");
	  const libraryMenu = document.getElementById("libraryMenu");
	  const exitLibrary = document.getElementById("exitLibrary");
	  const tabHistory = document.getElementById("tabHistory");
	  const tabPlayer = document.getElementById("tabPlayer");
	  const tabInnates = document.getElementById("tabInnates");
	  const contentGuide = document.getElementById("contentGuide");
	  const contentGuide2 = document.getElementById("contentGuide2");
	  const contentHistory = document.getElementById("contentHistory");
	  const contentPlayer = document.getElementById("contentPlayer");
	  const contentInnates = document.getElementById("contentInnates");
	  const contentMonsters = document.getElementById("contentMonsters");
	  const contentLegends = document.getElementById("contentLegends");
	  const contentCrime = document.getElementById("contentCrime");
	  
libraryButton.addEventListener("click", () => {
  libraryMenu.style.display = "block";
  battleTint.style.display = "block";   // reuse your existing tint to dim background
});

exitLibrary.addEventListener("click", () => {
  libraryMenu.style.display = "none";
  battleTint.style.display = "none";
});

tabGuide.addEventListener("click", () => {
  contentGuide.style.display = "block";
  contentGuide2.style.display = "none";
  contentHistory.style.display = "none";
  contentPlayer.style.display = "none";
  contentInnates.style.display = "none";
  contentMonsters.style.display = "none";
  contentLegends.style.display = "none";
  contentCrime.style.display = "none";
});
tabGuide2.addEventListener("click", () => {
  contentGuide.style.display = "none";
  contentGuide2.style.display = "block";
  contentHistory.style.display = "none";
  contentPlayer.style.display = "none";
  contentInnates.style.display = "none";
  contentMonsters.style.display = "none";
  contentLegends.style.display = "none";
  contentCrime.style.display = "none";
});
tabHistory.addEventListener("click", () => {
  contentGuide.style.display = "none";
  contentGuide2.style.display = "none";
  contentHistory.style.display = "block";
  contentPlayer.style.display = "none";
  contentInnates.style.display = "none";
  contentMonsters.style.display = "none";
  contentLegends.style.display = "none";
  contentCrime.style.display = "none";
});
tabPlayer.addEventListener("click", () => {
  contentGuide.style.display = "none";
  contentGuide2.style.display = "none";
  contentHistory.style.display = "none";
  contentPlayer.style.display = "block";
  contentInnates.style.display = "none";
  contentMonsters.style.display = "none";
  contentLegends.style.display = "none";
  contentCrime.style.display = "none";
});
tabInnates.addEventListener("click", () => {
  contentGuide.style.display = "none";
  contentGuide2.style.display = "none";
  contentHistory.style.display = "none";
  contentPlayer.style.display = "none";
  contentInnates.style.display = "block";
  contentMonsters.style.display = "none";
  contentLegends.style.display = "none";
  contentCrime.style.display = "none";
});
tabMonsters.addEventListener("click", () => {
  contentGuide.style.display = "none";
  contentGuide2.style.display = "none";
  contentHistory.style.display = "none";
  contentPlayer.style.display = "none";
  contentInnates.style.display = "none";
  contentMonsters.style.display = "block";
  contentLegends.style.display = "none";
  contentCrime.style.display = "none";
});
tabLegends.addEventListener("click", () => {
  contentGuide.style.display = "none";
  contentGuide2.style.display = "none";
  contentHistory.style.display = "none";
  contentPlayer.style.display = "none";
  contentInnates.style.display = "none";
  contentMonsters.style.display = "none";
  contentLegends.style.display = "block";
  contentCrime.style.display = "none";
});
tabCrime.addEventListener("click", () => {
  contentGuide.style.display = "none";
  contentGuide2.style.display = "none";
  contentHistory.style.display = "none";
  contentPlayer.style.display = "none";
  contentInnates.style.display = "none";
  contentMonsters.style.display = "none";
  contentLegends.style.display = "none";
  contentCrime.style.display = "block";
});

let lastClickTime = 0;

document.addEventListener(
  "click",
  (event) => {
    const currentTime = Date.now();

    // Check if 1 second (1000 ms) has passed since the last accepted click.
    if (currentTime - lastClickTime < 350) {
      // Prevent further processing of this click event.
      event.stopImmediatePropagation();
      event.preventDefault();
      return;
    }

    // If the cooldown period has passed, update the timestamp.
    lastClickTime = currentTime;
  },
  true // Use capture phase so that this check occurs before other click event listeners.
);

	  
	  const TITLE_MUSIC_BPM = 120;
	  const BEAT_INTERVAL_MS = (60 / TITLE_MUSIC_BPM) * 1000;
	  const bgmTracks = {
  "Deep Forests": { audio: new Audio("forest.mp3"), savedTime: 0 },
  "Abandoned Graveyard": { audio: new Audio("graveyard.mp3"), savedTime: 0 },
  "Deathly Cliffs": { audio: new Audio("cliffs.mp3"), savedTime: 0 },
  "Bone Castle": { audio: new Audio("castle.mp3"), savedTime: 0 },
  "Silkwoven Caverns": { audio: new Audio("spider.mp3"), savedTime: 0 },
  "Arcane Swamps": { audio: new Audio("swamp.mp3"), savedTime: 0 },
  "Shi Mountains": { audio: new Audio("mountains.mp3"), savedTime: 0 },
  "Archaic Caverns": { audio: new Audio("archaic.mp3"), savedTime: 0 },
  "Scorching Desert": { audio: new Audio("desert.mp3"), savedTime: 0 },
  "Never-Ending Tunnels": { audio: new Audio("Wind.mp3"), savedTime: 0 },
  "Freezing Tundra": { audio: new Audio("Tundra.mp3"), savedTime: 0 },
  "The Black Sea": { audio: new Audio("sea.mp3"), savedTime: 0 },
  "Vast Ocean": { audio: new Audio("ocean.mp3"), savedTime: 0 },
  "Sky Dimension": { audio: new Audio("sky.mp3"), savedTime: 0 },
  "Future Megalopolis": { audio: new Audio("tech.mp3"), savedTime: 0 },
  "Ancient Kingdom": { audio: new Audio("kingdom.mp3"), savedTime: 0 },
  "Shinjuku": { audio: new Audio("HeavenAndEarth.mp3"), savedTime: 0 },
  "Shibuya": { audio: new Audio("cool.mp3"), savedTime: 0 },
  "Molten Treasure Trove": { audio: new Audio("dragonsden.mp3"), savedTime: 0 },
  "The Underworld": { audio: new Audio("HeavenAndEarth.mp3"), savedTime: 0 },
  "Hell": { audio: new Audio("hell.mp3"), savedTime: 0 },
  "Shadow Realm": { audio: new Audio("shadow.mp3"), savedTime: 0 },
  "The Beyond": { audio: new Audio("beyond.mp3"), savedTime: 0 },
  "Realm Of The Gods": { audio: new Audio("bossmusic.mp3"), savedTime: 0 },
};
const titleMusic = new Audio("fire.mp3");
titleMusic.loop = true;
const ambushTrack = new Audio("battlemusic.mp3");
const bossTrack = new Audio("bossmusic.mp3");
const secTrack = new Audio("Judas.mp3");
const kocTrack = new Audio("MalevolentShrine.mp3");
const omniTrack = new Audio("Omni.mp3");
const bkTrack = new Audio("Black.mp3");
const troTrack = new Audio("Him.mp3");
const godTrack = new Audio("ultimate.mp3");
const casinoMusicOptions = ["gambling1.mp3", "gambling2.mp3", "gambling3.mp3"];
const randomIndex = Math.floor(Math.random() * casinoMusicOptions.length);
const casinoMusic = new Audio(casinoMusicOptions[randomIndex]);
ambushTrack.loop = true;
ambushTrack.currentTime = 0;
bossTrack.loop = true;
bossTrack.currentTime = 0;
secTrack.loop = true;
secTrack.currentTime = 0;
omniTrack.loop = true;
omniTrack.currentTime = 0;
kocTrack.loop = true;
kocTrack.currentTime = 0;
bkTrack.loop = true;
bkTrack.currentTime = 0;
troTrack.loop = true;
troTrack.currentTime = 0;
godTrack.loop = true;
godTrack.currentTime = 0;
casinoMusic.loop = true;

      let ambushEnemiesQueue = null;
	  let beatTimer = null;
      let shopCooldown = 0;
      let allowedMoves = [];
      let floorCount = 1;
      let roomMoves = 0;
      let roomsThisFloor = 0;
      let lastAltarFloor = 0;
	  let secretAmbush = false;
	  let turnNumber = 1;
	  let actionsLocked = false;
	  let currentWorld = "";
	  let currentBGM = null;
	  let battleAudio = null;
	  let ambushCompleteCallback = null;
	  let guildEncounteredBefore = false;
	  let guildFound = false;
	  let skillUsedThisBattle = false;
	  let ignoreEnemyResistances = false;
	  
	  let trapCount = 0;

      let bossRoomGenerated = false;
      let player = {
        x: 0,
        y: 0,
        hp: 100,
        maxHp: 100,
		mana: 10,
		maxMana: 10,
        attack: 2,
        magic: 2,
        defense: 2,
        money: 10,
        exp: 0,
        level: 1,
        expToLevel: 5,
        inventory: new Array(10).fill(null),
        rage: false,
        iron: false,
        dodgeChance: 0.2,
        neverMiss: false,
        critMultiplier: 1,
        agility: 1,
        perception: 1,
        potential: 1,
		luck: 1,
		fortune: 1,
		guildUnlocked: false,
		guildMissionStage: 0,
		guildMissionKills: 0,
		mercenaries: [],
      };
	  
	  const passiveAbilities = [
  { name: "None", chance: 40 },
  { name: "Tough", chance: 10 },
  { name: "Quick", chance: 10 },
  { name: "Reckless", chance: 8 },
  { name: "Berserker", chance: 8 },
  { name: "Arcane", chance: 8 },
  { name: "Hunter", chance: 8 },
  { name: "Golden", chance: 5 },
  { name: "Adaptable", chance: 1 },
  { name: "Ambidextrous", chance: 1 },
  { name: "Aura Farmer", chance: 0.9 },
  { name: "Heavenly Restricted", chance: 0.1 },
];

const activeAbilities = [
  { name: "None", chance: 40 },
  { name: "Rage", chance: 10 },
  { name: "Strike", chance: 10 },
  { name: "Blast", chance: 10 },
  { name: "Dash", chance: 10 },
  { name: "Heal", chance: 7 },
  { name: "Hunt", chance: 7 },
  { name: "Maxima", chance: 2.5 },
  { name: "Super Slash", chance: 2.5 },
  { name: "Blade of Gold", chance: 0.9 },
  { name: "Necromancy", chance: 0.1 },
];

function getAbilityCategory(chance) {
  if (chance >= 40) {
    return "(None)";
  } if (chance >= 10) {
    return "(Common)";
  } else if (chance >= 5) {
    return "(Rare)";
  } else if (chance >= 1) {
    return "(Epic)";
  } else if (chance >= 0.9) {
    return "(Legendary)";
  } else {
	return "(???)";
  }
}

function populateAbilityLists() {
  const passiveListEl = document.getElementById("passiveAbilitiesList");
  const activeListEl = document.getElementById("activeAbilitiesList");
  
  passiveListEl.innerHTML = "";
  activeListEl.innerHTML = "";

  passiveAbilities.forEach(ability => {
    const li = document.createElement("li");
    li.textContent = `${ability.name} ${getAbilityCategory(ability.chance)}`;
    passiveListEl.appendChild(li);
  });

  activeAbilities.forEach(ability => {
    const li = document.createElement("li");
    li.textContent = `${ability.name} ${getAbilityCategory(ability.chance)}`;
    activeListEl.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", populateAbilityLists);

document.getElementById("spinAbilityButton").addEventListener("click", function () {
  spinAbilities();
  this.style.display = "none";
});

	  
	  const badTrapChance = Math.max(0, 0.05  - player.luck * 0.001);
	  const badAmbushChance  = Math.max(0, 0.10  - player.luck * 0.001);
	  
      let map = {};
      const ROOM_TYPES = {
        BATTLE: "battle",
        HEALING: "healing",
        SHOP: "shop",
        EMPTY: "empty",
        BOSS: "boss",
        ALTAR: "altar",
        CASINO: "casino",
        AMBUSH: "ambush",
        LOOT: "loot",
		TRAP: "trap",
		GUILD: "guild",
      };
      const roomIcons = {
        battle: "battle.png",
        healing: "heal.png",
        shop: "shop.png",
        boss: "skull.png",
        altar: "altar.png",
        casino: "casino.png",
        ambush: "ambush.png",
        loot: "loot.png",
		trap: "trap.png",
		guild: "guild.png",
      };
      const enemies = [{
        name: "Monster Crow",
        hp: 20,
        damageRange: [3, 7],
        expReward: [1, 4],
        moneyReward: [2, 4],
		reductionAttack: 0.33,
      }, {
        name: "Goblin",
        hp: 25,
        damageRange: [4, 10],
        expReward: [2, 4],
        moneyReward: [5, 6]
      }, {
        name: "Wolf",
        hp: 30,
        damageRange: [6, 13],
        expReward: [3, 5],
        moneyReward: [3, 5]
      }, {
        name: "Bear",
        hp: 40,
        damageRange: [5, 11],
        expReward: [4, 6],
        moneyReward: [4, 6]
      }, {
        name: "Zombie",
        hp: 35,
        damageRange: [4, 8],
        expReward: [3, 4],
        moneyReward: [3, 5],
        reductionMagic: 0.5,
      }, {
        name: "Skeleton",
        hp: 25,
        damageRange: [6, 11],
        expReward: [3, 4],
        moneyReward: [3, 6],
		reductionAttack: 0.5,
      }, {
        name: "Ghoul",
        hp: 20,
        damageRange: [8, 14],
        expReward: [1, 3],
        moneyReward: [2, 4],
        reductionAll: 0.33
      }, {
        name: "Giant Spider",
        hp: 25,
        damageRange: [7, 9],
        expReward: [3, 5],
        moneyReward: [3, 5]
      }, {
        name: "Demon Bat",
        hp: 15,
        damageRange: [5, 8],
        expReward: [2, 4],
        moneyReward: [2, 4]
      }, {
        name: "Shark",
        hp: 40,
        damageRange: [6, 9],
        expReward: [4, 6],
        moneyReward: [3, 6]
      }, {
        name: "Piranha",
        hp: 15,
        damageRange: [5, 10],
        expReward: [3, 4],
        moneyReward: [3, 5]
      }, {
        name: "Giant Albatross",
        hp: 35,
        damageRange: [4, 8],
        expReward: [3, 5],
        moneyReward: [3, 5],
        reductionAttack: 0.33
      }, {
        name: "Golem",
        hp: 100,
        damageRange: [9, 12],
        expReward: [6, 10],
        moneyReward: [5, 10],
        reductionAttack: 0.5
      }, {
        name: "Ice Golem",
        hp: 80,
        damageRange: [11, 16],
        expReward: [6, 11],
        moneyReward: [6, 10],
        reductionMagic: 0.5
      }, {
        name: "Ice Spirit",
        hp: 40,
        damageRange: [7, 12],
        expReward: [4, 6],
        moneyReward: [2, 4],
        reductionAll: 0.33
      }, {
        name: "Giant Scorpion",
        hp: 35,
        damageRange: [6, 10],
        expReward: [3, 5],
        moneyReward: [3, 5],
        reductionAll: 0.33
      }, {
        name: "Sandworm",
        hp: 40,
        damageRange: [8, 13],
        expReward: [3, 6],
        moneyReward: [2, 5]
      }, {
        name: "Vulture",
        hp: 35,
        damageRange: [4, 9],
        expReward: [3, 5],
        moneyReward: [3, 5],
        reductionAttack: 0.33
      }, {
        name: "Possessed Armor",
        hp: 80,
        damageRange: [11, 14],
        expReward: [5, 7],
        moneyReward: [5, 6],
        reductionAttack: 0.5
      }, {
        name: "Cursed Spirit",
        hp: 60,
        damageRange: [11, 15],
        expReward: [6, 8],
        moneyReward: [4, 5],
        reductionAll: 0.33,
      }, {
        name: "Cyborg Guard",
        hp: 70,
        damageRange: [11, 14],
        expReward: [6, 8],
        moneyReward: [5, 6],
      }, {
	name: "Giant Robot",
        hp: 80,
        damageRange: [16, 17],
        expReward: [9, 10],
        moneyReward: [8, 9],
		reductionAttack: 0.33,
      }, {
		name: "Drone",
        hp: 50,
        damageRange: [13, 17],
        expReward: [8, 10],
        moneyReward: [8, 9]
      }, {
		name: "Sorcerer",
        hp: 70,
        damageRange: [17, 18],
        expReward: [9, 10],
        moneyReward: [9, 10],
		reductionAttack: 0.33,
      }, {
		name: "Shikigami",
        hp: 90,
        damageRange: [13, 17],
        expReward: [8, 9],
        moneyReward: [6, 8],
		reductionAttack: 0.33,
      }, {
		name: "Demon",
        hp: 90,
        damageRange: [13, 17],
        expReward: [8, 9],
        moneyReward: [6, 8],
		reductionMagic: 0.5,
      }, {
		name: "Imp",
        hp: 50,
        damageRange: [10, 15],
        expReward: [7, 8],
        moneyReward: [6, 9],
		reductionAttack: 0.5,
      }, {
		name: "Archdemon",
        hp: 120,
        damageRange: [12, 16],
        expReward: [9, 10],
        moneyReward: [8, 10],
		reductionMagic: 0.33,
      }, {
    name: "Goblin King",
    hp: 100,
    damageRange: [20, 30],
    expReward: [30, 30],
    moneyReward: [30, 30]
  },
  {
    name: "Zombie Mutant",
    hp: 120,
    damageRange: [25, 55],
    expReward: [70, 70],
    moneyReward: [70, 70],
	reductionMagic: 0.5,
  },
  {
    name: "Giant Lord",
    hp: 250,
    damageRange: [30, 65],
    expReward: [100, 100],
    moneyReward: [100, 100],
    reductionAttack: 0.5,
  },
  {
    name: "Skeleton King",
    hp: 110,
    damageRange: [40, 80],
    expReward: [120, 120],
    moneyReward: [120, 120],
	reductionAttack: 0.5,
  },
  {
    name: "Spider Queen",
    hp: 140,
    damageRange: [45, 75],
    expReward: [150, 150],
    moneyReward: [150, 150]
  },
  {
    name: "The Witch",
    hp: 120,
    damageRange: [50, 100],
    expReward: [180, 180],
    moneyReward: [180, 180],
    reductionMagic: 0.5,
  },
  {
    name: "Titan Golem",
    hp: 350,
    damageRange: [50, 80],
    expReward: [210, 210],
    moneyReward: [210, 210],
    reductionAll: 0.33,
  },
  {
    name: "Wyvern",
    hp: 200,
    damageRange: [50, 90],
    expReward: [240, 240],
    moneyReward: [240, 240],
    reductionAttack: 0.5,
  },
  {
    name: "Giant Sandworm",
    hp: 150,
    damageRange: [60, 100],
    expReward: [250, 250],
    moneyReward: [250, 250]
  },
  {
    name: "Titanoboa Lord",
    hp: 170,
    damageRange: [60, 100],
    expReward: [280, 280],
    moneyReward: [280, 280]
  },
  {
    name: "Abominable Snowman",
    hp: 190,
    damageRange: [70, 120],
    expReward: [300, 300],
    moneyReward: [300, 300]
  },
  {
    name: "Omegalodon",
    hp: 200,
    damageRange: [50, 120],
    expReward: [320, 320],
    moneyReward: [320, 320],
    reductionAttack: 0.5,
  },
  {
    name: "Leviathan",
    hp: 300,
    damageRange: [60, 140],
    expReward: [360, 360],
    moneyReward: [360, 360],
    reductionAttack: 0.33,
  },
  {
    name: "Angel",
    hp: 320,
    damageRange: [60, 150],
    expReward: [400, 400],
    moneyReward: [400, 400],
    reductionMagic: 0.5,
  },
  {
    name: "Mega Meta Mecha Annihilator - Model: Ultima",
    hp: 600,
    damageRange: [80, 160],
    expReward: [420, 420],
    moneyReward: [500, 500],
    reductionAttack: 0.5,
  },
  {
    name: "Grand Knight",
    hp: 800,
    damageRange: [60, 150],
    expReward: [480, 480],
    moneyReward: [480, 480],
    reductionAll: 0.33
  },
  {
    name: "Six-Eyed Calamity",
    hp: 500,
    damageRange: [90, 180],
    expReward: [600, 600],
    moneyReward: [560, 560],
    reductionAll: 0.33,
  },
  {
    name: "The King of Curses",
    hp: 600,
    damageRange: [100, 170],
    expReward: [600, 600],
    moneyReward: [560, 560],
    reductionAll: 0.25,
  },
  {
    name: "Dragon King",
    hp: 800,
    damageRange: [80, 160],
    expReward: [900, 900],
    moneyReward: [800, 800],
    reductionAttack: 0.5,
  },
  {
    name: "Guardian of Hell, Cerberus",
    hp: 700,
    damageRange: [60, 100],
    expReward: [500, 500],
    moneyReward: [800, 800],
	reductionMagic: 0.33,
  },
  {
    name: "Demon King",
    hp: 850,
    damageRange: [80, 140],
    expReward: [800, 800],
    moneyReward: [850, 850],
    reductionMagic: 0.5,
  },
  {
    name: "The Black King",
    hp: 900,
    damageRange: [90, 170],
    expReward: [950, 950],
    moneyReward: [900, 900],
    reductionMagic: 0.5,
  },
  {
    name: "Omni",
    hp: 1000,
    damageRange: [75, 150],
    expReward: [1000, 1000],
    moneyReward: [1000, 1000],
    reductionAttack: 0.5,
    reductionMagic: 0.5,
  }
];

      function getBossForFloor(floor) {
        let bossFloor = floor % 100;
        if (bossFloor === 0) bossFloor = 100;
        const bosses = {
          20: {
            name: "Goblin King",
            hp: 100,
            damageRange: [20, 30],
            expReward: [30, 30],
            moneyReward: [30, 30],
          },
          40: {
            name: "Zombie Mutant",
            hp: 120,
            damageRange: [25, 55],
            expReward: [70, 70],
            moneyReward: [70, 70],
			reductionMagic: 0.5,
          },
          60: {
            name: "Giant Lord",
            hp: 250,
            damageRange: [30, 65],
            expReward: [100, 100],
            moneyReward: [100, 100],
            reductionAttack: 0.5,
          },
          80: {
            name: "Skeleton King",
            hp: 110,
            damageRange: [40, 80],
            expReward: [120, 120],
            moneyReward: [120, 120],
			reductionAttack: 0.5,
          },
          100: {
            name: "Spider Queen",
            hp: 140,
            damageRange: [45, 75],
            expReward: [150, 150],
            moneyReward: [150, 150]
          },
          120: {
            name: "The Witch",
            hp: 120,
            damageRange: [50, 100],
            expReward: [180, 180],
            moneyReward: [180, 180],
            reductionMagic: 0.5,
          },
          140: {
            name: "Titan Golem",
            hp: 350,
            damageRange: [50, 80],
            expReward: [210, 210],
            moneyReward: [210, 210],
            reductionAll: 0.33,
          },
          160: {
            name: "Wyvern",
            hp: 200,
            damageRange: [50, 90],
            expReward: [240, 240],
            moneyReward: [240, 240],
			reductionAttack: 0.5,
          },
          180: {
            name: "Giant Sandworm",
            hp: 150,
            damageRange: [60, 100],
            expReward: [250, 250],
            moneyReward: [250, 250]
          },
          200: {
            name: "Titanoboa Lord",
            hp: 170,
            damageRange: [60, 100],
            expReward: [280, 280],
            moneyReward: [280, 280]
          },
          220: {
            name: "Abominable Snowman",
            hp: 190,
            damageRange: [70, 120],
            expReward: [300, 300],
            moneyReward: [300, 300]
          },
          240: {
            name: "Omegalodon",
            hp: 200,
            damageRange: [50, 120],
            expReward: [320, 320],
            moneyReward: [320, 320],
            reductionAttack: 0.5,
          },
          260: {
            name: "Leviathan",
            hp: 300,
            damageRange: [60, 140],
            expReward: [360, 360],
            moneyReward: [360, 360],
            reductionAttack: 0.33,
          },
          280: {
            name: "Angel",
            hp: 320,
            damageRange: [60, 150],
            expReward: [400, 400],
            moneyReward: [400, 400],
            reductionMagic: 0.5,
          },
          300: {
            name: "Mega Meta Mecha Annihilator - Model: Ultima",
            hp: 600,
            damageRange: [80, 160],
            expReward: [420, 420],
            moneyReward: [500, 500],
			reductionAttack: 0.5,
          },
          320: {
            name: "Grand Knight",
            hp: 800,
            damageRange: [60, 150],
            expReward: [480, 480],
            moneyReward: [480, 480],
            reductionAll: 0.33,
          },
          340: {
            name: "Six-Eyed Calamity",
            hp: 500,
            damageRange: [90, 180],
            expReward: [600, 600],
            moneyReward: [560, 560],
            reductionAll: 0.33,
		  },
          360: {
            name: "Dragon King",
            hp: 800,
            damageRange: [80, 160],
            expReward: [900, 900],
            moneyReward: [800, 800],
			reductionAttack: 0.5,
          },
          380: {
            name: "Guardian of Hell, Cerberus",
            hp: 700,
            damageRange: [60, 100],
            expReward: [500, 500],
            moneyReward: [800, 800],
			reductionMagic: 0.33,
          },
          400: {
            name: "Demon King",
            hp: 850,
            damageRange: [80, 140],
            expReward: [800, 800],
            moneyReward: [850, 850],
			reductionMagic: 0.5,
          },
	  420: {
            name: "Omni",
            hp: 1000,
            damageRange: [75, 150],
            expReward: [1000, 1000],
            moneyReward: [1000, 1000],
			reductionAttack: 0.5,
			reductionMagic: 0.5,
          },
	  440: {
            name: "Goblin King",
            hp: 100,
            damageRange: [20, 30],
            expReward: [30, 30],
            moneyReward: [30, 30]
          },
          480: {
            name: "Zombie Mutant",
            hp: 120,
            damageRange: [25, 55],
            expReward: [70, 70],
            moneyReward: [70, 70],
			reductionMagic: 0.5,
          },
          500: {
            name: "Giant Lord",
            hp: 250,
            damageRange: [30, 65],
            expReward: [100, 100],
            moneyReward: [100, 100],
            reductionAttack: 0.5,
          },
          520: {
            name: "Skeleton King",
            hp: 110,
            damageRange: [40, 80],
            expReward: [120, 120],
            moneyReward: [120, 120],
			reductionAttack: 0.5,
          },
          540: {
            name: "Spider Queen",
            hp: 140,
            damageRange: [45, 75],
            expReward: [150, 150],
            moneyReward: [150, 150]
          },
          560: {
            name: "The Witch",
            hp: 120,
            damageRange: [50, 100],
            expReward: [180, 180],
            moneyReward: [180, 180],
            reductionMagic: 0.5,
          },
          580: {
            name: "Titan Golem",
            hp: 350,
            damageRange: [50, 80],
            expReward: [210, 210],
            moneyReward: [210, 210],
            reductionAll: 0.33,
          },
          600: {
            name: "Dragon King",
            hp: 800,
            damageRange: [80, 160],
            expReward: [900, 900],
            moneyReward: [800, 800],
			reductionAttack: 0.5,
          },
          620: {
            name: "Giant Sandworm",
            hp: 150,
            damageRange: [60, 100],
            expReward: [250, 250],
            moneyReward: [250, 250]
          },
          640: {
            name: "Titanoboa Lord",
            hp: 170,
            damageRange: [60, 100],
            expReward: [280, 280],
            moneyReward: [280, 280]
          },
          660: {
            name: "Abominable Snowman",
            hp: 190,
            damageRange: [70, 120],
            expReward: [300, 300],
            moneyReward: [300, 300]
          },
          680: {
            name: "Omegalodon",
            hp: 200,
            damageRange: [50, 120],
            expReward: [320, 320],
            moneyReward: [320, 320],
            reductionAttack: 0.5,
          },
          700: {
            name: "Leviathan",
            hp: 300,
            damageRange: [60, 140],
            expReward: [360, 360],
            moneyReward: [360, 360],
            reductionAttack: 0.33,
          },
          800: {
            name: "Angel",
            hp: 320,
            damageRange: [60, 150],
            expReward: [400, 400],
            moneyReward: [400, 400],
            reductionMagic: 0.5,
          },
          820: {
            name: "Mega Meta Mecha Annihilator - Model: Ultima",
            hp: 600,
            damageRange: [80, 160],
            expReward: [420, 420],
            moneyReward: [500, 500],
			reductionAttack: 0.5,
          },
          840: {
            name: "Grand Knight",
            hp: 800,
            damageRange: [60, 150],
            expReward: [480, 480],
            moneyReward: [480, 480],
            reductionAll: 0.33,
          },
          860: {
            name: "The King of Curses",
            hp: 600,
            damageRange: [100, 170],
            expReward: [600, 600],
            moneyReward: [560, 560],
            reductionAll: 0.25,
		  },
          880: {
            name: "The Restricted One, Kyojiro Allista",
            hp: 1000,
            damageRange: [100, 200],
            expReward: [1000, 1000],
            moneyReward: [0, 0],
          },
          900: {
            name: "Guardian of Hell, Cerberus",
            hp: 700,
            damageRange: [60, 100],
            expReward: [500, 500],
            moneyReward: [800, 800],
			reductionMagic: 0.33,
          },
          920: {
            name: "Demon King",
            hp: 850,
            damageRange: [80, 140],
            expReward: [800, 800],
            moneyReward: [850, 850],
			reductionMagic: 0.5,
          },
	  940: {
            name: "The Black King",
            hp: 1000,
            damageRange: [90, 170],
            expReward: [1000, 1000],
            moneyReward: [1000, 1000],
			reductionMagic: 1,
          },
	  2000: {
            name: "King God General Emperor, Supreme Divine Entity of Ultimacy, Archangel & Creator, Gabriel",
            hp: 10000,
            damageRange: [105, 210],
            expReward: [10000, 10000],
            moneyReward: [10000, 10000],
			reductionAttack: 0.67,
			reductionMagic: 0.67
          },
        };
		
        const keys = Object.keys(bosses).map(Number).sort((a, b) => a - b);
        for (let key of keys) {
          if (bossFloor <= key) return bosses[key];
        }
        return bosses[2000];
      }

      function getAllowedEnemies() {
        const nextBossFloor = Math.ceil(floorCount / 20) * 20;
        const nextBoss = getBossForFloor(nextBossFloor);
        let allowed = [];
        switch (nextBoss.name) {
          case "Goblin King":
            allowed = ["Monster Crow", "Wolf", "Bear", "Goblin"];
            break;
          case "Zombie Mutant":
            allowed = ["Zombie", "Skeleton", "Ghoul", "Demon Bat", "Monster Crow", "Giant Spider"];
            break;
          case "Giant Lord":
            allowed = ["Skeleton", "Wolf", "Goblin", "Bear", "Monster Crow"];
            break;
          case "Skeleton King":
            allowed = ["Zombie", "Skeleton", "Ghoul", "Demon Bat", "Monster Crow", "Giant Spider", "Possessed Armor"];
            break;
          case "Spider Queen":
            allowed = ["Giant Spider", "Demon Bat", "Golem", "Ghoul", "Giant Scorpion", "Goblin"];
            break;
          case "The Witch":
            allowed = ["Giant Spider", "Demon Bat", "Monster Crow", "Ghoul", "Piranha", "Skeleton", "Zombie"];
            break;
          case "Titan Golem":
            allowed = ["Golem", "Demon Bat", "Giant Crow", "Skeleton", "Wolf", "Bear", "Giant Spider"];
            break;
          case "Wyvern":
            allowed = ["Golem", "Demon Bat", "Goblin", "Skeleton", "Giant Spider", "Ghoul", "Possessed Armor"];
            break;
          case "Giant Sandworm":
            allowed = ["Giant Scorpion", "Sandworm", "Skeleton", "Zombie", "Vulture"];
            break;
          case "Titanoboa Lord":
            allowed = ["Sandworm", "Goblin", "Golem", "Skeleton", "Giant Spider"];
            break;
          case "Abominable Snowman":
            allowed = ["Ice Golem", "Ice Spirit", "Possessed Armor", "Skeleton"];
            break;
          case "Omegalodon":
            allowed = ["Piranha", "Shark"];
            break;
          case "Leviathan":
            allowed = ["Piranha", "Shark", "Giant Albatross"];
            break;
          case "Angel":
            allowed = ["Giant Albatross", "Vulture", "Ghoul", "Ice Spirit", "Monster Crow", "Demon Bat"];
            break;
          case "Mega Meta Mecha Annihilator - Model: Ultima":
            allowed = ["Cyborg Guard", "Giant Robot", "Drone"];
            break;
          case "Grand Knight":
            allowed = ["Skeleton", "Wolf", "Bear", "Possessed Armor", "Golem"];
            break;
          case "Six-Eyed Calamity":
            allowed = ["Cursed Spirit", "Shikigami", "Sorcerer"];
            break;
		  case "The King of Curses":
            allowed = ["Cursed Spirit", "Shikigami", "Sorcerer"];
            break;
		  case "Guardian of Hell, Cerberus":
            allowed = ["Demon", "Imp", "Archdemon"];
            break;
		  case "Demon King":
            allowed = ["Demon", "Imp", "Archdemon"];
            break;
          case "Dragon King":
            allowed = ["Goblin", "Zombie", "Skeleton", "Golem", "Monster Crow", "Wolf", "Ghoul", "Giant Spider", "Demon Bat"];
            break;
          case "Omni":
            allowed = ["Goblin", "Zombie", "Skeleton", "Golem", "Monster Crow", "Wolf", "Ghoul", "Giant Spider", "Demon Bat", "Giant Scorpion", "Ice Golem", "Ice Spirit", "Piranha", "Shark", "Giant Albatross", "Vulture", "Sandworm", "Possessed Armor", "Bear", "Drone", "Cyborg Guard", "Giant Robot", "Shikigami", "Sorcerer", "Cursed Spirit", "Demon", "Imp", "Archdemon"];
            break;
	  case "The Black King":
            allowed = ["Ghoul"];
            break;
	  case "King God General Emperor, Supreme Divine Entity of Ultimacy, Archangel & Creator, Gabriel":
            allowed = ["Goblin King", "Mutant Zombie", "Giant Lord", "Skeleton King", "Spider Queen", "The Witch", "Titan Golem", "Wyvern", "Giant Sandworm", "Titanoboa Lord", "Abominable Snowman", "Omegalodon", "Leviathan", "Angel", "Mega Meta Mecha Annihilator - Model: Ultima", "Grand Knight", "Six-Eyed Calamity", "The King of Curses", "Dragon King", "Guardian of Hell, Cerberus", "Demon King", "The Black King", "Omni"];
            break;
          default:
            allowed = ["Goblin", "Zombie", "Skeleton", "Golem", "Monster Crow", "Wolf", "Ghoul", "Giant Spider", "Demon Bat", "Giant Scorpion", "Ice Golem", "Ice Spirit", "Piranha", "Shark", "Giant Albatross", "Vulture", "Sandworm", "Possessed Armor", "Bear", "Drone", "Cyborg Guard", "Giant Robot", "Shikigami", "Sorcerer", "Cursed Spirit"];
        }
        return enemies.filter(e => allowed.includes(e.name));
      }
	  
	  const bossRoomEnemySequences = {
  "Goblin King": ["Goblin", "Goblin", "Goblin", "Goblin King"],
  "Mutant Zombie": ["Zombie", "Zombie", "Skeleton", "Mutant Zombie"],
  "Giant Lord": ["Goblin", "Goblin", "Golem", "Giant Lord"],
  "Skeleton King": ["Skeleton", "Skeleton", "Ghoul", "Skeleton King"],
  "Spider Queen": ["Giant Spider", "Giant Spider", "Giant Scorpion", "Spider Queen"],
  "The Witch": ["Demon Crow", "Ghoul", "Ghoul", "The Witch"],
  "Titan Golem": ["Goblin", "Goblin", "Goblin", "Titan Golem"],
  "Wyvern": ["Goblin", "Goblin", "Goblin", "Wyvern"],
  "Giant Sandworm": ["Sandworm", "Sandworm", "Giant Sandworm"],
  "Titanoboa Lord": ["Sandworm", "Giant Sandworm", "Titanoboa Lord"],
  "Abominable Snowman": ["Ice Golem", "Ice Spirit", "Ice Spirit", "Abominable Snowman"],
  "Omegalodon": ["Piranha", "Piranha", "Shark", "Omegalodon"],
  "Leviathan": ["Shark", "Shark", "Omegalodon", "Leviathan"],
  "Angel": ["Giant Albatross", "Giant Albatross", "Ghoul", "Angel"],
  "Mega Meta Mecha Annihilator - Model: Ultima": ["Goblin", "Goblin", "Goblin", "Goblin King"],
  "Grand Knight": ["Possessed Armor", "Possessed Armor", "Golem", "Goblin King"],
  "Six-Eyed Calamity": ["Cursed Spirit", "Cursed Spirit", "Sorcerer", "Shikigami", "Six-Eyed Calamity"],
  "The King of Curses": ["Cursed Spirit", "Cursed Spirit", "Sorcerer", "Shikigami", "The King of Curses"],
  "The Restricted One, Kyojiro Allista": ["The Restricted One, Kyojiro Allista"],
  "Dragon King": ["Skeleton", "Skeleton", "Golem", "Wyvern", "Dragon King"],
  "Cerberus": ["Imp", "Demon", "Cerberus"],
  "Demon King": ["Imp", "Demon", "Demon", "Archdemon", "Demon King"],
  "The Black King": ["Ghoul", "Ghoul", "Possessed Armor", "The Black King"],
  "Omni": ["Grand Knight", "Omni"],
  "King God General Emperor, Supreme Divine Entity of Ultimacy, Archangel & Creator, Gabriel": ["Grand Knight", "The Black King", "Omni", "King God General Emperor, Supreme Divine Entity of Ultimacy, Archangel & Creator, Gabriel"],
};
	  
      // Shop Items list
      const shopItemsList = [{
        name: "Healing Potion",
        cost: 50,
        type: "healing",
        usableInBattle: true,
        usableOutOfBattle: true,
        usageScope: "both"
      }, {
		name: "Mana Potion",
        cost: 50,
        type: "mana",
        usableInBattle: true,
        usableOutOfBattle: true,
        usageScope: "both"
      }, {
        name: "Rage Potion",
        cost: 100,
        type: "rage",
        usableInBattle: true,
        usableOutOfBattle: false,
        usageScope: "battle"
      }, {
        name: "Poison Potion",
        cost: 150,
        type: "poison",
        usableInBattle: true,
        usableOutOfBattle: false,
        usageScope: "battle"
      }, {
        name: "Weaken Potion",
        cost: 100,
        type: "weaken",
        usableInBattle: true,
        usableOutOfBattle: false,
        usageScope: "battle"
      }, {
        name: "Iron Potion",
        cost: 150,
        type: "iron",
        usableInBattle: true,
        usableOutOfBattle: false,
        usageScope: "battle"
      }, {
        name: "Dice",
        cost: 1000,
        type: "dice",
        usableInBattle: true,
        usableOutOfBattle: true,
        usageScope: "both"
      }, {
        name: "Armor",
        cost: 300,
        type: "equipment",
        usableInBattle: false,
        usableOutOfBattle: false,
        usageScope: "passive"
      }, {
        name: "Sword",
        cost: 360,
        type: "equipment",
        usableInBattle: false,
        usableOutOfBattle: false,
        usageScope: "passive"
      }, {
        name: "Staff",
        cost: 360,
        type: "equipment",
        usableInBattle: false,
        usableOutOfBattle: false,
        usageScope: "passive"
      }, {
        name: "Scarf",
        cost: 300,
        type: "equipment",
        usableInBattle: false,
        usableOutOfBattle: false,
        usageScope: "passive"
      }, {
        name: "Glasses",
        cost: 320,
        type: "equipment",
        usableInBattle: false,
        usableOutOfBattle: false,
        usageScope: "passive"
      }, {
        name: "Sharpener",
        cost: 360,
        type: "equipment",
        usableInBattle: false,
        usableOutOfBattle: false,
        usageScope: "passive"
      }, ];
      /*******************
       * INITIALIZATION
       *******************/
      function initGame() {
        createRoom(0, 0, ROOM_TYPES.EMPTY);
        const startRoom = map["0_0"];
        startRoom.element.innerHTML = '<div class="player"></div>';
        centerCamera();
        generateAdjacentRooms(0, 0);
		updateManaDisplay();
      }
	  
  var playButton = document.getElementById("playButton");
  function weightedRandomSelection(abilities) {
  // Calculate the cumulative weight.
  let totalWeight = abilities.reduce((sum, ability) => sum + ability.chance, 0);
  let random = Math.random() * totalWeight;
  for (let ability of abilities) {
    if (random < ability.chance) {
      return ability.name;
    }
    random -= ability.chance;
  }
  return abilities[0].name;  // fallback to the first one
}

function spinAbilities() {
  // Randomly select passive and active abilities using the weighted logic.
  const selectedPassive = weightedRandomSelection(passiveAbilities);
  const selectedActive = weightedRandomSelection(activeAbilities);

  // Update the ability selection menu texts.
  document.getElementById("playerPassiveAbility").innerText = selectedPassive;
  document.getElementById("playerActiveAbility").innerText = selectedActive;

  // Also store these abilities in the global player object.
  player.passiveAbility = selectedPassive;
  player.activeAbility = selectedActive;

  // Enable the "Start Game" button now that abilities are set.
  document.getElementById("confirmAbilitiesButton").disabled = false;
}



/*********************
 * Ability Menu Handling
 *********************/
document.getElementById("spinAbilityButton").addEventListener("click", function () {
	spinAbilities();
	document.getElementById("spinAbilityButton").style.display = "none";
});	

// When the player confirms abilities and starts the game.
document.getElementById("confirmAbilitiesButton").addEventListener("click", function () {
  // Hide the ability selection menu.
  document.getElementById("abilityMenu").style.display = "none";
  // Update the HUD with chosen abilities.
  document.getElementById("hudPlayerPassive").innerText = player.passiveAbility || "None";
  document.getElementById("hudPlayerActive").innerText = player.activeAbility || "None";
  // Apply passive ability effects.
  applyPassiveAbilityEffects();
  // Start the game.
  initGame();
  document.getElementById("gameContainer").style.display = "block";
  document.getElementById("battleTint").style.display = "none";
  if (titleMusic) {
    titleMusic.pause();
  }
  titleMusic.currentTime = 0;
  stopBeatZoom();
});

/*********************
 * Title Screen Handling
 *********************/
// When the title screen is clicked, instead of immediately starting the game,
// hide the title screen and show the ability selection menu.
document.getElementById("playButton").addEventListener("click", function () {
  document.getElementById("titleScreen").style.display = "none";
  document.getElementById("abilityMenu").style.display = "block";
  document.getElementById("battleTint").style.display = "block";
});

document.getElementById("closeShopBtn").addEventListener("click", () => {
  shopMenu.style.display = "none";
  battleTint.style.display = "none";
});

function startBeatZoom() {
  const el = document.getElementById("titleScreen");
  if (!el) return;
  beatTimer = setInterval(() => {
    el.classList.add("zoom-beat");
    el.addEventListener("animationend", () => {
      el.classList.remove("zoom-beat");
    }, { once: true });
  }, BEAT_INTERVAL_MS);
}

function stopBeatZoom() {
  clearInterval(beatTimer);
  beatTimer = null;
  const el = document.getElementById("titleScreen");
  if (el) el.classList.remove("zoom-beat");
}

titleMusic.play().catch((e) => {
  console.log("Title music playback prevented:", e);
});

function initializeTitleMusic() {
  if (titleMusic.paused) {
    titleMusic.play()
      .then(() => {
        startBeatZoom();
      })
      .catch((e) =>
        console.log("Title music playback prevented:", e)
      );
  }
  document.removeEventListener("click", initializeTitleMusic);
}
document.addEventListener("click", initializeTitleMusic);

titleMusic.play().catch(function(error) {
    console.error("Error starting the music:", error);
  });

  titleMusic.addEventListener("playing", function() {
    playButton.style.display = "block";
  });

document.getElementById("playButton").addEventListener("click", function () {
  document.getElementById("titleScreen").style.display = "none";
  document.getElementById("gameContainer").style.display = "block";
});

// Play the world background music.
function playWorldMusic(worldName) {
  // If the same world's music is already playing, do nothing.
  if (currentBGM && currentWorld === worldName) return;
  if (titleMusic) {
			titleMusic.pause();
		}
  // Pause and save the current background music if one is already playing.
  if (currentBGM) {
    currentBGM.pause();
    if (bgmTracks[currentWorld]) {
      bgmTracks[currentWorld].savedTime = currentBGM.currentTime;
    }
  }

  // Set the current world.
  currentWorld = worldName;
  let trackObj = bgmTracks[worldName];

  // Check if the track exists.
  if (!trackObj) {
    console.error("No track defined for world:", worldName);
    return;
  }

  // Retrieve and configure the audio object.
  currentBGM = trackObj.audio;
  currentBGM.currentTime = trackObj.savedTime || 0;
  currentBGM.loop = true;
  currentBGM.play();
}

// Stop the current world music and save its time.
function stopWorldMusic() {
  if (currentBGM) {
    currentBGM.pause();
    if (bgmTracks[currentWorld]) {
      bgmTracks[currentWorld].savedTime = currentBGM.currentTime;
    }
    currentBGM = null;
  }
}

// Resume the world music after a battle.
function resumeWorldMusicAfterBattle() {
  if (currentWorld) {
    let trackObj = bgmTracks[currentWorld];
    if (!trackObj) {
      console.error("No track defined for current world:", currentWorld);
      return;
    }
    currentBGM = trackObj.audio;
    currentBGM.currentTime = trackObj.savedTime || 0;
    currentBGM.loop = true;
    currentBGM.play();
  }
}

      /*******************
       * ROOM FUNCTIONS
       *******************/
      function createRoom(x, y, type, options = {}) {
		const { disguised = false } = options;
        const key = x + "_" + y;
        if (map[key] && map[key].locked) return;
        const roomDiv = document.createElement("div");
        roomDiv.classList.add("room");
        roomDiv.style.left = x * roomSize + "px";
        roomDiv.style.top = y * roomSize + "px";
        roomDiv.dataset.x = x;
        roomDiv.dataset.y = y;
        roomDiv.dataset.type = type;
		roomDiv.dataset.disguised = disguised;
		let guildChance = guildEncounteredBefore ? 0.05 : 0.01;
		if (Math.random() < guildChance) {
			// Mark that the guild has now been discovered, so future chance is 5%
			guildEncounteredBefore = true;
			// Set the room type to guild
			return ROOM_TYPES.GUILD;
		}
        if ((type === ROOM_TYPES.TRAP && !disguised) || ([ROOM_TYPES.BATTLE, ROOM_TYPES.HEALING, ROOM_TYPES.SHOP, ROOM_TYPES.BOSS, ROOM_TYPES.ALTAR, ROOM_TYPES.CASINO, ROOM_TYPES.LOOT, ROOM_TYPES.GUILD].includes(type))) {
          const img = document.createElement("img");
          img.src = roomIcons[type];
          img.alt = type;
          img.style.width = "80%";
          roomDiv.appendChild(img);
        }
        roomDiv.addEventListener("click", () => moveToRoom(x, y));
        mapDiv.appendChild(roomDiv);
        map[key] = {
          x,
          y,
          type,
          element: roomDiv,
		  disguisedTrap: disguised,
          secretAmbush
        };
      }

      function generateAdjacentRooms(cx, cy) {
  if (floorCount % 20 === 0 && !bossRoomGenerated) {
    allowedMoves = [];
    const pos = { x: cx, y: cy - 1 };
    createRoom(pos.x, pos.y, ROOM_TYPES.BOSS);
    allowedMoves.push(pos.x + "_" + pos.y);
    bossRoomGenerated = true;
  } else {
    const positions = [
      { x: cx - 1, y: cy - 1 },
      { x: cx, y: cy - 1 },
      { x: cx + 1, y: cy - 1 }
    ];
    let battleCount = 0;
    // Object to keep track of which non-battle types have been used in this generation.
    let usedNonBattleTypes = {};
    // Define the list of allowed non-battle types.
    const nonBattleTypes = [
      ROOM_TYPES.HEALING,
      ROOM_TYPES.ALTAR,
      ROOM_TYPES.CASINO,
      ROOM_TYPES.SHOP,
      ROOM_TYPES.LOOT,
      ROOM_TYPES.EMPTY,
      ROOM_TYPES.AMBUSH,
	  ROOM_TYPES.GUILD,
    ];
    allowedMoves = [];
	
	const BASE_WEIGHTS = {
      [ROOM_TYPES.CASINO] : 14,
	  [ROOM_TYPES.GUILD] : 1,
      [ROOM_TYPES.SHOP]   : 10,
      [ROOM_TYPES.LOOT]   : 15,
      [ROOM_TYPES.HEALING]: 25,
      [ROOM_TYPES.EMPTY]  : 35
    };
    const NON_BATTLE_TYPES = Object.keys(BASE_WEIGHTS);

    // 2) Compute adjusted weights based on luck
    const totalBaseWeight = NON_BATTLE_TYPES
      .map(t => BASE_WEIGHTS[t])
      .reduce((a, b) => a + b, 0);
    const avgWeight = totalBaseWeight / NON_BATTLE_TYPES.length;
    const FULL_EQUALIZE_LUCK = 100;
    const luckFactor = Math.min(1, player.luck / FULL_EQUALIZE_LUCK);
	
    for (let i = 0; i < positions.length; i++) {
      let type;
	  let disguised = false;
      let secretAmbush = false;
      
      if (trapCount < 2 && Math.random() < 0.05) {
      type = ROOM_TYPES.TRAP;
      trapCount++;
      if (Math.random() < 0.5) disguised = true;
      }
	  if (battleCount < 2 && Math.random() < 0.5) {
        type = ROOM_TYPES.BATTLE;
        battleCount++;
      } else if (floorCount % 2 === 0) {
        type = ROOM_TYPES.HEALING;
      } else if ((floorCount - lastAltarFloor) >= 5 && Math.random() < 0.2) {
        type = ROOM_TYPES.ALTAR;
        lastAltarFloor = floorCount;
      } else {
        const rand = Math.random() * 100;
        if (shopCooldown > 0) {
          type = rand < 50 ? ROOM_TYPES.HEALING : ROOM_TYPES.EMPTY;
          shopCooldown--;
        } else {
          if (rand < 14) {
            type = ROOM_TYPES.CASINO;
          } else if (rand < 1) {
            type = ROOM_TYPES.GUILD;
          } else if (rand < 25) {
            type = ROOM_TYPES.SHOP;
          } else if (rand < 40) {
            type = ROOM_TYPES.LOOT;
          } else if (rand < 65) {
            type = ROOM_TYPES.HEALING;
          } else {
            type = ROOM_TYPES.EMPTY;
          }
        }
      }
	  
      if (type === ROOM_TYPES.BATTLE || type === ROOM_TYPES.HEALING || type === ROOM_TYPES.EMPTY) {
        if (Math.random() < 0.1) {
          type = ROOM_TYPES.AMBUSH;
        }
      }
      
      // If the room isn't a battle room, ensure its type hasn't already been generated.
      if (type !== ROOM_TYPES.BATTLE) {
        if (usedNonBattleTypes[type]) {
          // Pick an alternative from nonBattleTypes that hasn't been used yet.
          let available = nonBattleTypes.filter(t => !usedNonBattleTypes[t]);
          if (available.length > 0) {
            type = available[Math.floor(Math.random() * available.length)];
          }
          // Otherwise, if none available, the current type is retained.
        }
        usedNonBattleTypes[type] = true;
      }
      
      createRoom(positions[i].x, positions[i].y, type);
      allowedMoves.push(positions[i].x + "_" + positions[i].y);
    }
  }
}

      function shuffle(array) {
        let currentIndex = array.length,
          temporaryValue, randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
	  
	  function lockActions() {
		actionsLocked = true;
	  }

	  function unlockActions() {
		actionsLocked = false;
	  }

	  function newTurn() {
		turnNumber++;
		logBattle("----------Turn " + turnNumber + "----------");
		setTimeout(() => {
			unlockActions();
		}, 125);
	  }
	  
	  const baseItemChance = 0.5;
	  const itemChance = Math.min(0.9, baseItemChance + player.luck * 0.001);

      function handleLootRoom() {
  // Randomly decide: 50% chance for an item drop, 50% for money.
  if (Math.random() < itemChance) {
    // Item drop.
    let droppedItem = getLootItem();
    if (droppedItem) {
      // Find first free slot.
      const freeIndex = player.inventory.findIndex(slot => slot === null);
      if (freeIndex !== -1) {
        player.inventory[freeIndex] = { ...droppedItem };
        logBattle(`You found a ${droppedItem.name}! (Common)`);
        // Apply passive effect immediately if it's equipment.
        if (droppedItem.type === "equipment") {
          if (droppedItem.name === "Armor") {
            player.defense += 10;
          }
          if (droppedItem.name === "Sword") {
            player.attack += 5;
          }
          if (droppedItem.name === "Staff") {
            player.magic += 5;
          }
          if (droppedItem.name === "Scarf") {
            player.dodgeChance += 0.1;
          }
          if (droppedItem.name === "Glasses") {
            player.neverMiss = true;
          }
          if (droppedItem.name === "Sharpener") {
            player.critMultiplier = 2;
          }
          alert(`You found a ${droppedItem.name}! (Rare)`);
        }
      } else {
        logBattle("Inventory full!");
      }
    } else {
      // Fallback: if no valid item was found, give money.
      let moneyGained = Math.floor(Math.random() * 51) + 50;
      player.money += moneyGained * Math.round(1 + player.fortune * 0.08);
      logBattle(`Loot found: Gained $${moneyGained * Math.round(1 + player.fortune * 0.08)}!`);
    }
  } else {
    // Money drop.
    let moneyGained = Math.floor(Math.random() * 51) + 50;
    player.money += moneyGained;
    logBattle(`You found some treasure! Earned $${moneyGained}!`);
  }
  updateStats();
}
      // Returns a valid loot item. If the drop is an equipment and player already has it, re-run the drop.
      function getLootItem(attempts = 0) {
        // Prevent infinite loops – try up to 5 times.
        if (attempts > 5) return null;
        const randomIndex = Math.floor(Math.random() * shopItemsList.length);
        const item = shopItemsList[randomIndex];
        // If the item is equipment (unique) and the player already has it, try again.
        if (item.type === "equipment" && hasItem(item.name)) {
          return getLootItem(attempts + 1);
        }
        return item;
      }
      /*******************
       * MOVEMENT & CAMERA
       *******************/
      function moveToRoom(x, y) {
  const key = x + "_" + y;
  if (!allowedMoves.includes(key)) {
    console.log("Invalid move. Please choose one of the newly generated rooms.");
    return;
  }
  // Remove player from old room.
  const oldKey = player.x + "_" + player.y;
  if (map[oldKey]) {
    map[oldKey].element.innerHTML = "";
    if (["battle", "healing", "shop", "boss", "ambush", "loot", "trap", "guild"].includes(map[oldKey].type)) {
      const img = document.createElement("img");
      img.src = roomIcons[map[oldKey].type];
      img.alt = map[oldKey].type;
      img.style.width = "80%";
      map[oldKey].element.appendChild(img);
    }
  }
  // Update player's position.
  player.x = x;
  player.y = y;
  map[key].element.innerHTML = '<div class="player"></div>';
  centerCamera();

  // Trigger the room event.
  if (map[key].secretAmbush) {
    map[key].secretAmbush = false;
    // Show ambush icon (if needed) then start ambush battle.
    const img = document.createElement("img");
    img.src = roomIcons[ROOM_TYPES.AMBUSH];
    img.alt = ROOM_TYPES.AMBUSH;
    img.style.width = "80%";
    map[key].element.appendChild(img);
    // Start ambush battle and then finalize the room when done.
    startAmbushBattle(() => finalizeRoom(key));
    return;
  }
  if (map[key].type === ROOM_TYPES.BATTLE) {
    startBattle();
  } else if (map[key].type === ROOM_TYPES.GUILD) {
    if (!player.guildUnlocked) {
      showGuildApplicationPrompt();
    } else {
      showGuildMainMenu();
    }
  } else if (map[key].type === ROOM_TYPES.HEALING) {
    healPlayer();
  } else if (map[key].type === ROOM_TYPES.SHOP) {
    shopCooldown = 6;
    openShopMenu();
  } else if (map[key].type === ROOM_TYPES.BOSS) {
    startBossBattle();
  } else if (map[key].type === ROOM_TYPES.ALTAR) {
    initiateLevelUp(3);
  } else if (map[key].type === ROOM_TYPES.CASINO) {
    openCasino(() => finalizeRoom(key)); // Pass a callback to finalize when casino play is done.
    return; // Exit here – the casino callback will finalize.
  } else if (map[key].type === ROOM_TYPES.AMBUSH) {
    startAmbushBattle(() => finalizeRoom(key));
    return; // Exit here – ambush callback finalizes after completion.
  } else if (map[key].type === ROOM_TYPES.LOOT) {
    handleLootRoom();
  } else if (map[key].type === ROOM_TYPES.TRAP) {
    handleTrapRoom();
  }
  
  // Finalize the room if none of the above events delay room completion.
  finalizeRoom(key);
}

function finalizeRoom(key) {
  // Mark the room as consumed.
  map[key].type = ROOM_TYPES.EMPTY;
  map[key].element.innerHTML = '<div class="player"></div>';
  
  // Update move counters and generate adjacent rooms.
  roomMoves++;
  roomsThisFloor++;
  if (roomsThisFloor >= 3) {
    floorCount++;
    roomsThisFloor = 0;
    bossRoomGenerated = false;
  }
  generateAdjacentRooms(player.x, player.y);
  updateBackgroundColor();
}

      function centerCamera() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = centerX - player.x * roomSize - roomSize / 2;
        const offsetY = centerY - player.y * roomSize - roomSize / 2;
        mapDiv.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
      /*******************
       * ROOM EFFECTS
       *******************/
      function healPlayer() {
        player.hp = player.maxHp
		player.mana = player.maxMana
        updateStats();
		updateManaDisplay();
      }
	  
	  /*******************
       * GUILD SHIT
       *******************/
	  
	  function showGuildApplicationPrompt() {
  let input = prompt("You've found the Guild! You must pay $500 to apply. Please enter the amount:");
  // If the player cancels or inputs nothing, assume they’re choosing to leave.
  if (input === null) {
    alert("We hope you reconsider applying!");
    return;
  }
  let amount = Number(input);
  if (amount < 500) {
    alert("You do not have the requirement to apply, please return when you do.");
    return;
  }
  // Deduct the fee and mark the guild as unlocked.
  player.money -= 500;
  alert("Thank you for applying. Welcome to the Guild!");
  player.guildUnlocked = true;
  showGuildMainMenu();
}

function getGuildRank() {
  let ranks = ["Newbie", "Rookie", "Amateur", "Journeyman", "Pro", "Veteran", "Master", "Grandmaster"];
  return ranks[player.guildMissionStage] || "Grandmaster";
}

function updateGuildRankUI() {
	if (!player.guildUnlocked) {
    document.getElementById("guildRankText").innerText = "Guild Rank: None";
  } else {
  document.getElementById("guildRankText").innerText = "Guild Rank: " + getGuildRank();
  }
}

function getGuildBonuses() {
  const guildBonus = [
    { damage: 0.00, hp: 0.00 },
    { damage: 0.05, hp: 0.05 },
    { damage: 0.07, hp: 0.10 },
    { damage: 0.10, hp: 0.15 },
    { damage: 0.12, hp: 0.20 },
    { damage: 0.15, hp: 0.25 },
    { damage: 0.20, hp: 0.35 },
    { damage: 0.25, hp: 0.50 }
  ];
  // Ensure that player.guildMissionStage falls within the array bounds.
  let index = player.guildMissionStage;
  if (index < 0) index = 0;
  if (index >= guildBonus.length) index = guildBonus.length - 1;
  return guildBonus[index];
}

function showGuildMainMenu() {
  // Make sure the guild menu (defined in your HTML) is visible, and update its rank text
  const guildMenu = document.getElementById("guildMenu");
  updateGuildRankUI();

  const missionBtn = document.getElementById("missionButton");
  const hireMercenaryBtn = document.getElementById("hireMercenaryButton");
  const closeBtn = document.getElementById("closeGuildMenu");

  // Remove any existing event listeners by reassigning the onclick properties
  missionBtn.onclick = handleMission;
  hireMercenaryBtn.onclick = handleHireMercenary;
  closeBtn.onclick = function() {
    guildMenu.style.display = "none";
	battleTint.style.display = "none";
  };

  // Display the guild menu.
  guildMenu.style.display = "block";
  battleTint.style.display = "block";
}

function getCurrentMissionRequirement() {
  // Requirements for missions 1 through 7:
  let requirements = [5, 10, 20, 30, 50, 100, 200];
  return requirements[player.guildMissionStage - 1] || 200;
}

function setMissionUI() {
  // Assume you use the #missionDisplay element (already present in your HTML)
  let missionDisplay = document.getElementById("missionDisplay");
  let req = getCurrentMissionRequirement();
  missionDisplay.innerHTML = `<p>Mission: Hunt ${req} enemies</p><p id="missionCounter">0/${req}</p>`;
  missionDisplay.style.display = "block";
}

function handleMission() {
  // If a mission is in progress but incomplete, do not allow a new one to start.
  if (player.guildMissionStage > 0 && player.guildMissionKills < getCurrentMissionRequirement()) {
    alert("Complete your current task!");
    return;
  }
  
  // If a mission was just completed...
  if (player.guildMissionStage > 0 && player.guildMissionKills >= getCurrentMissionRequirement()) {
    if (player.guildMissionStage === 7) {
      alert("You have completed all missions!");
      return;
    }
    let req = getCurrentMissionRequirement();
    let expReward = req * 2 * (Math.round(1 + player.potential * 0.08));
    let moneyReward = req * 5 * Math.round(1 + player.fortune * 0.08);
    alert(`Mission Completed! You gained ${expReward} EXP and $${moneyReward}.`);
    player.exp += expReward;
    player.money += moneyReward;
    player.guildMissionStage++;
    player.guildMissionKills = 0;
    setMissionUI();
    updateGuildRankUI();
    return;
  }
  
  // If no mission has been started yet:
  if (player.guildMissionStage === 0 && player.guildMissionKills === 0) {
    player.guildMissionStage = 1;  // start first mission
    setMissionUI();
  }
}

function updateGuildMissionProgress() {
  if (!player.guildUnlocked || player.guildMissionStage === 0) return;
  player.guildMissionKills++;
  let req = getCurrentMissionRequirement();
  let counterEl = document.getElementById("missionCounter");
  if (player.guildMissionKills >= req) {
    counterEl.innerText = "Mission Completed!";
    // Optionally, update the guild menu to reflect new rank immediately.
    updateGuildRankUI();
  } else {
    counterEl.innerText = `${player.guildMissionKills}/${req}`;
  }
}

function handleHireMercenary() {
  // Prompt the player for hiring a mercenary.
  let choice = confirm("Hire Mercenary for $200? Press OK to pay, Cancel for Nevermind.");
  if (!choice) {
    alert("We hope you reconsider applying!");
    return;
  }
  if (player.money < 200) {
    alert("You do not have enough money.");
    return;
  }
  player.money -= 200;
  player.mercenaries.push(createMercenary());
  alert("Mercenary hired!");
}

function createMercenary() {
  return {
    // Base damage is half the player's current attack.
    baseDamage: player.attack / 2,
	hitPoints: 1,
    critChance: 0.10,
    dodgeChance: 0.5,
  };
}

      /*******************
       * BATTLE MECHANICS
       *******************/
      const enemyDodgeChance = 0.05;
	  
      function startBattle() {
		skillUsedThisBattle = true;
        battleLog.innerHTML = "";
        battleLog.style.display = "block";
        battleTint.style.display = "block";
		turnNumber = 1;
		logBattle("----------Turn " + turnNumber + "----------");
		unlockActions();
        let allowedEnemies = getAllowedEnemies();
        currentEnemy = JSON.parse(JSON.stringify(allowedEnemies[Math.floor(Math.random() * allowedEnemies.length)]));
	let floorBoost = Math.round(1 + floorCount * 0.1);
        let floorBonus = Math.floor(Math.round(floorCount / 10) * floorBoost);
        currentEnemy.hp += 10 * floorBonus;
        currentEnemy.damageRange = [
          currentEnemy.damageRange[0] + 2 * floorBonus,
          currentEnemy.damageRange[1] + 2 * floorBonus,
        ];
        let rewardMultiplier = Math.pow(1.5, floorBonus);
        currentEnemy.expReward = [currentEnemy.expReward[0] * rewardMultiplier, currentEnemy.expReward[1] * rewardMultiplier];
        currentEnemy.moneyReward = [currentEnemy.moneyReward[0] * rewardMultiplier, currentEnemy.moneyReward[1] * rewardMultiplier];
        currentEnemy.poison = false;
        currentEnemy.weaken = false;
        player.rage = false;
        player.iron = false;
        updateEnemyInfo();
        battleMenu.style.display = "block";
      }

      function startBossBattle() {
  if (currentEnemy === "The Restricted One, Kyojiro Allista") {
	  alert("You have entered a Boss Room... but wait, a Mysterious Man stands in your way.");
  } else if (currentEnemy === "Omni") {
	  alert("You sense a powerful presence, be careful.");
  } else if (currentEnemy === "Six-Eyed Calamity") {
	  alert("Between the Heavens and the Earth, you can sense the Honoured One.");
  } else if (currentEnemy === "The King of Curses") {
	  alert("The Strongest of the Heian era himself, Ryomen Sukuna, sits on a throne in front of you.");
  } else if (currentEnemy === "The Black King") {
	  alert("You get the feeling you are about to die... but you go anyway.");
  } else if (currentEnemy === "King God General Emperor, Supreme Divine Entity of Ultimacy, Archangel & Creator, Gabriel") {
	  alert("After everything you've been through, it's finally time. All of your effort, your struggles, and your victories, has come to this one moment. Good luck, warrior.");
  } else {
	  alert("You have entered a Boss Room. Be careful.");
  }
  skillUsedThisBattle = true;
  stopWorldMusic();
  if (currentEnemy === "Omni") {
	  stopWorldMusic();
	  omniTrack.play();
  } else if (currentEnemy === "Six-Eyed Calamity") {
	  stopWorldMusic();
	  secTrack.play();
  } else if (currentEnemy === "The King of Curses") {
	  stopWorldMusic();
	  kocTrack.play();
  } else if (currentEnemy === "The Black King") {
	  stopWorldMusic();
	  bkTrack.play();
  } else if (currentEnemy === "The Restricted One, Kyojiro Allista") {
	  stopWorldMusic();
	  troTrack.play();
  } else if (currentEnemy === "King God General Emperor, Supreme Divine Entity of Ultimacy, Archangel & Creator, Gabriel") {
	  stopWorldMusic();
	  godTrack.play();
  } else {
	  stopWorldMusic();
	  bossTrack.play();
  }
  battleLog.innerHTML = "";
  battleLog.style.display = "block";
  battleTint.style.display = "block";
  let floorBonus = Math.floor(floorCount / 10);
  let bossData = getBossForFloor(floorCount);
  bossData.hp += 15 * floorBonus;
  bossData.damageRange = [
    bossData.damageRange[0] + 2 * floorBonus,
    bossData.damageRange[1] + 2 * floorBonus,
  ];
  let rewardMultiplier = Math.pow(2, floorBonus);
  bossData.expReward = bossData.expReward[0] * rewardMultiplier;
  bossData.moneyReward = bossData.moneyReward[0] * rewardMultiplier;
  currentEnemy = JSON.parse(JSON.stringify(bossData));
  currentEnemy.boss = true;
  currentEnemy.poison = false;
  currentEnemy.weaken = false;
  currentEnemy.maxHp = currentEnemy.hp;
  player.rage = false;
  player.iron = false;
  updateEnemyInfo();
  battleMenu.style.display = "block";
  
  // Instead of simply unlocking actions, call the enemy turn wrapper after a delay
  setTimeout(enemyTurnWrapper, 250);
}
      /*******************
       * AMBUSH BATTLE SYSTEM
       *******************/
      function startAmbushBattle(onComplete) {
  // store the finalizeRoom callback
  skillUsedThisBattle = true;
  ambushCompleteCallback = onComplete || null;
  stopWorldMusic();
  ambushTrack.play();
  battleLog.innerHTML = "";
  battleLog.style.display = "block";
  battleTint.style.display = "block";
  alert("You were ambushed!");

  // spawn 2–6 enemies
  const enemyCount = Math.floor(Math.random() * 5) + 2; 
  ambushEnemiesQueue = [];

  for (let i = 0; i < enemyCount; i++) {
    const allowed = getAllowedEnemies();
    const e = JSON.parse(JSON.stringify(
      allowed[Math.floor(Math.random() * allowed.length)]
    ));
    const bonus = Math.floor(floorCount / 10);
    e.hp += 15 * bonus;
    e.damageRange = [
      e.damageRange[0] + 2 * bonus,
      e.damageRange[1] + 2 * bonus
    ];
    const mult = Math.pow(2, bonus);
    e.expReward   = [e.expReward[0]   * mult, e.expReward[1]   * mult];
    e.moneyReward = [e.moneyReward[0] * mult, e.moneyReward[1] * mult];
    e.poison = false;
    e.weaken = false;
    ambushEnemiesQueue.push(e);
  }

  // start with the first enemy
  currentEnemy = ambushEnemiesQueue.shift();
  updateEnemyInfo();
  battleMenu.style.display = "block";
  unlockActions();
}

function getEnemyByName(enemyName) {
  return enemies.find(e => e.name.toLowerCase() === enemyName.toLowerCase());
}

      function updateEnemyInfo() {
        let name = currentEnemy.name;
        if (currentEnemy.poison) name += "-Poisoned";
        if (currentEnemy.weaken) name += "-Weakened";
        enemyInfo.innerHTML = `
					<h3>${name}</h3>
					<p>HP: ${currentEnemy.hp}</p>`;
      }

      function endBattle() {
  battleMenu.style.display = "none";
  battleLog.style.display = "none";
  battleTint.style.display = "none";
  inventoryMenu.style.display = "none";
  
  // reward the player if the enemy died
  if (currentEnemy && currentEnemy.hp <= 0) {
    let gainedExp, gainedMoney;
    if (currentEnemy.boss) {
      gainedExp  = currentEnemy.expReward;
      gainedMoney = currentEnemy.moneyReward;
    } else {
      const [minE, maxE] = currentEnemy.expReward;
      gainedExp  = Math.floor(Math.random() * (maxE - minE + 1)) + minE;
      const [minM, maxM] = currentEnemy.moneyReward;
      gainedMoney = Math.floor(Math.random() * (maxM - minM + 1)) + minM;
    }
    addExp(gainedExp);
    player.money += gainedMoney * Math.round(1 + player.fortune * 0.08);
    updateStats();
  }

  // if more ambush enemies remain, queue the next one
  if (ambushEnemiesQueue && ambushEnemiesQueue.length > 0) {
    currentEnemy = ambushEnemiesQueue.shift();
    logBattle("Next enemy appears!");
    updateEnemyInfo();
    battleMenu.style.display = "block";
    battleLog.style.display = "block";
    battleTint.style.display = "block";
    unlockActions();
    return;
  }

  // if this was an ambush, fire the finalizeRoom callback
  if (ambushCompleteCallback) {
    const cb = ambushCompleteCallback;
    ambushCompleteCallback = null;
    ambushEnemiesQueue = null;
	ambushTrack.pause();
	ambushTrack.currentTime = 0;
	resumeWorldMusicAfterBattle();
    cb();
    return;
  }
  
  // otherwise, normal battle cleanup
  currentEnemy = null;
  ambushTrack.pause();
  ambushTrack.currentTime = 0;
  bossTrack.pause();
  bossTrack.currentTime = 0;
  secTrack.pause();
  secTrack.currentTime = 0;
  omniTrack.pause();
  omniTrack.currentTime = 0;
  bkTrack.pause();
  bkTrack.currentTime = 0;
  kocTrack.pause();
  kocTrack.currentTime = 0;
  if (!currentBGM) {
	  resumeWorldMusicAfterBattle();
  }
  updateGuildMissionProgress();
}

	   /*******************
       * PLAYER ATTACK SYSTEM
       *******************/

      function playerAttack(moveType) {
        if (!currentEnemy) return;
        if (!player.neverMiss && Math.random() < enemyDodgeChance) {
          logBattle(`${currentEnemy.name} dodged the Player's attack!`);
		  setTimeout(enemyTurnWrapper, 0);
          enemyTurn();
          return;
        }
		const extra = getGuildBonuses();
        let baseDamage;
        if (moveType === "attack") {
          const multiplier = Math.random() * (1.15 - 0.85) + 0.85;
          baseDamage = Math.floor(multiplier * player.attack * (1 + extra.damage));
        } else if (moveType === "magic") {
          const multiplier = Math.random() * (2 - 1) + 1;
          baseDamage = Math.floor(multiplier * player.magic * (1 + extra.damage));
        }
        let damage = Math.round(baseDamage);
        if (damage < 1) damage = 1;
        let resisted = false;
        if (currentEnemy.reductionAll) {
			if (ignoreEnemyResistances = true) {
				resisted = false;
			} else {
				damage = Math.round(damage * (1 - currentEnemy.reductionAll));
				resisted = true;
			}
        }
        if (moveType === "attack" && currentEnemy.reductionAttack) {
			if (ignoreEnemyResistances = true) {
				resisted = false;
			} else {
				damage = Math.round(damage * (1 - currentEnemy.reductionAttack));
				resisted = true;
			}
        }
        if (moveType === "magic" && currentEnemy.reductionMagic) {
			if (ignoreEnemyResistances = true) {
				resisted = false;
			} else {
				damage = Math.round(damage * (1 - currentEnemy.reductionMagic));
				resisted = true;
			}
        }
        let isCritical = false;
		let critMulValue = Math.round((player.perception / 20) + 2);
        if (moveType === "attack") {
          if (Math.random() < 0.05 + (player.perception - 1) * 0.001) {
            damage = Math.round(damage * critMulValue);
            isCritical = true;
			if (player.outgoingDamageMultiplier && playerPassiveAbility === "Reckless") {
				damage *= player.outgoingDamageMultiplier;
			}
			if (player.rage = true) {
				damage = Math.round(damage * 2);
				player.critChance *= 2;
			}
          }
		  if (player.outgoingDamageMultiplier && playerPassiveAbility === "Reckless") {
				damage *= player.outgoingDamageMultiplier;
			}
			if (player.rage = true) {
				damage = Math.round(damage * 2);
				player.critChance *= 2;
			}
        }
		if (moveType === "magic") {
			if (player.outgoingDamageMultiplier && playerPassiveAbility === "Reckless") {
				damage *= player.outgoingDamageMultiplier;
			}
			if (player.rage = true) {
				damage = Math.round(damage * 2);
			}
		}
        if (isCritical) {
          logBattle(`Player attacked and dealt ${damage} critical damage!`);
        } else if (resisted) {
          logBattle(`Player ${moveType === "attack" ? "attacked" : "cast magic"} and dealt ${damage} resisted damage.`);
        } else {
          logBattle(`Player ${moveType === "attack" ? "attacked" : "cast magic"} and dealt ${damage} damage.`);
        }
		if (player.rage = true) {
			damage = Math.round(damage * 2);
			player.critChance *= 2;
		}
		if (player.outgoingDamageMultiplier) {
			damage *= player.outgoingDamageMultiplier;
		}
        currentEnemy.hp -= damage;
        if (currentEnemy.hp < 0) currentEnemy.hp = 0;
        updateEnemyInfo();
        if (currentEnemy.hp <= 0) {
          processEnemyDefeat();
          endBattle();
          return;
        }
		if (player.mercenaries.length > 0) {
    mercenaryAttack();
  }
		if (damage < 1) damage = 1;
		setTimeout(enemyTurnWrapper, 250);
      }
	  
function mercenaryAttack() {
    if (player.mercenaries && player.mercenaries.length > 0) {
        player.mercenaries.forEach((mercenary) => {
            // Apply a random multiplier to the base damage.
            let randomFactor = 0.8 + Math.random() * 0.4;  // multiplier between 0.8 and 1.2
            let damage = Math.floor(mercenary.baseDamage * randomFactor);
            logBattle("Your mercenary attacked " + currentEnemy.name + " for " + damage + " damage.");
            currentEnemy.hp -= damage;
        });
    }
}
	  
	  function dealPlayerDamage(options = {}) {
  // options: { multiplier, forceCrit, ignoreDodge }
  const { multiplier = 1, forceCrit = false, ignoreDodge = false } = options;
  // stash
  const origAttack = player.attack;
  const origCritMul = player.critMultiplier;
  const origNeverMiss = player.neverMiss;
  // apply
  player.attack *= multiplier;
  if (forceCrit) {
	  player.critMultiplier = 999;
	  isCritical = true;
  }
  if (ignoreDodge) player.neverMiss = true;
  // perform
  playerAttack("attack");
  // restore
  player.attack = origAttack;
  player.critMultiplier = origCritMul;
  player.neverMiss = origNeverMiss;
}

function dealPlayerMagicDamage(mult = 1) {
  // stash
  const origMagic = player.magic;
  // apply
  player.magic *= mult;
  // perform
  playerAttack("magic");
  // restore
  player.magic = origMagic;
}

/*******************
       * ENEMY TURN
       *******************/

      function enemyTurn() {
        if (Math.random() < player.dodgeChance + (player.agility - 1) * 0.001) {
          logBattle("Player dodged the enemy attack!");
          updateStats();
          return;
        }
        const [minD, maxD] = currentEnemy.damageRange;
        let enemyDamage = Math.round(Math.random() * (maxD - minD + 1)) + minD;
        enemyDamage -= Math.round(enemyDamage * (player.defense / 100));
        if (enemyDamage < 0) enemyDamage = 1;
        enemyDamage = Math.ceil(enemyDamage / 2);
        let enemyCritical = false;
        if (Math.random() < 0.05) {
          enemyDamage *= 2;
          enemyCritical = true;
        }
        if (player.iron) {
          enemyDamage = Math.round(enemyDamage / 2);
        }
		if (player.enemyDamageReduction) {
			enemyDamage *= player.enemyDamageReduction;
		}
		if (player.incomingDamageMultiplier) {
			enemyDamage *= player.incomingDamageMultiplier;
		}
        player.hp -= Math.round(enemyDamage);
        if (player.hp < 0) player.hp = 0;
        if (enemyCritical) {
          logBattle(`${currentEnemy.name} attacked and dealt ${enemyDamage} critical damage!`);
        } else {
          logBattle(`${currentEnemy.name} attacked and dealt ${enemyDamage} damage.`);
        }
        updateStats();
        if (player.hp <= 0) {
          showDeathMenu();
        }
		if (currentEnemy.boss && Math.random() < 0.10) {
    const healAmt = Math.ceil(currentEnemy.maxHp * 0.10);
    currentEnemy.hp = Math.min(currentEnemy.hp + healAmt, currentEnemy.maxHp);
    logBattle(`${currentEnemy.name} healed ${healAmt} HP!`);
    updateEnemyInfo();
    return;
  }
      }
	  
	  function enemyTurnWrapper() {
  enemyTurn();
  // If the enemy is still alive and not defeated during its turn...
  if (currentEnemy && currentEnemy.hp > 0) {
    // Process poison damage if the enemy is poisoned:
    if (currentEnemy.poison) {
      const poisonDamage = Math.max(Math.round(currentEnemy.hp * 0.02), 1);
      logBattle(`${currentEnemy.name} took ${poisonDamage} Poison Damage!`);
      currentEnemy.hp -= poisonDamage;
      if (currentEnemy.hp < 0) currentEnemy.hp = 0;
      updateEnemyInfo();
    }
	if (player.passiveHealingPerTurn) {
    let healAmt = Math.floor(player.maxHp * player.passiveHealingPerTurn);
    player.hp = Math.min(player.maxHp, player.hp + healAmt);
    logBattle(`Adaptable heals you for ${healAmt} HP!`);
    updateStats();
  }
  setTimeout(() => {
    unlockActions();
  }, 125);
    // Check if the enemy died after poison damage.
    if (currentEnemy.hp <= 0) {
      alert(`${currentEnemy.name} defeated!`);
      endBattle();
      return;
    }
	if (player.mercenaries && player.mercenaries.length > 0 && Math.random() < player.mercenaries[0].dodgeChance) {
        // Randomly select one mercenary.
        let targetIndex = Math.floor(Math.random() * player.mercenaries.length);
        let target = player.mercenaries[targetIndex];
        logBattle(`${currentEnemy.name} attacked your mercenary!`);
		if (Math.random() > player.mercenaries[0].dodgeChance) {
			if (target.hasOwnProperty("hitPoints")) {
				target.hitPoints -= enemyDamage;
				if (target.hitPoints < 0) {
					logBattle(`Your mercenary has been defeated by ${currentEnemy.name} !`);
					player.mercenaries.splice(targetIndex, 1);
				}
			} else {
				logBattle(`Your mercenary has been defeated by ${currentEnemy.name}!`);
				player.mercenaries.splice(targetIndex, 1);
			}
		} else {
			logBattle(`${currentEnemy.name} attacked your Mercenary, but they dodged!`);
		}
		return;
	} else {
	}
  }
  setTimeout(newTurn, 250);
}

      function attemptRun() {
        if (ambushEnemiesQueue && ambushEnemiesQueue.length > 0) {
          logBattle("Cannot run during ambushes!");
		  setTimeout(enemyTurnWrapper, 250);
          return;
        }
        if (currentEnemy && currentEnemy.boss) {
          logBattle("Cannot run from boss fights!");
		  setTimeout(enemyTurnWrapper, 250);
          return;
        }
        if (Math.random() < 0.5) {
          logBattle("Player attempted to run and succeeded!");
          alert("Successfully escaped!");
		  setTimeout(enemyTurnWrapper, 250);
		  endBattle();
        } else {
          logBattle("Player attempted to run and failed!");
		  setTimeout(enemyTurnWrapper, 250);
        }
      }
	  
	  function processEnemyDefeat() {
    // Check if the active ability is Necromancy.
    if (player.activeAbility === "Necromancy") {
        // Instead of simply alerting defeat, prompt with two choices.
        // We use confirm() to simulate two options: OK = "Yes", Cancel = "Finish Off".
        let choice = confirm(
            "Player defeated " + currentEnemy.name + 
            "! Would you like for it to become your soldier?\n\n" +
            "Press OK for Yes, or Cancel to Finish Off."
        );
        if (choice) {
            // "Yes" selected – determine chance based on whether enemy is a boss.
            let successChance = currentEnemy.boss ? (0.33) : 0.5;
            if (Math.random() < successChance) {
                alert("You have resurrected " + currentEnemy.name + "!");
                if (currentEnemy.boss) {
                    player.mercenaries.push({
                        baseDamage: player.attack * 2,
                        hitPoints: 3,
                        critChance: 0.10,
                        dodgeChance: 0.67,
                    });
                } else {
                    player.mercenaries.push({
                        baseDamage: player.attack / 2,
						hitPoints: 1,
                        critChance: 0.10,
                        dodgeChance: 0.5,
                    });
                }
            } else {
                alert("You failed to resurrect " + currentEnemy.name + ".");
            }
            endBattle();
        } else {
            endBattle();
        }
    } else {
        // If Necromancy is not active, do the usual defeat process.
        alert(`${currentEnemy.name} defeated!`);
        endBattle();
    }
}
	  
	  /*******************
       * ABILITIES
       *******************/
	   
	   function applyPassiveAbilityEffects() {
  switch (player.passiveAbility) {
    case "None":
      // No changes
      break;
    case "Berserker":
      // Doubles the player's Attack stat
      player.attack += 5;
	  updateStats();
	  updateManaDisplay();
      break;
    case "Arcane":
      player.magic += 5;
	  updateStats();
	  updateManaDisplay();
      break;
    case "Hunter":
      // Increase crit chance by 10%
      // (If you already have a base crit chance, add 0.10 to it.)
      player.critChance = (player.critChance || 0) + 0.10;
      // Make all attacks never miss: set a flag that your attack routines can check.
      player.alwaysHit = true;
      // Ignore enemy resistances – have your damage functions check this flag.
      ignoreEnemyResistances = true;
      break;
	case "Quick":
      player.agility += 5;
	  updateStats();
      break;
    case "Tough":
      // Halve all enemy damage by setting a global reduction factor in your enemy damage calculations.
      player.enemyDamageReduction = 0.5;
      // Immune to enemy critical hits.
      player.immuneToCrits = true;
      break;
    case "Golden":
      // Double money gain (this flag or multiplier should be used in your reward calculations).
      player.moneyGainMultiplier = 2;
      // Lower enemy damage by 25% (i.e. multiply enemy damage by 0.75).
      player.enemyDamageReduction = 0.75;
      // Boost exp gain by 10%
      player.expGainMultiplier = 1.1;
      // Ignore enemy resistances.
      ignoreEnemyResistances = true;
      break;
    case "Adaptable":
      // Double exp gain
      player.expGainMultiplier = 2;
      // Heal 5% of max HP per turn.
      // (You’ll need to update your turn logic—see below for an example.)
      player.passiveHealingPerTurn = 0.02;
      break;
    case "Reckless":
      player.outgoingDamageMultiplier = 2;
      // Increase enemy damage taken by 50% (i.e. enemy damage multiplier).
      player.incomingDamageMultiplier = 1.5;
      break;
	case "Ambidextrous":
      player.magic = player.attack;
	  player.attack = player.magic;
	  updateStats();
	  updateManaDisplay();
      break;
    case "Aura Farmer":
      // Instead of the normal +1 stat upgrade per level, allow +2.
      player.levelUpBonus = 2;
      break;
	case "Heavenly Restricted":
      // Override the player's base stats.
      player.maxHp = 300;
      player.hp = 300;
      player.attack = 100;
      player.defense = 60;
      player.magic = 0;
      player.maxMana = 0;
      player.mana = 0;
      player.agility = 60;
      player.perception = 60;
      player.potential = 0;
      player.fortune = 1;
      player.luck = 1;
	  currentEnemy.reductionAll = false;
	  currentEnemy.reductionAttack = false;
	  currentEnemy.reductionMagic = false;

      // Disable the active ability.
      player.activeAbility = "None";

      // Prevent the player from leveling up by setting the required EXP to Infinity.
      player.expToLevel = Infinity;

      // Optionally update UI elements if they exist.
      const activeAbilityEl = document.getElementById("hudPlayerActive");
      if (activeAbilityEl) {
        activeAbilityEl.innerText = "None";
      }

      console.log(
        "Heavenly Restricted is in effect: player stats overwritten, active ability disabled, leveling up blocked."
      );
	  updateStats();
	  updateManaDisplay();
      break;
    default:
      break;
  }
  updateStats();
  updateManaDisplay();
}

// Listen for Q:
document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "q") {
    if (!skillUsedThisBattle) {
      logBattle("Skills can only be used once!");
    } else {
      if (player.mana < 10) {
        logBattle("Insufficient Mana!");
      } else {
        useActiveAbility();
        skillUsedThisBattle = false;
      }
    }
  }
});

function useActiveAbility() {
  if (skillUsedThisBattle = false) {
    logBattle("Skills can only be used once!");
    return;
  }
  if (player.mana < 10) {
    logBattle("Insufficient Mana!");
    return;
  }

  // Spend mana
  player.mana -= 10;
  updateManaDisplay();

  switch (player.activeAbility) {
    case "None":
      logBattle("But nothing happened...");
	  player.mana += 10;
	  updateManaDisplay();
      break;

    case "Rage":
	  logBattle("Rage!");
      player.rage = true
	  player.damage *= 2;
	  player.critChance *= 2;
      break;

    case "Maxima":
	  logBattle("Maxima!");
      // +10× magic attack, enemy +20% dodge
      const origDodge = currentEnemy.dodgeChance || 0;
      currentEnemy.dodgeChance = origDodge + 0.20;
      dealPlayerMagicDamage(10);
      currentEnemy.dodgeChance = origDodge;
      player.mana -= 10;
      updateManaDisplay();
      break;
	  
	case "Super Slash":
	  logBattle("Super Slash!");
      // +10× magic attack, enemy +20% dodge
      const origDodges = currentEnemy.dodgeChance || 0;
      currentEnemy.dodgeChance = origDodge + 0.20;
      dealPlayerDamage(10);
      currentEnemy.dodgeChance = origDodge;
      player.mana -= 10;
      updateManaDisplay();
      break;

    case "Heal":
	  logBattle("Heal!");
      const healAmt = Math.floor(player.maxHp * 0.5);
      player.hp = Math.min(player.maxHp, player.hp + healAmt);
      updateStats();
      break;

    case "Hunt":
	  logBattle("Hunt!");
      isCritical = true;
      dealPlayerDamage({ multiplier: 1, forceCrit: true, ignoreDodge: true });
      break;

    case "Strike":
	  logBattle("Strike!");
      // extra physical attack at 2× damage
      dealPlayerDamage({ multiplier: 2 });
      break;

    case "Blast":
	  logBattle("Blast!");
      // extra magic attack at 2× magic
      dealPlayerMagicDamage(2);
      break;
	
	case "Dash":
	  logBattle("Dash!");
      player.agility += 5;
	  updateStats();
      break;
	
	case "Necromancy":
	  alert("That's not how that works, dummy!");
      logBattle("You tried to activate your ability, but it failed!");
	  player.mana += 10;
	  skillUsedThisBattle = true;
	  updateStats();
	  updateManaDisplay();
      break;
	
    case "Blade of Gold":
	  logBattle("Blade of Gold!");
      // convert all money into attack for remainder of battle
      player.attack += player.money;
	  player.money -= player.money;
	  updateStats();
      player.mana -= 10;
      updateManaDisplay();
      break;

    default:
      logBattle("No active skill to use.");
  }

  skillUsedThisBattle = false;
  // advance turn
  setTimeout(newTurn, 500);
}
	  
      /*******************
       * BACKGROUND COLOR UPDATE
       *******************/
      function updateBackgroundColor() {
  const nextBossFloor = Math.ceil(floorCount / 20) * 20;
  const nextBoss = getBossForFloor(nextBossFloor);
  let bgColor = "black";
  let worldNum = 0;
  let worldName = "";
  switch (nextBoss.name) {
    case "Goblin King":
      bgColor = "#113b00";
      worldNum = 1;
      worldName = "Deep Forests";
      break;
    case "Zombie Mutant":
      bgColor = "#2a5e31";
      worldNum = 2;
      worldName = "Abandoned Graveyard";
      break;
    case "Giant Lord":
      bgColor = "#5c2c00";
      worldNum = 3;
      worldName = "Deathly Cliffs";
      break;
    case "Skeleton King":
      bgColor = "#8a8a8a";
      worldNum = 4;
      worldName = "Bone Castle";
      break;
    case "Spider Queen":
      bgColor = "#202421";
      worldNum = 5;
      worldName = "Silkwoven Caverns";
      break;
    case "The Witch":
      bgColor = "#1e0033";
      worldNum = 6;
      worldName = "Arcane Swamps";
      break;
    case "Titan Golem":
      bgColor = "#242424";
      worldNum = 7;
      worldName = "Shi Mountains";
      break;
    case "Wyvern":
      bgColor = "#a32c00";
      worldNum = 8;
      worldName = "Archaic Caverns";
      break;
    case "Giant Sandworm":
      bgColor = "#ffe863";
      worldNum = 9;
      worldName = "Scorching Desert";
      break;
    case "Titanoboa Lord":
      bgColor = "#1c0a00";
      worldNum = 10;
      worldName = "Never-Ending Tunnels";
      break;
    case "Abominable Snowman":
      bgColor = "#cedede";
      worldNum = 11;
      worldName = "Freezing Tundra";
      break;
    case "Omegalodon":
      bgColor = "#2954a3";
      worldNum = 12;
      worldName = "The Black Sea";
      break;
    case "Leviathan":
      bgColor = "#0300a1";
      worldNum = 13;
      worldName = "Vast Ocean";
      break;
    case "Angel":
      bgColor = "#ffffff";
      worldNum = 14;
      worldName = "Sky Dimension";
      break;
    case "Mega Meta Mecha Annihilator - Model: Ultima":
      bgColor = "#7bb8c7";
      worldNum = 15;
      worldName = "Future Megalopolis";
      break;
    case "Grand Knight":
      bgColor = "#260d00";
      worldNum = 16;
      worldName = "Ancient Kingdom";
      break;
    case "Six-Eyed Calamity":
      bgColor = "#b700ff";
      worldNum = 17;
      worldName = "Shinjuku";
      break;
  case "King of Curses":
      bgColor = "#b700ff";
      worldNum = 17;
      worldName = "Shibuya";
      break;
    case "Dragon King":
      bgColor = "#ba0000";
      worldNum = 18;
      worldName = "Molten Treasure Trove";
      break;
	case "The Restricted One, Kyojiro Allista":
      bgColor = "#ba0000";
      worldNum = 18;
      worldName = "Molten Treasure Trove";
      break;
    case "Guardian of Hell, Cerberus":
      bgColor = "#b30003";
      worldNum = 19;
      worldName = "The Underworld";
      break;
    case "Demon King":
      bgColor = "##7d0000";
      worldNum = 20;
      worldName = "Hell";
      break;
    case "The Black King":
      bgColor = "#000000";
      worldNum = 21;
      worldName = "Shadow Realm";
      break;
    case "Omni":
      bgColor = "#fcd928";
      worldNum = 21;
      worldName = "The Beyond";
      break;
    case "King God General Emperor, Supreme Divine Entity of Ultimacy, Archangel & Creator, Gabriel":
      bgColor = "#fcf3dc";
      worldNum = 0;
      worldName = "Realm Of The Gods";
      break;
    default:
      bgColor = "black";
	  worldNum = 0;
      worldName = "Welcome to Roguelike!"; // Fallback: no music change if no match.
  }
  document.body.style.background = bgColor;
  const worldCounterEl = document.getElementById("worldCounter");
  if (worldCounterEl) {
    worldCounterEl.textContent = worldName + " " + worldNum + "-" + Math.floor(roomMoves);
  }
  
  // FIX: Trigger playing of the appropriate world music.
  if (worldName) {
    playWorldMusic(worldName);
  }
}

      /*******************
       * ITEM USAGE IN BATTLE
       *******************/
      function showInventoryMenu(battleMode) {
  inventoryMenu.style.display = "block";
  inventoryMenu.innerHTML = "<h3>Choose an item: </h3>";
  let hasUsableItem = false;
  player.inventory.forEach((item, index) => {
    if (item) {
      if (battleMode && !item.usableInBattle) return;
      if (!battleMode && !item.usableOutOfBattle) return;
      hasUsableItem = true;
      const btn = document.createElement("button");
      btn.textContent = item.name;
      btn.addEventListener("click", () => {
        useItem(item, index, battleMode);
      });
      inventoryMenu.appendChild(btn);
    }
  });
  
  if (!hasUsableItem) {
    inventoryMenu.innerHTML += '<p>No usable items available.</p>';
    setTimeout(() => {
      unlockActions();
    }, 250);
  }
}

      function useItem(item, index, battleMode) {
        // Check if the item can be used in the current context.
        if (battleMode && !item.usableInBattle) {
          alert(item.name + " cannot be used in battle!");
          return;
        }
        if (!battleMode && !item.usableOutOfBattle) {
          alert(item.name + " cannot be used out of battle!");
          return;
        }
        if (item.usageScope === "passive") {
          alert(item.name + " is a passive item and cannot be used.");
          return;
        }
        inventoryMenu.style.display = "none";
        if (battleMode) {
          // Effects when used in battle:
          switch (item.name) {
            case "Healing Potion":
              player.hp = Math.min(player.hp + (Math.round(player.maxHP * 0.25)), player.maxHp);
              logBattle("Player used Healing Potion and healed 25% HP.");
              break;
	    case "Mana Potion":
              player.mana = Math.min(player.mana + (Math.round(player.maxMana * 0.25)), player.maxMana);
              logBattle("Player used Mana Potion and healed 25% mana.");
              break;
            case "Rage Potion":
              player.rage = true;
              logBattle("Player used Rage Potion. Damage doubled this battle!");
              break;
            case "Poison Potion":
              currentEnemy.poison = true;
              logBattle(`Player poisoned ${currentEnemy.name}.`);
              break;
            case "Weaken Potion":
              currentEnemy.weaken = true;
              logBattle(`Player weakened ${currentEnemy.name}.`);
              break;
            case "Iron Potion":
              player.iron = true;
              logBattle("Player used Iron Potion. Enemy damage halved this battle!");
              break;
              // Dice and others can have custom battle logic if needed.
            default:
              alert(item.name + " has no effect in battle.");
              return;
          }
          // Continue with enemy's turn if applicable.
		  unlockActions();
		  setTimeout(enemyTurnWrapper, 250);
        } else {
          // Effects when used out-of-battle:
          switch (item.name) {
            case "Healing Potion":
              player.hp = Math.min(player.hp + (Math.round(player.maxHP * 0.25)), player.maxHp);
              alert("Used Healing Potion. Healed 25% HP.");
              break;
	  case "Mana Potion":
              player.mana = Math.min(player.mana + (Math.round(player.maxMana * 0.25)), player.maxMana);
              alert("Used Mana Potion. Healed 25% mana.");
              break;
              // Items meant for battle should not be used here.
            case "Rage Potion":
            case "Poison Potion":
            case "Weaken Potion":
            case "Iron Potion":
              alert(item.name + " can only be used in battle!");
              return;
            case "Dice":
              alert("Dice have no use here.");
              return;
            default:
              alert(item.name + " has no effect.");
              return;
          }
        }
        player.inventory[index] = null;
        updateInventoryDisplay();
        updateStats();
		setTimeout(enemyTurnWrapper, 250);
		unlockActions();
      }
      /*******************
       * SHOP SYSTEM
       *******************/
      function openShopMenu() {
        const shuffled = shuffle([...shopItemsList]);
        const selectedItems = shuffled.slice(0, 3);
        shopItemsDiv.innerHTML = "";
        selectedItems.forEach((item) => {
          const btn = document.createElement("button");
          btn.textContent = `${item.name} - $${item.cost}`;
          btn.addEventListener("click", () => {
            buyItem(item);
          });
          shopItemsDiv.appendChild(btn);
        });
        shopMenu.style.display = "block";
		battleTint.style.display = "block";
      }

      function hasItem(name) {
        return player.inventory.some(i => i && i.name === name);
      }

      function buyItem(item) {
        if (item.type === "equipment" && hasItem(item.name)) {
          alert("You can only buy one " + item.name + "!");
          return;
        }
        const freeIndex = player.inventory.findIndex(slot => slot === null);
        if (freeIndex === -1) {
          alert("Inventory full! Cannot buy more items.");
          return;
        }
        if (player.money < item.cost) {
          alert("Not enough money!");
          return;
        }
        player.money -= item.cost;
        player.inventory[freeIndex] = {
          ...item
        };
        if (item.name === "Armor") {
          player.defense += 10;
        }
        if (item.name === "Sword") {
          player.attack += 5;
        }
        if (item.name === "Staff") {
          player.magic += 4;
		  player.attack += 1;
        }
        if (item.name === "Scarf") {
          player.dodgeChance += 0.1;
        }
        if (item.name === "Glasses") {
          player.neverMiss = true;
        }
        if (item.name === "Sharpener") {
          player.critMultiplier = 2;
        }
        updateStats();
        alert(`${item.name} purchased!`);
      }
      document.getElementById("closeShopBtn").addEventListener("click", () => {
        shopMenu.style.display = "none";
		battleTint.style.display = "none";
      });
      /*******************
       * EXP & LEVEL UP
       *******************/
      function addExp(amount) {
        let multiplier = 1 + (player.potential - 1) * 0.08;
        player.exp += Math.floor(amount * multiplier);
        updateStats();
        if (player.exp >= player.expToLevel) {
          levelUp();
        }
      }
      let upgradesRemaining = 0;

      function levelUp() {
        player.level += 1;
        player.exp -= player.expToLevel;
        player.expToLevel += Math.round(Math.pow(5, 1 + (player.level * 0.008)));
        updateStats();
        let currentRoomType = map[player.x + "_" + player.y].type;
        upgradesRemaining = (currentRoomType === ROOM_TYPES.ALTAR ? 3 : 1);
        levelUpMenu.style.display = "block";
      }

      function initiateLevelUp(upgradeCount) {
        upgradesRemaining = upgradeCount;
        levelUpMenu.style.display = "block";
      }
      levelUpMenu.addEventListener("click", function(e) {
        if (e.target.tagName.toLowerCase() === "button") {
          const stat = e.target.getAttribute("data-stat");
          if (stat === "hp") {
            player.maxHp += 20 + Math.round((player.level / player.maxHp) + (player.attack / player.maxHp) + (player.defense / player.maxHp));
			updateStats();
		  } else if (stat === "magic") {
			player.maxMana += 5;
			player.magic += 1;
			updateStats();
		  } else {
            player[stat] += 1;
			updateStats();
          }
		  updateManaDisplay();
          updateStats();
          upgradesRemaining--;
          logBattle(`Player leveled up! ${stat.toUpperCase()} increased.`);
          if (upgradesRemaining <= 0) {
            levelUpMenu.style.display = "none";
          }
        }
      });
      /*******************
       * BATTLE LOG UTILS
       *******************/
      function logBattle(message) {
        const p = document.createElement("p");
        p.textContent = message;
        battleLog.appendChild(p);
        battleLog.scrollTop = battleLog.scrollHeight;
      }
      /*******************
       * DEATH HANDLING
       *******************/
      function showDeathMenu() {
        battleMenu.style.display = "none";
        battleLog.style.display = "none";
        battleTint.style.display = "block";
        inventoryMenu.style.display = "none";
        deathMenu.style.display = "block";
      }
      document.getElementById("retryBtn").addEventListener("click", function() {
        initGame();
		location.reload();
      });
	  
	  function showOverlay() {
  // Check if an overlay element already exists; if not, create one.
  let overlay = document.getElementById('overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'overlay';
    // Style the overlay to cover the entire viewport.
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)'; // semi-transparent black
    overlay.style.zIndex = '400';  // Adjust z-index to be beneath modal menus
    document.body.appendChild(overlay);
  }
  // Display the overlay.
  overlay.style.display = 'block';
}

function hideOverlay() {
  // Hide the overlay if it exists.
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
}

      /*******************
       * BATTLE MENU EVENTS
       *******************/
      document.getElementById("attackBtn").addEventListener("click", () => {
		if (actionsLocked) return;
		lockActions();
        playerAttack("attack");
		if (Math.random() < player.agility * 0.001) {
			playerAttack("attack");
		}
      });
	  
	  function updateManaDisplay() {
		document.getElementById("manaText").innerText = player.mana + "/" + player.maxMana;
		const percentage = (player.mana / player.maxMana) * 100;
		document.getElementById("manaBarInner").style.width = percentage + "%";
		
		const magicBtn = document.getElementById("magicBtn");
		if (player.mana < 2) {
			magicBtn.disabled = true;
			logBattle("Mana is insufficient. Cannot use Magic!");
		} else {
			magicBtn.disabled = false;
		}
	  }
      document.getElementById("magicBtn").addEventListener("click", () => {
        if (actionsLocked) return;
		lockActions();
		playerAttack("magic");
		if (player.mana < 2) {
			magicBtn.disabled = true;
			logBattle("Mana is insufficient. Cannot use Magic!");
		} else {
			magicBtn.disabled = false;
		}
		player.mana -= 2;
		updateManaDisplay();
      });
      document.getElementById("itemsBtn").addEventListener("click", () => {
		showInventoryMenu();
      });
      document.getElementById("runBtn").addEventListener("click", () => {
        if (actionsLocked) return;
		lockActions();
		attemptRun();
      });
      document.getElementById("itemsBtn").addEventListener("click", () => {
		showInventoryMenu(!!currentEnemy);
      });
	  
	  /*******************
       * CASINO FUNCTIONS
       *******************/
	  
      let casinoBet = 0;
      let casinoPlayerTotal = 0;
      let casinoEnemyTotal = 0;

      function openCasino(onComplete) {
  casinoCompleteCallback = onComplete || null;
  // reset hit buttons
  hitButtons.forEach(btn => {
    btn.style.display = "";   // back to whatever your CSS says
  });
  stopWorldMusic()
  casinoMusic.play();
  casinoPlayerTotal = 0;
  casinoEnemyTotal = 0;
  casinoPlayerTotalEl.textContent = casinoPlayerTotal;
  casinoEnemyTotalEl.textContent = casinoEnemyTotal;
  betInput.value = 1;
  casinoGameArea.style.display = "none";
  casinoMenu.style.display = "block";
  battleTint.style.display = "block";
}
	  
	  function finalizeCasinoRound() {
  // Calculate the absolute difference from 21 for both player and enemy
  const playerDiff = Math.abs(21 - casinoPlayerTotal);
  const enemyDiff = Math.abs(21 - casinoEnemyTotal);
  let outcome;
  // Decide outcome based on totals.
  // If both bust (over 21), choose the one closer to 21.
  if (casinoPlayerTotal >= 21 && casinoEnemyTotal >= 21) {
    outcome = playerDiff < enemyDiff ? "win" : (playerDiff > enemyDiff ? "lose" : "push");
  } 
  // If only one of them is over 21, then that side loses.
  else if (casinoPlayerTotal >= 21) {
    outcome = "lose";
  } 
  else if (casinoEnemyTotal >= 21) {
    outcome = "win";
  }
  // If neither busted, compare closeness.
  else {
    outcome = playerDiff < enemyDiff ? "win" : (playerDiff > enemyDiff ? "lose" : "push");
  }
  
  if (outcome === "win") {
    player.money += casinoBet;
    alert("You win! Gained $" + casinoBet);
  } else if (outcome === "lose") {
    player.money -= casinoBet;
    alert("You lose! Lost $" + casinoBet);
  } else {
    alert("Push! No money won or lost.");
  }
  updateStats();
  casinoMenu.style.display = "none";
  battleTint.style.display = "none";
  hideOverlay();
  if (casinoCompleteCallback) {
    const cb = casinoCompleteCallback;
    casinoCompleteCallback = null;
    cb();
  }
  casinoMusic.pause();
  casinoMusic.currentTime = 0;
  resumeWorldMusicAfterBattle();
}

	  
      placeBetBtn.addEventListener("click", () => {
        const bet = parseInt(betInput.value);
        if (isNaN(bet) || bet < 1) {
          alert("Please enter a valid bet amount.");
          return;
        }
        if (bet > player.money) {
          alert("You cannot bet more than you have!");
          return;
        }
        casinoBet = bet * Math.round(1 + player.fortune * 0.08);
        casinoGameArea.style.display = "block";
      });
      hitButtons.forEach((btn) => {
  btn.addEventListener("click", function onHit() {
    // Hide this hit button once pressed.
    btn.style.display = "none";
    
    // Player draws a card.
    const card = Math.floor(Math.random() * 13) + 1;
    casinoPlayerTotal += card;
    casinoPlayerTotalEl.textContent = casinoPlayerTotal;
    
    // If player's total exceeds 21 immediately, handle bust.
    if (casinoPlayerTotal >= 21) {
      alert("It's a bust! You lost.");
      concludeCasinoGame(true);
      return;
    }
	
	if (casinoEnemyTotal >= 21) {
        alert("Dealer had a bust! They lost.");
        concludeCasinoGame();
        return;
      }
    
    // Dealer draws a card if below 17.
    if (casinoEnemyTotal < 17) {
      const enemyCard = Math.floor(Math.random() * 13) + 1;
      casinoEnemyTotal += enemyCard;
      casinoEnemyTotalEl.textContent = casinoEnemyTotal;
      
      // If the dealer’s total goes over 21 immediately, win for the player.
      if (casinoEnemyTotal >= 21) {
        alert("Dealer had a bust! They lost.");
        concludeCasinoGame();
        return;
      }
    }
    
    // Check if no hit buttons remain visible.
    const remainingButtons = Array.from(hitButtons).filter(b => b.style.display !== "none");
    if (remainingButtons.length === 0) {
      // All hit buttons have vanished; finalize round based on closeness to 21.
      finalizeCasinoRound();
    }
  });
});

      standBtn.addEventListener("click", () => {
        while (casinoEnemyTotal < 17) {
          const enemyCard = Math.floor(Math.random() * 13) + 1;
          casinoEnemyTotal += enemyCard;
        }
        casinoEnemyTotalEl.textContent = casinoEnemyTotal;
        concludeCasinoGame();
      });
      hitButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          playerHit();
        });
      });
      // Modify the stand button event.
      standBtn.addEventListener("click", () => {
        while (casinoEnemyTotal < 17) {
          const enemyCard = Math.floor(Math.random() * 13) + 1;
          casinoEnemyTotal += enemyCard;
        }
        casinoEnemyTotalEl.textContent = casinoEnemyTotal;
        concludeCasinoGame();
      });

      function concludeCasinoGame(forcedLoss = false) {
        if (casinoPlayerTotal === 0) {
          alert("Your total is 0 – Penalty!");
          playerHit();
          return;
        }
        let playerBust = casinoPlayerTotal >= 21;
        let enemyBust = casinoEnemyTotal >= 21;
        let outcome;
        if (forcedLoss || playerBust) {
          outcome = "lose";
        } else if (enemyBust) {
          outcome = "win";
        } else {
          let bonus = hasItem("Dice") ? 2 : 0;
          let effectivePlayerTotal = Math.max(casinoPlayerTotal - bonus, 0);
          let playerDiff = 21 - effectivePlayerTotal;
          let enemyDiff = 21 - casinoEnemyTotal;
          if (playerDiff < 0) playerDiff = Infinity;
          if (enemyDiff < 0) enemyDiff = Infinity;
          if (playerDiff < enemyDiff) {
            outcome = "win";
          } else if (enemyDiff < playerDiff) {
            outcome = "lose";
          } else {
            outcome = "push";
          }
        }
        if (outcome === "win") {
          player.money += casinoBet;
          alert("You win! Gained $" + casinoBet);
        } else if (outcome === "lose") {
          player.money -= casinoBet;
          alert("You lose! Lost $" + casinoBet);
          if (player.money <= 0) {
            alert("You have run out of money and must leave the casino.");
          }
        } else {
          alert("Push! No money won or lost.");
        }
        updateStats();
        casinoMenu.style.display = "none";
		battleTint.style.display = "none";
		if (casinoCompleteCallback) {
    const cb = casinoCompleteCallback;
	casinoMusic.pause();
	casinoMusic.currentTime = 0;
    casinoCompleteCallback = null;
    cb();
  }
casinoMusic.pause();
casinoMusic.currentTime = 0;
      }
	  
	  function handleTrapRoom() {
  // 67% chance it doesn’t go off
  if (Math.random() < 0.67) {
    logBattle("You sense something's off… but nothing happens.");
    return;
  }

  // 20–30% of max HP
  const minPct = 0.20, maxPct = 0.30;
  const pct = Math.random() * (maxPct - minPct) + minPct;
  let damage = Math.floor(player.maxHp * pct);

  // if it was a disguised trap, only 1/3 damage
  if (map[ player.x + "_" + player.y ].disguisedTrap) {
    damage = Math.floor(damage / 3);
    logBattle("You fell into a trap!");
  } else {
    logBattle("You stepped on a trap!");
  }

  player.hp = Math.max(player.hp - damage, 0);
  logBattle(`You take ${damage} damage.`);
  updateStats();

  if (player.hp <= 0) {
    // immediate death handling
    battleTint.style.display = "none";
    battleMenu.style.display = "none";
    deathMenu.style.display = "block";
  }
}

function getEffectiveMaxHp() {
  const extra = getGuildBonuses();
  return player.maxHp * (1 + extra.hp);
}

function updatePlayerStatsUI() {
  // Update HP text: The hpText element might now show effective values.
  const effectiveMaxHp = getEffectiveMaxHp();
  document.getElementById("hpText").innerText = `${player.hp}/${effectiveMaxHp.toFixed(0)}`;
}

/*******************
       * STATS UI
       *******************/
      function updateStats() {
        document.getElementById("hpText").textContent = player.hp + "/" + player.maxHp;
        const hpPercent = (player.hp / player.maxHp) * 100;
        document.getElementById("hpBarInner").style.width = hpPercent + "%";
        document.getElementById("expText").textContent = player.exp + "/" + player.expToLevel;
        const expPercent = (player.exp / player.expToLevel) * 100;
        document.getElementById("expBarInner").style.width = expPercent + "%";
        document.getElementById("attackStat").textContent = player.attack;
        document.getElementById("defenseStat").textContent = player.defense;
		document.getElementById("magicStat").textContent = player.magic;
        document.getElementById("agilityStat").textContent = player.agility;
        document.getElementById("perceptionStat").textContent = player.perception;
        document.getElementById("potentialStat").textContent = player.potential;
        document.getElementById("moneyStat").textContent = player.money;
        document.getElementById("playerLevel").textContent = "Player Level: " + player.level;
        updateInventoryDisplay();
      }

      function updateInventoryDisplay() {
        const slots = document.querySelectorAll("#inventorySlots .inventorySlot");
        for (let i = 0; i < slots.length; i++) {
          const item = player.inventory[i];
          slots[i].textContent = item ? item.name : "";
        }
      }

      /*******************
       * START THE GAME
       *******************/
initGame();