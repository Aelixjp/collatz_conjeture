import readline from "readline";

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function collatzConjecture()
{
    const res = [];

    readl.question(`Digite el valor inicial: `, valor => {
        console.log("");
        console.log(`Calculando conjetura de collatz para el valor ${valor}...\n`);
        console.log("");

        const number = parseInt(valor);

        if(Number.isNaN(number))
            console.log("El valor digitado no es valido o no es un numero!");
        else
        {
            let initialNumber = number;

            while(initialNumber != 1)
            {
                initialNumber = initialNumber % 2 === 0 ? initialNumber / 2 : (3 * initialNumber) + 1; res.push(initialNumber);
            }
        }

        console.table(res); readl.close();
    });
}

collatzConjecture();