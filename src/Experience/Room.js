import * as THREE from 'three'
import Experience from './Experience.js'

export default class Room
{
    constructor ()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene

        this.setModel()
        this.setDirectionalLights()
        this.setPointLights()
    }

    setModel()
    {
        this.model = {}
        this.model.mesh = this.resources.items.roomModel.scene.children[0]
        this.scene.add(this.model.mesh)
    }

    setDirectionalLights()
    {
        this.directional = {}
        this.directional.lights = new THREE.DirectionalLight(0xffffff, 0.1)
        this.directional.lights.position.set(2, 2, 2)
        this.scene.add(this.directional.lights)
    }
    
    setPointLights() {
        // Setup
        this.pointLight = {}
        this.pointLight.color = '#ffffff'

        // Instance
        this.pointLight.instance = new THREE.PointLight(0xffffff, 15.22, 0, 2.39)
        this.pointLight.instance.position.y = 8.70
        this.pointLight.instance.position.z = -11.30
        this.pointLight.instance.shadow.mapSize.set(128, 128)
        this.pointLight.instance.castShadow = true
        this.scene.add(this.pointLight.instance)
    }

    update()
    {
    }
}