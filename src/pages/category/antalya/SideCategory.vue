<template>
  <div>
    <category-component :categoryName="categoryName"> </category-component>

    <div class="row pageContainer">
      <tour-card
        :title="title"
        :date="date"
        :hours="hours"
        :currency="currency"
        :oldPrice="oldPrice"
        :price="price"
        :image="image"
        :food="food"
        :transfer="transfer"
        :location="location"
        :routeName="routeName"
      ></tour-card>
    </div>
  </div>
</template>

<script>
import CategoryComponent from 'src/components/CategoryComponent.vue';
import TourCard from 'src/components/TourCard.vue';
import adrasanSuluadaBoatTourImage from 'assets/tour-images/adrasan-suluada/card/adrasan-suluada.webp';

export default {
  components: {
    'category-component': CategoryComponent,
    'tour-card': TourCard,
  },
  setup() {
    const categoryName = 'side';

    const title = 'Adrasan Suluada Island Boat Tour';
    const date = 'Every Day';
    const hours = '8 Hours';
    const currency = 'euro';
    const oldPrice = '38';
    const image = adrasanSuluadaBoatTourImage;
    const price = '30';
    const food = 'Dinner';
    const transfer = 'Transfer';
    const location = 'Adrasan';
    const routeName = 'adrasanSuluadaBoatTour';

    return {
      categoryName,
      title,
      date,
      hours,
      currency,
      oldPrice,
      price,
      image,
      food,
      transfer,
      location,
      routeName,
    };
  },
};
</script>
