<template>
    <div class="container content-field">
        <div class="card">
            <div class="card-body">
                <h5>
                    <slot></slot>
                </h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextBoarder',
}
</script>

<style>
div.content-field {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>