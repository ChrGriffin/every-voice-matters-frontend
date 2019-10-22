<template>
  <div>
    <main-nav />
    <site-hero />
    <time-line-section />
    <community-art-section />
    <support-section />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeLineSection from '@/components/TimeLine/TimeLineSection.vue';
import CommunityArtSection from '@/components/CommunityArt/CommunityArtSection.vue';
import SiteHero from '@/components/SiteHero/SiteHero.vue';
import SupportSection from '@/components/Support/SupportSection.vue';
import MainNav from '@/components/MainNav.vue';

@Component({
  components: {
    MainNav,
    SiteHero,
    TimeLineSection,
    CommunityArtSection,
    SupportSection,
  },
})
export default class Home extends Vue {}
</script>
