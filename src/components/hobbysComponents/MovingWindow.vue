<template>
    <div class="place-holder" ref="place-holder">
    </div>
    <div class="moving-window">
        <div class="header-window" @mousedown="mouseDown">
            <img src="@/assets/icons/x-circle-fill.svg" alt="" v-on:click="cutWindow">
        </div>
        <div class="content">
            <slot>
            </slot>
        </div>
    </div>
    
</template>
<script>
    export default {
        name:"MovingWindow",
        data() {
            return {
                startPos: {
                    x:0,
                    y:0
                },
                endPos: {
                    x:0,
                    y:0
                },
                draggedWindow: null
            }
        },
        methods: {
            cutWindow: function(event) {
                event.target.parentNode.parentNode.style.display = "none"
                this.$refs['place-holder'].style.display
            },
            mouseDown: function(e) {
                this.draggedWindow = e.target.parentNode;
                
                
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                this.endPos.x = e.clientX;
                this.endPos.y = e.clientY;
                
                
                document.onmouseup = this.closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = this.elementDrag;
            },
            elementDrag: function(e) {
                
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                //let windowWidth = this.draggedWindow.offsetWidth;
                //let windowHeight = this.draggedWindow.offsetHeight;

                this.startPos.x = this.endPos.x - e.clientX;
                this.startPos.y = this.endPos.y - e.clientY;
                this.endPos.x = e.clientX;
                this.endPos.y = e.clientY;
                // set the element's new position:
                
                this.draggedWindow.style.top = (this.draggedWindow.offsetTop - this.startPos.y) + "px";
                this.draggedWindow.style.left = (this.draggedWindow.offsetLeft - this.startPos.x ) + "px";
                this.draggedWindow.style.position = "absolute";
                this.$refs['place-holder'].style.display = "unset";
                
                
            },
            closeDragElement: function() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

    }
</script>
<style>
    .moving-window {
        width: 35vh;
        height: 45vh;
        border-radius: 1rem;
        background-color: rgba(41, 41, 41, 0.6);
        backdrop-filter: blur(0.3rem);
    }

    .place-holder {
        width: 35vh;
        height: 45vh;
        border-radius: 1rem;
        display: none;
    }

    .moving-window .header-window{
        background-color: rgba(32, 32, 32, 0.9);
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: .2rem;
        border-bottom-right-radius: .2rem;
        height: 8%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.5rem;
    }

    .moving-window .header-window img {
        height: 50%;
    }

    .moving-window .content {
        height: 92%;
        width: 100%;
    }

    @media only screen and (max-width: 1100px) {
        .moving-window {
            width: 90vw;
            height: 116vw;
            margin-bottom: 2rem;
        }

        .place-holder {
            width: 90vw;
            height: 116vw;
            margin-bottom: 2rem;
        }
    }



</style>