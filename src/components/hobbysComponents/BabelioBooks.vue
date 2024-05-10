<template>
  <div id="win16304" class="babelio-window">
    <div id="wBa16304" class="babelio-container">
      <div id="Bidtitre16304"></div>
      <div id="Bcorps16304" ref="body"></div>
      <div class="Bfooter16304">
        <a href="https://www.babelio.com"
          ><img
            src="https://www.babelio.com/images/logo2.GIF"
            alt="Bibliotheque"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BabelioBooks",
  created() {
    const babelioScript = document.createElement("script");
    babelioScript.setAttribute(
      "src",
      "https://www.babelio.com/wj.php?id=16304",
    );
    babelioScript.setAttribute("type", "text/javascript");
    document.head.appendChild(babelioScript);
  },
};
</script>
<style>
#win16304.babelio-window {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

#win16304.babelio-window::-webkit-scrollbar {
  display: none;
  /* for Chrome, Safari, and Opera */
}

#wBa16304.babelio-container {
  width: 100%;
  border: none;
}

#Bcorps16304 {
  width: 100%;
}

.Belement16304 .Boeuvre16304 a:link,
.Belement16304 .Bauteur16304 a:link {
  color: whitesmoke;
}

.Belement16304 .Boeuvre16304 a:visited,
.Belement16304 .Bauteur16304 a:visited {
  color: #42b983;
}

.Belement16304 .Boeuvre16304 a:hover,
.Belement16304 .Bauteur16304 a:hover {
  color: #1c78c0;
}
</style>
