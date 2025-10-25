import * as THREE from 'three'
import * as dat from 'lil-gui'
import gsap from 'gsap'

/**
 * Debug
 */
const gui = new dat.GUI()

const parameters = {
    materialColor: '#ffeded'
}
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Test cube
 */
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: '#ff0000' })
// )
// scene.add(cube)

const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('/textures/gradients/5.jpg')
gradientTexture.magFilter = THREE.NearestFilter

const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})

const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(0.8, 0.4, 32),
    material
)

const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)

const mesh3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    material
)

mesh1.position.x = 2
mesh2.position.x = -2
mesh3.position.x = 2

const objectDistance = 4
mesh1.position.y = -objectDistance * 0
mesh2.position.y = -objectDistance * 1
mesh3.position.y = -objectDistance * 2

scene.add(mesh1, mesh2, mesh3)

//For rotation
const sectionMeshes = [mesh1, mesh2, mesh3]

//Particles
const particlesCount = 3000
const position = new Float32Array(particlesCount * 3)
const colors = new Float32Array(particlesCount * 3)

for( let i = 0; i < particlesCount;i++){
    const i3 = i * 3
    
    // Set position
    position[i3 + 0] = (Math.random() - 0.5) * 10
    position[i3 + 1] = (Math.random() - 0.5) * 20
    position[i3 + 2] = (Math.random() - 0.5) * 10

    // CORRECT COLOR ASSIGNMENT: R, G, B
    colors[i3 + 0] = Math.random() // R
    colors[i3 + 1] = Math.random() // G
    colors[i3 + 2] = Math.random() // B
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(position, 3))
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.04,
    sizeAttenuation: true,
    vertexColors: true
})

const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

const directionalLight = new THREE.DirectionalLight('#f5ededff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

gui.addColor(parameters, 'materialColor').onChange(() => {
    material.color.set(parameters.materialColor)
})
 
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
//Camera scroll animation
let scrollY = window.scrollY
window.addEventListener('scroll', () =>{
    scrollY = window.scrollY
})

const cursor = {x: 0,y: 0}
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
//Group camera
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// cameraGroup.position.x += (cursor.x - cameraGroup) * 5 * deltaTime
// cameraGroup.position.y += (cursor.x - cameraGroup) * 5 * deltaTime

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearAlpha(0)

//Trigger the scroll section
let currentSection = 0

window.addEventListener('scroll', () => {
    const newSection = Math.round(scrollY / sizes.height)
    if(newSection != currentSection){
        currentSection = newSection

        gsap.to(
            sectionMeshes[currentSection].rotation,
            {
              duration:1.5,
               ease: 'power2.inOut',
                x:'+=6',
                y:'+=3',
                z:'+=1.5'
            }
        )
    }
})

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    for(const mesh of sectionMeshes){
        mesh.rotation.x = elapsedTime * 0.1
        mesh.rotation.z = elapsedTime * 0.12
    }

    camera.position.y = -scrollY / sizes.height * objectDistance

    const parallaxX = cursor.x * 0.5
    const parallaxY = -cursor.y * 0.5
    cameraGroup.position.x = parallaxX
    cameraGroup.position.y = parallaxY

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()