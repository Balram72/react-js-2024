  // deep copy 
  //**********

        let a = [10, 20];
        let b = a;
        a.push(30);
        console.log(b) // output = [10, 20, 30]

  // shallow copy
 //**************
        let aa = [10, 20];
        let bb = [...aa];
        aa.push(50);
        console.log(bb); // output = [10, 20]