<template>
    <div class="question">
        <h3>{{ question }}</h3>
        <div class="rating">
            <Rating v-model="internalValue" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);

// Model value prop, parent'tan veri alır
const props = defineProps({
    modelValue: {
        type: Number,
        default: null
    },
    question: String
});

// Local state for the rating
const internalValue = ref(props.modelValue);

// Watch for changes in internalValue to update parent via 'update:modelValue'
watch(internalValue, (newValue) => {
    // Emit the updated value to parent component
    emit('update:modelValue', newValue);
});
</script>

<style scoped>
/* Your styles here */
</style>
