<template>
    <header>
        <h1>
            <span :class="(spanOneIsVisible ? 'visible' : '')">Every.</span><br/>
            <span :class="(spanTwoIsVisible ? 'visible' : '')">Voice.</span><br/>
            <span :class="(spanThreeIsVisible ? 'visible' : '')">Matters.</span>
        </h1>
    </header>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class SiteHero extends Vue {
        public spanOneIsVisible: boolean = false;
        public spanTwoIsVisible: boolean = false;
        public spanThreeIsVisible: boolean = false;

        private lineDelay: number = 1400;

        private mounted() {
            setTimeout(() => {
                this.spanOneIsVisible = true;
            }, this.lineDelay);

            setTimeout(() => {
                this.spanTwoIsVisible = true;
            }, (this.lineDelay + 100) * 2);

            setTimeout(() => {
                this.spanThreeIsVisible = true;
            }, (this.lineDelay + 100) * 3);
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/variables';

    header {
        padding: 8rem 0;
        background: black;
    }

    h1 {
        font-size: 12rem;
        color: $white;

        span {
            opacity: 0;

            &.visible {
                opacity: 1;
                transition: opacity 3s ease;
            }
        }
    }
</style>
