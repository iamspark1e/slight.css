function clickOutsideListener(targetDom, callback) {
    this.handler = function (e) {
        if (!targetDom.contains(e.target)) {
            callback && callback()
        }
    }
}
clickOutsideListener.prototype.add = function () {
    document.addEventListener('click', this.handler)
};
clickOutsideListener.prototype.remove = function () {
    document.removeEventListener('click', this.handler)
};