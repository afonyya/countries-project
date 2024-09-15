<script lang="ts" setup>
    import { computed } from 'vue';
    import { MAX_DISTANCE, MIN_DISTANCE } from '../config'

    const props = defineProps<{
        modelValue: number;
    }>();

    const emit = defineEmits<{
        'update:modelValue': [value: number];
    }>();

    const distance = computed({
        get() {
            return props.modelValue;
        },
        set(value) {
            emit('update:modelValue', Number(value));
        },
    });
</script>

<template>
    <div class="item double">
        <label for="slider">Select distance:</label>
        <input
            type="range"
            class="slider"
            id="slider"
            :min="MIN_DISTANCE"
            :max="MAX_DISTANCE"
            v-model="distance"
        />
    </div>
</template>

<style scoped>
    .slider {
        width: 100%;
    }
</style>
