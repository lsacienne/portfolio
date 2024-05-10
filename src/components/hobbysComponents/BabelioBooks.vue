<template>
  <div id="win16304" class="babelio-window">
    <div id="wBa16304" class="babelio-container">
      <div id="Bidtitre16304"></div>

      <div id="Bcorps16304" ref="body" @click="displayNext"></div>
      <div class="Bfooter16304">
        <a href="https://www.babelio.com"
          ><img
            src="https://www.babelio.com/images/logo2.GIF"
            alt="Bibliotheque"
        /></a>
        <svg
          class="footer-background"
          viewBox="0 0 426 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 145V45.5C0 45.5 81 8.66579e-05 213 6.10352e-05C345 3.54124e-05 426 45.5 426 45.5V145H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <svg
        class="header-background"
        viewBox="0 0 426 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 -9.15527e-05V98.5C0 98.5 81 145 213 145C345 145 426 98.5 426 98.5L426 -9.15527e-05H0Z"
          fill="#DBDBDB"
        />
      </svg>
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
  methods: {
    displayNext(event) {
      if (!event.target.classList.contains("Bcouv16304")) {
        return;
      }
      // pop first child of Bcorps16304 which is a Belement and then put it at the end of the child list
      const parent = document.getElementById("Bcorps16304");
      if (parent) {
        const { firstElementChild, lastElementChild } = parent;
        if (
          firstElementChild &&
          firstElementChild.classList.contains("Belement16304")
        ) {
          parent.appendChild(firstElementChild);
          parent.appendChild(lastElementChild);
        }
      }
    },
  },
};
</script>
<style>
#win16304.babelio-window {
  width: 100%;
  height: 100%;
}

#wBa16304.babelio-container {
  width: 100%;
  border: none;
}

/* Header */

.header-background {
  position: absolute;
  top: 8%;
  left: 0;
  width: 100%;
}

#Bcorps16304 .Belement16304 .Bauteur16304,
#Bcorps16304 .Belement16304 .Boeuvre16304 {
  display: none;
  margin: none;
}

#Bcorps16304 .Belement16304 .Boeuvre16304 {
  width: 80%;
  justify-content: center;
}

#Bcorps16304 .Belement16304:nth-of-type(1) .Bauteur16304,
#Bcorps16304 .Belement16304:nth-of-type(1) .Boeuvre16304 {
  position: absolute;
  top: 0;
  display: flex;
}

#Bcorps16304 .Belement16304:nth-of-type(1) .Bauteur16304 {
  top: 2.2rem;
}

.Belement16304 .Boeuvre16304 a:link,
.Belement16304 .Bauteur16304 a:link {
  color: rgb(33, 33, 33);
}

.Belement16304 .Boeuvre16304 a:visited,
.Belement16304 .Bauteur16304 a:visited {
  color: #42b983;
}

.Belement16304 .Boeuvre16304 a:hover,
.Belement16304 .Bauteur16304 a:hover {
  color: #1c78c0;
}

/* Books layout */

#Bcorps16304 {
  width: 100%;
}

#Bcorps16304 .Belement16304 {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

#Bcorps16304 .Belement16304 .Bcouv16304 {
  width: 60%;
  margin-top: 15%;
  transition: transform 0.5s;
}

#Bcorps16304 .Belement16304:nth-of-type(5) {
  z-index: 1;
}

#Bcorps16304 .Belement16304:nth-of-type(4) {
  z-index: 2;
}

#Bcorps16304 .Belement16304:nth-of-type(3) {
  z-index: 3;
}

#Bcorps16304 .Belement16304:nth-of-type(2) {
  z-index: 4;
}

#Bcorps16304 .Belement16304:nth-of-type(1) {
  z-index: 5;
}

#Bcorps16304 .Belement16304:nth-of-type(3) .Bcouv16304 {
  transform: rotate(12deg) translateX(10px) translateY(15px);
}

#Bcorps16304 .Belement16304:nth-of-type(2) .Bcouv16304 {
  transform: rotate(-15deg) translateX(-20px) translateY(11px);
}

#Bcorps16304 .Belement16304 .Bcouv16304 a {
  pointer-events: none;
}

#Bcorps16304 .Belement16304 .Bcouv16304 img {
  width: 100%;
}

/* Footer in body (???) */

#Bcorps16304 .Bfooter16304 {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  bottom: 0.2rem;
  left: 0px;
  width: 100%;
}

#Bcorps16304 .Bfooter16304 .Bspacer16304 {
  display: none;
}

#Bcorps16304 .Bfooter16304 a {
  position: unset;
}

/* Footer */

.Bfooter16304 {
  position: absolute;
  padding: 0 !important;
  bottom: 0;
  left: 0;
  width: 100%;
}

.Bfooter16304 a {
  position: relative;
  bottom: 3.4rem;
  z-index: 7;
}

#wBa16304 .Bfooter16304 a img {
  width: 30%;
}

.Bfooter16304 .footer-background {
  position: absolute;
  z-index: 6;
  width: 100%;
  bottom: -1rem;
  left: 0;
  filter: drop-shadow(0px -5px 5px #4a4a4a);
}
</style>
