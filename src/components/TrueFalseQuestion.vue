<template>
    <div class="question">
        <h3>{{ question }}</h3>
        <div class="rating">
            <RadioButton v-model="internalValue" inputId="true" name="truefalse" :value="true" />
            <label for="true">Evet</label>

            <RadioButton v-model="internalValue" inputId="false" name="truefalse" :value="false" />
            <label for="false">Hayır</label>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const emit = defineEmits(['update:modelValue']);


const props = defineProps({
    modelValue: {
        type: Boolean,
        default: null
    },
    question: String
});

// Local state for the radio buttons
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
