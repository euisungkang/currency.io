<script>
    import metadata from '$lib/data/metadata.json';
    import ratedata from '$lib/data/rate_data.json';
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import Icon from '@iconify/svelte';

    const krwDenominations = ["", "만", "억", "조", "경", "해", "자", "겁"];
    const usdDenominations = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion"];
    
    let from = "USD";
    let to = "KRW";
    let amount = 0;
    let exchange = 0;
    let displayEN = [];
    let displayKR = [];

    function updateExchange() {
        let baseAmount = amount / ratedata[from];
        exchange = (baseAmount * ratedata[to]).toFixed(metadata[to].decimal_digits);
        displayEN = parseExchangeEN(exchange);
        displayKR = parseExchangeKR(exchange);
        // console.log(amount + '\n' + from + '\n' + to + '\n' + baseAmount);
    }

    function switchCurrency() {
        [from, to] = [to, from];
        updateExchange();
    }

    function parseExchangeEN(amount) {
        let amountString = Math.trunc(amount).toString();

        let index = 0;
        let chunks = [];
        for (let i = amountString.length; i > 0; i -= 3) {
            let substr = parseInt(amountString.substring(Math.max(i - 3, 0), i)).toString();
            chunks.unshift(substr + " " + usdDenominations[index]);
            index++;
        }

        return chunks;
    }

    function parseExchangeKR(amount) {
        let amountString = Math.trunc(amount).toString();
        
        let index = 0;
        let chunks = [];
        for (let i = amountString.length; i > 0; i -= 4) {
            let substr = parseInt(amountString.substring(Math.max(i - 4, 0), i)).toString();
            chunks.unshift(substr + krwDenominations[index]);
            index++;
        }

        return chunks;
    }

</script>

<LightSwitch />
<form method="POST" action="?/convert" class="flex flex-col items-center justify-center min-h-screen">
    <div class="space-y-4 w-full max-w-md mx-auto">

        <div class="flex justify-between gap-4">
            <!-- From Field -->
            <label class="from block flex-1">
                <span class="block text-sm font-medium text-gray-700">From</span>
                <select bind:value={from} on:change={updateExchange} class="select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="USD">USD</option>
                    <option value="KRW">KRW</option>
                    <option value="EUR">EUR</option>
                </select>
            </label>

            <!-- To Field -->
            <label class="to block flex-1">
                <span class="block text-sm font-medium text-gray-700">To</span>
                <select bind:value={to} on:change={updateExchange} class="select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="USD">USD</option>
                    <option value="KRW">KRW</option>
                    <option value="EUR">EUR</option>
                </select>
            </label>
        </div>        

        <!-- Amount Field -->
        <label class="amount block">
            <span class="block text-sm font-medium text-gray-700">Amount</span>
            <input bind:value={amount} on:input={updateExchange} class="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="number" placeholder="Amount" />
        </label>

        <!-- Switch Button -->
        <div class="flex justify-center">
            <button on:click={switchCurrency} type="button" class="btn-icon variant-filled"><Icon icon="mi:switch" /></button>
        </div>

        <!-- Display Results -->
        <p class="text-center">{metadata[to].symbol + " " + exchange}</p>
        <p class="text-center mt-6">{displayEN + metadata[to].code}</p>
        <p class="text-center">{displayKR + " " +  metadata[to].code}</p>
    </div>
</form>
