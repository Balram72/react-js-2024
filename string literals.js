 // string literals
 let names = 'balram';
 let score = 100;
 //old concept
 console.log(names + 'score' + score + 'run today <br/>');
  // string literals
 console.log(`name ${names} score ${score} run today`);

//  string literals using function
    function show(name) { // formal argumate
        let greet = `Welcome ${name} to seeree`;
        document.write(greet);
    }
    show('Balram'); // actucal argument