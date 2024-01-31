<template>
    <Navbar />
    <ContextField>
        <h3>文章</h3>
    </ContextField>
</template>

<script>
import ContextField from "@/components/ContextField.vue"
import Navbar from "@/components/NavBar.vue"

export default {
    name: 'ArticlesView',
    components: {
        ContextField,
        Navbar,
    }
}
</script>

<style></style>