const age = [45, 44, 15];
const ages2 = [32, 65, 21];
const ages3 = [21, 51, 32];
const allAges = age.concat(ages2).concat([22]).concat(ages3);
const allAges2 = [...age, ...ages2, 5, ...ages3];
console.log(allAges2);


const takaPoisa = [45, 95, 35, 55];
const maxium = Math.max(...takaPoisa);
console.log(maxium);