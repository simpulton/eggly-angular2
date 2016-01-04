import {Component} from 'angular2/core';
import {Categories} from './categories/categories';

@Component({
  selector: 'app',
  directives: [ Categories ],
  template: `
    <main>
        <div class="container-fluid">
            <div class="row">
                <categories></categories>
            </div>
        </div>
    </main>
  `,
  styles: [`
    .main {
        padding-top: 96px;
        padding-left: 24px;
    }
`]
})

export class App { }
