import * as THREE from 'three'
import Experience from './Experience.js'

export default class PCSreen
{
    constructor ()
    {
        this.experience = new Experience()
        this.resource = this.experience.resources
        this.scene = this.experience.scene
        this.world = this.experience.world

        this.setModel()
    }

    setModel()
    {
        this.model = {}

        this.model.element = document.createElement('video')
        this.model.element.muted = false
        this.model.element.volume = 0.03
        this.model.element.loop = true
        this.model.element.controls = true
        this.model.element.playsInline = true 
        this.model.element.autoplay = true
        this.model.element.src = '/assets/mobilelegends-360fps-2000bit.mp4'

        // Texture
        this.model.texture = new THREE.VideoTexture(this.model.element)

        // Material
        this.model.material = new THREE.MeshBasicMaterial({
            map: this.model.texture
        })

        this.model.mesh = this.resource.items.pcScreenModel.scene.children[0]
        this.model.mesh.material = this.model.material
        this.model.mesh.rotation.y = 1.973
        this.model.mesh.position.set(-3.370, 9.120, -9.100)
        this.model.mesh.scale.set(1.850, 1.200, 2.320)
        this.scene.add(this.model.mesh)
    }

    update()
    {
        this.model.element.needsUpdate = true
    }
}