let count = 1

class Animal {
    constructor(animalName, species, diet, habitat) {
        this.animal = {
            id: `${species}${count}`,
            animalName,
            species,
            diet,
            habitat
        }
    }

    getDescription() {
        return `The ${this.animal.animalName} is a type of ${this.animal.species}. It has a ${this.animal.diet} diet and lives in a ${this.animal.habitat} habitat.`
    }
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    // console.log('click')
    let obj = {}
    obj = { ...getInfo()}
    
    const animal = new Animal(obj.animalName, obj.species, obj.diet, obj.habitats)

    console.log(animal)
})

const getInfo =()=> {
    const animalName = document.getElementById('animalName').value 
    const species = document.getElementById('species').value 
    const diet = document.querySelector('input[name="diet"]:checked').value 

    const habitat = document.querySelectorAll('input[name="habitat"]')

    let habitats = []

    habitat.forEach(h => {
        h.checked ? habitats = [...habitats, h.value] : null

    })


    return { animalName, species, diet, habitats }
}

