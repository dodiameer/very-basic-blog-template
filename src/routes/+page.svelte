<script lang="ts">
  export let data: import("./$types").PageData;
</script>

<h1>Latest posts</h1>
<ol
  class="grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-8 list-none p-0"
>
  {#each data.posts as post}
    <li class="flex flex-col p-8 shadow-md bg-white text-black">
      <h2>
        <a href="/{post.slug}">{post.title}</a>
      </h2>
      <p class="mb-8">{post.excerpt}</p>
      <a href="/{post.slug}" class="mt-auto">Read post</a>
    </li>
  {/each}
</ol>
