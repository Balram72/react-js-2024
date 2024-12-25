// object
//*******


    //1. we can also concaniat object by the help of spread operators

        let obj1 = {
            name: "ba",
            age: 36
        }
        let obj2 = {
            country: "india",
            occ: "cricketer"
        };
        let virat = { ...obj1, ...obj2 };
        console.log(virat);


    //2. object literals

            let names = "balram"
            let age = 30
            let obj = {
                name: names,
                age
            }
            console.log(obj)
            
    //3. we can use variable value as  a property name
        let col = 'college';
        let objcol = {
            [col]: 'seeree'
        }
        console.log(objcol);