<template>
    <Navbar />
    <ContextField>
        <h3>项目</h3>
    </ContextField>
    <TextBoarder>
        待补充
    </TextBoarder>
</template>

<script>
import Navbar from "@/components/NavBar.vue"
import ContextField from '@/components/ContextField.vue'
import TextBoarder from '@/components/TextBoarder.vue'

export default {
    components: {
        ContextField,
        Navbar,
        TextBoarder,
    },

}
</script>

<style></style>