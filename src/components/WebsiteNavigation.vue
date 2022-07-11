<template>
  <nav>
    <ol>
      <li>Hello</li>
      <li>world</li>
      <li>and all his friends</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "WebsiteNavigation"
}
</script>

<style scoped>
  ol {
    width: 100%;
    padding: 0;
    border-bottom: solid 2px whitesmoke;
    display: inline-flex;
    justify-content: space-between;
  }

  li {
    flex-grow: 1;
    list-style-type: none;
    margin: 0.2vw;
    padding: 10px;
    border-radius: 10px;
    color: whitesmoke;
    text-shadow: 2px 0 #2c3e50, -2px 0 #2c3e50, 0 2px #2c3e50, 0 -2px #2c3e50,
    1px 1px #2c3e50, -1px -1px #2c3e50, 1px -1px #2c3e50, -1px 1px #2c3e50;

    transition: all 300ms;
  }

  li:hover {
    background: #35454f;
    flex-grow: 1.5;
  }
</style>