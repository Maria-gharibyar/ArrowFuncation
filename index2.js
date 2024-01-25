let pesron={
    FirstName:'Maria',
    LastName:'Gharibyar',
    Email:'Mariagharibyar@gmail.com',
    phone:23908799

}

const animals=['cat','dog','mouse','elephent'];
// with const you can not change the index but with let you can change

// const ani=animals[3];
// console.log(ani);
let phone='test';
let address='Washigton DC USA';
pesron={...pesron,address,phone}
console.log(pesron);



const [firstanimal,secoundanimal,...another]=animals;

console.log(firstanimal);
//this is objects

const fs=pesron.FirstName;
console.log(fs);


// const{FirstName,LastName}=pesron;
// console.log(LastName);

