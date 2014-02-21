# hitarea.js
jQuery plugin to apply a 'Hit Area' to any element.


### Basic Usage
    var enter = function (e) {
        e.style.border = '1px solid red';
    }
    var leave = function (e) {
        e.style.border = '1px solid green';
    }

    $('.el').hitarea(enter, leave);

### Advanced Usage
    var options = {
        radius: 50,
        shape: "circle",
        repeat: false,
        endOn: "leave"
    };
    var enter = function (e) {
        e.style.border = '1px solid red'; // use javascript
    }
    var leave = function (e) {
        $(e).css('border', '1px solid green'); // or use jquery
    }

    $('.el').hitarea(enter, leave, options);


### Options
**radius** (number, default: 20) - radius of hit area
**shape** (string, default: "square") - shape of the hit area. Options: "square" (default) and "circle"
**repeat** (boolean, default: true) - set to false to trigger event only once
**endOn** (string, default: "enter") - if *repeat* is false, when to trigger the last change. Options: "enter" (default) and "leave"
