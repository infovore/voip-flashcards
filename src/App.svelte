<script>
  import router from "page";
  
  import Home from './routes/Home.svelte';
  import Card from './routes/Card.svelte';

  let page;
  let params;

  router('/', () => page = Home);
  router('/card', () => page = Card);

  router.start();
</script>

<main>
  <svelte:component this={page} params={params} />
</main>

<style>
main {
  height: 100%;
}
</style>