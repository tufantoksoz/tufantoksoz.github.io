<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        readonly
        filled
        v-model="date"
        input-class="cursor-pointer"
        mask="##/##/####"
      >
        <q-popup-proxy ref="qDateProxy" :breakpoint="0" behavior="menu">
          <q-date
            v-model="date"
            minimal
            no-unset
            mask="MM/DD/YYYY"
            :options="options"
            @update:model-value="$refs.qDateProxy.hide()"
          >
          </q-date>
        </q-popup-proxy>
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer"></q-icon>
        </template>
      </q-input>

      <div class="row">
        <q-input
          class="q-pr-xs"
          v-model.number="model"
          type="number"
          filled
          label="Adult *"
          style="width: 50%"
          min="0"
          max="20"
        />

        <q-input
          class="q-pl-xs"
          v-model.number="model"
          type="number"
          filled
          label="Child *"
          style="width: 50%"
          min="0"
          max="20"
        />
      </div>

      <q-input
        filled
        v-model="name"
        label="Your name *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your name']"
      />

      <q-input
        filled
        v-model="email"
        type="email"
        label="E-mail"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your e-mail']"
      />

      <q-input
        filled
        v-model="phone"
        type="tel"
        label="Phone Number"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type your phone number',
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar, date } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const timeStamp = Date.now();

    const name = ref(null);
    const email = ref(null);
    const phone = ref(null);

    const accept = ref(false);

    return {
      name,
      email,
      phone,
      accept,
      date: ref(date.formatDate(timeStamp, 'MM/DD/YYYY')),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      options(d) {
        return d >= date.formatDate(timeStamp, 'YYYY/MM/DD');
      },
    };
  },
};
</script>
