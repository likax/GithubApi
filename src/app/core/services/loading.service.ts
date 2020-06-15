import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadingService {

  public loadingSpinner = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getSpinnerMode(): Observable<boolean> {
    return this.loadingSpinner.asObservable();
  }

  showLoading() {
    this.loadingSpinner.next(true);
  }

  hideLoading() {
    this.loadingSpinner.next(false);
  }
}
