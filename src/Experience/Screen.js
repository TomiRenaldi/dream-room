import * as THREE from 'three'
import Experience from './Experience.js'

export default class Screen
{
    constructor (_mesh, _sourcePath)
    {
        this.experience = new Experience()
        this.resource = this.experience.resources
        this.scene = this.experience.scene
        this.world = this.experience.world

        this.mesh = _mesh
        this.sourcePath = _sourcePath

        this.setModel()
    }

    setModel()
    {
        this.model = {}

        // Element
        this.model.element = document.createElement('video')
        this.model.element.muted = false
        this.model.element.loop = true
        this.model.element.controls = true
        this.model.element.playsInline = true 
        this.model.element.autoplay = true
        this.model.element.src = this.sourcePath
        this.model.element.play()

        // Texture
        this.model.texture = new THREE.VideoTexture(this.model.element)
        this.model.texture.encoding = THREE.sRGBEncoding

        // Material
        this.model.material = new THREE.MeshBasicMaterial({
            map: this.model.texture
        })

        this.model.mesh = this.mesh
        this.model.mesh.material = this.model.material
        this.model.mesh.rotation.y = 1.973
        this.model.mesh.position.set(-3.370, 9.120, -9.100)
        this.model.mesh.scale.set(1.850, 1.200, 2.320)
        this.scene.add(this.model.mesh)
    }

    update()
    {
    }
}