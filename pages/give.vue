<template>
    <div>
        <div class="mt-10 text-center welcomeGive" style="background: url('img/givingBg.jpg') rgba(10, 35, 136, 0.919); ">
            <v-container class="pa-10">
                <h1 class="text-white text-uppercase">trust god an watch him move</h1>
                <p class="text-white">If you are part of our church family or simply share our heart for spreading the truth
                    of
                    the Gospel to San Diego and beyond, we welcome your tithe, offering, or financial gift. Online giving is
                    quick, convenient, and completely secure.</p>
                <v-btn rounded>Give Now</v-btn>
            </v-container>
        </div>
        <v-container>
            <h1 class="text-center text-uppercase">ways to give</h1><br>
            <v-row>
                <v-col cols="5">
                    <v-card color="light-blue-lighten-5" height="250" elevation="0">
                        <v-container class="text-center">
                            <h3 class="text-center">Visa/Master/Debit/Mobile Money</h3><br>
                            <p class="text-center">Osu Church of Christ can accept your giving in the form of money by any
                                means you choose to give.</p>
                            <v-btn rounded>Pay</v-btn>

                        </v-container>
                    </v-card>
                </v-col>
                <v-col cols="5">
                    <v-card color="light-blue-lighten-5" height="250" elevation="0">
                        <v-container class="text-center">
                            <h3 class="text-center">Cryptocurrency</h3><br>
                            <p class="text-center mb-16">You can also give in the form of Cryptocurrency.</p>
                            <v-btn rounded>Pay</v-btn>

                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container><br>
        <div style="background-color: rgb(204, 204, 204);">
            <v-container>
                <h1 class="text-center">FAQ's</h1>
                <v-expansion-panels  class="mb-10" variant="popout">
                    <v-expansion-panel title="What kind of organization is Osu Church of Christ?"
                        text="Osu Church is a non-profit organization that aims at winning souls for God and giving back to the community as per the blessings of God."></v-expansion-panel>
                    <v-expansion-panel title="What we do with our giving?"
                        text="Osu Church of Christ gives to the needy in the community, orphanages, Prisoners, Schools and other Churches that lack resources."></v-expansion-panel>
                    <v-expansion-panel title="Financial Accountability"
                        text="We give accounts to the Church on the expenses we make and donations we do. We are also being audited by external auditors."></v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </div>
    </div>
</template>
<script setup>

</script>
<style>
/* .welcomeGive{
    background: linear-gradient(to right, #83a7c2 ,#b9d5eb) url('/img.givingBg.jpg') cover no-repeat;
} */
</style>