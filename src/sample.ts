import sample from './input-sample.json'

const items = sample.Items
const buyers = sample.Buyers

// Total Transactions
const transactions = sample.Transaction
let count = transactions;
console.log(count.length);

// Best Selling Items
let bestSellingItem = "";
// let key_counter_trx = Object.keys(trx)
// let temp = 0

// key_counter_trx.forEach(key => {
//     if (trx[key] > temp) {
//         temp = trx[key]
//         bestSellingItem = key
//     }
// })

// console.log(key_counter_trx)
console.log(bestSellingItem)


// Revenue
// let revenue = sample.Transaction;
// console.log(sample.Transaction);

// transactions.forEach(trx => {
//     if (!totalTransaction) {
//         totalTransaction = trx.qty
//     } else {
//         totalTransaction += trx.qty
//     }
// })


// Summmary
let summary = [{
    totalTransaction: count.length,
    bestSellingItem: bestSellingItem,
    bestSellingCategory: [],
    rpc: [],
    revenue: 0,
    bestSpenders: []

}]

// console.log(JSON.stringify(summary))
console.log(summary)







// export interface TisPos {
//     Items:       Item[];
//     Buyers:      Buyer[];
//     Transaction: Transaction[];
// }

// export interface Transaction {
//     item:  string;
//     qty:   number;
//     buyer: string;
// }

// export interface Buyer {
//     name: string;
//     type: string;
// }

// export interface Item {
//     name:   string;
//     type:   string;
//     prices: Price[];
// }

// export interface Price {
//     priceFor: string;
//     price:    number;
// }

