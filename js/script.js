const arr = ['a', 'b', 'c'];
arr[10] = 34976;

console.log(arr);



const arrobj = {
    a: 'a',
    1: 'b',
    2: 'c'
};
const b = 'b';

arrobj['b'] = '12384168f';

console.log(arrobj['b']);
console.log(arrobj.b);




const storeName = "my store";

const storeDescription = {
    budget : 10000,
    employees : ['Mari', 'Alice', 'John'],
    products : {
        water : 5,
        juice : 15
    },
    open : true
};