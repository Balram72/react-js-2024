//   variabal
  var a = 10;    // gobal-decalration // declaration
  console.log(`${a}`);
  var a = 20;                   // re-declaration  -> yes
  console.log(`${a}`);
  a = 30;                       // re-assign     ->   yes
  console.log(`${a}`);


  let b = 40              //local-scope      // declaration
  console.log(`${b}`);
  // let b = 60                // re-declaration ->  no
  // console.log(`${b}`);
  b = 60                      // re-assign ->  yes
  console.log(`${b}`);

  const c = 10;                   //local-scope      // declaration
  console.log(`${c}`);
  // const c = 30;                  // re-declaration -> no
  // console.log(`${c}`);
  // c = 60                            // re-assign    -> no
  // console.log(`${c}`);
