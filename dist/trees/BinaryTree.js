(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BinaryTreeNode {
        constructor(value, parent) {
            this.value = value;
            this.parent = parent;
            this.left = null;
            this.right = null;
        }
        findNode(value) {
            let node = this;
            while (node) {
                if (value === node.value)
                    return node;
                if (value > node.value && node.right)
                    node = node.right;
                if (value < node.value && node.left)
                    node = node.left;
            }
            return null;
        }
        insertNode(value) {
            const insert = (v, node) => {
                if (v < node.value) {
                    if (!node.left) {
                        node.left = new BinaryTreeNode(v, node);
                    }
                    else {
                        insert(v, node.left);
                    }
                }
                if (v > node.value) {
                    if (!node.right) {
                        node.right = new BinaryTreeNode(v, node);
                    }
                    else {
                        insert(v, node.right);
                    }
                }
            };
            insert(value, this);
        }
    }
});
