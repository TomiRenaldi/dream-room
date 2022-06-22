import * as THREE from 'three'
import Experience from './Experience.js'

export default class Navigation
{
    constructor()
    {
        this.experience = new Experience()
        this.camera = this.experience.camera

        this.setView()     
    }

    setView()
    {
        this.view = {}
        this.view.spherical = {}
        this.view.spherical.value = new THREE.Spherical()
        this.view.spherical.smoothed = this.view.spherical.value.clone()
    }
}