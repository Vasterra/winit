<template>
    <div class="list">
        <ul>
            <li v-for="item in list">
                <div class="row">
                    <div class="col-lg-2">
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
                            <h3>
                                <strong class="name">{{ item.name }}</strong>
                                   <a class="los-angeles-ca"> <i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i> {{ item.city }}</a>
                            </h3>
                        </div>
                        <div>
                            <label class="specialty">{{ item.profession }}</label>
                        </div>
                        <div>
                            <p class="description">
                                <span v-html="item.description">

                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h4 class="price">
                            <i class="glyphicon glyphicon-credit-card" aria-hidden="true"></i>
                            ${{ item.priceMin }} - {{ item.priceMax }}
                        </h4>
                        <div>
                            <a class="buttons-primary-buttons-border" :href="'/contact?id='+item.id">
                                <h4>Book a consultation > </h4>
                            </a>
                        </div>
                    </div>

                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: ["filter", "list"],
        methods: {
            open(item) {

            }
        }
    }
</script>

<style scoped>
    .list ul {
        margin: 0;
        padding: 0;
    }

    .list img {
        width: 50%;
        border-radius: 50%
    }

    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .list li {
        background-color: white;
        padding: 5px;
        margin-bottom: 5px;
        list-style-type: none;
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
    .buttons-primary-buttons-border {
        height: 22px;
        width: 178px;
    }

    .price {

        color: #333333;
        font-family: Lato;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 0.2px;
        line-height: 22px;
    }

    .description {

        color: #333333;
        font-family: Lato;
        font-size: 14px;
        letter-spacing: 0.17px;
        line-height: 20px;
    }

    .name {

        color: #333333;
        font-family: Lato;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 0.2px;
        line-height: 22px;
    }
    .specialty {

        color: #333333;
        font-family: Lato;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 12px;
    }

    .los-angeles-ca{

        color: #7A27C5;
        font-family: Lato;
        font-size: 14px;
        letter-spacing: 0.17px;
        line-height: 22px;
    }
</style>