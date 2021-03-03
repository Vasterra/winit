<template>
    <div>
        <group-filter-list v-for="item in filter" :filter="item" ></group-filter-list>
    </div>
</template>

<script>
    import GroupFilterList from "./GroupFilterList.vue";
    export default {
        name: "FilterList",
        components: {GroupFilterList},
        props: ["filter"]
    }
</script>

<style scoped>

</style>