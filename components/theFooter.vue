<template>
    <div>
        <v-row>
            <v-col style="background-color: rgb(1, 1, 252);" cols="auto" lg="3" sm="12" md="4">
                <v-container>
                    <h1>Stay connected</h1>
                    <p>Sign Up for our newsletters and updates.</p>
                    <v-btn class="mb-5" variant="elevated" rounded>Keep me in the Loop</v-btn>


                    <v-row>
                        <v-col cols="3">
                            <v-btn icon="mdi-facebook"></v-btn>
                        </v-col>
                        <v-col cols="3">
                            <v-btn icon="mdi-youtube"></v-btn>
                        </v-col>
                        <v-col cols="3">
                            <v-btn icon="mdi-instagram"></v-btn>
                        </v-col>
                        <v-col cols="3">
                            <v-btn icon="mdi-twitter"></v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <!-- <v-divider vertical></v-divider> -->
            <v-col style="background-color: rgb(234, 234, 255);" cols="auto" lg="9" md="8" sm="12">
                <v-img class="" src="/img/logo.png" height="130"></v-img><br>

                <v-row>

                    <v-col>
                        <h3>Information</h3>
                        <ul style="list-style: none;" class="ml-n8">
                            <li>info@osuchurchofchrist.org</li>
                            <li>Adzoatse St, Accra</li>
                            <li>Office Hours:</li>
                            <li>Mon - Sat</li>
                            <li>9:00 AM - 5:00 PM</li>
                            <li>+233 20 970 8141</li>
                        </ul>
                    </v-col>
                    <v-col>
                        <h3>Quick Links</h3>
                        <ul style="list-style: none;" class="ml-n8">
                            <li>Giving</li>
                            <li>Our Story</li>
                            <li>Gallery</li>
                            <li>Worship</li>
                            <li>Prayer Request</li>
                        </ul>
                    </v-col>
                    <v-col>
                        <h3>Location</h3>
                        <ul style="list-style: none;" class="ml-n8">
                            <li>Osu Opposite St James Catholic Church</li>
                        </ul>
                    </v-col>
                    <v-col>
                        <h3>Download The App</h3>
                        <v-row>
                            <v-col>
                                <v-btn><v-icon>mdi-apple</v-icon> Download On <br> the AppStore</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn><v-icon>mdi-play</v-icon> Download on <br> Google PlayStore</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>

                </v-row>

            </v-col>
        </v-row>

    </div>
</template>
<script setup>

</script>