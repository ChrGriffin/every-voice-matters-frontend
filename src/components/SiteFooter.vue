<template>
    <footer>
        <div class="row">
            <nav>
                <ul>
                    <li><router-link :to="{name: 'home'}" exact>Home</router-link></li>
                    <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
                </ul>
            </nav>

            <div class="powered">
                Powered by <a href="https://vuejs.org/" target="_blank"><img :src="require('./../assets/images/vue.png')" alt="Vue.js logo" /></a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class SiteFooter extends Vue {

    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    footer {
        background: black;
        padding: 1rem 0;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;

        .row {
            max-width: 80rem;
            margin: 0 auto;
            display: flex;
        }

        nav {
            flex: 1;
        }

        ul {
            list-style: none;
            padding-left: 0;

            li {
                display: inline-block;
                padding-bottom: 0;

                a {
                    font-family: 'big-noodle-titling-oblique', sans-serif;
                    color: $white;
                    text-decoration: none;
                    margin: 0 1rem;
                    font-size: 1.6rem;

                    &.router-link-active {
                        color: $red;
                    }

                    &:hover {
                        color: $yellow;
                    }
                }

                &:first-child a {
                    margin-left: 0;
                }
            }
        }

        .powered {
            flex: 1;
            text-align: right;
            color: $white;
            font-family: 'big-noodle-titling-oblique', sans-serif;
            font-size: 1.6rem;

            img {
                height: 1.4rem;
                margin-left: 5px;
            }
        }
    }
</style>
