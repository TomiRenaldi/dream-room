import * as THREE from 'three'
import Experience from './Experience.js'

export default class Room
{
    constructor ()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.resources = this.experience.resources

        this.setModel()
    }

    setModel()
    {
        this.model = {}
        this.model.model = this.resources.items.roomModel.scene.children[0]
        this.scene.add(this.model.model)

        this.lights = {}
        this.lights.dir = new THREE.DirectionalLight('#ffffff')
        this.lights.dir.position.set(5, 5, 5)
        this.scene.add(this.lights.dir)
    }

    update()
    {
    }
}