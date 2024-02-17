<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import Icon from '@iconify/svelte';
    import { parseExchangeKR, parseExchangeEN, separateWithComma } from '$lib/utils/parser';

    export let data;
    const metadata = data.props.metadata
    let ratedata = data.props.ratedata

    let from = "USD";
    let to = "KRW";
    let amount = 1;
    let exchange = 0;
    let useCustomRate;
    let rate = (ratedata[to] / ratedata[from]);
    let displayEN = [];
    let displayKR = [];

    function updateExchange() {
        exchange = (amount * rate).toFixed(metadata[to].decimal_digits);
        displayEN = parseExchangeEN(exchange);
        displayKR = parseExchangeKR(exchange);
    }

    function updateRates() {
        rate = (ratedata[to] / ratedata[from]);
    }

    function switchCurrency() {
        [from, to] = [to, from];
        updateRates();
        updateExchange();
    }

    function toggleCustomRate() {
        useCustomRate = !useCustomRate;
        if (!useCustomRate) {
            updateRates();
            updateExchange();
        }
    }
</script>
<head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4934308997148894"
     crossorigin="anonymous"></script>
</head>
<form method="POST" action="?/convert" class="">
<div class="h-screen grid grid-rows-1fr-auto-auto max-w-[%75] container mx-auto p-4">
    <div class="bg-primary-400">
        <LightSwitch />
        <div class="flex items-center justify-center gap-4">

            <!-- From Field -->
            <label class="w-1/2 flex-col items-center justify-center">
                <span class="">From</span>
                <select bind:value={from}
                        on:change={updateRates}
                        on:change={updateExchange}
                        class="select">
                        <!-- size="3"> -->
                    <option value="USD">USD</option>
                    <option value="KRW">KRW</option>
                    <option value="EUR">EUR</option>
                </select>
            </label>

            <!-- Switch Button -->
            <label class="flex-col items-center justify-center">
                <span class="">&nbsp</span>
                <button on:click={switchCurrency}
                        type="button"
                        class="btn-icon variant-filled">
                        <Icon icon="mi:switch" />
                </button>
            </label>

            <!-- To Field -->
            <label class="w-1/2 flex-col items-center justify-center">
                <span class="">To</span>
                <select bind:value={to}
                        on:change={updateRates}
                        on:change={updateExchange}
                        class="select">
                        <!-- size="3"> -->
                    <option value="USD">USD</option>
                    <option value="KRW">KRW</option>
                    <option value="EUR">EUR</option>
                </select>
            </label>
        </div>        

        <div class="flex items-center justify-center gap-4">

            <!-- Currency Rate Field -->
            <label class="w-full flex-col items-center justify-center">
                <span class="">Exchange Rate</span>
                <div class="flex items-center justify-center gap-4">
                    <input bind:value={rate}
                           disabled={!useCustomRate}
                           on:input={updateExchange}
                           type="number"
                           placeholder="Amount"
                           class="input" />

                    <!-- Checkbox Daily Currency Rate -->
                    <label class="flex items-center justify-center text-nowrap">
                        <input on:click={toggleCustomRate}
                               type="checkbox"
                               checked={!useCustomRate}
                               class="checkbox" />
                        <span class="ml-2">Use Daily Rate</span>
                    </label>
                </div>
            </label>
        </div>

        <div class="flex-col items-center justify-center">
            <!-- Amount Field -->
            <span class="">Exchange Rate</span>
            <div class="w-full input-group input-group-divider grid-cols-[auto_1fr_auto]">
                <div>{metadata[from].symbol}</div>
                    <input type="number" bind:value={amount} on:input={updateExchange} placeholder="Amount" />
            </div>
        </div>
    </div>

    <!-- Display Results -->
    <div class="flex flex-col items-center justify-center bg-primary-500">
        {#if !isNaN(amount) && amount > 0}

            <p class="text-center text-2xl">{metadata[to].symbol + " " + separateWithComma(exchange)}</p>
            <p class="text-center mt-6">{displayEN + metadata[to].code}</p>
            <p class="text-center">{displayKR + " " +  metadata[to].code}</p>
        {/if}
    </div>

    <!-- Display Advertisements -->
    <div class="flex items-end justify-center bg-primary-600">
    </div>
</div>
</form>
