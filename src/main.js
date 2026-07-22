import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.set(9, 8, 11);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.5, 0);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
});

scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(6, 10, 4);
scene.add(dirLight);

function createLabel(text) {
  const div = document.createElement('div');
  div.textContent = text;
  div.style.color = '#222';
  div.style.background = 'rgba(255,255,255,0.85)';
  div.style.padding = '2px 6px';
  div.style.borderRadius = '4px';
  div.style.fontSize = '12px';
  div.style.fontFamily = 'sans-serif';
  return new CSS2DObject(div);
}

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

  const bedLabel = createLabel('OR Table');
  bedLabel.position.set(0, 1.6, 0);
  bed.add(bedLabel);

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

  const label = createLabel('Cooler Tables');
  label.position.set(0, 1.6, 0);
  tableCooler.add(label);

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

function createLifelinkTable() {
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

  const label = createLabel('Lifeline Table');
  label.position.set(0, 1.6, 0);
  lifelineTable.add(label);

  lifelineTable.position.set(3, 0, 6);
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

  const label = createLabel('Slushie Table');
  label.position.set(0, 1.6, 0);
  slushyTable.add(label);

  slushyTable.position.set(-2, 0, -5);
  return slushyTable;
}
scene.add(createSlushy());

function createSpecimenTable() {
  const specimenTable = new THREE.Group();
  const table = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 0.15, 1.3),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  table.position.y = 0.85;
  specimenTable.add(table);

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
    specimenTable.add(leg);
  });

  const label = createLabel('Specimen Table');
  label.position.set(0, 1.6, 0);
  specimenTable.add(label);

  specimenTable.position.set(0.5, 0, -5);
  return specimenTable;
}
scene.add(createSpecimenTable());

const crashCart = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshStandardMaterial({ color: 0xff0000})
);
crashCart.position.y = 0.5;
crashCart.position.x = -5
crashCart.position.z = -5
scene.add(crashCart);
const labelCrashCart = createLabel('Crash Cart');
labelCrashCart.position.set(-5, 1.6, -5);
scene.add(labelCrashCart);

function createMayo() {
  const Mayo = new THREE.Group();
  const mayo = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.15, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  mayo.position.y = 0.85;
  Mayo.add(mayo);

  const legMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.6 });
  const legPositions = [
    [-0.45, -0.45],
    [ 0.45, -0.45],
  ];
  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8),
      legMat
    );
    leg.position.set(x, 0.42, z); // half the leg height, so it sits on the floor
    Mayo.add(leg);
  });

  const label = createLabel('Mayo');
  label.position.set(0, 1.6, 0);
  Mayo.add(label);

  Mayo.position.set(-0.5, 0, -1.3);
  return Mayo;
}
scene.add(createMayo());

function createBackTable() {
  const backTable = new THREE.Group();
  const table = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.15, 1.3),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  table.position.y = 0.85;
  backTable.add(table);

  const legMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.6 });
  const legPositions = [
    [-0.7, -0.55],
    [-0.7,  0.55],
    [ 0.7, -0.55],
    [ 0.7,  0.55],
  ];
  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8),
      legMat
    );
    leg.position.set(x, 0.42, z); // half the leg height, so it sits on the floor
    backTable.add(leg);
  });

  const label = createLabel('Back Tables');
  label.position.set(0, 1.6, 1);
  backTable.add(label);

  backTable.position.set(3, 0, -5);
  return backTable;
}
scene.add(createBackTable());

function createBackTable2() {
  const backTable = new THREE.Group();
  const table = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 0.15, 1.6),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  table.position.y = 0.85;
  backTable.add(table);

  const legMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.6 });
  const legPositions = [
    [-0.6, -0.55],
    [-0.6,  0.55],
    [ 0.6, -0.55],
    [ 0.6,  0.55],
  ];
  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8),
      legMat
    );
    leg.position.set(x, 0.42, z); // half the leg height, so it sits on the floor
    backTable.add(leg);
  });

  backTable.position.set(3, 0, -3);
  return backTable;
}
scene.add(createBackTable2());

function createBovie() {
  const bovie = new THREE.Group();
  const bottomShelf = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.15, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  bottomShelf.position.y = 0;
  bovie.add(bottomShelf);

  const topShelf = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.15, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  topShelf.position.y = 0.5;
  bovie.add(topShelf);

  const machine1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.3, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xe0ffff, roughness: 0.9 })
  );
  machine1.position.set(0, 0.2, 0); 
  bovie.add(machine1);

  const machine2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.3, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xe0ffff, roughness: 0.9 })
  );
  machine2.position.set(0, 0.7, 0); 
  bovie.add(machine2);

  const label = createLabel('Bovie');
  label.position.set(0, 1.6, 0);
  bovie.add(label);

  bovie.position.set(5, 0, -2);
  return bovie;
}
scene.add(createBovie());

function createNeptune() {
  const neptune = new THREE.Group();
  const bottom = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 2, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  bottom.position.y = 1;
  neptune.add(bottom);

  const top = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  top.position.y = 2;
  neptune.add(top);

  const label = createLabel('Neptunes');
  label.position.set(0, 1.6, 1);
  neptune.add(label);

  neptune.position.set(5, 0, -0.5);
  return neptune;
}
scene.add(createNeptune());

function createNeptune2() {
  const neptune = new THREE.Group();
  const bottom = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 2, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  bottom.position.y = 1;
  neptune.add(bottom);

  const top = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xb9c2c7 })
  );
  top.position.y = 2;
  neptune.add(top);

  neptune.position.set(5, 0, 1.3);
  return neptune;
}
scene.add(createNeptune2());

const perfusion = new THREE.Mesh(
  new THREE.BoxGeometry(3, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0x800080})
);
perfusion.position.set(4, 0, 4);
scene.add(perfusion);
const labelPerfusion = createLabel('Perfusion');
labelPerfusion.position.set(4, 0, 4);
scene.add(labelPerfusion);

const anesthesia = new THREE.Mesh(
  new THREE.BoxGeometry(3, 0.2, 5),
  new THREE.MeshStandardMaterial({ color: 0xCD5C5C})
);
anesthesia.position.set(-4, 0, -1);
scene.add(anesthesia);
const labelAnesthesia = createLabel('Anesthesia/Respitory');
labelAnesthesia.position.set(-4, 0, -1);
scene.add(labelAnesthesia);

const surgeon1 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.3, 0.3, 3),
  new THREE.MeshStandardMaterial({ color: 0x0000CD })
);
surgeon1.position.set(-1, 0, 1);
scene.add(surgeon1);

const surgeon2 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.3, 0.3, 3),
  new THREE.MeshStandardMaterial({ color: 0x0000CD })
);
surgeon2.position.set(0, 0, 1);
scene.add(surgeon2);

const surgeon3 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.3, 0.3, 3),
  new THREE.MeshStandardMaterial({ color: 0x0000CD })
);
surgeon3.position.set(-1.5, 0, -1);
scene.add(surgeon3);

const scrubTech1 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.3, 0.3, 3),
  new THREE.MeshStandardMaterial({ color: 0xF08080 })
);
scrubTech1.position.set(1, 0, -1);
scene.add(scrubTech1);

const scrubTech2 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.3, 0.3, 3),
  new THREE.MeshStandardMaterial({ color: 0xF08080 })
);
scrubTech2.position.set(1, 0, 1);
scene.add(scrubTech2);

const nurse = new THREE.Mesh(
  new THREE.CylinderGeometry(0.3, 0.3, 3),
  new THREE.MeshStandardMaterial({ color: 0x7FFFD4 })
);
nurse.position.set(5, 0, -4);
scene.add(nurse);

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