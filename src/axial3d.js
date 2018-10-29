export default class Axial3d {
    constructor(options) {
        this.options = options || {};
        this.$el = document.querySelector(options.selector);
        this.rate_w = 0;
        this.rate_h = 0;
        this.render();
        document.body.onmousemove = (e) => {
            this.picMove(e.pageX, e.pageY);
        }
    }

    render() {
        const window_width = document.body.clientWidth;
        const window_height = document.body.clientHeight;
        const field_width = this.$el.offsetWidth;
        const field_height = this.$el.offsetHeight;

        this.rate_w = field_width / window_width;
        this.rate_h = field_height / window_height;


        this.options.imgs.forEach((img, index) => {
            const $imgs = document.createElement('img');

            $imgs.id = `axial3d-${index}`;
            $imgs.src = img.src;
            ['left', 'top', 'right', 'bottom'].forEach(d => {
                $imgs.style[d] = img[d];
            });
            $imgs.style['transform'] = 'rotatey(-3deg)'
            this.$el.appendChild($imgs);
        });
    }

    picMove(pageX, pageY) {
        this.options.imgs.forEach((img, index) => {
            const $img = document.querySelector("#axial3d-" + index);
            const field_width = this.$el.offsetWidth;
            const field_height = this.$el.offsetHeight;
            const offer_w = this.rate_w * pageX;
            const offer_h = this.rate_h * pageY;

            $img.style.left = field_width / 2 - offer_w + img.left + 'px';
            $img.style.top = field_height / 2 - offer_h + img.top + 'px';
        });
    }
}