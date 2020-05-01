const LinkedList = require('./linkedList');

class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        // Find the slot where this key should be in
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            this._hashTable[index] = new LinkedList();
            this.length++;
        }
        this._hashTable[index].insertLast({
            key,
            value,
            DELETED: false
        });
        console.log(this._hashTable[index]);
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;
        return start;
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt
        this.length = 0;
        this._hashTable = [];

        for (const slot of oldSlots) { 
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }
}

HashMap.MAX_LOAD_RATIO = 0.7;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;