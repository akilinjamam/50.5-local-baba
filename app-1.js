// const election = ['alomgir', 'jashim', 'illiyas kanchon', 'jayed khan', 'jayed khan', 'jayed khan', 'razzak', 'nipun apu', 'jayed khan'];

// console.log(election);


// const electionTwo = {
//     alomgir: 1,
//     jashim: 1,
//     illiyasKanchon: 1,
//     jayedKhan: 4,
//     razzak: 1,
//     nipun: 1,
// }

// console.log(electionTwo);

let db = {}

const addTwoDb = (item) => {
    // db.alom = 1,
    //     db['alom'] = 1,
    //     db[item] = 1

    const storedItem = localStorage.getItem('nayok');

    if (storedItem) {
        db = JSON.parse(storedItem)
    }

    if (item in db) {
        db[item] = db[item] + 1
    } else {
        db[item] = 1
    }

    localStorage.setItem('nayok', JSON.stringify(db))
}


const removeFromDb = (item) => {

    const storedItem = JSON.parse(localStorage.getItem('nayok'));

    if (storedItem) {
        delete storedItem[item];
        localStorage.setItem('nayok', JSON.stringify(storedItem));
    }


}

console.log(db);


