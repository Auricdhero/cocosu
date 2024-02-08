<template>
    <div class="mt-0">
        <v-parallax :src="'http://127.0.0.1:1337' +
            home.data.attributes.WelcomeImg.data.attributes.url
            ">
            <div class="d-flex flex-column fill-height justify-center align-center text-white welcome">
                <h1 class="mb-4 welcomeSec" style="
            font-family: 'Poppsins';
            display: flex;
            flex-direction: inline-grid;
            font-size: 5rem;
            color: white;
          ">
                    <span>W</span>
                    <span>E</span>
                    <span>L</span>
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                    <span>&nbsp;</span>
                    <span>H</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                </h1>
                <h4 class="subheading">
                    {{ home.data.attributes.WelcomeDescription }}
                </h4>
            </div>
        </v-parallax>
        <div class="pt-6" style="background: rgb(50, 92, 219)">
            <v-container>
                <h2 class="text-center text-uppercase text-white">service begins:</h2>

                <h4 class="text-center-text-white"></h4>
                <br />
                <div class="countdown text-white text-center" style="font-weight: bold; font-size: 1.5rem">
                    <v-row>
                        <v-col class="days">
                            <span>0</span><br />
                            <span>Days</span>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col class="hours">
                            <span>0</span><br />
                            <span>Hours</span>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col class="mins">
                            <span>0</span><br />
                            <span>Minutes</span>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col class="secs">
                            <span>0</span><br />
                            <span>Seconds</span>
                        </v-col>
                    </v-row>
                </div>

                <br />
                <div class="d-flex justify-center">
                    <v-btn color="indigo-darken-4" rounded>Invite Family & Friends</v-btn>
                </div>

                <br />
            </v-container>
        </div>
        <v-container class="mt-7">
            <v-row>
                <v-col cols="auto" lg="4">
                    <h1 class="text-bold" style="font-family: 'Mulish'; font-weight: bold">
                        Introduction To The Church
                    </h1>
                    <p class="mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at
                        dignissimos eius. Quam temporibus tempora architecto nihil
                        consequatur voluptate quibusdam cumque, consectetur iure nulla,
                        accusantium odit modi maiores recusandae tenetur.
                    </p>

                    <h1 class="text-uppercase" style="
              font-family: 'Poppsins';
              color: transparent;
              font-size: 3.5rem;
              -webkit-text-stroke: 1px rgb(22, 53, 234);
            ">
                        no perfect people allowed
                    </h1>
                </v-col>
                <v-col cols="auto" lg="8">
                    <v-row class="ml-n10">
                        <v-col v-for="event in events.data.slice(0, 4).reverse()" :key="event.id" cols="" lg="6" sm="6">
                            <nuxt-link style="text-decoration: none" :to="'events/' + event.id">
                                <v-container>
                                    <v-hover v-slot="{ isHovering, props }">
                                        <v-card v-bind="props" :elevation="isHovering ? 24 : 2"
                                            class="mx-auto d-flex justify-center" width="350">
                                            <!-- <h1>{{ event.attributes.Name }}</h1> -->
                                            <v-img :src="'http://127.0.0.1:1337' +
                                                event.attributes.Image.data.attributes.url
                                                " gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                                                <v-container class="ma-4" style="background-color: ">
                                                    <h3 class="text-white d-flex justify-center">
                                                        {{ event.attributes.Title }}
                                                    </h3>
                                                    <v-divider color="white"></v-divider>
                                                    <!-- <h5 class="text-white d-flex justify-center">
                                                        {{ event.attributes.Location }}
                                                    </h5> -->
                                                    <h5 class="text-white d-flex justify-center" v-text="useDateFormat(
                                                        event.attributes.Date,
                                                        'MMMM D, YYYY'
                                                    )
                                                        "></h5>
                                                </v-container>
                                                <v-btn class="ma-15 d-flex justify-center" :to="'/music/' + event.id"
                                                    variant="elevated" color="white" rounded>Learn More
                                                    <v-icon>mdi-arrow-right</v-icon></v-btn>
                                            </v-img>
                                        </v-card></v-hover>
                                </v-container>
                            </nuxt-link>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <v-parallax :src="quotePic" class="mt-10 quote-par">
            <div class="quote">
                <v-container>
                    <h3 class="mt-16 text-white text-justify" style="font-size: 40px; font-family: 'Mulish'">
                        {{ home.data.attributes.BibleVrs }}
                    </h3>
                    <br />
                    <h4 class="text-center text-white" style="font-family: 'Mulish'">
                        {{ home.data.attributes.Quotebook }}
                    </h4>
                    <br />
                </v-container>
            </div>
        </v-parallax>

        <v-container class="mt-10">
            <v-row>
                <v-col cols="" lg="">
                    <h1 style="font-family: 'Mulish'" class="text-uppercase">
                        {{ home.data.attributes.TitleQuestion }}
                    </h1>
                    <section>
                        <Markdown class="answer" :source="home.data.attributes.TitleAnswer" />
                        <!-- <p>
                            {{ home.data.attributes.TitleAnswer }}
                        </p> -->
                    </section>
                </v-col>
                <v-col cols="">
                    <v-img :src="'http://127.0.0.1:1337' +
                        home.data.attributes.AnswerImg.data.attributes.url
                        "></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="" sm="12" lg="6" md="12">
                    <v-img :src="'http://127.0.0.1:1337' +
                        home.data.attributes.Answer2Img.data.attributes.url
                        "></v-img>
                </v-col>
                <v-col cols="" sm="12" lg="6" md="12">
                    <section>
                        <h1 class="text-left">Who we are and our purpose</h1>
                        <h3>
                            We exist to help people find and follow Jesus seven days a week.
                        </h3>
                        <p class="text-justify">
                            This is the “why” of what we do. We are convinced that every
                            person needs and desires to know the grace and power of having an
                            authentic, life-changing relationship with Jesus Christ. To
                            achieve our purpose, we keep our focus on our core values:
                            worship, ministry, evangelism, fellowship, and discipleship.
                        </p>
                        <v-row>
                            <v-col cols="" lg="7" sm="6">
                                <v-btn color="indigo-darken-4" rounded>LEARN MORE ABOUT US</v-btn>
                            </v-col>
                            <v-col cols="" lg="4" sm="6">
                                <v-btn color="indigo-darken-4" rounded>OUR VISION</v-btn>
                            </v-col>
                        </v-row>
                    </section>
                </v-col>
            </v-row>
        </v-container>
        <div style="background-image: url('img/lets.jpg')">
            <v-container>
                <h4 class="text-center mt-10">
                    {{ home.data.attributes.aShortQuote }}
                </h4>
                <br />
                <v-row class="d-flex justify-center">
                    <v-col cols="3">
                        <v-btn icon="mdi-facebook"></v-btn>
                    </v-col>
                    <v-col cols="3">
                        <v-btn icon="mdi-twitter"></v-btn>
                    </v-col>
                    <v-col cols="3">
                        <v-btn icon="mdi-youtube"></v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <v-container>
            <v-row class="mt-10">
                <v-col cols="" sm="12" lg="6">
                    <v-img :src="'http://127.0.0.1:1337' +
                        home.data.attributes.sermonApp.data.attributes.url
                        " height="600"></v-img>
                </v-col>
                <v-col cols="" sm="12" lg="6" class="mt-10">
                    <h3 class="text-left">{{ home.data.attributes.SermonAppTitle }}</h3>
                    <p>{{ home.data.attributes.appDescription }}</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
import { useDateFormat } from "@vueuse/core";
import quotePic from "/img/quote_bg.jpg";
import Markdown from "vue3-markdown-it";
// const config = useRuntimeConfig();
const { data: events } = await useFetch(
    "http://127.0.0.1:1337/api/events?populate=*"
);
const homePage = await useFetch(
    "http://127.0.0.1:1337/api/home-page?populate=*"
);
const home = homePage.data.value;

const d = new Date()
const sec = 1000;
const mins = sec * 60;
const hrs = mins * 60;
const day = hrs * 24;
const wk = day * 7;

function minCountDown() {
    
}
</script>
<style>
.welcome {
    background-color: rgba(7, 89, 195, 0.54);
}

.quote {
    background-color: rgba(20, 10, 10, 0.54);
    height: 100%;
}

.welcomeSec span {
    -webkit-text-stroke: 1px white;
    color: transparent;
    /* padding: .1em; */
    /* margin-left: -20px; */
}

.welcomeSec span:hover {
    color: white;
}

.welcomeSec span:has(~ span:hover) {
    color: white;
}

.question {
    font-family: "Sansita Swashed";
}

/* .quote-par {
    height: 50em;
} */
@media (max-width: 360px) {
    h1.welcomeSec span {
        font-size: 2.4rem;
    }


}
</style>
