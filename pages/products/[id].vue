<template>
    <div>
        <Head>
            <Title>Nuxt 3 Store | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductDetails :product="product"></ProductDetails>
    </div>
</template>

<script setup>
const params = useRoute().params

definePageMeta({
    layout: 'products'
})

const { data: product } = await useFetch(`https://fakestoreapi.com/products/${params.id}`, { key: params.id })

if (!product.value) {
    throw createError({statusCode: 404, message: 'Page not found.'})
}
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