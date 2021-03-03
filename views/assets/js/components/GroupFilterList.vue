<template>
    <div>
        <label>
            {{ filter.label }}
        </label>
        <select class="form-select form-control" v-model="filter.value" :aria-label="filter.placeholder">
            <option selected>{{ filter.placeholder }}</option>
            <option v-for="item in filter.select" :value="item">{{ item }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "GroupFilterList",
        props: ["filter"],
    }
</script>

<style scoped>
    label{

    }

</style>