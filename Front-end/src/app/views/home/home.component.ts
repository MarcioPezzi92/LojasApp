import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMerchandise } from './merchandise';
import { MerchandisesService } from '../merchandises.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public merchandise: any;
  public subscription: Subscription[] = [];

  constructor(
    private http: HttpClient,
    private merchandisesService: MerchandisesService
  ) {}

  ngOnInit(): void {
    this.showMerchandises();
  }

  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
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
}

/**
   *  getMerchandises() {
    return this.http.get<IMerchandise[]>(this._url);
  }
   * this.getMerchandises().subscribe((data) => {
      this.merchandises = data as any[];
      console.log(this.merchandises);
    }); */
