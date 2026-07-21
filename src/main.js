import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.set(9, 8, 11);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.5, 0);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(6, 10, 4);
scene.add(dirLight);

function createBed() {
  const bed = new THREE.Group();
  const frame = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 0.15, 1.3),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  frame.position.y = 0.85;
  bed.add(frame);
  
  const pillow = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.15, 1.1),
    new THREE.MeshStandardMaterial({ color: 0xe0ffff, roughness: 0.9 })
  );
  pillow.position.set(-0.8, 1, 0); 
  bed.add(pillow);

  const legMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.6 });
  const legPositions = [
    [-1.15, -0.55],
    [-1.15,  0.55],
    [ 1.15, -0.55],
    [ 1.15,  0.55],
  ];
  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8),
      legMat
    );
    leg.position.set(x, 0.42, z); // half the leg height, so it sits on the floor
    bed.add(leg);
  });

  bed.position.set(0, 0, 0);
  return bed;
}
scene.add(createBed());

function createTableCooler() {
  const tableCooler = new THREE.Group();
  const table = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.15, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  table.position.y = 0.85;
  tableCooler.add(table);

  const cooler = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xe0ffff, roughness: 0.9 })
  );
  cooler.position.set(0, 1.1, 0); 
  tableCooler.add(cooler);

  const legMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.6 });
  const legPositions = [
    [-0.45, -0.45],
    [-0.45,  0.45],
    [ 0.45, -0.45],
    [ 0.4,  0.45],
  ];
  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8),
      legMat
    );
    leg.position.set(x, 0.42, z); // half the leg height, so it sits on the floor
    tableCooler.add(leg);
  });

  tableCooler.position.set(-5, 0, 3);
  return tableCooler;
}
scene.add(createTableCooler());

function createTableCooler2() {
  const tableCooler2 = new THREE.Group();
  const table2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.15, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  table2.position.y = 0.85;
  tableCooler2.add(table2);

  const cooler2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xe0ffff, roughness: 0.9 })
  );
  cooler2.position.set(0, 1.1, 0); 
  tableCooler2.add(cooler2);

  const legMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.6 });
  const legPositions = [
    [-0.45, -0.45],
    [-0.45,  0.45],
    [ 0.45, -0.45],
    [ 0.4,  0.45],
  ];
  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8),
      legMat
    );
    leg.position.set(x, 0.42, z); // half the leg height, so it sits on the floor
    tableCooler2.add(leg);
  });

  tableCooler2.position.set(-5, 0, 4);
  return tableCooler2;
}
scene.add(createTableCooler2());

function createLifelineTable() {
  const lifelineTable = new THREE.Group();
  const table = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.15, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  table.position.y = 0.85;
  lifelineTable.add(table);

  const legMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.6 });
  const legPositions = [
    [-1.4, -0.45],
    [-1.4,  0.45],
    [ 1.4, -0.45],
    [ 1.4,  0.45],
  ];
  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8),
      legMat
    );
    leg.position.set(x, 0.42, z); // half the leg height, so it sits on the floor
    lifelineTable.add(leg);
  });

  lifelineTable.position.set(3, 0, 5);
  return lifelineTable;
};
scene.add(createLifelineTable());

function createSlushy() {
  const slushyTable = new THREE.Group();
  const table = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.15, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  table.position.y = 0.85;
  slushyTable.add(table);

  const slushy = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0, 0),
    new THREE.MeshStandardMaterial({ color: 0xe0ffff, roughness: 0.9 })
  );
  slushy.position.set(0, 1.1, 0); 
  slushyTable.add(slushy);

  const legMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.6 });
  const legPositions = [
    [-0.45, -0.45],
    [-0.45,  0.45],
    [ 0.45, -0.45],
    [ 0.4,  0.45],
  ];
  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8),
      legMat
    );
    leg.position.set(x, 0.42, z); // half the leg height, so it sits on the floor
    slushyTable.add(leg);
  });

  slushyTable.position.set(-2, 0, -5);
  return slushyTable;
}
scene.add(createSlushy());

const base = new THREE.Mesh(
  new THREE.BoxGeometry(15, 0, 15),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
base.position.y = -0.2;
scene.add(base);

const screenMat = new THREE.MeshStandardMaterial({
  color: 0x2fd670, emissive: 0x1c8f4a, emissiveIntensity: 0.8
});

renderer.shadowMap.enabled = true;
dirLight.castShadow = true;
floorMesh.receiveShadow = true;
bedMesh.castShadow = true; // repeat per mesh