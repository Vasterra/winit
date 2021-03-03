<template>
    <div>
        <template v-if="item != null">
            <item :item="item"></item>
        </template>
        <template v-else>
            <div class="container corners-with-rounds-hrz">
                <div class="col-12">
                    <h1 class="text-center winit-health-pros">
                        WINIT health pros
                    </h1>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-3">
                        <filter-list :filter="filter"></filter-list>
                    </div>
                    <div class="col-12 col-lg-9">
                        <list :filter="filter" :list="list"></list>
                    </div>
                </div>
            </div>
        </template>
    </div>

</template>

<script>

    import FilterList from "./FilterList.vue";
    import List from "./List.vue";
    import Item from "./Item.vue";

    export default {
        name: "СontainerList",
        components: {Item, List, FilterList},
        data: () => ({
            item: null,
            filter: [
                {
                    type: "select",
                    label: "State",
                    value: null,
                    placeholder: "Select a state",
                    select: ["1", "2"]
                },
                {
                    type: "select",
                    label: "Role",
                    value: null,
                    placeholder: "Select a role",
                    select: ["1", "2"]
                },
                {
                    type: "select",
                    label: "gender",
                    value: null,
                    placeholder: "Select a gender",
                    select: ["1", "2"]
                }

            ],
            list: [
                {
                    id: 1,
                    name: "Alexandra Griffiths",
                    city: "Lost Angeles, CA",
                    profession: "Therapist",
                    priceMin: 40,
                    priceMax: 90,
                    description: "Hi everyone <br> Just a quck bio about"
                },
                {
                    id: 2,
                    name: "Chloe Gallagher",
                    city: "Lost Angeles, CA",
                    profession: "Therapist,Dietician",
                    priceMin: 40,
                    priceMax: 90,
                    description: "Investigating, diagnosing and treting the health conditions of patients"
                }
            ]
        }),
        methods: {
            getParam(index) {
                var params = window
                    .location
                    .search
                    .replace('?', '')
                    .split('&')
                    .reduce(function (p, e) {
                            var a = e.split('=');
                            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                            return p;
                        },
                        {}
                    );
                if (index in params) return params[index];
                return null;
            }
        },
        created() {
            if (this.getParam('id') !== null) {
                let id = this.getParam('id');
                let i = this.list.find((item) => {
                    return item.id = id;
                });
                if (i !== undefined && i != null) {
                    this.item = i;
                }

            }
        }
    }
</script>

<style scoped>
    .winit-health-pros {
        color: #3A3A3A;
        font-family: Quicksand;
        font-size: 42px;
        font-weight: bold;
        letter-spacing: -0.5px;
        line-height: 53px;
        text-align: center;
    }
</style>