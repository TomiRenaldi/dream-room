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
        this.world = this.experience.world
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
        this.model.group.position.y = 9.233
        this.model.group.position.z = -9.970
        this.scene.add(this.model.group)

        this.model.texture = this.resources.items.reactlogo
        this.model.texture.encoding = THREE.sRGBEncoding

        this.model.geometry = new THREE.PlaneGeometry(4, 1, 1, 1)

        this.model.material = new THREE.MeshBasicMaterial({
            transparent: true,
            premultipliedAlpha: true,
            map: this.model.texture
        })

        this.model.mesh = new THREE.Mesh(this.model.geometry, this.model.material)
        this.model.mesh.scale.x = 0.316
        this.model.mesh.scale.y = 0.359
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
        this.animation.limits.x = { min: -2.152, max: 1.859 }
        this.animation.limits.y = { min: -1.055, max: 1.011 }

        this.animation.speed = {}
        this.animation.speed.x = 0.00061
        this.animation.speed.y = 0.00037

        if (this.debug)
        {
            this.debugFolder.addInput(
                this.animation.limits.x,
                'min',
                {
                    label: 'limitXMin', min: - 3, max: 0, step: 0.001
                }
            )

            this.debugFolder.addInput(
                this.animation.limits.x,
                'max',
                {
                    label: 'limitXMax', min: 0, max: 3, step: 0.001
                }
            )

            this.debugFolder.addInput(
                this.animation.limits.y,
                'min',
                {
                    label: 'limitYMin', min: - 3, max: 0, step: 0.001
                }
            )

            this.debugFolder.addInput(
                this.animation.limits.y,
                'max',
                {
                    label: 'limitYMax', min: 0, max: 3, step: 0.001
                }
            )

            this.debugFolder.addInput(
                this.animation.speed,
                'x',
                {
                    label: 'speedX', min: 0, max: 0.001, step: 0.00001
                }
            )

            this.debugFolder.addInput(
                this.animation.speed,
                'y',
                {
                    label: 'speedY', min: 0, max: 0.001, step: 0.00001
                }
            )
        }
    }

    update()
    {
        this.animation.x += this.animation.speed.x * this.time.delta
        this.animation.y += this.animation.speed.y * this.time.delta

        if (this.animation.x > this.animation.limits.x.max)
        {
            this.animation.x = this.animation.limits.x.max
            this.animation.speed.x *= -1
        }

        if (this.animation.x < this.animation.limits.x.min)
        {
            this.animation.x = this.animation.limits.x.min
            this.animation.speed.x *= -1
        }

        if (this.animation.y > this.animation.limits.y.max)
        {
            this.animation.y = this.animation.limits.y.max
            this.animation.speed.y *= -1
        }

        if (this.animation.y < this.animation.limits.y.min)
        {
            this.animation.y = this.animation.limits.y.min
            this.animation.speed.y *= -1
        }

        this.model.mesh.position.x = this.animation.x
        this.model.mesh.position.y = this.animation.y
    }
}