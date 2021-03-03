<template>
    <div>
        <div style="width: 100%;padding: 10px;background-color:rgb(122 39 197); min-height: 100px">
            <div class="row">
                <div class="col-lg-3">
                </div>
                <div class="col-lg-6">
                    <div>
                        <h3 class="dr-sheila-woodhouse"><strong>{{ item.name }}</strong></h3>
                    </div>
                    <div>
                        <label class="otolaryngologyst">{{ item.profession }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%;padding: 10px;background-color:rgb(241 233 249);min-height: 100px">
            <div class="row">
                <div class="col-lg-3">
                    <div class="flex-center">
                        <img src="/img/doctor.jpg" class="rounded-circle">
                    </div>
                    <div class="flex-center">
                        <div class="rating">
                            <i class="glyphicon glyphicon-star" aria-hidden="true"></i>
                            <i class="glyphicon glyphicon-star" aria-hidden="true"></i>
                            <i class="glyphicon glyphicon-star" aria-hidden="true"></i>
                            <i class="glyphicon glyphicon-star" aria-hidden="true"></i>
                            <i class="glyphicon glyphicon-star" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div>
                        <a class="los-angeles-ca"> <i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i> {{ item.city }}</a>
                    </div>
                    <div>
                        <a class="los-angeles-ca">
                            <i class="glyphicon glyphicon-time" aria-hidden="true"></i>
                            15 min, 30 min, 45 min, 1hour
                        </a>
                    </div>
                    <div>
                        <a class="los-angeles-ca">
                            <i class="glyphicon glyphicon-credit-card" aria-hidden="true"></i>
                            ${{ item.priceMin }} - {{item.priceMax }}
                        </a>
                    </div>
                </div>
                <div class="col-lg-3">
                </div>

            </div>

        </div>
        <div style="width: 100%;padding: 10px;background-color:white;min-height: 100px">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <h3 class="about">About</h3>
                        <p class="i-am-a-licensed-marr">
                            <span v-html="item.description"></span>
                        </p>
                    </div>
                    <div class="col-lg-4">
                        <div class="rectangle-copy">
                            <div class="book-a-consultation">
                                Book a consultation
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>

    </div>
</template>

<script>
    export default {
        name: "Item",
        props: ["item"]
    }
</script>

<style scoped>
    img {
        width: 50%;
        border-radius: 50%;
        margin-top: -30%;
    }

    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .price i {
        color: rgb(122 39 197);
    }

    .rating i {
        color: rgb(255 189 0);
    }

    a {
        color: rgb(122 39 197);
    }

    .color-white {
        color: white;
    }

    .dr-sheila-woodhouse {
        height: 40px;
        width: 336px;
        color: #FFFFFF;
        font-family: Quicksand;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 40px;
        text-shadow: 0 2px 4px 0 rgba(0,0,0,0.4);
    }

    .otolaryngologyst {
        height: 24px;
        width: 198px;
        color: #FFFFFF;
        font-family: Lato;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.6px;
        line-height: 24px;
    }

    .los-angeles-ca {
        height: 22px;
        width: 111px;
        color: #7A27C5;
        font-family: Lato;
        font-size: 16px;
        letter-spacing: 0.2px;
        line-height: 22px;
    }

    .about {
        height: 30px;
        width: 79px;
        color: #333333;
        font-family: Quicksand;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 0.4px;
        line-height: 30px;
    }

    .i-am-a-licensed-marr {
        height: 154px;
        width: 590px;
        color: #333333;
        font-family: Lato;
        font-size: 16px;
        letter-spacing: 0.2px;
        line-height: 22px;
    }

    .rectangle-copy {
        width: 370px;
        top: -120px;
        position: absolute;
        background-color: #FFFFFF;
        box-shadow: 0 2px 20px 0 rgba(0,0,0,0.15);
    }

    .book-a-consultation {
        height: 30px;
        color: #333333;
        font-family: Quicksand;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: -0.29px;
        line-height: 30px;
        text-align: center;
    }
</style>