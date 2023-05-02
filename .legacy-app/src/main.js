const l = console.log;
var vue = new Vue({
    el: "#app",
    data: {
        index: 2
    },
    computed: {
        acP_r: function () { return this.pagePath(this.index) }, // active page[rigth|left]
        acP_l: function () { return this.pagePath(this.index + 1) }
    },
    methods: {
        pagePath: (n) => {
            let l = n.toString().length;
            return 'N/' + '0'.repeat(4 - l) + n.toString() + '.gif';
        },
        mounted: function () {
            alert('Welcome');
        }
    },
    mounted: function () {
        const vue = this
        document.body.onkeyup = function (e) {
            console.log(this.index)
            switch (e.keyCode) {
                case 37:
                    vue.index += 2;
                    break;
                case 38:
                    vue.index -= 2;
                    break;
                case 39:
                    vue.index -= 2;
                    break;
                case 40:
                    vue.index += 2;
                    break;
                default:
                    return;
            }
            e.preventDefault();
            if(vue.index < 0) vue.index = 622;
            if(vue.index > 624) vue.index = 0;
        }
    }
});
// console.log(vue.pagePath);

dragElement(el('page_r'))
dragElement(el('page_l'))

function el(selector, sub="id"){
    switch (sub) {
        case "id":
            return document.getElementById(selector)
        default:
            break;
    }
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
        l('drag')
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    //   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
