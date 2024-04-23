function getJsonFullData(jsonData) {
  let myRovers = jsonData.state.rovers;
  let JsonDataEdges = jsonData.stage.edges;
  let getJsonElevators = jsonData.state.elevators;
  let getVertices = jsonData.stage.vertices;
  console.log(myRovers);

  //vertices
  for (var i = 0; i < getVertices.length; i++) {
    var myGeoVertices = new THREE.CircleGeometry(0.2, 20);
    var myMatVertices = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var objectVertices = new THREE.Mesh(myGeoVertices, myMatVertices);

    objectVertices.rotation.x -= Math.PI / 2;
    objectVertices.position.x = getVertices[i].x / 100;
    objectVertices.position.y = getVertices[i].z / 100;
    objectVertices.position.z = (getVertices[i].y / 100) * -1;

    objectVertices.name = getVertices[i].name;
    myScene.add(objectVertices);
  }

  //rovers object
  for (let i = 0; i < myRovers.length; i++) {
    let myGeometry = new THREE.BoxGeometry(myRovers[i].length / 100 - 0.5, 0.5, myRovers[i].width / 100);
    let myMaterial = new THREE.MeshBasicMaterial({ color: myRovers[i].color });
    let object = new THREE.Mesh(myGeometry, myMaterial);

    object.position.x = myRovers[i].x / 100;
    object.position.y = myRovers[i].z / 100 + 0.2;
    object.position.z = (myRovers[i].y / 100) * -1;

    //rover head
    let mycylinder = new THREE.CylinderGeometry((myRovers[i].width * 0.5) / 100, (myRovers[i].width * 0.5) / 100, 0.5, 50);
    let mycynMaterial = new THREE.MeshBasicMaterial({ color: myRovers[i].color });
    let cylMesh = new THREE.Mesh(mycylinder, mycynMaterial);
    cylMesh.position.x = 0.55;

    myScene.add(object);
    object.add(cylMesh);
    getRovers.push(object);
  }

  //edges
  for (let i = 0; i < JsonDataEdges.length - 1; i++) {
    // if(JsonDataEdges[i].destination.type == "Waypoint"){
    let points = [];
    let lineTrack = new THREE.LineBasicMaterial({ color: 0x0a0a0a, linewidth: 0.001});
    points.push(new THREE.Vector3(JsonDataEdges[i].source.x / 100, JsonDataEdges[i].source.z / 100, (JsonDataEdges[i].source.y / 100) * -1));
    points.push(new THREE.Vector3(JsonDataEdges[i].destination.x / 100, JsonDataEdges[i].destination.z / 100, (JsonDataEdges[i].destination.y / 100) * -1));
    let lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    let lineEdges = new THREE.Line(lineGeo, lineTrack);
    myScene.add(lineEdges);
    points = [];

    if (JsonDataEdges[i].bidirectional == false) {
      let geoArrow = new THREE.ConeGeometry(0.2, 0.1, 3, 1);
      // let geoArrow = new THREE.CircleGeometry(0.2, 0, 0);
      let matArrow = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });
      let meshArrow = new THREE.Mesh(geoArrow, matArrow);
      if (JsonDataEdges[i].destination.x > JsonDataEdges[i].source.x) {
        meshArrow.rotation.y = Math.PI / 2;
        // meshArrow.rotation.y = Math.PI / 2;
        meshArrow.position.x = JsonDataEdges[i].destination.x / 100 - 0.4;
        meshArrow.position.y = JsonDataEdges[i].destination.z / 100 + 0.1;
        meshArrow.position.z = (JsonDataEdges[i].destination.y / 100) * -1;
        myScene.add(meshArrow);
      } else if (JsonDataEdges[i].destination.x < JsonDataEdges[i].source.x) {
        meshArrow.rotation.y -= Math.PI / 2;
        meshArrow.position.x = JsonDataEdges[i].destination.x / 100 + 0.4;
        meshArrow.position.y = JsonDataEdges[i].destination.z / 100 + 0.1;
        meshArrow.position.z = (JsonDataEdges[i].destination.y / 100) * -1;
        myScene.add(meshArrow);
      } else if (JsonDataEdges[i].destination.y < JsonDataEdges[i].source.y) {
        //meshArrow.rotation.y -= Math.PI/2;
        meshArrow.position.x = JsonDataEdges[i].destination.x / 100;
        meshArrow.position.y = JsonDataEdges[i].destination.z / 100 + 0.1;
        meshArrow.position.z = (JsonDataEdges[i].destination.y / 100) * -1 - 0.4;
        myScene.add(meshArrow);
      } else if (JsonDataEdges[i].destination.y > JsonDataEdges[i].source.y) {
        meshArrow.rotation.y = Math.PI;
        meshArrow.position.x = JsonDataEdges[i].destination.x / 100;
        meshArrow.position.y = JsonDataEdges[i].destination.z / 100 + 0.1;
        meshArrow.position.z = (JsonDataEdges[i].destination.y / 100) * -1 + 0.4;
        myScene.add(meshArrow);
      }
    }
  }

  //elevator
  for (let i = 0; i < getJsonElevators.length; i++) {
    let planeElevator = new THREE.BoxGeometry(2.5, 0.2, 2.5);
    let elevatorMesh = new THREE.Mesh(planeElevator, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    elevatorMesh.position.x = getJsonElevators[i].vertices[0].x / 100;
    elevatorMesh.position.y = getJsonElevators[i].z / 100;
    elevatorMesh.position.z = (getJsonElevators[i].vertices[0].y / 100) * -1;

    myScene.add(elevatorMesh);
    getElevators.push(elevatorMesh);
  }
}
