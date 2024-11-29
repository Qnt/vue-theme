<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>
      <!-- <div class="form-control" :class="{ invalid: errors.name }">
        <label for="name">Как тебя зовут?</label>
        <input v-model.trim="name" type="text" id="name" placeholder="Введи имя" />
        <small v-if="errors.name">{{ errors.name }}</small>
      </div> -->

      <AppInput
        v-model="name"
        placeholder="Введите имя"
        label="Как тебя зовут?"
        :error="errors.name ?? ''"
      />

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input v-model.number="age" type="number" id="age" min="0" max="100" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select v-model="city" id="city">
          <option value="ufa">Уфа</option>
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input v-model="relocate" value="yes" type="radio" name="trip" /> Да</label>
        </div>

        <div class="checkbox">
          <label><input v-model="relocate" value="no" type="radio" name="trip" /> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label
            ><input v-model="skills" name="skills" value="pinia" type="checkbox" /> Pinia</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input v-model="skills" name="skills" value="vue cli" type="checkbox" /> Vue CLI</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input v-model="skills" name="skills" value="vue router" type="checkbox" /> Vue
            Router</label
          >
        </div>
      </div>
      <div class="form-checkbox">
        <span class="label">Правила компании</span>
        <div class="checkbox">
          <label><input v-model="agree" name="agree" type="checkbox" /> Согласен</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppInput from './components/AppInput.vue'

const name = ref('')
const age = ref(23)
const city = ref('ufa')
const relocate = ref('no')
const skills = ref([])
const agree = ref(false)
const errors = ref({
  name: null,
})

function isFormValid() {
  let isValid = true
  if (!name.value.length) {
    errors.value.name = 'Имя не может быть пустым.'
    isValid = false
  } else {
    errors.value.name = null
  }
  return isValid
}

function submitForm() {
  if (isFormValid()) {
    console.group('formData')
    console.log('Name:', name.value)
    console.log('Age:', age.value)
    console.log('Age:', city.value)
    console.log('Relocate:', relocate.value)
    console.log('Skills:', skills.value.toString())
    console.log('Agree:', agree.value)
    console.groupEnd()
  }
}
</script>

<style scoped>
.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: red;
}
</style>
