<template>
    <div class="container">
        <h1>Firmamızın Anket Sitesine Hoşgeldiniz</h1>
        <div class="box">
            <h3>Manuel Olarak ID Girişi için Burayı Kullanabilirsiniz</h3>
            <InputText placeholder="Anket ID" class="input" v-model="pollID" @keyup.enter="navigateToPoll" />
            <Button @click="navigateToPoll">Ankete Git</Button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const pollID = ref('');


const navigateToPoll = async () => {
    try {
        if (pollID.value.trim() === '') {
            alert('Lütfen geçerli bir Anket ID girin.');
            return;
        }
        await router.push(`/poll/${pollID.value}`);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            alert('404 Hatası: Anket bulunamadı.');
            return
        } else {
            alert('Bir hata oluştu: ' + error.message);
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    gap: 20px;
}

.box {
    width: 400px;
    height: 300px;
    background-color: var(--p-content-background);
    border: 1px solid var(--p-content-border-color);
    border-radius: 10px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: transform 0.3s ease-in-out;
    transform: scale(1);
}

.box:hover {
    transform: scale(1.05);
}

.box h3 {
    text-align: center;
}

.input {
    width: 80%;
}
</style>