<template>
    <div class="question">
        <h3>{{ question }}</h3>
        <div class="rating">
            <RadioButton v-model="internalValue" inputId="male" name="gender" value="male" />
            <label for="male">Erkek</label>

            <RadioButton v-model="internalValue" inputId="female" name="gender" value="female" />
            <label for="female">Kadın</label>

            <RadioButton v-model="internalValue" inputId="null" name="gender" value="belirtmek istemiyorum" />
            <label for="null">Belirtmek İstemiyorum</label>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {
        type: String,
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
