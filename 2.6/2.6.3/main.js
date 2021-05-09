const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: "periodista"   
}
adalaber1.run = phrase => `Estoy ${phrase}`;
console.log(adalaber1.run('corriendo'));

adalaber1.runAMarathon = distance => `un maraton de ${distance} kilometros.`;
console.log(adalaber1.run('corriendo') + ' ' + adalaber1.runAMarathon(50));


console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.profession}`)


const adalaber2 = {
    name: 'Rocio',
    age: 25,
    profession: 'actriz'
}
console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.profession}`)

adalaber1.showBio = function(){
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profession;
}
console.log(adalaber1.showBio());

adalaber2.showBio = function(){
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profession;
}
console.log(adalaber2.showBio());