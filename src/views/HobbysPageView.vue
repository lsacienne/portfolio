<template>
    <div class="moving-window">
        <div class="header-window" @mousedown="mouseDown" @mouseup="mouseUp">
            <img src="@/assets/icons/x-circle-fill.svg" alt="">
        </div>
        <div class="content">
            test
        </div>
    </div>
</template>
<script>
    export default {
        name:"HobbyPageView",
        data() {
            return {
                isMouseDown: false,
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
            mouseDown: function(e) {
                this.isMouseDown = true;
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                this.endPos.x = e.clientX;
                this.endPos.y = e.clientY;
                this.draggedWindow = e.target.parentNode;
                document.onmouseup = this.closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = this.elementDrag;
            },
            elementDrag: function(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                this.startPos.x = this.endPos.x - e.clientX;
                this.startPos.y = this.endPos.y - e.clientY;
                this.endPos.x = e.clientX;
                this.endPos.y = e.clientY;
                // set the element's new position:
                //let windowWidth = this.draggedWindow.offsetWidth;
                //let windowHeight = this.draggedWindow.offsetHeight;
                this.draggedWindow.style.top = (this.draggedWindow.offsetTop - this.startPos.y) + "px";
                this.draggedWindow.style.left = (this.draggedWindow.offsetLeft - this.startPos.x ) + "px";
                
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
        position: absolute;
        width: 35vh;
        height: 45vh;
        border-radius: 1rem;
        background-color: rgba(41, 41, 41, 0.6);
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


</style>