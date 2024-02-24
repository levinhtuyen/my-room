import * as THREE from 'three'
import vertexShader from './shaders/coffeeSteam/vertex.glsl'
import fragmentShader from './shaders/coffeeSteam/fragment.glsl'
import Experience from './Experience.js'

export default class GundamZero1
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

        this.model.group = this.resources.items.gundamZero1.scene.children[0]
        this.scene.add(this.model.group)
        this.model.group.traverse((_child) =>
        {
            if(_child instanceof THREE.Mesh)
            {
              _child.material = new THREE.ShaderMaterial({
                  transparent: false,
                  depthWrite: true,
                  vertexShader,
                  fragmentShader,
                  
                  uniforms:
                  {
                      uTime: { value: 0 },
                      uTimeFrequency: { value: 0.001 },
                      uUvFrequency: { value: new THREE.Vector2( 4, 5) },
                      uColor: { value: new THREE.Color(this.model.color) }
                  },
                  opacity: 1,
              })
              // _child.material = new THREE.MeshPhysicalMaterial({
              //   metalness: 1,
              //   roughness: 0,
              //   transparent: false,
              //   opacity: 1,
              //   envMapIntensity: 1,
              //   side: THREE.FrontSide,
              //   color: new THREE.MeshBasicMaterial({ color: 0xff0000 })
              // });
              // _child.material = THREE.RGBAFormat
              
            }
        })
    }

    update()
    {
        this.model.group.scale.set(0.01,0.01,0.01)
        this.model.group.rotation.z = Math.abs(this.time.elapsed * 0.001) * 1.1
        this.model.group.position.z = 1.1
        this.model.group.position.x = 0
        this.model.group.position.y = 1.57
    }
}
