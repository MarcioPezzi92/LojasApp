import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface IStore {
  name: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'stores-app';

  async saveStore(name: string, address: string) {
    await this.http.post<IStore>('http://localhost:9090/stores', {
      name: name,
      address: address,
    });
  }

  teste(e: any) {
    console.log(e.target.value);
  }
}
