  //argument keyWord
  //********************

function add() {

    for (let i of arguments) {
      console.log(i);  // print value
    }

    for (let i in arguments) {
      console.log(i) // index value
    }

  
  }
  add(10);
  add(10, 20);
  add(10, 20, 30);
  add(10, 20, 30, 40);
  add(10, 20, 30, 40, 50);

  // rest operators using  argument keyWord
   //**************************************
   function student(...arguments) {
    console.log(arguments)
  }
  student('Balram', 90)
  student('sunita', 90, 90, 90)
  student('ram', 90, 90)

//argument keyWord example
//************************
  function add1() {
    let sum = 0;
    for (i of arguments) {
      sum += i;
    }
    console.log(`${sum} <br/>`);
  }
  add1(10);
  add1(10, 20);
  add1(10, 20, 30);
  add1(10, 20, 30, 40);
  add1(10, 20, 30, 40, 50);
  // output : -10,30,60,100,150
