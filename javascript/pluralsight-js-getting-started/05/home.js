let person = {
    name: 'yasen',
    age: 4,
    showInfo: function() {
        showMessage(this.name + " is " + this.age);
    }
};

person.showInfo();

//showMessage();