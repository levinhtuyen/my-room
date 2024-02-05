import * as THREE from 'three'
// var animationGroup = new THREE.AnimationObjectGroup();
import Experience from './Experience.js'

export default class TopPc
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world
        this.time = this.experience.time

        this.setModel()
    }

    setModel()
    {
        this.model = {}

        this.model.group = this.resources.items.pc.scene.children[0]
        this.scene.add(this.model.group)
        this.model.group.scale.set(0.27,0.27,0.27)
        this.model.group.position.z = -4
        this.model.group.position.x = 1.4
        this.model.group.position.y = 1
        this.model.group.traverse((_child) =>
        {
            if(_child instanceof THREE.Mesh)
            {
                // _child.material = this.world.baked.model.material
            }
        })
        
    }
    update()
    {
        this.model.group.scale.y = Math.sin(this.time.elapsed * 0.0005) * 0.5
        let mix = new THREE.AnimationMixer(this.model.group.scale.set(0.26,0.28,0.26));
        mix.loop = true
        mix.autoplay = true
    }
}
