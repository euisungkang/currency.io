import "fs";
import Freecurrencyapi from "@everapi/freecurrencyapi-js";
new Freecurrencyapi(process.env.CURRENCY_KEY);
function load() {
}
const actions = {
  convert: async ({ request }) => {
    console.log(await request.formData());
  }
};
export {
  actions,
  load
};
