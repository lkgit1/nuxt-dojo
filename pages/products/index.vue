<template>
    <div>
        <h2>Products.</h2>
        
        <div class="grid grid-cols-4">
            <div v-for="p in products">
                <ProductCard :product="p"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Nuxt 3 Merch',
    meta: [
        { name: 'description', content: 'Merch page!' }
    ]
})

definePageMeta({
    layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
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