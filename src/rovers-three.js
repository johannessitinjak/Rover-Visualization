let myScene = new THREE.Scene();
let myCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
let myRenderer = new THREE.WebGLRenderer();
let getRovers = [];
let getElevators = [];
let myControl = new THREE.OrbitControls(myCamera, myRenderer.domElement);

//scene
myScene.background = new THREE.Color(0xffffff);
myCamera.position.set(30, 15, 30);
// myControl.target.set(30, 15, -25);
myControl.target.set(30, 10, 0);
myScene.add(myCamera);

//renderer
const roversThreeJs = document.querySelector(".roversThreeJs");
roversThreeJs.appendChild(myRenderer.domElement);
myRenderer.setSize((window.innerWidth * 5) / 7, (window.innerHeight * 9) / 10);
myRenderer.render(myScene, myCamera);

//membuat fungsi resize pada web
window.addEventListener("resize", function () {
  let width = window.innerWidth;
  let height = window.innerHeight;
  myRenderer.setSize((width * 4) / 5, (height * 4) / 5);
  myCamera.aspect = width / height;
  myCamera.updateProjectionMatrix();
});

//keyboard control
let myKeyboard = [];
document.body.onkeydown = function (evt) {
  myKeyboard[evt.key] = true;
};
document.body.onkeyup = function (evt) {
  myKeyboard[evt.key] = false;
};

function prosesKey() {
  if (myKeyboard["a"]) {
    myCamera.position.x -= 0.02;
  } else if (myKeyboard["d"]) {
    myCamera.position.x += 0.02;
  }
  if (myKeyboard["s"]) {
    myCamera.position.y -= 0.02;
  } else if (myKeyboard["w"]) {
    myCamera.position.y += 0.02;
  }
}

//update
function update() {
  requestAnimationFrame(update);
  prosesKey();
  myRenderer.render(myScene, myCamera);
}
