<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex>
        <v-card>
          <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            centered
            dark
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
              Slider
            </v-tab>

            <v-tab href="#tab-2">
              Should Be
            </v-tab>

            <v-tab href="#tab-3">
              3px Tall
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="i in 3"
                :key="i"
                :value="'tab-' + i"
            >
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
};
</script>


<style lang="scss">
a {
  color: #6bb91a;
}
</style>
