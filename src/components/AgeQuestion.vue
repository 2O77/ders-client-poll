<template>
    <div class="question">
        <h3>Doğum tarihiniz nedir?</h3>
        <div class="rating">
            <DatePicker v-model="client_birthdate" showIcon fluid :showOnFocus="false" inputId="client_birthdate"
                dateFormat="yy/mm/dd" @change="formatDate" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    question: String,
});

// Bu ref, dışarıya aktarılacak olan değeri temsil eder
const client_birthdate = ref(null);

// DatePicker'den gelen değişiklikleri formatlamak
const formatDate = (date) => {
    // Tarihi istediğiniz formatta değiştirme
    const formattedDate = new Date(date).toISOString().split('T')[0];
    // Bu formatlanmış değeri dışarıya iletmek
    client_birthdate.value = formattedDate;
};

// Değişiklik olduğunda client_birthdate değerini dışarıya gönder
watch(client_birthdate, (newValue) => {
    // Değeri dışarıya (parent component) iletmek için update:modelValue kullanılır
    emit('update:modelValue', newValue);
});
</script>
