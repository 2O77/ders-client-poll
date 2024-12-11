<template>
    <div class="question">
        <h3>{{ question }}</h3>
        <div class="rating">
            <InputNumber class="poll-input" mode="currency" currency="TRY" locale="tr-TR" v-model="internalValue" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);


const props = defineProps({
    modelValue: {
        type: [Number, String],
        default: null
    },
    question: String,
});

// Internal state to manage the value of InputNumber
const internalValue = ref(props.modelValue);

// Watch for changes in internalValue and emit them back to the parent
watch(internalValue, (newValue) => {
    emit('update:modelValue', newValue);
});
</script>

<style scoped>
/* Your styles here */
</style>
