<template>
    <div class="question">
        <h3>{{ question }}</h3>
        <div class="rating">
            <RadioButton v-model="selectedValue" inputId="true" name="truefalse" value="true" />
            <label for="true">Evet</label>
            <RadioButton v-model="selectedValue" inputId="false" name="truefalse" value="false" />
            <label for="false">Hayır</label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    question: String,
});

const selectedValue = ref(null);
</script>

<style scoped></style>