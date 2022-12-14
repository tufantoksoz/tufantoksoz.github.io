<template>
  <div class="pageContainer q-ma-md" style="padding-top: 5%">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 q-mr-lg">
        <h1 style="font-size: 64px" class="q-mt-none">Contact us</h1>
        <p style="font-size: 20px">
          Contact us for your questions and requests. You can write whenever you
          want. We will contact you as soon as possible.
        </p>
        <q-separator />
        <p class="q-mt-md" style="font-size: 16px">
          You can also write us your questions and requests via whatsapp and
          viber.
        </p>
      </div>
      <div class="col-xs-12 col-sm-5 col-md-5 q-mt-lg text-center">
        <q-form @submit="onSubmit">
          <q-input
            outlined
            v-model="name"
            label="Full name *"
            maxlength="200"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '']"
          />

          <q-input
            outlined
            v-model="email"
            type="email"
            label="E-mail *"
            maxlength="500"
            :rules="[(val) => (val && val.length > 0) || '']"
          />

          <q-input
            outlined
            v-model="subject"
            label="Subject *"
            maxlength="1000"
            :rules="[(val) => (val && val.length > 0) || '']"
          />

          <q-input
            outlined
            v-model="message"
            label="Message *"
            type="textarea"
            maxlength="5000"
            :rules="[(val) => (val && val.length > 0) || '']"
          />

          <div>
            <q-btn
              class="full-width"
              label="Submit"
              type="submit"
              color="primary"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const name = ref(null);
    const email = ref(null);
    const subject = ref(null);
    const message = ref(null);
    const accept = ref(false);

    return {
      name,
      email,
      subject,
      message,
      accept,

      onSubmit() {
        return 0;
      },
    };
  },
};
</script>
