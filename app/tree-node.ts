"use strict";

export class TreeNode {
    name: string;

    /**
     * Is the leaf expanded.
     */
    isExpanded: boolean;

    constructor(private leafs: TreeNode[], private values: string[]) {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
