<template>
    <div class="question">
        <h3>{{ question }}</h3>
        <div class="rating">
            <InputNumber class="poll-input" mode="currency" currency="TRY" locale="tr-TR" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    question: String,
});



</script>

<style scoped></style>