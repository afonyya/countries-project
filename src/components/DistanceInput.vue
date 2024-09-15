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
            emit('update:modelValue', value);
        },
    });
</script>

<template>
    <div class="item">
        <label for="distance">Distance:</label>
        <input
            type="number"
            id="distance"
            name="distance"
            size="5"
            :min="MIN_DISTANCE"
            :max="MAX_DISTANCE"
            v-model="distance"
        />
    </div>
</template>
