import * as THREE from 'three'
import Experience from './Experience.js'
import Room from './Room.js'
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
                this.setRooms()
                this.setBouncingLogo()
                this.setScreen()
            }
        })
    }

    setRooms()
    {
        this.room = new Room()
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
        if (this.room)
            this.room.update()
        
        if (this.bouncingLogo)
            this.bouncingLogo.update()
        
        if (this.screen)
            this.screen.update()
    }

    destroy()
    {
    }
}