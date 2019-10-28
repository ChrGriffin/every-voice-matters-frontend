<template>
    <div>
        <main-nav/>
        <site-hero/>
        <summary-section/>
        <announcement-section text="10/29: Online Day of Action" url="https://www.gamersforfreedom.com/#online" />
        <time-line-section/>
        <support-section/>
        <announcement-section text="11/01: Protest at BlizzCon" url="https://www.gamersforfreedom.com/#blizzcon" />
        <community-art-section/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { page } from 'vue-analytics';
    import MainNav from '@/components/MainNav.vue';
    import SiteHero from '@/components/SiteHero.vue';
    import SummarySection from '@/components/SummarySection.vue';
    import AnnouncementSection from '@/components/AnnouncementSection.vue';
    import TimeLineSection from '@/components/TimeLine/TimeLineSection.vue';
    import CommunityArtSection from '@/components/CommunityArt/CommunityArtSection.vue';
    import SupportSection from '@/components/Support/SupportSection.vue';

    @Component({
        components: {
            AnnouncementSection,
            MainNav,
            SiteHero,
            SummarySection,
            TimeLineSection,
            CommunityArtSection,
            SupportSection,
        },
    })
    export default class Home extends Vue {
        private mounted() {
            page('/');
        }
    }
</script>
