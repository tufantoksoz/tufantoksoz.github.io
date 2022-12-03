<template>
  <div>
    <tour-page
      :imgDesktop="adrasanApi.imgDesktop"
      :imgMobile="adrasanApi.imgMobile"
      :breadCrumbsCategory="adrasanApi.breadCrumbsCategory"
      :breadCrumbsCategoryRoute="adrasanApi.breadCrumbsCategoryRoute"
      :breadCrumbsTourLabel="adrasanApi.breadCrumbsTourLabel"
      :sliderImages="adrasanApi.sliderImages"
      :articleTitle="adrasanApi.articleTitle"
      :articleSummaryText="adrasanApi.articleSummaryText"
      :articleFullText="adrasanApi.articleFullText"
      :articleImg="adrasanApi.articleImg"
      :includes="adrasanApi.includes"
      :excludes="adrasanApi.excludes"
      :tourDetails="adrasanApi.tourDetails"
      :faq="adrasanApi.faq"
      :bookingForm="adrasanApi.bookingForm"
    >
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import adrasanApi from 'src/static/api/adrasanSuluada';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    return {
      adrasanApi,
    };
  },
});
</script>
