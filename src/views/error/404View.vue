<template>
    <Navbar />
    <div class="card text-center center">
        <div class="card-header">
            <div class="container">
                <h1>404 Not Found</h1>
            </div>
            <div class="card-body">
                <h5 class="card-title">你似乎访问了不正确的地址...</h5>
                <p class="card-text">回到主页继续</p>
                <!--回到Home页面按钮-->
                <a href="" class="btn btn-primary">
                    <router-link class="dropdown-item nav-link" :to="{ name: 'home' }">Home</router-link>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue"
export default {
    name: '404View',
    components: {
        Navbar,
    }
}
</script>

<style scoped>
div.center {
    margin: 0 auto;
    width: 50%;
}
</style>

