<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import AppPeopleList from './components/AppPeopleList.vue'
import AppAlert from './components/AppAlert.vue'
import AppLoader from './components/AppLoader.vue'

const name = ref('')
const people = ref([])
const alert = ref(null)
const isLoading = ref(false)

onMounted(async () => {
  await loadPeople()
})

async function createPerson() {
  const response = await fetch(
    'https://vue-with-http-81ae3-default-rtdb.europe-west1.firebasedatabase.app/people.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: name.value }),
    },
  )
  const firebaseData = await response.json()
  people.value.push({ id: firebaseData.name, firstName: name.value })
  name.value = ''
}

async function removePerson(id) {
  try {
    const { firstName } = people.value.find((person) => id === person.id)
    await axios.delete(
      `https://vue-with-http-81ae3-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`,
    )
    people.value = people.value.filter((person) => id !== person.id)
    alert.value = {
      type: 'primary',
      title: 'Успешно!',
      text: `Пользователь ${firstName} удалён`,
    }
  } catch (error) {
    console.warn(error.message)
  }
}

async function loadPeople() {
  try {
    isLoading.value = true
    await new Promise((resolve) => setTimeout(() => resolve(), 2000))
    const { data } = await axios.get(
      'https://vue-with-http-81ae3-default-rtdb.europe-west1.firebasedatabase.app/people.json',
    )
    if (!data) {
      throw new Error('Список людей пуст')
    }
    people.value = Object.entries(data).map(([key, value]) => ({
      id: key,
      ...value,
    }))
  } catch (error) {
    console.warn(error)
    alert.value = {
      type: 'danger',
      title: 'Ошибка!',
      text: error.message,
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="container">
    <AppAlert :alert="alert" @close="alert = null" />
    <form @submit.prevent="createPerson">
      <div class="card">
        <h2>Работа с базой данных</h2>
        <div class="form-control">
          <label for="name">Введите имя</label>
          <input type="text" id="name" v-model.trim="name" />
        </div>

        <button class="btn" type="submit" :disabled="!name.length">Создать</button>
      </div>
    </form>
    <AppLoader v-if="isLoading" />
    <AppPeopleList v-else :people="people.toReversed()" @load="loadPeople" @remove="removePerson" />
  </div>
</template>

<style scoped></style>
