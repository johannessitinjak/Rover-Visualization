function getJsonToPanel(jsonData) {
    let jsonPanel = jsonData.state.rovers;

    const btnTopView = document.getElementById("btnTopView");
    btnTopView.onclick = function () {
        myCamera.position.set(30, 62.8, 2.1);
        myCamera.rotation.x = -1;
        myCamera.rotation.y = -0;
        myCamera.rotation.z = -0;
        myControl.target.set(30, 15, -25);
    };
    const btnFrontView = document.getElementById("btnFrontView");
    btnFrontView.onclick = function () {
        myCamera.position.set(30, 15, 30);
        myCamera.rotation.x = 0;
        myCamera.rotation.y = 0;
        myCamera.rotation.z = 0;
        myControl.target.set(30, 15, -25);
    };
    const btnIsometricView = document.getElementById("btnIsometricView");
    btnIsometricView.onclick = function () {
        myCamera.position.set(-9.87652337186961, 23.731017223395046, 5.029544016452274);
        myCamera.rotation.x = -0.7570127539322812;
        myCamera.rotation.y = -0.7974970319292568;
        myCamera.rotation.z = -0.5945017265621073;
        myControl.target.set(27, -1, -25);
    };

    for (var i = 0; i < jsonPanel.length; i++) {
        document.getElementById(`roversName${i+1}`).innerHTML = "Rover's Name : " + jsonPanel[i].name;
        document.getElementById(`roversColor${i+1}`).style.color = jsonPanel[i].color;
        document.getElementById(`roversPlate${i+1}`).innerHTML = "Rover's Plate : " + jsonPanel[i].plate;
        if (jsonPanel[i].trip != 0) {
            document.getElementById(`roversStatus${i+1}`).innerHTML = "Rover's Status : Busy";
            document.getElementById(`rvr${i+1}`).style.color = "red";
        } else if (jsonPanel[i].trip == 0){
            document.getElementById(`roversStatus${i+1}`).innerHTML = "Rover's Status : Idle";
            document.getElementById(`rvr${i+1}`).style.color = "green";
        }
    }
}
