{
    //* Class and Object

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        constructor(
            //? public --> paramiter properties --> automatic intialize by compilar
            public name: string,
            public species: string,
            public sound: string,
        ){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal('Doggy', 'dog', 'Ghew Ghew')
    const cat = new Animal('Tom', 'cat', 'Meaw Meaw')

    cat.makeSound()
    
    
}