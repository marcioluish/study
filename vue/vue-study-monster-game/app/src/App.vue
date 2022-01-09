<template>
  <body>
    <header>
      <h1>Monster Slayer</h1>
    </header>
    <div id="game">
      <section id="monster" class="container">
        <h2>Monster Health</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="monsterHealthStyle"></div>
        </div>
      </section>
      <section id="player" class="container">
        <h2>Your Health</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="playerHealthStyle"></div>
        </div>
      </section>
      <section class="container" v-if="winner">
        <h2>Game Over!</h2>
        <h3 v-if="winner === 'player'">You Win!</h3>
        <h3 v-else-if="winner === 'monster'">You Lost!</h3>
        <h3 v-else>Draw!</h3>
        <button @click="startGame">Start a new game</button>
      </section>
      <section id="controls" v-else>
        <button @click="attackMonster">ATTACK</button>
        <button :disabled="!allowSpecialAttack" @click="specialAttack">
          SPECIAL ATTACK
        </button>
        <button @click="healPlayer">HEAL</button>
        <button @click="surrender">SURRENDER</button>
      </section>
      <section id="log" class="container">
        <h2>Battle Log</h2>
        <ul>
          <li v-for="log in logsList" :key="log">
            <span
              :class="{
                'log--player': log.actionBy === 'player',
                'log--monster': log.actionBy === 'monster',
              }"
              >{{ log.actionBy === "player" ? "Player" : "Monster" }}
            </span>
            <span v-if="log.actionType === 'heal'">
              heals himself for
              <span class="log--heal">
                {{ log.actionValue }}
              </span>
            </span>
            <span v-else>
              attacks and deals
              <span class="log--damage">
                {{ log.actionValue }}
              </span>
            </span>
          </li>
        </ul>
      </section>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      specialAttackCountdown: 0,
      winner: null,
      logsList: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0 && this.monsterHealth > 0) {
        this.winner = "monster";
      } else if (value > 0 && this.monsterHealth <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterHealthStyle() {
      if (this.monsterHealth < 0) return { width: "0%" };
      return { width: this.monsterHealth + "%" };
    },
    playerHealthStyle() {
      if (this.playerHealth < 0) return { width: "0%" };
      return { width: this.playerHealth + "%" };
    },
    allowSpecialAttack() {
      return this.specialAttackCountdown === 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.specialAttackCountdown = 0;
      this.winner = null;
    },
    attackMonster() {
      if (this.specialAttackCountdown > 0) this.specialAttackCountdown--;
      const attackMonster = getRandomValue(5, 12);
      this.monsterHealth -= attackMonster;
      this.addLog("player", "attack", attackMonster);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackPlayer = getRandomValue(8, 15);
      this.playerHealth -= attackPlayer;
      this.addLog("monster", "attack", attackPlayer);
    },
    specialAttack() {
      this.specialAttackCountdown = 2;
      const specialAttackDamage = getRandomValue(10, 25);
      this.monsterHealth -= specialAttackDamage;
      this.addLog("player", "attack", specialAttackDamage);
      this.attackPlayer();
    },
    healPlayer() {
      if (this.specialAttackCountdown > 0) this.specialAttackCountdown--;
      const healValue = getRandomValue(8, 20);
      if (healValue + this.playerHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLog("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLog(who, what, value) {
      this.logsList.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
};

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
</script>

<style></style>
