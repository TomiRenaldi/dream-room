import * as THREE from 'three'
import Experience from './Experience.js'
import BouncingLogo from './BouncingLogo.js'
import Screen from './Screen.js'

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
            if(_group.name === 'base')
            {
                this.setRoom()
                this.setBouncingLogo()
                this.setScreen()
            }
        })
    }

    setRoom()
    {
        this.room = {}
        this.room.model = this.resources.items.roomModel.scene

        this.scene.add(this.room.model)  

        this.lights = {}
        this.lights.dir = new THREE.DirectionalLight('#ffffff')
        this.lights.dir.position.set(5, 5, 5)
        this.scene.add(this.lights.dir)
    }

    setBouncingLogo()
    {
        this.bouncingLogo = new BouncingLogo()
    }

    setScreen()
    {
        this.screen = new Screen(
            this.resources.items.pcScreenModel.scene.children[0],
            '/assets/mobilelegends-360fps-2000bit.mp4'
        )
    }

    resize()
    {
    }

    update()
    {
        if (this.bouncingLogo)
            this.bouncingLogo.update()
        
        if (this.pcScreen)
            this.pcScreen.update()
    }

    destroy()
    {
    }
}