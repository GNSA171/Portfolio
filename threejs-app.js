// threejs-app.js
document.addEventListener('DOMContentLoaded', function() {
    // Background Animation
    initBackground();
    
    // Hero Section Animation
    initHeroAnimation();
});

function initBackground() {
    const container = document.getElementById('threejs-container');
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    
    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    
    const posArray = new Float32Array(particleCount * 3);
    for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xffb742,
        transparent: true,
        opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 3;
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function initHeroAnimation() {
    const container = document.getElementById('threejs-hero');
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffb742, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create 3D text
    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
        const textGeometry = new THREE.TextGeometry('DEV', {
            font: font,
            size: 1,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });
        
        textGeometry.center();
        
        const textMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffb742,
            specular: 0x111111,
            shininess: 30
        });
        
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        scene.add(textMesh);
        
        // Add floating cubes
        const cubes = [];
        const cubeGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.7
        });
        
        for(let i = 0; i < 10; i++) {
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = (Math.random() - 0.5) * 4;
            cube.position.y = (Math.random() - 0.5) * 4;
            cube.position.z = (Math.random() - 0.5) * 4;
            cube.rotation.x = Math.random() * Math.PI;
            cube.rotation.y = Math.random() * Math.PI;
            cubes.push({
                mesh: cube,
                speed: Math.random() * 0.02 + 0.01
            });
            scene.add(cube);
        }
        
        camera.position.z = 5;
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            textMesh.rotation.y += 0.01;
            
            cubes.forEach(cube => {
                cube.mesh.rotation.x += cube.speed;
                cube.mesh.rotation.y += cube.speed;
            });
            
            renderer.render(scene, camera);
        }
        
        animate();
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
}
