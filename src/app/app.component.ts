import { Component } from '@angular/core';
import { Tree } from './tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tree: Tree = {
    text: "It is a beautiful spring day. Flowers are blooming, the market is bustling, you've just had a cup of tea and are stepping outside of your courtyard. As you stroll down the road, you notice a young woman ahead of you. She's alone and she's crying.",
    button_text: "",
    left: { 
      text: "You approach the girl. As you get closer, you notice she is very beautiful, and her clothes and jewelry are very expensive. You call out to her but she does not respond.",
      button_text: "Approach her. You want to help!",
      left: {
        text: "She looks up at you, but then quickly puts her face in her sleeves and begins crying again. People on the street are beginning to look at you.",
        button_text: "Call out to her again, louder this time.",
        left: {
          text: "\"My name is Fang Xiaocao\", she replies. \"Please forgive me for crying like this, I know it is unseemly. I must be going.\" She starts to walk off.",
          button_text: "Ask what her name is.",
          left: {
            text: "She turns back to look at you and smiles weakly. \"Thank you. Truthfully, I am a bit lost. I'm from the Southern province, and recently all of my family died from a strange illness. I was the sole survivor. I came to this town because I heard I have an uncle who lives here. Could you help me find him?\"",
            button_text: "Ask her what's wrong, and if you can help.",
            left: {
              text: "You go with Xiaocao back to your house. You make some fresh tea and she sits and stares out the window silently. You being to worry if you've made a mistake bringing her here. What is she is a runaway, or a con artist? Finally she looks at you. \"Thank you for your generosity, not many people have been kind to me. \" You feel reassured that she is genuine.",
              button_text: "Take her back to your house, so she can rest before you head off to find her uncle.",
              left: {
                text: "",
                button_text: "Suggest that you head out soon to find her uncle, you don't want to waste daylight.",
                left: null,
                right: null,
              },
              right: {
                text: "\"My father was once a successful silk merchant... but I don't like to dwell on the past. My uncle's name is Wang LanTian, he is a potter that lives on the edges of town.\" Wang LanTian... that's not a name you are familiar with, and you know most of the people who lives here. As you are pondering this, you hear a teacup clatter. You look back at Fang Xiaocao, but she is gone.",
                button_text: "Ask her about her family, and her uncle.",
                left: {
                  text: "You go out to the court yard. \"Fang Xiaocao...?\" There is no response. You're very nervous now. You turn to go back inside. As you approach the doorway, you see a serpent's tail wrapping around the frame. You start backing up but it is too late. A huge white serpent emerges from your house, wraps itself around you, and swallows you whole. You regret helping Fang Xiaocao, and in your last moments you vow to not be so trusting in your next life, if you get one.",
                  button_text: "Check to see if she went outside.",
                  left: null,
                  right: null,
                },
                right: {
                  text: "You peek in the kitchen but she is not there. You push open the door of your bedroom and see Fang Xiaocao standing over some poetry you wrote the night before. You aren't sure how she could have walked to your bedroom so fast, but before you can say anything she turns to you. \"Wow, you are such a talented poet. Won't you recite some poetry for me? It's been so long since I've heard any.\"",
                  button_text: "Check to see if she's somewhere else in the house.", 
                  left: {
                    text: "You go to your desk and review your poems. You decide to read her your newest poem, and one of your favorites, \"Moonlight Magnolia\". As you start to recite the poem, you feel the wind knocked out of you and a pain in your chest. You look down and see the claw of a green monster, holding your still beating heart. As you collapse to the floor, you see Fang Xiaocao, now transformed into a horrible monster, eat your heart.",
                    button_text: "Go over to your desk and read her your poetry. When a beautiful girls asks you to read her poetry, you certainly don't refuse!",
                    left: null,
                    right: null,
                  },
                  right: {
                    text: "",
                    button_text: "Tell her you will read it to her later. Things are getting kind of weird, and you want to get going.",
                    left: null,
                    right: null,
                  },
                },
              },
            },
            right: {
              text: "",
              button_text: "Start heading towards the town square, to see if anybody knows her uncle. ",
              left: null,
              right: null,
            },
          },
          right: {
            text: "",
            button_text: "Let her leave. She clearly wants to be alone.",
            left: null,
            right: null,
          },
        },
        right: {
          text: "",
          button_text: "Ask her what's wrong.",
          left: null,
          right: null,
        },
      },
      right: {
        text: "",
        button_text: "Gently touch her shoulder to get her attention.",
        left: null,
        right: null,
      }
    },
    right: {
      text: "",
      button_text: "Cross the street and keep walking, it's better to mind your business.",
      left: {
        text: "Option BA",
        button_text: "",
        left: null,
        right: null,
      },
      right: {
        text: "Option BB",
        button_text: "",
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
