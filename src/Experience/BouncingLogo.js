import * as THREE from 'three'
import Experience from './Experience.js'

export default class BouncingLogo
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.time = this.experience.time

        // Debug
        if (this.debug)
        {
            this.debugFolder = this.debug.addFolder({
                title: 'bouncingLogo',
                expanded: false
            })
        }

        this.setModel()
        this.setAnimation()
    }

    setModel()
    {
        this.model = {}

        this.model.group = new THREE.Group()
        this.model.group.position.x = 2.283
        this.model.group.position.y = 9.238
        this.model.group.position.z = -9.970
        this.scene.add(this.model.group)

        this.model.texture = this.resources.items.reactlogo
        this.model.texture.encoding = THREE.sRGBEncoding

        this.model.geometry = new THREE.PlaneGeometry(4, 1, 1, 1)

        this.model.material = new THREE.MeshBasicMaterial({
            transparent: true,
            map: this.model.texture
        })

        this.model.mesh = new THREE.Mesh(this.model.geometry, this.model.material)
        this.model.mesh.scale.x = 0.294
        this.model.mesh.scale.y = 0.435
        this.model.group.add(this.model.mesh)

        // Debug
        if (this.debug)
        {
            this.debugFolder.addInput(
                this.model.group.position,
                'x',
                {
                   label: 'positionX', min: - 5, max: 5, step: 0.001
                }
            )   
            
            this.debugFolder.addInput(
                this.model.group.position,
                'y',
                {
                   label: 'positionY', min: - 5, max: 12, step: 0.001
                }
            )   
            
            this.debugFolder.addInput(
                this.model.group.position,
                'z',
                {
                   label: 'positionZ', min: - 12, max: 5, step: 0.001
                }
            )    

            this.debugFolder.addInput(
                this.model.mesh.scale,
                'x',
                {
                   label: 'scaleX', min: 0.001, max: 1, step: 0.001
                }
            )    

            this.debugFolder.addInput(
                this.model.mesh.scale,
                'y',
                {
                    label: 'scaleY', min: 0.001, max: 1, step: 0.001
                }
            )    
        }
    }

    setAnimation()
    {
        this.animation = {}

        this.animation.x = 0
        this.animation.y = 0

        this.animation.limits = {}
        this.animation.limits.x = { min: -2, max: 2 }
        this.animation.limits.y = { min: -1, max: 1 }

        this.animation.speed = {}
        this.animation.speed.x = 0.001234
        this.animation.speed.y = 0.0004
    }

    update()
    {
        this.animation.x += this.animation.speed.x * this.time.delta
        this.animation.y += this.animation.speed.y * this.time.delta

        if (this.animation.x > this.animation.limits.x.max || this.animation.x < this.animation.limits.x.min)
        {
            this.animation.speed.x *= -1
        }

        if (this.animation.y > this.animation.limits.y.max || this.animation.y < this.animation.limits.y.min)
        {
            this.animation.speed.y *= -1
        }

        this.model.mesh.position.x = this.animation.x
        this.model.mesh.position.y = this.animation.y
    }
}