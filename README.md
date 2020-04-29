1.  a. No
    b. 'Sauron', 'Frodo', yes, my theory is that when you set a new item with the same key as an old item, the new value replaces the old value.
    c. The capacity is 24, the initial capacity is 8 and the max load ratio is 0.5, therefore when you reach a length of 4, the capacity is then multiplied by the size ratio, 3 in this case, and 3 * 8 = 24. That capacity will remain until the load ratio surpasses 12 (length + deleted + 1)

2.  it will log 10 and then log 20 because the get method returns the value of the provided key.

3.  a. [
            {key: 22},
            {key: 88},
            {},
            {},
            {key: 4},
            {key: 15},
            {key: 28},
            {key: 17},
            {key: 59},
            {},
            {key: 31},
            {key: 10}
                ]
    b.  [
            {},
            {key: 28, next: {key: 19, next: {key: 10}}},
            {key: 20},
            {key: 12},
            {},
            {key: 5},
            {key: 15, next: {key: 33}},
            {},
            {key: 17}
                ]