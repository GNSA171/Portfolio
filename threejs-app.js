// threejs-app.js
document.addEventListener('DOMContentLoaded', function() {
    // First check if WebGL is supported
    if (!isWebGLAvailable()) {
        console.warn('WebGL not supported - disabling 3D effects');
        document.getElementById('threejs-bg').style.display = 'none';
        return;
    }
    
    // Initialize Three.js effects
    initBackground();
    initScrollAnimation();
});

// WebGL availability check
function isWebGLAvailable() {
    try {
        const canvas = document.createElement('canvas');
        return !!(
            window.WebGLRenderingContext && 
            (canvas.getContext('webgl') || 
            canvas.getContext('experimental-webgl'))
        );
    } catch (e) {
        return false;
    }
}

// Background Particle System
function initBackground() {
    const container = document.getElementById('threejs-bg');
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create particle geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    
    // Position and color arrays
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    
    // Fill arrays with random values
    for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
        
        // Make some particles golden (primary color)
        if (i % 3 === 0 && Math.random() > 0.7) {
            colorArray[i] = 1.0;     // R
            colorArray[i+1] = 0.72;  // G
            colorArray[i+2] = 0.26;  // B
        } else {
            colorArray[i] = Math.random();
        }
    }
    
    // Set geometry attributes
    particlesGeometry.setAttribute(
        'position', 
        new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
        'color', 
        new THREE.BufferAttribute(colorArray, 3)
    );

    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    // Create particle system
    const particlesMesh = new THREE.Points(
        particlesGeometry, 
        particlesMaterial
    );
    scene.add(particlesMesh);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    const mouseMoveSpeed = 0.0002;
    
    // Handle mouse movement
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Particle animation
        particlesMesh.rotation.x += 0.0003 + (mouseY * mouseMoveSpeed);
        particlesMesh.rotation.y += 0.0003 + (mouseX * mouseMoveSpeed);
        
        // Mouse follow effect (subtle)
        camera.position.x += (mouseX * 3 - camera.position.x) * 0.01;
        camera.position.y += (mouseY * 3 - camera.position.y) * 0.01;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    // Handle window resize
    function handleResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
}

// Scroll-triggered animation elements
function initScrollAnimation() {
    // Create observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(section => {
        observer.observe(section);
    });
}
