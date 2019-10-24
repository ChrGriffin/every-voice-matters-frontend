<template>
    <section id="summary">
        <div class="row">
            <div class="column">
                <p>That's what Blizzard told us they believed.</p>
                <p>It's how they sold us games. How they sold us stories, and characters. It's how they won our loyalty. How they crafted a gaming community unlike any other. How they became one of the most beloved and influential companies in the industry.</p>
                <p>They did it by telling us that we mattered. We were more than just customers, we were a community. A fellowship of gamers brought together by a group of developers who truly cared about delivering an amazing experience without sacrificing ethics. They had values, and those values guided everything they did.</p>
                <p class="italic">Think globally.</p>
                <p class="italic">Lead responsibly.</p>
                <p class="italic">Every voice matters.</p>
                <p>But when the chips were down and it was time to do or die, Blizzard threw those values away. They betrayed every value they once claimed to hold, and in so doing, betrayed the very community they helped foster. They sold themselves, and us, out, in the name of appeasing a tyrannical regime.</p>
                <p><a href="https://twitter.com/search?q=%23FreeHongKong" target="_blank">#FreeHongKong</a><a href="https://twitter.com/search?q=%23BoycottBlizzard" target="_blank">#BoycottBlizzard</a></p>
            </div>

            <div class="column">
                <img :src="require('../assets/images/raynor.png')" alt="Fight for Freedom poster with Jim Raynor">
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class SiteHero extends Vue {

    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';

    section {
        text-align: left;
    }

    .row {
        margin: 0 auto;
        display: flex;
        max-width: $textWidth;
        align-items: center;
        justify-content: center;

        .column {

            &:first-child {
                padding-right: $sectionPadding / 2;
                width: 67%;
            }

            &:last-child {
                padding-left: $sectionPadding / 2;
                width: 33%;
            }
        }
    }

    p {
        margin-bottom: 1rem;
        font-size: 1.2rem;

        &:first-child {
            font-family: $titleFont;
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        a {
            font-style: italic;

            &:not(:first-child) {
                margin-left: 10px;
            }
        }
    }

    img {
        width: 100%;
    }

    @media screen and (max-width: $mediumScreen) {

       .row {
           display: block;

           .column {

               &:first-child {
                   padding-right: 0;
                   width: 100%;
               }

               &:last-child {
                   padding-left: 0;
                   width: 100%;
                   text-align: center;
               }
           }

           img {
               margin-top: 1rem;
               max-width: 30rem;
           }
       }
    }
</style>
