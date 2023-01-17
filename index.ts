import fs from 'fs';

let positionX = 0;
let positionY = 0;


fs.readFile('data.txt', 'utf8', (err, data) => {
  if (data) {
    const txt = data.split("\n");
    txt.forEach(element => {
      const command = element.split(" ");
      if (command[0] == "forward"){
        positionX += command[1];
      }
      else if (command[0] == "down"){
        positionY += command[1]
      }
      else if (command[0] == "up"){
        positionY -= command[1]
      }
    });
    return;
  }
  console.log(data);
});