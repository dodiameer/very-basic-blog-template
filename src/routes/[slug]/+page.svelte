<script lang="ts">
  export let data: import("./$types").PageData;
</script>

<article>
  <h1>{data.frontmatter.title}</h1>
  <p>Published on {data.frontmatter.date}</p>
  {@html data.content}
</article>
