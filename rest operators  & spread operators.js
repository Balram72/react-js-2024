 // rest operators
 //***************
 
function add1(res, ...args) {
    let sum = 0;
    console.log(args)
    for (let value of args) {
      sum += value;
    }
    console.log(`${res} -  ${sum} <br/>`);
  }
  add1('a', 10);
  add1('b', 10, 20);
  add1('c', 10, 20, 30);
  add1('d', 10, 20, 30, 40);
  add1('e', 10, 20, 30, 40, 50);


 // spread operators
 //*****************
    function demo() {
        console.log(arguments);
    }
    let arr = [10, 20, 30, 40, 50];
    demo(90, ...arr)

 // spread operators using array
 //******************************
    let a = [10, 20];
    let b = [30, 40];
    let c = [...a, ...b];


// rest operators  & spread operators  example
//************************************************
    function student(name, email, ...mark) {    // rest operators
    let fetchmark = 0;
    for (let m of mark) {
      fetchmark += m;
    }
    console.log(`${name} has email i.e ${email} and fetched ${fetchmark} <br/>`);

  }
  let mark1 = [70, 80, 10];
  let mark2 = [70, 60, 90];
  let mark3 = [40, 80, 90];

  student('balram', 'balram@gmail.com',...mark1)  // spread operators
  student('rani', 'rani@gmail.com', ...mark2)
  student('sari', 'sari@gmail.com', ...mark3)
