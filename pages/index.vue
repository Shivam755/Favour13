<template>
    <div class="flex flex-col items-center bg-sky-500 h-screen w-screen">
        <h1 class="text-7xl text-bold text-white bg-purple-500 w-fit rounded-xl text-center m-5 px-96 py-10 border-b-8 border-purple-700">Enter multiples of 13:</h1>
        <div class="w-full flex justify-evenly">
            <Rules/>
            <Game />
        </div>
    </div>
</template>

<script lang="ts">
import Rules from '@/components/rules.vue'
import Game from '@/components/game.vue'

export default {
    name:"Index",
    components:{
        Rules,
        Game
    },
}
</script>