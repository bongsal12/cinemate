<template>
  <div>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl lg:text-6xl dark:text-black"
      >
        Featured Movies
      </h1>

      <ul class="grid grid-cols-5 gap">
        <li v-for="mov in movies">
          <MovieCard
            v-if="mov.id"
            :poster_path="mov.poster_path"
            :title="mov.title"
            :id="mov.id"
            :overview="mov.overview"
            :release_data="mov.release_data"
            :popularity="mov.popularity"
            :item="mov"
          />
        </li>

        <br /><br />
      </ul>
      <MovieCard />
    </section>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl lg:text-6xl dark:text-black"
      >
        Featured Tv Series
      </h1>
      <ul class="grid grid-cols-5 gap-6 px-20">
        <li v-for="tvSeries in series">
          <SeriesCard
            v-if="tvSeries"
            :poster_path="tvSeries.poster_path"
            :name="tvSeries.name"
            :overview="tvSeries.overview"
            :first_air_date="tvSeries.first_air_date"
            :popularity="tvSeries.popularity"
            :item="tvSeries"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const movies = useState(() => []);
const series = useState(() => []);

const { data } = await useFetch(`/api/movies/discover`, {
  transform: (data) => {
    movies.value = data.movies.results;
    series.value = data.series.results;
  },
});
</script>
