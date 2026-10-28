'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeDVisual({ className = '' }) {
  const containerRef = useRef(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Skip on very small/low-powered screens if window width < 640
    if (window.innerWidth < 640) {
      setIsSupported(false);
      return;
    }

    let isMounted = true;
    let animationFrameId;
    let isVisible = true;

    // Setup Scene
    const scene = new THREE.Scene();

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.5;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
      const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1 : 1.5);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
    } catch {
      setIsSupported(false);
      return;
    }

    // Geometry: Abstract cinematic kinetic geometric ring / torus knot
    const geometry = new THREE.TorusKnotGeometry(1, 0.28, 90, 16, 2, 3);
    const wireframeGeo = new THREE.WireframeGeometry(geometry);

    // Subtle neon red & sky blue dual-tone wireframe
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff3838, // Neon Red
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const wireframeLines = new THREE.LineSegments(wireframeGeo, lineMaterial);
    scene.add(wireframeLines);

    // Inner subtle metallic core
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x63b8f4, // Accent Blue
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Ambient & Point Lights
    const redLight = new THREE.PointLight(0xff3838, 2, 10);
    redLight.position.set(2, 2, 2);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x63b8f4, 1.8, 10);
    blueLight.position.set(-2, -2, -1);
    scene.add(blueLight);

    // Visibility Observer to pause rendering when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      if (!isMounted) return;
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // Do not render if not visible

      const elapsedTime = clock.getElapsedTime();

      // Slow cinematic rotation
      wireframeLines.rotation.x = elapsedTime * 0.15;
      wireframeLines.rotation.y = elapsedTime * 0.22;

      coreMesh.rotation.x = -elapsedTime * 0.25;
      coreMesh.rotation.y = -elapsedTime * 0.35;

      // Subtle float motion
      wireframeLines.position.y = Math.sin(elapsedTime * 0.8) * 0.08;
      coreMesh.position.y = Math.sin(elapsedTime * 0.8) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeGeo.dispose();
      lineMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer?.dispose();
    };
  }, []);

  if (!isSupported) {
    // Elegant CSS Fallback if WebGL is unavailable or on small mobile
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-32 h-32 rounded-full border border-neon-red/30 animate-pulse bg-gradient-to-tr from-neon-red/10 to-accent-blue/10 blur-xl" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none select-none relative overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}

