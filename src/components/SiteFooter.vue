<template>
    <footer>
        <nav>
            <ul>
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
            </ul>
        </nav>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class SiteFooter extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
