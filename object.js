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

    //4. we can change the property name by concatent two string

        let na = 'student';
        let objna = {
            [na + '_name']: 'bal'
        }
        console.log(objna);

    //5. new function decalar the object
    
        let objfun = {
            success: function () {
            console.log("balram")
            },
            display() {
            console.log("Dislapy the value")
            },
            'my function'() {  // function name use the space 
            console.log('This is my function');
            }
        }
        console.log(objfun.success());
        console.log(objfun.display());
        console.log(objfun['my function']());