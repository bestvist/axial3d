export default class Axial3d {
    constructor(options) {
        this.options = options || {};
        this.$el = document.querySelector(options.selector);
        this.point = {};
        this.transform = options.transform || 'translate';
        this.swing = options.swing || 5;
        this.setPoint();
        this.render();

        this.moveFunc = this.move.bind(this);
        document.addEventListener('mousemove', this.moveFunc);
    }

    setPoint() {
        const rect = this.$el.getBoundingClientRect();
        const x = (rect.right - rect.left) / 2;
        const y = (rect.bottom - rect.top) / 2;
        this.point = {
            x: x,
            y: y
        }
    }

    render() {
        if (!this.options.imgs) {
            throw Error('Axial3d options missing imgs attributes!');
        }

        this.$el.style['position'] = 'relative';
        this.$el.style['perspective'] = '800px';

        this.options.imgs.forEach(img => {
            img.id = 'axial3d-' + Math.floor(+new Date() * Math.random());
            const $imgs = document.createElement('img');
            $imgs.setAttribute(img.id,true);
            $imgs.src = img.src;
            $imgs.style.position = 'absolute';
            ['left', 'top', 'right', 'bottom', 'zIndex'].forEach(d => {
                $imgs.style[d] = img[d];
            });
            this.$el.appendChild($imgs);
        });
    }

    move(e) {
        const { pageX, pageY } = e;
        this.options.imgs.forEach(img => {
            if (img.static) return;

            const $img = document.querySelector(`[${img.id}]`);
            const rotatex = (pageX - this.point.x) * this.swing / 1000 * (img.zIndex || 1);
            const rotatey = (pageY - this.point.y) * this.swing / 1000 * (img.zIndex || 1);

            if (this.transform === 'translate') {
                $img.style['transform'] = `translate3d(${rotatex}px,${rotatey}px,0px)`;
            } else if (this.transform === 'rotate') {
                $img.style['transform'] = `rotatey(${rotatex}deg) rotatex(${rotatey}deg)`;
            }
        });
    }

    destory() {
        document.removeEventListener('mousemove', this.moveFunc);
    }
}