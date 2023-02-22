const person={
    firstName: 'Mosh',
    lastName: 'Karia',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts=value.split(' ')
        this.firstName=parts[0]
        this.lastName=parts[1]

    }
};
person.fullName="Smith Tanna"
console.log(person.fullName)