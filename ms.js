const fs = require("fs");

function leerArchivo() {
  try {
    let contenidoStr = fs.readFileSync("package.json", "utf-8");
    let contenidoObj = JSON.parse(contenidoStr);
    let size = Buffer.from(contenidoStr).length;
    let info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);
    fs.writeFileSync("info.txt", JSON.stringify(info, null, "\t"), "utf-8");
    console.log("El objeto info se escribio correctamente en info.txt.");
  } catch (error) {
    console.error("Se produjo un error:", error);
  }
}

leerArchivo();
