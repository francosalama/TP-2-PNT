const fs = require("fs");

function leerArchivo() {
  fs.readFile("package.json", "utf-8", (error, contenidoStr) => {
    if (error)
      throw Error(
        `Error en operación asincrónica de lectura: ${error.message}`
      );

    let contenidoObj = JSON.parse(contenidoStr);
    let size = Buffer.from(contenidoStr).length;
    let info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);

    fs.writeFile(
      "info.txt",
      JSON.stringify(info, null, "\t"),
      "utf-8",
      (error) => {
        if (error)
          throw Error(
            `Error en operación asincrónica de escritura: ${error.message}`
          );
      }
    );
  });
}

leerArchivo()
