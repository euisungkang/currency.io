import fs from 'fs';
import { CURRENCY_KEY } from "$env/static/private";
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

export async function GET() {
    const fci= new Freecurrencyapi(CURRENCY_KEY);

    const date = new Date();
    console.log(date.toLocaleString() + " Currency Rates Updated");

    updateCurrencyRates(fci);

    return new Response("Currency Rates updated: " + date.toLocaleString(), { status: 200 });
}
async function updateCurrencyRates(fci) {
    await fci.latest({
        base_currency: 'USD',
    }).then(response => {
        const jsonString = JSON.stringify(response.data, null, 4)

        fs.writeFileSync('./src/lib/data/ratedata.json', jsonString, (err) => {
            if (err) {
                console.error('An error occurred:', err);
                return;
            }
            console.log('JSON data written to rate_data.json');
        });
    }).catch((err) => {
        console.error("Could not connect to currency API: " + err);
    });
}