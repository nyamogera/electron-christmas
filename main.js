"use strict";
var project;
(function (project) {
    var Main = (function () {
        function Main() {
            var _this = this;
            this.snowList = [];
            this.createSnow = function () {
                for (var i = 0; i < 100; i++) {
                    var snow = new project.Snow();
                    _this.snowList.push(snow);
                    snow.baseX = _this.myCanvas.width * Math.random();
                    snow.y = _this.myCanvas.height * Math.random() - _this.myCanvas.height;
                }
            };
            this.update = function () {
                var snowListLength = _this.snowList.length;
                for (var i = 0; i < snowListLength; i++) {
                    var snow = _this.snowList[i];
                    snow.y += snow.dy;
                    if (snow.y >= -snow.size) {
                        snow.frame += 0.1;
                    }
                    if (snow.y >= _this.myCanvas.height + snow.size) {
                        snow.y -= _this.myCanvas.height - snow.size;
                        snow.baseX = _this.myCanvas.width * Math.random();
                    }
                }
            };
            this.draw = function () {
                _this.context2d.clearRect(0, 0, _this.myCanvas.width, _this.myCanvas.height);
                _this.context2d.fillStyle = "rgb(255,255,255)";
                var snowListLength = _this.snowList.length;
                for (var i = 0; i < snowListLength; i++) {
                    var snow = _this.snowList[i];
                    _this.context2d.beginPath();
                    _this.context2d.arc(snow.x, snow.y, snow.size, 0, Math.PI * 2, false);
                    _this.context2d.fill();
                    _this.context2d.closePath();
                }
            };
            this.myCanvas = document.getElementById('myCanvas');
            this.context2d = this.myCanvas.getContext('2d');
            this.myCanvas.width = document.documentElement.clientWidth;
            this.myCanvas.height = document.documentElement.clientHeight;
            this.createSnow();
        }
        return Main;
    })();
    project.Main = Main;
})(project || (project = {}));
var project;
(function (project) {
    var Snow = (function () {
        function Snow() {
            this.size = Math.random() * 3 + 1;
            this.dy = Math.random() * 1 + 0.5;
            this.frame = 0;
        }
        Object.defineProperty(Snow.prototype, "x", {
            get: function () {
                return this.baseX + Math.sin(this.frame);
            },
            enumerable: true,
            configurable: true
        });
        return Snow;
    })();
    project.Snow = Snow;
})(project || (project = {}));
