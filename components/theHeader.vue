<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <nuxt-link class="navbar-brand" to="/"><img src="/img/logo.png" height="55em" width="auto" alt="OSU COC"></nuxt-link>
                <v-spacer></v-spacer>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse nav-fill" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/sermons/">Sermons</nuxt-link>
                        </li>
                        <!-- <li class="nav-item">
                            <nuxt-link class="nav-link" to="/blogs/">Blogs</nuxt-link>
                        </li> -->
                        <!-- <li class="nav-item">
                            <nuxt-link class="nav-link" to="/music/">Music Library</nuxt-link>
                        </li> -->
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/give">Giving</nuxt-link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>
