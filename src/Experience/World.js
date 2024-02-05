import * as THREE from 'three'
import Experience from './Experience.js'
import Baked from './Baked.js'
import GoogleLeds from './GoogleLeds.js'
import LoupedeckButtons from './LoupedeckButtons.js'
import CoffeeSteam from './CoffeeSteam.js'
import TopChair from './TopChair.js'
// import SniperFunc from './Sniper.js'
import PunkFunc from './Sniper2.js'
import ElgatoLight from './ElgatoLight.js'
import BouncingLogo from './BouncingLogo.js'
import Screen from './Screen.js'
import TopCard from './Card.js'
import TopTree from './Tree.js'
import TopPc from './pc.js'
import TopGirl from './girl.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')            {
                this.setBaked()
                this.setGoogleLeds()
                this.setLoupedeckButtons()
                this.setCoffeeSteam()
                this.setTopChair()
                this.setPc()
                this.setTree()
                this.setGirl()
                this.setPunk()
                this.setCard()
                this.setElgatoLight()
                this.setBouncingLogo()
                this.setScreens()
            }
        })
    }

    setBaked()
    {
        this.baked = new Baked()
    }

    setGoogleLeds()
    {
        this.googleLeds = new GoogleLeds()
    }

    setLoupedeckButtons()
    {
        this.loupedeckButtons = new LoupedeckButtons()
    }

    setCoffeeSteam()
    {
        this.coffeeSteam = new CoffeeSteam()
    }

    setTopChair()
    {
        this.topChair = new TopChair()
    }
    setTree() {
        this.topTree = new TopTree
    }
    setPc () 
    {
        this.topPc = new TopPc()
    }
    setCard () {
        this.topCard = new TopCard()
    }
    setPunk () 
    {
        this.punkFunc = new PunkFunc()
        console.log('this.punkFunc :>> ', this.punkFunc);
    }
    setGirl () 
    {
        this.topGirl = new TopGirl()
    }
    setElgatoLight()
    {
        this.elgatoLight = new ElgatoLight()
    }

    setBouncingLogo()
    {
        this.bouncingLogo = new BouncingLogo()
    }

    setScreens()
    {
        this.pcScreen = new Screen(
            this.resources.items.pcScreenModel.scene.children[0],
            '/assets/videoPortfolio.mp4'
        )
        this.macScreen = new Screen(
            this.resources.items.macScreenModel.scene.children[0],
            '/assets/videoStream.mp4'
        )
    }

    resize()
    {
    }

    update()
    {
        if(this.googleLeds)
            this.googleLeds.update()

        if(this.loupedeckButtons)
            this.loupedeckButtons.update()

        if(this.coffeeSteam)
            this.coffeeSteam.update()

        if(this.topChair)
            this.topChair.update()
        if(this.topCard) {
            this.topCard.update()
        }
        if(this.topTree) {
            this.topTree.update()
        }
        if(this.topGirl) {
            this.topGirl.update()
        }
        if(this.topPc)
            this.topPc.update()
        if(this.punkFunc)
            this.punkFunc.update()
        if(this.bouncingLogo)
            this.bouncingLogo.update()
    }

    destroy()
    {
    }
}
