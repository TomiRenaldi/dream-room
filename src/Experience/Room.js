import * as THREE from 'three'
import Experience from './Experience.js'

export default class Room
{
    constructor ()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.time = this.experience.time

        this.setModel()
        this.setLights()
    }

    setModel()
    {
        this.model = {}
        this.model.mesh = this.resources.items.roomModel.scene.children[0]
        this.scene.add(this.model.mesh)
    }

    setLights()
    {
        this.lights = {}

        this.lights.directional = new THREE.DirectionalLight('#969696', 0.195)
        this.lights.directional.position.set(0.5, 0.5, 0.5)
        this.scene.add(this.lights.directional)

        this.lights.point = new THREE.PointLight('#1eff00', 8, 8)
        this.lights.point.position.set(0, 9, -11.200)
        this.lights.point.castShadow = true
        this.lights.point.shadow.mapSize.width = 64
        this.lights.point.shadow.mapSize.height = 64
        this.lights.point.shadow.camera.near = 0.5 
        this.lights.point.shadow.camera.far = 500 
        this.scene.add(this.lights.point)

        this.lights.point2 = new THREE.PointLight('#ff0000', 8, 8)
        this.lights.point2.position.set(-3, 9, -11.200)
        this.lights.point2.castShadow = true
        this.lights.point2.shadow.mapSize.width = 64
        this.lights.point2.shadow.mapSize.height = 64
        this.lights.point2.shadow.camera.near = 0.5 
        this.lights.point2.shadow.camera.far = 500 
        this.scene.add(this.lights.point2)

        this.lights.point3 = new THREE.PointLight('#0000ff', 8, 8)
        this.lights.point3.position.set(3, 9, -11.200)
        this.lights.point3.castShadow = true
        this.lights.point3.shadow.mapSize.width = 64
        this.lights.point3.shadow.mapSize.height = 64
        this.lights.point3.shadow.camera.near = 0.5 
        this.lights.point3.shadow.camera.far = 500 
        this.scene.add(this.lights.point3)
    }

    update()
    {
    }
}