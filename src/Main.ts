"use strict";

/// <reference path="./Snow.ts" />
module project {

    export class Main {
        private context2d:CanvasRenderingContext2D;
        private myCanvas:HTMLCanvasElement;
        private snowList:Snow[] = [];

        constructor() {

            this.myCanvas = <HTMLCanvasElement>document.getElementById('myCanvas');
            this.context2d = <CanvasRenderingContext2D>this.myCanvas.getContext('2d');

            this.myCanvas.width = document.documentElement.clientWidth;
            this.myCanvas.height = document.documentElement.clientHeight;

            this.createSnow();
        }

        private createSnow = () => {
            for (var i = 0; i < 100; i++) {
                var snow = new Snow();
                this.snowList.push(snow);
                snow.baseX = this.myCanvas.width * Math.random();
                snow.y = this.myCanvas.height * Math.random() - this.myCanvas.height;
            }
        }

        public update = () => {
            let snowListLength = this.snowList.length;
            for (var i = 0; i < snowListLength; i++) {
                var snow:Snow = this.snowList[i];
                snow.y += snow.dy;

                if (snow.y >= -snow.size) {
                    snow.frame += 0.1;
                }
                if (snow.y >= this.myCanvas.height + snow.size) {
                    snow.y -= this.myCanvas.height - snow.size;
                    snow.baseX = this.myCanvas.width * Math.random();
                }
            }
        }
        public draw = () => {

            this.context2d.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
            this.context2d.fillStyle = "rgb(255,255,255)";

            let snowListLength = this.snowList.length;
            for (var i = 0; i < snowListLength; i++) {
                var snow:Snow = this.snowList[i];
                this.context2d.beginPath();
                this.context2d.arc(snow.x, snow.y, snow.size, 0, Math.PI * 2, false);
                this.context2d.fill();
                this.context2d.closePath();
            }
        }

    }
}