import * as THREE from 'three'
import Experience from './Experience.js'

export default class BouncingLogo
{
    constructor ()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.time = this.experience.time

        this.setModel()
        this.setAnimation()
    }

    setModel()
    {
        this.model = {}

        this.model.texture = this.resources.items.tomUnpredict
        this.model.texture.encoding = THREE.sRGBEncoding

        this.model.geometry = new THREE.PlaneGeometry(4, 1, 1, 1)

        this.model.material = new THREE.MeshBasicMaterial({
            transparent: true,
            map: this.model.texture
        })

        this.model.mesh = new THREE.Mesh(this.model.geometry, this.model.material)
        this.scene.add(this.model.mesh)
    }

    setAnimation()
    {
        this.animation = {}

        this.animation.z = 0
        this.animation.y = 0

        this.animation.limits = {}
        this.animation.limits.z = { min: -2, max: 2 }
        this.animation.limits.y = { min: -1, max: 1 }

        this.animation.speed = {}
        this.animation.speed.z = 0.001234
        this.animation.speed.y = 0.0004
    }

    update()
    {
        this.animation.z += this.animation.speed.z * this.time.delta
        this.animation.y += this.animation.speed.y * this.time.delta

        if (this.animation.z > this.animation.limits.z.max || this.animation.z < this.animation.limits.z.min)
        {
            this.animation.speed.z *= -1
        }

        if (this.animation.y > this.animation.limits.y.max || this.animation.y < this.animation.limits.y.min)
        {
            this.animation.speed.y *= -1
        }

        this.model.mesh.position.z = this.animation.z
        this.model.mesh.position.y = this.animation.y
    }
}