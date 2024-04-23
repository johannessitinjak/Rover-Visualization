fetch("./CCS6_20220726.xml")
    .then((response) => response.text())
    .then((data) => {
        let parser = new DOMParser();
        var xml = parser.parseFromString(data, "application/xml");
        var beamMap = xml.getElementsByTagName("Cue");
        function drawtrack(x, y, z, color) {
            var trackGeometry = new THREE.PlaneGeometry(0.35, 0.35);
            var trackMaterial = new THREE.MeshBasicMaterial({ color:color, side: THREE.DoubleSide });
            var planeTrack = new THREE.Mesh(trackGeometry, trackMaterial);
            planeTrack.rotation.x -= Math.PI / 2;
            planeTrack.position.x = x / 100;
            planeTrack.position.y = z /100-0.02;
            planeTrack.position.z = (y / 100) * -1;
            myScene.add(planeTrack);
        }

        let x = [];
        let y = [];
        let z = [];
        for (let i = 0; i < beamMap.length; i++) {
            x.push(beamMap[i].getAttribute("tx"));
            y.push(beamMap[i].getAttribute("ty"));
            z.push(beamMap[i].getAttribute("tz"));
            if (z[i] != 999999) {
                drawtrack(x[i], y[i], z[i],0xe1e1e1);
            }else{
                drawtrack(x[i], y[i], 10,0x00ff00);
            }
        }
    });
