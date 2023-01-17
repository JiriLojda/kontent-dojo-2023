import fs from 'fs';

let positionX = 0;
let positionY = 0;


fs.readFile('data.txt', 'utf8', (err, data) => {
  if (data) {
    const txt = data.split("\r\n");
    txt.forEach(element => {
      const command = element.split(" ");
      if (command[0] == "forward") {
        positionX += parseInt(command[1]);
      }
      else if (command[0] == "down") {
        positionY += parseInt(command[1])
      }
      else if (command[0] == "up") {
        positionY -= parseInt(command[1])
      }
    });

    console.log(positionX * positionY)
    return positionX * positionY;
  }
  console.log(data);
});