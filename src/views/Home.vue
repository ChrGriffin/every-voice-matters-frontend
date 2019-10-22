<template>
    <div>
        <site-hero />
        <summary-section />
        <time-line-section />
        <community-art-section />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeLineSection from '@/components/TimeLine/TimeLineSection.vue';
import CommunityArtSection from '@/components/CommunityArt/CommunityArtSection.vue';
import SiteHero from '@/components/SiteHero/SiteHero.vue';
import SummarySection from '@/components/Summary/SummarySection.vue';

@Component({
    components: {
        SummarySection,
        SiteHero,
        TimeLineSection,
        CommunityArtSection,
    },
})
export default class Home extends Vue {}
</script>
