<template>
    <Navbar />
    <ContextField>
        <div class="card-body">
            <h3 id="Introduction"><a href="#Introduction" class="headerlink" title="Introduction"></a>网站更新及计划</h3>
            <li>2021/2/1</li>
            <ul>
                <li>增加了网站主页</li>
                <li>增加了网站导航栏</li>
                <li>增加了网站底部备案信息</li>
            </ul>
            <hr>
            <li>计划</li>
            <ul>
                <li>文章界面实现MarkDown语法</li>
                <li>部署项目</li>
                <li>丰富外观</li>
                <li>项目位置重构</li>
            </ul>
            <p class="card-text"><small class="text-body-secondary">Last updated 2024/2/1 晚</small></p>
        </div>
    </ContextField>
</template>

<script>
import Navbar from "@/components/NavBar.vue"
import ContextField from "@/components/ContextField.vue"

export default {
    name: 'WebPlan',
    components: {
        Navbar,
        ContextField
    }
}
</script>

<style></style>