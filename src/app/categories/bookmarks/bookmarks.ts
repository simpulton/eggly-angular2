import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Bookmark} from '../../providers/bookmark-model';
import {CategoriesService} from '../../providers/categories-service';
import {Category} from '../../providers/category-model';
import {CategoryFilter} from '../category-filter';

@Component({
  selector: 'bookmarks',
  providers: [ CategoriesService ],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [ CategoryFilter ],
  template: require('./bookmarks.tmpl.html')
})

export class Bookmarks {
    public bookmarks: Bookmark[] = [
        {'id':0, 'title': 'AngularJS', 'url': 'http://angularjs.org', 'category': 'Development' },
        {'id':1, 'title': 'Egghead.io', 'url': 'http://egghead.io', 'category': 'Development' },
        {'id':2, 'title': 'A List Apart', 'url': 'http://alistapart.com/', 'category': 'Design' },
        {'id':3, 'title': 'One Page Love', 'url': 'http://onepagelove.com/', 'category': 'Design' },
        {'id':4, 'title': 'MobilityWOD', 'url': 'http://www.mobilitywod.com/', 'category': 'Exercise' },
        {'id':5, 'title': 'Robb Wolf', 'url': 'http://robbwolf.com/', 'category': 'Exercise' },
        {'id':6, 'title': 'Senor Gif', 'url': 'http://memebase.cheezburger.com/senorgif', 'category': 'Humor' },
        {'id':7, 'title': 'Wimp', 'url': 'http://wimp.com', 'category': 'Humor' },
        {'id':8, 'title': 'Dump', 'url': 'http://dump.com', 'category': 'Humor' }
    ];

    constructor(
        public CategoriesService: CategoriesService,
        private RouteParams: RouteParams
    ) {}

    ngOnInit() {
        this.CategoriesService.setCurrentCategory(this.RouteParams.get('category'));
    }
}
