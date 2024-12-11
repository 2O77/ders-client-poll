<template>
    <div class="question">
        <h3>{{ question }}</h3>
        <div class="rating">
            <Rating />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    question: String,
});



</script>

<style scoped></style>