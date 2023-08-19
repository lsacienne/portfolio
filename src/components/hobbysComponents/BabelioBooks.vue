<template>
    <div class="babelio-container">
        <div id="wBa16304">
            <div id="Bcorps16304" ref="body">
                <!-- <script type="text/javascript" src="https://www.babelio.com/wj.php?id=16304"></script> -->
            </div>
            <div class="Bfooter16304">
                <a href="https://www.babelio.com"><img src="https://www.babelio.com/images/logo2.GIF"
                        alt="Bibliotheque" /></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BabelioBooks",
    mounted() {
        var BObj = {};
        BObj.id = '16304';
        BObj.cururl = window.location.href;

        BObj.nosdivs = this.$refs.body;
        console.log(BObj.nosdivs);
        BObj.addScript = function (url) {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            this.nosdivs.appendChild(script)
        };

        BObj.getcharset = function () {
            return document.characterSet;
        };
        BObj.charset = BObj.getcharset();
        if (BObj.cururl.indexOf("babelio.com") != -1)
            this.getContent('https://www.babelio.com/wj2.php?id=' + BObj.id + '&navigator=' + navigator.appName + '&codepage=' + BObj.charset + '&rnd=137');
        //BObj.addScript('https://www.babelio.com/wj2.php?id=' + BObj.id + '&navigator=' + navigator.appName + '&codepage=' + BObj.charset + '&rnd=137');
        else
            this.getContent('https://www.babelio.com/wj2.php?id=' + BObj.id + '&navigator=' + navigator.appName + '&codepage=' + BObj.charset)
        //BObj.addScript('https://www.babelio.com/wj2.php?id=' + BObj.id + '&navigator=' + navigator.appName + '&codepage=' + BObj.charset);
    },
    methods: {
        async getContent(url) {
            let script = await fetch(`https://cors-proxy.htmldriven.com/?url=${url}`, { method: 'get' });
            console.log(script);
            let outLines = script.split('\n').filter((line) => line.startsWith("out = "));
            console.log(outLines);
        }
    }
}
</script>
<style scoped></style>