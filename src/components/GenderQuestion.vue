<template>
    <div class="question">
        <h3>Cinsiyetiniz nedir?</h3>
        <div class="rating">
            <RadioButton v-model="selectedValue" inputId="male" name="gender" value="erkek" />
            <label for="male">Erkek</label>
            <RadioButton v-model="selectedValue" inputId="female" name="gender" value="kadın" />
            <label for="female">Kadın</label>
            <RadioButton v-model="selectedValue" inputId="null" name="gender" value="belirtmek istemiyorum" />
            <label for="null">Belirtmek İstemiyorum</label>
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