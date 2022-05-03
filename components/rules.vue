<template>
    <div class="flex flex-col items-center bg-amber-600 text-white p-10 rounded-xl m-5 border-amber-800 border-b-8">
        <h2 class="text-5xl pb-2">Rules:</h2>
        <ul class="list-disc text-2xl px-10">
            <li>You have to enter numbers that are multiples of 13</li>
            <li>You cannot repeat a number once entered</li>
            <li>The higher you go, the more score you get</li>
            <li>Let's see how high you can get</li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name:"Rules"
}
</script>