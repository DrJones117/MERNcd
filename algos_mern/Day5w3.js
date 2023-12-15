/*
    Given an array of ailments, and an array of medication objects that have a nested array of treatedSymptoms
    return the medication name(s) that treats the most given symptoms
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null
const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

function webMD(ailments, meds) {
    const temp = [];
    const result = [];

    for (const i in meds) {
        for (const j in meds[i].treatableSymptoms) {
            for (const k in ailments) {
                if (meds[i].treatableSymptoms[j] === ailments[k]) {
                    temp.push(meds[i].name)
                }
            }
        }
    }

    for (const i in meds) {
        if (temp.filter((med) => med === meds[i].name).length === ailments.length) {
            result.push(meds[i].name)
        }
    }
    return result
} 

console.log(webMD(["pain"], medications))
console.log(webMD(["pain", "inflammation", "depression"], medications))
console.log(webMD(["existential dread"], medications))