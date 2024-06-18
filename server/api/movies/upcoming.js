export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;
  const upComingMoiviesUrl = "https://api.themoviedb.org/3/movie/upcoming";
  const upComingSeriesUrl = "https://api.themoviedb.org/3/tv/on_the_air";

  const upComingMoivies = await $fetch(upComingMoiviesUrl, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  });
  const upComingSeries = await $fetch(upComingSeriesUrl, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  });
  return { upComingMoivies, upComingSeries };
});
