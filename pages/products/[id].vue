<template>
    <div>
        <h2>Product details for {{ params.id }}.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta delectus, nam modi id assumenda consectetur aut praesentium quaerat reiciendis! Debitis?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta delectus, nam modi id assumenda consectetur aut praesentium quaerat reiciendis! Debitis?</p>
    </div>
</template>

<script setup>
const params = useRoute().params

definePageMeta({
    layout: 'products'
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