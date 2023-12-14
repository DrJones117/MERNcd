/*
    Create a function to determine the max amount of
    servings that can be made based on a recipe and
    available ingredients.

    Input:
    - recipe object where keys are ingredient names
    and values are unit required (int)
    - available ingredients object where keys are ingredient
    names and values are unit available (int)

    Output:
    - int (max servings)

    Side note (super extra challenge version): Realistically, the values
    would be an object as well with the keys: unit (unit of measure), and amount.
    If the available ingredient was stored in a different unit,
    a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200
};

const available = {
    "organic fat": 990,
    "birds nest": 10,
    "live squid": 1,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1
};


// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function getMaxServings(recipe, ingredients) {
    let amount = null;
    for (let i in ingredients) {
        if (amount > ingredients[i] / recipe[i] || amount == null) {
            amount = ingredients[i] / recipe[i];
        }
    }
    return Math.floor(amount);
}

console.log(getMaxServings(recipe, available))















const recipe2 = {
    "organic fat": {
        pounds: 99
    },
    "live squid": {
        ounces: 20
    },
    "birds nest": {
        ounces: 1
    },
    "fried flesh": {
        ounces: 50
    },
    "spicy": {
        ounces: 5
    },
    "gourmet memes": {
        ounces: 4200
    }
};

const available2 = {
    "organic fat": {
        ounces: 990
    },
    "birds nest": {
        ounces: 10
    },
    "live squid": {
        pounds: 6060
    },
    "fried flesh": {
        pounds: 10
    },
    "spicy": {
        pounds: 50
    },
    "gourmet memes": {
        pounds: 42000
    },
    "sugar": {
        pounds: 9001
    },
    "spice": {
        pounds: 5
    },
    "everything nice": {
        pounds: 1
    }
};

function getMaxServings2(recipe, ingredients) {
    let amount = null;
    let temp1 = 0;
    let temp2 = 0;
    let conversionTable = {
        pounds: 16
    }

    for (let i in ingredients) {
        for (let j in ingredients[i]) {
            if (j == "pounds") {
                temp1 = conversionTable[j] * ingredients[i][j];
            } else {
                temp1 = ingredients[i][j];
            }
        }

        for (let j in recipe[i]) {
            if (j == "pounds") {
                temp2 = conversionTable[j] * recipe[i][j];
            } else {
                temp2 = recipe[i][j];
            }
        }

        if (temp2 / temp1 < amount || amount == null) {
            amount = temp2 / temp1;
        }
    }
    return Math.floor(amount)
}


console.log(getMaxServings2(recipe2, available2))