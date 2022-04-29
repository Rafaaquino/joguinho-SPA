var existe, mouseDown, mouseMove;
var coors = {
            x: 0,
            y: 0
        };


var canvas = document.querySelector('#canvas');
console.log(canvas, 'teste');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    var context = canvas.getContext('2d');

    var start = function(coors) {
        context.beginPath();
        context.moveTo(coors.x, coors.y);
        console.log(coors.x, coors.y, 'posicao');
        this.isDrawing = true;
    };

    var move = function(coors) {
        if (this.isDrawing) {
            context.strokeStyle = "#000";
            context.lineJoin = "round";
            context.lineWidth = 3;
            context.lineTo(coors.x, coors.y);
            context.stroke();
        }
    };
    var stop = function(coors) {
        if (this.isDrawing) {
            this.touchmove(coors);
            this.isDrawing = false;
            if(!mouseMove) mouseDown = false;
            if(mouseDown && mouseMove) existe = true;
        }
    };
    var drawer = {
        isDrawing: false,
        mousedown: start,
        mousemove: move,
        mouseup: stop,
        touchstart: start,
        touchmove: move,
        touchend: stop
    };
    var draw = function(e) {
       if(e.type != "touchend"){
        var coors = {
            x: e.clientX || e.targetTouches[0].pageX.toString(),
            y: e.clientY || e.targetTouches[0].pageY.toString()
        };

        var lastX = coors.x;
        var lastY = coors.y;
       }else if(e.type == "touchend"){
         coors = {
            x: lastX,
            y: lastY
        };
       }
        drawer[e.type](coors);
         if(e.type == "mousedown" || e.type == "touchstart") mouseDown = true;
         if( (e.type == "mousemove" || e.type == "touchmove") && mouseDown) mouseMove = true;
    }
    canvas.addEventListener('mousedown', draw, false);
    canvas.addEventListener('mousemove', draw, false);
    canvas.addEventListener('mouseup', draw, false);
    canvas.addEventListener('touchstart', draw, false);
    canvas.addEventListener('touchmove', draw, false);
    canvas.addEventListener('touchend', draw, false);

    var go = function(e) {
            draw(e);
        }
//    };

//    document.getElementById('divCanvas').addEventListener('mousedown', go, false);
//    document.getElementById('divCanvas').addEventListener('touchstart', go, false);

    // prevent elastic scrolling
    document.body.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
    // end body:touchmove

    window.onresize = function(e) {
      console.log(canvas.width, canvas.height, 'tamano');
        canvas.width = document.canvas.width;
        canvas.height = document.canvas.height;
    };


    function base64Img(etv) {
      btnDisplay.addEventListener("click", function() {

        const dataURI = canvas.toDataURL();
        console.log('assinaturaBase64', dataURI);

      })

    }



    base64Img();
    $('.aviso2').click(function(){
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
