// var raycast = new THREE.Raycaster();
// var mouse = {};
// addEventListener("mousedown", (e) => {
//     mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = (e.clientY / window.innerHeight) * -2 + 1;
//     raycast.setFromCamera(mouse, myCamera);
//     var nameObject = raycast.intersectObjects(myScene.children);

//     nameObject.forEach((i) => {
//         if (i.object.name != "") {
//             var text = document.createElement("div");
//             text.style.position = "absolute";
//             text.style.width = 10;
//             text.style.height = 10;
//             text.style.backgroundColor = "white";
//             text.innerHTML = i.object.name;
//             text.style.top = 10 + "px";
//             text.style.left = 10 + "px";
//             document.body.appendChild(text);
//         } else if (i.object.name == "") {
//         }
//     });
// });
