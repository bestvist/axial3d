export default class Axial3d {
    constructor(options) {
        this.options = options || {};
        this.$el = document.querySelector(options.selector);
        this.render();
    }

    render() {
        for (let i of this.options.imgs) {
            const $imgs = document.createElement('img');
            $imgs.src = i;
            this.$el.appendChild($imgs);
        }
    }
}