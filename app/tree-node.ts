"use strict";

export class TreeNode {
    /**
     * Is the leaf expanded.
     */
    isExpanded: boolean;

    constructor(public leafs: TreeNode[] = [], public values: string[] = []) {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
