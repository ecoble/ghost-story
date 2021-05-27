import { Component } from '@angular/core';
import { Tree } from './tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tree: Tree = {
    text: "Start of the story",
    left: { 
      text: "Option A",
      left: {
        text: "Option AA",
        left: null,
        right: null,
      },
      right: {
        text: "Option AB",
        left: null,
        right: null,
      }
    },
    right: {
      text: "Option B",
      left: {
        text: "Option BA",
        left: null,
        right: null,
      },
      right: {
        text: "Option BB",
        left: null,
        right: null,
      }
    }
  };

  currentNode: Tree = this.tree

  title = 'ghost-story';

  leftClick() {
    this.currentNode = this.currentNode.left
    console.log("left click")
  }

  rightClick() {
    this.currentNode = this.currentNode.right
    console.log("right click")
  }
}
