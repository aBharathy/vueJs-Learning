new Vue({
	el:'#app',
	data:{
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false
	},
	methods:{
		startGame: function(){
			this.gameIsRunning = true;
			this.monsterHealth = 100;
			this.playerHealth = 100;
		},
		attack: function(){
			var damage = this.calculateDamage(3,10);
			this.monsterHealth -= damage;

			if(this.checkWin()){
				return;
			}
			
			this.monsterAttack();
			this.checkWin();
		},
		specialAttack: function(){
			var damage = this.calculateDamage(10,20);
			this.monsterHealth -= damage;

			if(this.checkWin()){
				return;
			}

			this.monsterAttack();
			this.checkWin();
		},
		heal: function(){
			if(this.playerHealth <= 90){
				this.playerHealth += 10;
			}else{
				this.playerHealth = 100;
			}
			this.monsterAttack();
		},
		giveup: function(){

		},
		monsterAttack: function(){
			damage = this.calculateDamage(5,12);
			this.playerHealth -= damage;
		},
		calculateDamage: function(min,max){
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function(){
			if(this.monsterHealth <= 0){
				if(confirm("You Won! New game?")){
					this.startGame();
				}else{
					this.gameIsRunning = false;
				}
				return true;
			}else if(this.playerHealth <= 0){
				if(confirm("You Lost! New game?")){
					this.startGame();
				}else{
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});