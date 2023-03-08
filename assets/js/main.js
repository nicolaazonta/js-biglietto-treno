//chiedere il nome al passeggero
const passengerName = prompt('please enter your name');

//chiedere l'età al passeggero
const passengerAge = prompt('please enter your age');

//chiedere il numero di chilometri che vuole percorrere
const passengerKm = Number(prompt('please enter the number of kilometers you have to travel'));


//calcolare il prezzo totale del viaggio considerando che:
    //0.21€ per ogni km 
    //SE il passeggero è <18 lo sconto sarà del 20%
    //SE il passeggero è >65 lo sconto sarà del 40%
    
//indicare il prezzo tipo 15.99€