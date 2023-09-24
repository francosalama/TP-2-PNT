const fs = require("fs");

function leerArchivo() {
  fs.promises
    .readFile("package.json", "utf-8")
    .then((contenidoStr) => {
      let contenidoObj = JSON.parse(contenidoStr);
      let size = Buffer.from(contenidoStr).length;
      let info = {
        contenidoStr,
        contenidoObj,
        size,
      };

      console.log(info);

      fs.promises.writeFile("info.txt", JSON.stringify(info, null, "\t"), "utf-8");
    })
    .then(() => {
      console.log("El objeto info se escribio correctamente en info.txt.");
    })
    .catch((error) => {
      console.error("Se produjo un error:", error);
    });
}

leerArchivo();
