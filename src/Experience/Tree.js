import * as THREE from 'three'

import Experience from './Experience.js'

export default class TopTree
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

        this.model.group = this.resources.items.tree.scene.children[0]
        this.scene.add(this.model.group)
        
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
        this.model.group.rotation.z = Math.sin(this.time.elapsed * 0.001) * 1.1
        this.model.group.position.z = 5.1
        this.model.group.position.x = 2
        this.model.group.position.y = 3.57
    }
}
