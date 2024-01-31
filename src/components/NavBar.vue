<template>
    <nav nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container">
            <router-link class="navbar-brand nav-link" :to="{ name: 'home' }">
                <img src="@/assets/img/伊蕾娜.jpg" alt="Home" class="rounded-circle" width="40" height="40">
            </router-link>
            <router-link class="navbar-brand nav-link" :to="{ name: 'home' }">IceHyan</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }">主页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'articles' }">文章</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            链接
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="https://www.zhihu.com/people/wanna-24-48">知乎</a></li>
                            <li><a class="dropdown-item" href="https://github.com/Hyan1ce">GitHub</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            其他
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="http://localhost:8080/others/projects/">项目</a></li>
                            <li><a class="dropdown-item" href="#">简历</a></li>
                            <li><a class="dropdown-item" href="#">联系博主</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
</script>

<style scoped></style>