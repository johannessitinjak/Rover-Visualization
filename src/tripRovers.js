function getTrip(point, roverColor){
    let lineTrack = new THREE.LineBasicMaterial({color : roverColor,linewidth : 3, linejoin: "miter"})
    let lineGeo = new THREE.BufferGeometry().setFromPoints(point)
    let lineRovers = new THREE.Line(lineGeo, lineTrack);
    lineRovers.name = "roversTrip";
    myScene.add(lineRovers);
    const removeLine =setTimeout(function(){
        let selectedObject = myScene.getObjectByName("roversTrip");
        myScene.remove(selectedObject);
    },1000);
    console.log(lineRovers);
}
update();
