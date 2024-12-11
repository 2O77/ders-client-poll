<template>
    <div class="question">
        <h3>Doğum tarihiniz nedir?</h3>
        <div class="rating">
            <DatePicker v-model="buttondisplay" showIcon fluid :showOnFocus="false" inputId="buttondisplay" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    question: String,
});

const birthDate = ref(null);

</script>

<style scoped></style>