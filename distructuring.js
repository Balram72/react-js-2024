// distructuring
//***************

// distructuring array
    let user = ['balram', 22]
    let [username, ages] = user;
    console.log(username, ages);

// assign defult value to an array
    let user2 = [, 22];
    let [name2 = 'bs', age2] = user2
    console.log(name2, age2)

 // distructuring Object
    let userobj = {
        myname: 'Bs',
        myemail: 'bs@gmail.com'
    }
    let { myname, myemail } = userobj;
    console.log(myname, myemail)