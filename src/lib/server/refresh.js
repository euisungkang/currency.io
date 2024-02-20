import fs from 'fs';
import { CURRENCY_KEY } from "$env/static/private";
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi(CURRENCY_KEY);
//
// export function getCurrencyRatesCache() {
//     return fs.readFileSync('../data/rate_data.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }
//         try {
//             const jsonObject = JSON.parse(data);
//             return jsonObject
//         } catch (parseError) {
//             console.error('Error parsing JSON:', parseError);
//         }
//     }); 
// }
//
