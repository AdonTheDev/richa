require("express")().use(require("express").static(__dirname + "/public")).use((_, res) => {
    res.status(404).sendFile(__dirname + "/index.html");
}).listen(5500);