export default class Axial3d {
    constructor(options) {
        this.options = options || {};
        this.$el = document.querySelector(options.selector);
        this.point = {};
        this.rate = 0.02;
        this.setPosition();
        this.render();

        this.moveFunc = this.move.bind(this);
        document.addEventListener('mousemove', this.moveFunc);
    }

    setPosition(){
        const rect = this.$el.getBoundingClientRect();
        const x = (rect.right - rect.left) / 2;
        const y = (rect.bottom - rect.top) / 2;
        this.point = {
            x: x,
            y: y
        }
    }

    render() {
        if(!this.options.imgs){
            throw Error('axial3d options missing imgs attributes!');
        }

        this.$el.style = 'position:relative;perspective: 800px;';
        this.options.imgs.forEach((img, index) => {
            const $imgs = document.createElement('img');
            $imgs.id = `axial3d-${index}`;
            $imgs.src = img.src;
            $imgs.style.position = 'absolute';
            $imgs.style['transform'] = 'rotatey(0deg)';
            ['left', 'top', 'right', 'bottom'].forEach(d => {
                $imgs.style[d] = img[d];
            });
            this.$el.appendChild($imgs);
        });
    }

    move(e) {
        const {pageX, pageY} = e;
        this.options.imgs.forEach((img, index) => {
            if(img.static) return;

            const $img = document.querySelector("#axial3d-" + index);
            const rotatex = (pageX - this.point.x) * this.rate;
            const rotatey = (pageY - this.point.y) * this.rate;

            $img.style['transform'] = `rotatey(${rotatex}deg) rotatex(${rotatey}deg)`;
        });
    }

    destory(){
        document.removeEventListener('mousemove', this.moveFunc);
    }
}