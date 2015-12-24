module project {
    export class Snow {
        get x():number {
            return this.baseX + Math.sin(this.frame);
        }
        constructor() {
            this.size = Math.random() * 3 + 1;
            this.dy = Math.random() * 1 + 0.5;
            this.frame = 0;
        }
        public baseX:number;
        public y:number;
        public size:number;
        public frame:number;
        public dy:number;
    }
}