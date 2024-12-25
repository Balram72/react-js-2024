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