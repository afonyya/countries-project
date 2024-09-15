<script lang="ts" setup>
    import { Result } from '../models';

    defineProps<{
        items: Result[];
    }>();
</script>

<template>
    <ul>
        <li
            v-for="(item, index) in items"
            :key="item.capital"
        >
            {{ index + 1 }}. {{ item.capital }}, {{ item.country }} ({{ item.distance.toFixed() }} km)
        </li>
    </ul>
</template>