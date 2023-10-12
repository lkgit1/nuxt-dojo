<template>
    <div>
        <h2>About.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta delectus, nam modi id assumenda consectetur aut praesentium quaerat reiciendis! Debitis?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta delectus, nam modi id assumenda consectetur aut praesentium quaerat reiciendis! Debitis?</p>
        <div>{{ data.message }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=LK', {
    method: 'post',
    body: { age: 25 }
})
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>