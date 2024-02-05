import * as THREE from 'three'

import Experience from './Experience.js'

export default class PunkFunc
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
        console.log('this.resources.items.punk :>> ', this.resources.items.punk);
        this.model.group = this.resources.items.punk.scene.children[0]
        this.scene.add(this.model.group)
        
        this.model.group.traverse((_child) =>
        {
            if(_child instanceof THREE.Mesh)
            {
                _child.material = this.world.baked.model.material
            }
        })
    }

    update()
    {
        this.model.group.rotation.y = Math.sin(this.time.elapsed * 0.0005) * 0.5
        this.model.group.position.z = 3.717
        this.model.group.position.x = 2
        this.model.group.position.y = 2
    }
}
