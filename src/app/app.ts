import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <main>
        <div class="container-fluid">
            <div class="row">
              <h1>Hello Angular 2 Eggly!</h1>
            </div>
        </div>
    </main>
  `,
  styles: [
      `
          .main {
            padding-top: 96px;
            padding-left: 24px;
          }
      `
  ]
})

export class App { }
