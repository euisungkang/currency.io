<script lang="ts">
    import { LightSwitch, tableMapperValues, Table } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
    import Icon from '@iconify/svelte';
    import { parseExchangeKR, parseExchangeEN, separateWithComma } from '$lib/utils/parser';
    import { Us, Kr, Eu, Jp } from 'svelte-flag-icons';

    export let data;
    const metadata = data.props.metadata
    let ratedata = data.props.ratedata

    let from = "USD";
    let to = "KRW";
    let amount;
    let exchange = 0;
    let useCustomRate;
    let rate = (ratedata[to] / ratedata[from]);
    let displayEN = [];
    let displayKR = [];
    let inputField;

    let date = new Date();
    let dateDisplay = date.getFullYear() + "." + date.getMonth() + "." + date.getDate();

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
        useCustomRate = false;
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

    function selectAll(event) {
        event.target.select();
    }

    const flagMap = {
        "USD": Us,
        "EUR": Eu,
        "KRW": Kr,
        "JPY": Jp,
    };

    const rateTableData = [];

    let position = 2;
    for (const [k, v] of Object.entries(metadata)) {
        if (k == "USD") {
            rateTableData.push({ position: 1, code: k, symbol: v.symbol, rate: "1" });
        } else {
            rateTableData.push({ position: position++, code: k, symbol: v.symbol, rate: Math.trunc(ratedata[k]*100)/100 + ".." }); 
        }
    }

    const rateTable: TableSource = {
        head: ['Code', 'Symbol', 'Rate'],
        body: tableMapperValues(rateTableData, ['code', 'symbol', 'rate']),
        meta: tableMapperValues(rateTableData, ['position', 'code', 'symbol', 'rate']),
    }
</script>

<head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4934308997148894"
         crossorigin="anonymous"></script>
</head>

<form method="POST" action="?/convert" class="">
<div class="h-screen grid grid-rows-1fr-auto-auto max-w-[%75] container mx-auto p-12">
        <LightSwitch class="absolute top-5 left-5"/>

        <div class="absolute bottom-5 right-5">
            <a href="https://github.com/euisungkang/currency.io" target="_blank" class="flex flex-row items-center">
                <p class="text-sm text-primary-800 mr-2">developed and maintained as an open-source project</p>
                <Icon icon="mdi:github" class="w-12 h-12" />
            </a>
        </div>

        <div class="grid grid-cols-3 space-x-8">

            <div class="flex flex-col items-center justify-center gap-2">
                <div class="flex justify-start items-center w-full">
                    <h1 class="text-l text-primary-800">Base Currency: <b>USD<b/></h1>
                </div>
                <Table source={rateTable} class="table-compact" />
                <p class="text-sm place-self-start text-primary-800">*exchange rates last updated on {dateDisplay}</p>
            </div>


            <div class="grid grid-rows-1fr-auto">
                <div class="flex flex-col items-center justify-end p-2">
                    <h1 class="text-xl mb-2"><b>Exchange</b></h1>
                    <div class="card p-6 flex justify-between items-center w-full relative z-10">
                        <svelte:component this={flagMap[from]} class="w-10 h-10" />
                        <select bind:value={from}
                                on:change={updateRates}
                                on:change={updateExchange}
                                class="select place-self-end w-1/3 ">
                            <option value="USD">USD</option>
                            <option value="KRW">KRW</option>
                            <option value="EUR">EUR</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </div>

                    <button on:click={switchCurrency}
                            type="button"
                            class="btn-icon variant-filled-surface mt-[-1rem] mb-[-1rem] z-20">
                            <Icon icon="heroicons-outline:switch-vertical" class="w-7 h-7" />
                    </button>

                    <div class="card p-6 flex justify-between items-center w-full relative z-10">
                        <svelte:component this={flagMap[to]} class="w-10 h-10" />
                        <select bind:value={to}
                                on:change={updateRates}
                                on:change={updateExchange}
                                class="select place-self-end w-1/3">
                            <option value="USD">USD</option>
                            <option value="KRW">KRW</option>
                            <option value="EUR">EUR</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </div>
                </div>

                <!-- Exchange Rate Field --> 
                <label class="flex flex-col items-center justify-start">
                    <div class="flex items-center justify-center gap-4">
                        <div class="flex flex-col items-center">
                            <span>Exchange Rate</span>
                            <input bind:value={rate}
                                   on:focus={selectAll}
                                   disabled={!useCustomRate}
                                   on:input={updateExchange}
                                   type="number"
                                   placeholder="Amount"
                                   class="input" />
                        </div>
                        <!-- Checkbox Daily Currency Rate -->
                        <div class="flex flex-col items-center">
                            <span>&nbsp</span>
                            <label class="flex items-center justify-center text-nowrap">
                                <input on:click={toggleCustomRate}
                                       type="checkbox"
                                       bind:checked={useCustomRate}
                                       class="chip {useCustomRate ? 'variant-filled' : 'variant-soft'} w-5 h-5" />
                                <span class="ml-2">Use Custom Rate</span>
                            </label>
                        </div>
                    </div>
                </label>
            </div>

            <!-- Amount Field --> 
            <div class="flex flex-col items-center justify-center">
                <div class="w-full input-group input-group-divider grid-cols-[auto_1fr_auto]">
                    <div>{metadata[from].symbol}</div>
                        <input type="number" bind:value={amount} bind:this={inputField} on:input={updateExchange} placeholder="Amount" />
                </div>
            </div>
        </div>


    <!-- Display Results -->
    <div class="flex flex-col items-center justify-center">
        {#if !isNaN(amount) && amount > 0}
            <p class="text-center text-3xl">{metadata[to].symbol + " " + separateWithComma(exchange)}</p>
            <p class="text-center text-xl mt-6">{displayEN + metadata[to].code}</p>
            <p class="text-center text-xl">{displayKR + " " +  metadata[to].code}</p>
        {:else}
        <button type="button" on:click={inputField.focus()}>
            <div>
                <p class="typed text-center text-3xl text-primary-800">type an amount</p>
            </div>
            <p class="text-center text-xl mt-6">&nbsp</p>
            <p class="text-center text-xl">&nbsp</p>
        </button>
        {/if}
    </div>

    <!-- Display Advertisements -->
    <div class="flex items-end justify-center">
    </div>
</div>
</form>

<style>
    .typed{
        overflow: hidden;
        border-right: .05em solid theme('colors.primary.800');
        white-space: nowrap;
        width: 0%;
        animation:
            typing 2.0s forwards,
            blink 1.5s infinite;
    }
    @keyframes typing {
        from { width: 0% }
        to { width: 100% }
    }
    @keyframes blink {
        from { border-right-color: theme('colors.primary.800'); }
        60% { border-right-color: transparent; }
        to { border-right-color: theme('colors.primary.800'); }
    }
</style>
