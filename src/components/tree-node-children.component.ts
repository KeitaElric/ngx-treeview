import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';

@Component({
  selector: 'TreeNodeChildren, tree-node-children',
  encapsulation: ViewEncapsulation.None,
  styles: [
    '.tree-children.tree-children-no-padding { padding-left: 0 }',
    '.tree-children { padding-left: 20px; overflow: hidden }'
  ],
  template: `
    <ng-container *mobxAutorun>
      <div [class.tree-children]="true"
          [class.tree-children-no-padding]="node.options.levelPadding"
          *treeAnimateOpen="
            node.isExpanded;
            speed:node.options.animateExpand;
            acceleration:node.options.animateAcceleration;
            enabled:node.options.animateExpand">
        <tree-node-collection
          *ngIf="node.children"
          [nodes]="node.children"
          [templates]="templates"
          [treeModel]="node.treeModel">
        </tree-node-collection>
        <tree-loading-component
          [style.padding-left]="node.getNodePadding()"
          class="tree-node-loading"
          *ngIf="!node.children"
          [template]="templates.loadingTemplate"
          [node]="node"
        ></tree-loading-component>
      </div>
    </ng-container>
  `
})
export class TreeNodeChildrenComponent {
  @Input() node: TreeNode;
  @Input() templates: any;

  constructor(private elementRef: ElementRef) {
    deprecatedSelector('TreeNodeChildren', 'tree-node-children', elementRef);
  }
}
