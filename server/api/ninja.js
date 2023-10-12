export default defineEventHandler(async (e) => {
    // handle query params
    const { name } = getQuery(e)

    const { age } = await readBody(e)

    return {
        message: `Hello, ${name}!... you are ${age} years old.`
    }
})