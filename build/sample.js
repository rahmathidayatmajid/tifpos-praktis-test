"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_sample_json_1 = __importDefault(require("./input-sample.json"));
const items = input_sample_json_1.default.Items;
const buyers = input_sample_json_1.default.Buyers;
// Total Transactions
const transactions = input_sample_json_1.default.Transaction;
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
console.log(bestSellingItem);
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
    }];
// console.log(JSON.stringify(summary))
console.log(summary);
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
