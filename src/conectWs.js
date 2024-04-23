var jsonFullData;
var jsonEventData;

function connectWs() {
    let webSocketAddr = "ws://localhost:5000/ws";
    socket = new WebSocket( webSocketAddr);
    socket.onopen = function (event) {
        socket.send('full');
        socket.send('current');
    };
    socket.onclose = function (event) {
    };

    socket.onmessage = function (event) {
        if (!jsonFullData) {
            jsonFullData = JSON.parse(event.data);
            getJsonFullData(jsonFullData);
            console.log(jsonFullData);
        }
        else {
            jsonEventData = JSON.parse(event.data);
            getJsonEventData(jsonEventData);
            getJsonToPanel(jsonEventData);
        }
    };
};
