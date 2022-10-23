<template>
  <div>
    <tour-page
      :imgDesktop="imgDesktop"
      :imgMobile="imgMobile"
      :breadCrumbsCategory="breadCrumbsCategory"
      :breadCrumbsCategoryRoute="breadCrumbsCategoryRoute"
      :breadCrumbsTourLabel="breadCrumbsTourLabel"
      :articleTitle="articleTitle"
      :articleSummaryText="articleSummaryText"
      :articleFullText="articleFullText"
      :articleImg="articleImg"
      :tourInfoText="tourInfoText"
      :includes="includes"
      :excludes="excludes"
      :daysTimeText="daysTimeText"
      :faq="faq"
      :price="price"
    >
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';

export default defineComponent({
  name: 'testPost',
  components: { 'tour-page': TourPage },
  setup() {
    const imgDesktop = 'https://via.placeholder.com/1500x500';
    const imgMobile = 'https://via.placeholder.com/400x300';
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/';
    const breadCrumbsTourLabel = 'Quad Safari';
    const articleTitle = 'Quad Safari';
    const articleSummaryText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis donec. Magna ac placerat vestibulum lectus mauris ultrices. Rhoncus urna neque viverra justo nec ultrices dui. Pellentesque eu tincidunt tortor aliquam nulla.';
    const articleFullText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis donec. Magna ac placerat vestibulum lectus mauris ultrices. Rhoncus urna neque viverra justo nec ultrices dui. Pellentesque eu tincidunt tortor aliquam nulla. Tellus cras adipiscing enim eu turpis. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Vitae nunc sed velit dignissim sodales ut eu sem. Est sit amet facilisis magna etiam. Suspendisse faucibus interdum posuere lorem ipsum. Cursus euismod quis viverra nibh cras pulvinar mattis. Urna neque viverra justo nec ultrices dui sapien eget mi. Volutpat lacus laoreet non curabitur gravida arcu ac. Velit euismod in pellentesque massa placerat duis ultricies. Amet tellus cras adipiscing enim. In fermentum et sollicitudin ac orci. Sagittis id consectetur purus ut. Duis at consectetur lorem donec massa sapien faucibus. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Diam maecenas ultricies mi eget. Viverra ipsum nunc aliquet bibendum enim. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Et netus et malesuada fames ac turpis egestas. Augue mauris augue neque gravida in fermentum et sollicitudin. Dui id ornare arcu odio ut sem nulla pharetra. Urna cursus eget nunc scelerisque. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Faucibus turpis in eu mi bibendum. Id porta nibh venenatis cras sed. Vel pretium lectus quam id. Dignissim convallis aenean et tortor at risus viverra.';
    const articleImg = 'https://via.placeholder.com/500x700';
    const tourInfoText =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,eius reprehenderit eos corrupti commodi magni quaerat ex numquam,dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid.';
    const includes = [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ];

    const excludes = [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ];

    const daysTimeText =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,eius reprehenderit eos corrupti commodi magni quaerat ex numquam,dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid.';

    const faq = [
      {
        label: 'Question One',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        label: 'Question Two',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        label: 'Question Three',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
    ];

    const price = 30;

    return {
      imgDesktop,
      imgMobile,
      breadCrumbsCategory,
      breadCrumbsCategoryRoute,
      breadCrumbsTourLabel,
      articleTitle,
      articleSummaryText,
      articleFullText,
      articleImg,
      tourInfoText,
      includes,
      excludes,
      daysTimeText,
      faq,
      price,
    };
  },
});
</script>
