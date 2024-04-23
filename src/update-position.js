function getJsonEventData(jsonData){
    let myRovers = jsonData.state.rovers;
    let myElevators = jsonData.state.elevators;

    //getting trip
    let rovers = [
        point1 = [], point2 = [], point3 = [], point4 = [], point5 = [], point6 = []
    ];
    for(let i = 0; i< getRovers.length; i++){
        //update rover position
        getRovers[i].position.x = myRovers[i].x/100;
        getRovers[i].position.y = myRovers[i].z/100+0.2;
        getRovers[i].position.z = myRovers[i].y/100*-1;
        getRovers[i].rotation.y = myRovers[i].theta/57.3;

        //rover trip
        if(myRovers[i].trip.length != 0){
            for(j = 0; j < myRovers[i].trip.length; j++){
                rovers[i][0] = (new THREE.Vector3(myRovers[i].x/100, myRovers[i].z/100+0.05, myRovers[i].y/100*-1))   
                rovers[i].push(new THREE.Vector3(myRovers[i].trip[j].x/100, myRovers[i].trip[j].z/100+0.05, myRovers[i].trip[j].y/100*-1))   
            }
            getTrip(rovers[i], myRovers[i].color);
            console.log(rovers[i].length)
        }
        //Spatula Action
        if(myRovers[i].spatula == 1){
            let mySpatulaGeo= new THREE.PlaneGeometry(myRovers[i].width*0.5/100, myRovers[i].width/100-0.2);
            let mySpatulaMat = new THREE.MeshBasicMaterial({color: 0xffff00});
            let spatulaMesh = new THREE.Mesh(mySpatulaGeo, mySpatulaMat);
            spatulaMesh.rotation.x -= Math.PI/2;
            spatulaMesh.position.y = 0.3;
            spatulaMesh.position.x = -0.3;
            myScene.add(spatulaMesh);
            getRovers[i].add(spatulaMesh);

        }else if (myRovers[i].spatula ==0){
            let mySpatulaGeo= new THREE.PlaneGeometry(myRovers[i].width*0.5/100, myRovers[i].width/100-0.2);
            let mySpatulaMat = new THREE.MeshBasicMaterial({color: myRovers[i].color});
            let spatulaMesh = new THREE.Mesh( mySpatulaGeo, mySpatulaMat);
            spatulaMesh.rotation.x -= Math.PI/2;
            spatulaMesh.position.y = 0.3;
            spatulaMesh.position.x = -0.3;
            myScene.add(spatulaMesh);
            getRovers[i].add(spatulaMesh);
        }
        //plate indicator
        if(myRovers[i].plate == true){
            let plateCly= new THREE.CylinderGeometry(myRovers[i].width*0.5/100-0.25, myRovers[i].width*0.5/100,0.5,50);
            let plateMat = new THREE.MeshBasicMaterial({color: 0x00ff00});
            let plateIndicator = new THREE.Mesh( plateCly, plateMat);
            plateIndicator.position.y = 0.01;
            plateIndicator.position.x = 0.2;
            getRovers[i].add(plateIndicator);
        }else if(myRovers[i].plate == false){
            let plateCly= new THREE.CylinderGeometry(myRovers[i].width*0.5/100-0.25, myRovers[i].width*0.5/100,0.5,50);
            let plateMat = new THREE.MeshBasicMaterial({color: myRovers[i].color});
            let plateIndicator = new THREE.Mesh( plateCly, plateMat);
            plateIndicator.position.y = 0.01;
            plateIndicator.position.x = 0.2;
            getRovers[i].add(plateIndicator);
        }   
    }
    //update position elevators
    for(let i = 0; i < myElevators.length; i++){
        if(myElevators[i].ismove == true){
            for(let j = 0; j < getRovers.length; j++){
                for(let k = 0; k < myRovers[j].trip.length; k++){
                    if(myRovers[j].trip[0].id == myElevators[i].vertices[0].name || myRovers[j].trip[0].id == myElevators[i].vertices[1].name||myRovers[j].trip[0].id == myElevators[i].vertices[2].name){
                        getRovers[j].position.y = myElevators[i].z/100+0.2;
                    }
                }
            }
        }
        getElevators[i].position.y = myElevators[i].z/100-0.2;
    }
};