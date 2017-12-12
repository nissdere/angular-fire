import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <h3>{{title}}</h3>
      <div>
        <p>When there is a story,
          the image and link are shown</p>
        <div>
          Story:<input [(ngModel)]="story">
        </div>
        <div [style.visibility]="story ? 'visible' : 'hidden'">
          <img [src]="imagePath">
          <br/>
          <a [href]="link">{{story}}</a>
        </div>
      </div>
  </div>
  <div>
  <input
    (blur)="log('blur')"
    (focus)="log('focus')"
    (keydown)="log('keydown', $event)"
    (keyup)="log('keyup', $event)"
    (keypress)="log('keypress', $event)"
    >
</div>

<ul class="messages">
  <li *ngFor="let msg of messages">{{msg}}</li>
</ul>
  <!--img [src]="imagePath"
  (mouseover)="log('mouseover')"
  (mousedown)="log('mousedown')"
  (mouseleave)="log('mouseleave')"
  (mouseup)="log('mouseup')"
  (click)="log('click')"
   -->

    <!-- <body ng-controller="StoryController as vm">
    <div>
      <h3>{{vm.title}}</h3>
      <div>
        <input ng-model="vm.story.name">
      </div>
      <p>{{vm.story.name}}</p>
    </div>

     <div ng-style=
        "vm.story ?
          {visibility: 'visible'}
          : {visibility: 'hidden'}">

        <img ng-src="{{vm.imagePath}}">
        <br/>
        <a ng-href="{{vm.link}}">
          {{vm.story}}
        </a>

      </div>

    <img ng-src="{{vm.imagePath}}"
        ng-mouseover="vm.log('mouseover')"
        ng-mousedown="vm.log('mousedown')"
        ng-mouseleave="vm.log('mouseleave')"
        ng-mouseup="vm.log('mouseup')"
        ng-click="vm.log('click')"
      >
     
      

  </body-->

  `,
  styles: []
})
export class DemoComponent implements OnInit {

  /*
    angular
    .module('app', [])
    .controller('StoryController', StoryController);

  function StoryController() {
    var vm = this;
    vm.title = 'Angular 1 Two-Way Binding';
    vm.story = { id: 100, name: 'The Force Awakens' };
  }
  */

  imagePath = 'assets/angular.png';
  link = 'http://angular.io';
  story = 'The Empire Strikes Back';
  title = 'Angular Property Binding';
  messages : string [] = [];

  constructor() { }

  ngOnInit() {
  }

  log(msg: string, data: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
    if (data) {
      console.log(data);
    }
  }
}
