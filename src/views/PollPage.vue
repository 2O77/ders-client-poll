<template>
    <div class="page">
        <div class="title-bar">
            <h1>Ürün Memnuniyet Anketi</h1>
            <p><strong>Ürün Türü:</strong> {{ product.type }}</p>
            <p><strong>Ürün Boyutu:</strong> {{ product.size }}</p>
            <p><strong>Ürün Fiyatı:</strong> {{ product.price }} tl</p>
        </div>
        <div class="questions-bar">
            <AgeQuestion v-model="form.client_birthdate" />
            <GenderQuestion v-model="form.client_gender" />
            <TrueFalseQuestion question="Bu kıyafeti alırken kalite beklentiniz karşılandı mı?"
                v-model="form.true_false_question_1" />
            <TrueFalseQuestion question="Ürünün tasarımı beklentilerinizi karşıladı mı?"
                v-model="form.true_false_question_2" />
            <TrueFalseQuestion question="Kıyafetin bedeni size uygun mu?" v-model="form.true_false_question_3" />
            <TrueFalseQuestion question="Kıyafetin dikişleri ve işçiliği beklentilerinizi karşıladı mı?"
                v-model="form.true_false_question_4" />
            <TrueFalseQuestion
                question="Kıyafet alırken sağladığınız memnuniyet, markanın genel kalitesine dair beklentilerinizi artırdı mı?"
                v-model="form.true_false_question_5" />
            <TrueFalseQuestion
                question="Kıyafeti satın aldıktan sonra, ürünün genel kalitesine dair herhangi bir olumsuz deneyim yaşadınız mı?"
                v-model="form.true_false_question_6" />
            <InputQuestion question="Ürünü alırken fiyat beklentiniz ne kadardı?" v-model="form.expected_price" />
            <RatingQuestion question="Ürünümüze genel değerlendirmeniz kaç puan olurdu?" v-model="form.rating" />
        </div>
        <div class="button-bar">
            <Button @click="submitPoll">Anketi Tamamla</Button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GenderQuestion from '../components/GenderQuestion.vue';
import InputQuestion from '../components/InputQuestion.vue';
import RatingQuestion from '../components/RatingQuestion.vue';
import TrueFalseQuestion from '../components/TrueFalseQuestion.vue';
import axios from 'axios';
import AgeQuestion from '@/components/AgeQuestion.vue';
import router from '@/router';

axios.defaults.baseURL = 'http://localhost:3000';

const route = useRoute();
const pollID = route.params.pollID;

const form = ref({
    client_birthdate: null,
    client_gender: null,
    rating: null,
    expected_price: null,
    true_false_question_1: null,
    true_false_question_2: null,
    true_false_question_3: null,
    true_false_question_4: null,
    true_false_question_5: null,
    true_false_question_6: null,
});

const product = ref({
    type: 'Yükleniyor...',
    size: 'Yükleniyor...',
    is_sold: 'Yükleniyor...',
    price: 'Yükleniyor...',
});

onMounted(async () => {
    try {
        const response = await axios.get(`/poll/${pollID}`);
        const data = response.data;

        form.value.client_birthdate = data.client_birthdate || null;
        form.value.client_gender = data.client_gender || null;
        form.value.rating = data.rating || null;
        form.value.expected_price = data.expected_price || null;
        form.value.true_false_question_1 = data.true_false_question_1 || null;
        form.value.true_false_question_2 = data.true_false_question_2 || null;
        form.value.true_false_question_3 = data.true_false_question_3 || null;
        form.value.true_false_question_4 = data.true_false_question_4 || null;
        form.value.true_false_question_5 = data.true_false_question_5 || null;
        form.value.true_false_question_6 = data.true_false_question_6 || null;

        product.value.type = data.type || 'Bilinmiyor';
        product.value.size = data.size || 'Bilinmiyor';
        product.value.is_poll_solved = data.is_poll_solved ? 'Çözüldü' : 'Çözülmedi';
        product.value.price = data.price || 'Bilinmiyor';
    } catch (error) {
        if (error.response && error.response.status === 403) {
            alert('Bu anket zaten çözülmüş!');
        } else {
            console.error('Anket verileri yüklenemedi:', error);
            alert('Anket verileri yüklenirken bir hata oluştu.');
        }
    }
});

const submitPoll = async () => {
    if (
        !form.value.client_gender ||
        !form.value.client_birthdate ||
        form.value.rating === null ||
        form.value.expected_price === null
    ) {
        console.log(form.value);
        alert('Lütfen tüm alanları doldurun.');
        return;
    }


    try {
        if (form.value.client_birthdate instanceof Date) {
            form.value.client_birthdate = form.value.client_birthdate.toISOString().split('T')[0];
        }

        console.log(form.value);
        const response = await axios.post(`/poll/${pollID}`, form.value);
        alert(response.data.message);
        router.push('/');
    } catch (error) {
        if (error.response && error.response.status === 403) {
            alert('Bu anket zaten çözülmüş!');
        } else {
            console.error('Anket gönderilemedi:', error);
            alert('Anket gönderilirken bir hata oluştu.');
        }
    }
};


</script>

<style>
.title-bar {
    text-align: center;
    margin-bottom: 1rem;
}

.product-info {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.product-info p {
    margin: 0.5rem 0;
}

.page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    gap: 15px;
}

.questions-bar {
    width: max-content;
    max-width: 80%;
    height: 65%;
    border-right: 1px solid var(--p-button-secondary-border-color);
    border-left: 1px solid var(--p-button-secondary-border-color);
    overflow-y: auto;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-right: 15px;
    padding-left: 15px;
}


.question {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    height: 200px;
}

.question h3 {
    padding-right: 5px;
    padding-left: 5px;
    text-align: center;
    word-wrap: break-word;
    margin: 0;
    font-weight: 500;
}

.rating {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.title-bar h1 {
    margin: 0
}
</style>