import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IMerchandise } from '../home/merchandise';
import { MerchandisesService } from '../merchandises.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public merchandise: any;
  public subscription: Subscription[] = [];

  constructor(
    private http: HttpClient,
    private merchandisesService: MerchandisesService
  ) {}

  ngOnInit(): void {
    this.showMerchandises();
  }

  onStoreCreate(store: { name: string; address: string }) {
    console.log(store);
    this.http
      .post<{ name: string }>('http://localhost:9090/stores/', store)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onMerchandiseCreate(merchandise: {
    description: string;
    price: number;
    store: string;
  }) {
    console.log(merchandise);
    this.http
      .post<{ name: string }>('http://localhost:9090/merchandises', merchandise)
      .subscribe((res) => {
        console.log(res);
      });
  }

  showMerchandises() {
    this.subscription.push(
      this.merchandisesService.getMerchandises().subscribe(
        (resp) => {
          this.merchandise = resp.merchandises;
          console.log(this.merchandise);
        },
        (err) => {
          throw err;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
