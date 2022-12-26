<template>
  <div class="q-pa-md rounded-borders" style="min-width: 360px">
    <q-card bordered>
      <q-form @submit="onSubmit" class="q-ma-md q-gutter-y-md">
        <h2
          class="my-title-font-bold q-ma-none text-center"
          style="font-size: 24px"
        >
          {{ $t('bookThisTourOnline') }}
        </h2>

        <q-separator class="q-ma-none"></q-separator>

        <div class="row items-center justify-center">
          <q-icon
            class="q-mr-sm"
            name="sell"
            size="32px"
            color="grey-8"
            style="transform: rotate(90deg)"
          />

          <span
            class="q-mr-sm text-h6 text-grey-6 items-center vertical-middle flex"
            >{{ $t('from') }}</span
          >
          <span
            class="q-mr-md text-h6 text-strike text-grey-6 items-center vertical-middle flex"
            >{{ currencyType }} {{ bookingForm.oldPrice }}</span
          >
          <span
            class="text-h4 items-center vertical-middle flex"
            style="font-size: 30px; font-weight: 800"
          >
            <q-icon color="green" :name="bookingForm.currency" size="30px" />
            {{ bookingForm.adultPrice }}
          </span>
        </div>

        <div class="row items-center">
          <div class="col-4">
            <span class="my-text-font items-center vertical-middle flex"
              >{{ $t('tourDate') }} :
            </span>
          </div>
          <div class="col-8">
            <q-input
              readonly
              outlined
              dense
              v-model="date"
              input-class="cursor-pointer"
              mask="##/##/####"
            >
              <q-popup-proxy ref="qDateProxy" :breakpoint="0" behavior="menu">
                <q-date
                  v-model="date"
                  minimal
                  no-unset
                  mask="DD/MM/YYYY"
                  :options="options"
                  @update:model-value="$refs.qDateProxy.hide()"
                >
                </q-date>
              </q-popup-proxy>
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer"></q-icon>
              </template>
            </q-input>
          </div>
        </div>

        <div class="row items-center">
          <div class="col-8">
            <span class="my-text-font items-center vertical-middle flex"
              >{{ $t('adult') }}* (+12 {{ $t('age') }})
              <q-icon class="q-pl-sm" :name="bookingForm.currency"></q-icon>
              <span class="text-bold q-mr-md">{{
                bookingForm.adultPrice
              }}</span></span
            >
          </div>
          <div class="col-4">
            <q-input
              class="q-pa-none"
              style="width: 100%"
              v-model.number="adultCount"
              type="number"
              min="0"
              max="20"
              outlined
              dense
              :rules="[(val) => val !== null && val !== '']"
              @update:model-value="(val) => calcAdult(val)"
            />
          </div>
        </div>

        <div class="row items-center">
          <div class="col-8">
            <span class="my-text-font items-center vertical-middle flex"
              >{{ $t('child') }}* (6-12 {{ $t('age') }})
              <q-icon class="q-pl-sm" :name="bookingForm.currency"></q-icon>
              <span class="text-bold q-mr-md">{{
                bookingForm.childPrice
              }}</span></span
            >
          </div>
          <div class="col-4">
            <q-input
              class="q-pa-none"
              style="width: 100%"
              v-model.number="childCount"
              type="number"
              min="0"
              max="20"
              outlined
              dense
              :rules="[(val) => val !== null && val !== '']"
              @update:model-value="(val) => calcChild(val)"
            />
          </div>
        </div>

        <div class="row items-center">
          <div class="col-8">
            <span class="my-text-font items-center vertical-middle flex"
              >{{ $t('baby') }}* (0-5 {{ $t('age') }})
              <q-icon class="q-pl-sm" :name="bookingForm.currency"></q-icon>
              <span class="text-bold q-mr-md">{{
                bookingForm.babyPrice
              }}</span></span
            >
          </div>
          <div class="col-4">
            <q-input
              class="q-pa-none"
              style="width: 100%"
              v-model.number="babyCount"
              type="number"
              min="0"
              max="20"
              outlined
              dense
              :rules="[(val) => val !== null && val !== '']"
              @update:model-value="(val) => calcBaby(val)"
            />
          </div>
        </div>

        <q-input
          outlined
          dense
          v-model="fullName"
          :label="$t('yourNameAndSurname') + '*'"
          :hint="$t('pleaseTypeYourNameAndSurname')"
          maxlength="500"
          :rules="[
            (val) =>
              (val && val.length > 0) || $t('pleaseTypeYourNameAndSurname'),
          ]"
        />

        <q-input
          outlined
          dense
          v-model="email"
          type="email"
          :label="$t('email') + '*'"
          :hint="$t('pleaseTypeYourEmail')"
          maxlength="500"
          :rules="[
            (val) => (val && val.length > 0) || $t('pleaseTypeYourEmail'),
          ]"
        />

        <q-input
          outlined
          dense
          v-model="phone"
          type="tel"
          :label="$t('phoneNumber') + '*'"
          :hint="$t('pleaseTypeYourPhoneNumber')"
          mask="+## (###) ### - ####"
          :rules="[
            (val) => (val && val.length > 0) || $t('pleaseTypeYourPhoneNumber'),
          ]"
        />

        <q-input
          outlined
          dense
          v-model="hotelName"
          :label="$t('hotelName')"
          :hint="$t('ifYouAreStayingHotelPleaseTypeTheHotelName')"
          maxlength="500"
        />

        <q-input
          outlined
          dense
          v-model="roomNumber"
          :label="$t('roomNumber')"
          :hint="$t('ifYouAreStayingHotelPleaseTypeTheRoomNumber')"
          maxlength="100"
        />

        <q-input
          outlined
          dense
          input-style="height: 70px;"
          type="textarea"
          v-model="clientName"
          :label="$t('fullName')"
          maxlength="1000"
          :hint="$t('namePersonJoinTour')"
        />

        <div
          class="row text-bold items-center text-orange-8"
          style="font-size: 18px"
        >
          <span class="q-mr-md">{{ $t('total') }} : </span>
          <q-icon :name="bookingForm.currency" />
          <span> {{ totalPrice }}</span>
        </div>

        <div>
          <q-btn
            ripple
            square
            :label="$t('bookNow')"
            type="submit"
            color="positive"
            style="width: 100%"
          />
        </div>

        <!-- Booking Summary Start -->
        <q-dialog class="text-no-wrap" v-model="showSummary" persistent>
          <q-card style="width: -webkit-fill-available">
            <div class="row justify-center q-ma-md my-title-font-bold">
              <span style="font-size: 18px">{{ $t('bookingSummary') }}</span>
            </div>
            <q-separator />

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('tourName') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ bookingForm.tourName }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('tourDate') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ date }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('fullName') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ fullName }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('email') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ email }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('phoneNumber') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ phone }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('adult') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ adultCount }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('childCount') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ childCount }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('babyCount') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ babyCount }}</span>
                </div>
              </div>
            </div>

            <q-separator class="q-mt-sm" />

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('hotelName') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ hotelName }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('roomNumber') }} :</span>
                </div>
              </div>
              <div class="col-7">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ roomNumber }}</span>
                </div>
              </div>
            </div>

            <div class="row my-text-font">
              <div class="col-5">
                <div class="row q-ml-md q-mt-md">
                  <span class="q-mr-md">{{ $t('fullName') }} :</span>
                </div>
              </div>
              <div class="col-7" style="white-space: normal !important">
                <div class="row q-ml-md q-mt-md">
                  <span>{{ clientName }}</span>
                </div>
              </div>
            </div>

            <div
              class="row q-py-sm text-bold items-center justify-center text-orange-8"
              style="font-size: 24px"
            >
              <span class="q-mr-md">{{ $t('totalPrice') }} :</span>
              <q-icon :name="bookingForm.currency" size="24px" />
              <span> {{ totalPrice }}</span>
            </div>

            <q-separator />

            <q-card-actions align="right">
              <q-btn
                class="q-mr-md"
                flat
                label="Cancel"
                color="primary"
                v-close-popup
              />
              <q-btn
                style="width: 100px"
                square
                label="BOOK!"
                color="positive"
                @click="sendMail"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
        <!-- Booking Summary End -->
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { date } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BookingForm',
  props: {
    bookingForm: {
      tourName: String,
      oldPrice: Number,
      adultPrice: Number,
      childPrice: Number,
      babyPrice: Number,
      currency: String,
    },
  },

  setup(props) {
    const timeStamp = Date.now();

    const fullName = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const adultCount = ref(0);
    const childCount = ref(0);
    const babyCount = ref(0);
    const hotelName = ref(null);
    const roomNumber = ref(null);
    const clientName = ref(null);

    const showSummary = ref(false);

    let adultPrice = 0;
    let childPrice = 0;
    let babyPrice = 0;

    let totalPrice = ref(0);

    const currencyType = props.bookingForm.currency == 'euro' ? '€' : '$';

    const calcAdult = (val) => {
      adultPrice = props.bookingForm.adultPrice * val;
      calculateTotalPrice();
    };

    const calcChild = (val) => {
      childPrice = props.bookingForm.childPrice * val;
      calculateTotalPrice();
    };

    const calcBaby = (val) => {
      babyPrice = props.bookingForm.babyPrice * val;
      calculateTotalPrice();
    };

    const calculateTotalPrice = () => {
      totalPrice.value = adultPrice + childPrice + babyPrice;
    };

    const sendMail = () => {
      console.log('Resevation Completed');
    };

    return {
      showSummary,
      fullName,
      email,
      phone,
      adultCount,
      childCount,
      babyCount,
      hotelName,
      roomNumber,
      clientName,
      date: ref(date.formatDate(timeStamp, 'DD/MM/YYYY')),
      calcAdult,
      calcChild,
      calcBaby,
      calculateTotalPrice,
      totalPrice,
      currencyType,
      sendMail,

      onSubmit() {
        showSummary.value = true;
      },

      options(d) {
        return d >= date.formatDate(timeStamp, 'YYYY/MM/DD');
      },
    };
  },
});
</script>
