let argumentos = process.argv.slice(2);
console.log(argumentos);

const goal = argumentos[2];
const error = argumentos[3];
var intentos = 0;

let findingValue = function(high, low, goal, error) {
  setTimeout(() => {
    console.log("Limite superior: ", high);
    console.log("Limite inferior: ", low);
    intentos++;
    if (low > goal) {
      console.log(
        `Argumentos mal definidos  valor inferior ${low} es mayor que el objetivo ${goal}`
      );
      console.log(
        "Esta es la forma de ejecutar el script: node index.js valor-superior valor-inferior objetivo error"
      );
      console.log("ejemplo: node index.js 100 60 52.5 0.05");
      return true;
    }
    if (goal > high) {
      console.log(
        `Argumentos mal definidos, objetivo ${goal} es mayor que el limite superior ${high}`
      );
      console.log(
        "Esta es la forma de ejecutar el script: node index.js valor-superior valor-inferior objetivo error"
      );
      console.log("ejemplo: node index.js 100 60 52.5 0.05");
      return true;
    }

    let media = (high + low) / 2;

    if (media === goal || media + error === goal || media - error === goal) {
      console.log(`${intentos} intentos para encontrar el valor de ${media}`);
      return;
    }
    if (media > goal) {
      return findingValue(media, low, goal, error);
    } else {
      return findingValue(high, media, goal, error);
    }
  }, 100);
};

findingValue(
  parseFloat(argumentos[0]),
  parseFloat(argumentos[1]),
  parseFloat(goal),
  parseFloat(error)
);
