<script lang="ts" setup>
    import { computed } from 'vue';
    import { Capital } from '../models';

    const props = defineProps<{
        modelValue: string;
        capitals: Capital[];
    }>();

    const emit = defineEmits<{
        'update:modelValue': [value: string];
    }>();

    const capital = computed({
        get() {
            return props.modelValue;
        },
        set(value) {
            emit('update:modelValue', value);
        },
    });
</script>

<template>
    <div class="item double">
        <label for="capital">Capital:</label>
        <select
            name="capital"
            id="capital"
            v-model="capital"
        >
            <option value="">Please select a capital</option>
            <option
                v-for="capital in capitals"
                :key="capital.capital"
                :value="capital.capital"
            >
                {{ capital.capital }}, {{ capital.country }}
            </option>
        </select>
    </div>
</template>

<style scoped>
    select {
        width: 85%;
        font-size: large;
        display: block;
    }
</style>
