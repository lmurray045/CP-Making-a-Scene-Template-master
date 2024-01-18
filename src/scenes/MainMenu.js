class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainmenuScene')
        console.log("MainMenu: constructor")
    }

    init() {
        console.log('MainMenu: init')
        this.HP = 100
        this.EXP = 0
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)
    }

    create() {
        console.log('MainMenu: create')

        let playerStats = { 
            HP: this.HP,
            EXP: this.EXP
        }

        this.scene.start('playScene', playerStats) //this is the "key" we talked about earlier!
                                                    //by passing "playerStats" in this scene call, we pass it through the
                                                    //"init" method in the scene called by "playScene"
    }
}