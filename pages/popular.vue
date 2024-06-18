<template>
  <div>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl lg:text-6xl dark:text-black"
      >
        Popular Movies
      </h1>

      <ul class="grid grid-cols-5 gap">
        <li v-for="mov in movies">
          <MovieCard
            v-if="mov"
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
        Popular Tv Series
      </h1>
      <ul class="grid grid-cols-5 gap">
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

const { data } = await useFetch(`/api/movies/popular`, {
  transform: (data) => {
    movies.value = data.popularMovies.results;
    series.value = data.popularSeries.results;
  },
});
</script>
