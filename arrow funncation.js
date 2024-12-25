  // old method
  function show(name) {
    let greet = `Welcome ${name} to seeree`;
    console.log(greet);
  }
  show('Balram');


  // arrow funncation
  //********************
    // nothing for a variable
    let show1 = () => {
        return console.log("Hello EveryOne Welcome to react class");
    }
  show1();


  // arrow funncation use parameter use 
  //***********************************
  let add = (a, b) => {
    console.log(a + b);
  }
   add(10, 20);

  let student = (name) => console.log(`My Name is ${name}`);
   student('balram');

  let sub = (a, b) => {
    return total = a - b;
  }
   sub(20, 10);
   console.log(total);