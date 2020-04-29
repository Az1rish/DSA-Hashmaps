const HashMap = require('./hashMap');


function main() {
    let lotr = new HashMap();

    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;

    lotr.set('Hobbit','Bilbo');
    lotr.set('Hobbit','Frodo');
    lotr.set('Wizard','Gandalf');
    lotr.set('Human','Aragorn');
    lotr.set('Elf','Legolas');
    lotr.set('Maiar','The Necromancer');
    lotr.set('Maiar','Sauron');
    lotr.set('RingBearer','Gollum');
    lotr.set('LadyOfLight','Galadriel');
    lotr.set('HalfElven','Arwen');
    lotr.set('Ent','Treebeard');

    return lotr;
}

// console.log(main());
console.log(main().get('Maiar'));
console.log(main().get('Hobbit'));