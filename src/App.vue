<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue';
    import { getCountries } from './api';
    import { Capital, Country, Result } from './models';
    import { calculateDistance } from './utils';
    import CapitalSelect from './components/CapitalSelect.vue';
    import DistanceInput from './components/DistanceInput.vue';
    import RangeSlider from './components/RangeSlider.vue';
    import ResultList from './components/ResultList.vue';

    // Refs for holding data
    const countries = ref<Country[]>([]);
    const capital = ref('');
    const distance = ref(2500);

    // Fetch countries on component mount
    onMounted(async () => {
        try {
            countries.value = await getCountries();
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    });

    const capitals = computed<Capital[]>(() =>
        countries.value.map(country => ({
            capital: country.capital,
            country: country.country,
        })),
    );

    // Compute filtered results when capital or distance changes
    const results = computed<Result[]>(() => {
        const selectedCountry = countries.value.find(country => country.capital === capital.value);

        if (!selectedCountry) {
            return [];
        }

        // Filter capitals in the same region and within the selected distance
        return countries.value
            .filter(country => country.region === selectedCountry.region && country.capital !== selectedCountry.capital)
            .map(country => {
                const dist = calculateDistance(selectedCountry.lat, selectedCountry.lon, country.lat, country.lon);
                return {
                    capital: country.capital,
                    country: country.country,
                    distance: dist,
                };
            })
            .filter(country => country.distance <= (distance.value || 0))
            .sort((a, b) => a.distance - b.distance);
    });
</script>

<template>
    <main class="container">
        <section>
            <h2>Settings:</h2>
            <div class="settings">
                <CapitalSelect
                    v-model="capital"
                    :capitals="capitals"
                />
                <DistanceInput v-model="distance" />
                <RangeSlider v-model="distance" />
            </div>
        </section>
        <section>
            <h2>Results:</h2>
            <ResultList :items="results" />
        </section>
    </main>
</template>

<style scoped>
    main.container {
        width: 1024px;
    }
    section {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
    }
    .settings {
        display: flex;
    }
</style>
