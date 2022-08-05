import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from './model/Store';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
public allStores: Store[] = [];

constructor(private http: HttpClient) {}

ngOnInit(): void {
this.fetchStores();
}

onStoresFetch() {
this.fetchStores();
}

private fetchStores() {
this.http
.get<{ [key: string]: Store }>('http://localhost:9090/stores')
.pipe(
map((res) => {
const stores = [];
for (const key in res) {
if (res.hasOwnProperty(key)) {
stores.push({ ...res[key], id: key });
}
}
return stores;
})
)
.subscribe((stores) => {
this.allStores = stores;
console.log(this.allStores);
});
}
}
