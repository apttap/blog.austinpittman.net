import { ComponentChildren } from "preact";
import { PageContext } from "@local-types/page";
import style from "@style/three/ThreeScene.module.scss";
import { useEffect, useRef } from "preact/hooks";

import vertex from "@shaders/shader.vert";
import fragment from "@shaders/shader.frag";

import * as THREE from "three";

export { ThreeScene };

const ThreeScene = function ({}: {}) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    scene.background = new THREE.Color(0x222222);

    renderer.setSize(window.innerWidth, window.innerHeight);

    canvasRef?.current?.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.ShaderMaterial({
      uniforms: {
        data: {
          value: {
            time: 0,
            color: new THREE.Color(0.05, 0.2, 0.025),
          },
        },
        fragmentShader: fragment,
        vertexShader: vertex,
      },
    });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div id={style.ThreeContainer} ref={canvasRef}></div>;
};
