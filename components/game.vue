<template>
    <div class="w-fit h-fit rounded-xl flex flex-col bg-slate-600 text-white border-slate-800 border-b-8 p-10 m-5 text-4xl">
        <div class="flex justify-evenly p-2">
            <b>Current Score:</b>
            {{score}}
        </div>
        <div class="flex justify-evenly p-2">
            <b>Previous Score:</b>
            {{previousScore}}
        </div>
        <input class="rounded text-black outline-0 py-2 px-4 m-2" @keyup.enter="updateList" type="number" v-model="curInp" />
        <button class="m-2 p-4 bg-emerald-600 rounded-xl border-emerald-800 border-b-8" @click.prevent="updateList">Next</button>
    </div>
</template>

<script lang="ts">
import {watchEffect, ref, computed} from 'vue'

export default {
    name:"Game",
    setup(){
        const inpRecord = ref([])
        const curInp = ref(0)
        let previousScore = ref(0)
        let valid = 0

        //watchEffect method to check if value is divisible by 13
        watchEffect(()=>{
            if (curInp.value%13===0 && !(inpRecord.value.includes(curInp.value))){
                valid=0
            }else if(curInp.value%13!==0){
                valid=1
            }else{
                valid=2
            }
        })

        //update score method
        const score = computed(()=>{
            return ((13*inpRecord.value.length) + inpRecord.value.length).toFixed(2)
        })

        //updating the used number list based on the "valid" variable
        function updateList(){
            switch(valid){
                case 0:
                    inpRecord.value.push(curInp.value)
                    break

                case 1:
                    alert("Game Over\n"+curInp.value+" is not divisible by 13")
                    previousScore.value =eval(score.value)
                    inpRecord.value=[]
                    break

                case 2:
                    alert("Game Over\n"+curInp.value+" is already used!!")
                    previousScore.value =eval(score.value)
                    inpRecord.value=[]
            }
            curInp.value=0
        }

        return {
            score,
            inpRecord,
            curInp,
            previousScore,
            updateList
        }

    },
}
</script>