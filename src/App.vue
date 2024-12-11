<template>
  <div class="page">
    <div class="title-bar">
      <h1>
        Ürün Memnuniyet Anketi
      </h1>
    </div>
    <div class="questions-bar">
      <AgeQuestion />
      <GenderQuestion />
      <TrueFalseQuestion question="Bu kıyafeti alırken kalite beklentiniz karşılandı mı?" />
      <TrueFalseQuestion question="Ürünün tasarımı beklentilerinizi karşıladı mı?" />
      <TrueFalseQuestion question="Kıyafetin bedeni size uygun mu?" />
      <TrueFalseQuestion question="Kıyafetin dikişleri ve işçiliği beklentilerinizi karşıladı mı?" />
      <TrueFalseQuestion
        question="Kıyafet alırken sağladığınız memnuniyet, markanın genel kalitesine dair beklentilerinizi artırdı mı?" />
      <TrueFalseQuestion
        question="Kıyafeti satın aldıktan sonra, ürünün genel kalitesine dair herhangi bir olumsuz deneyim yaşadınız mı?" />
      <InputQuestion question="Ürünü alırken fiyat beklentiniz ne kadardı?" />
      <RatingQuestion question="Ürünümüze genel değerlendirmeniz kaç puan olurdu?" />
    </div>
    <div class="button-bar">
      <Button>Anketi Tamamla</Button>
    </div>
  </div>
</template>

<script setup>
import AgeQuestion from './components/AgeQuestion.vue';
import GenderQuestion from './components/GenderQuestion.vue';
import InputQuestion from './components/InputQuestion.vue';
import RatingQuestion from './components/RatingQuestion.vue';
import TrueFalseQuestion from './components/TrueFalseQuestion.vue';
</script>

<style>
.page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  gap: 50px;
}

.questions-bar {
  width: max-content;
  max-width: 80%;
  height: 75%;
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