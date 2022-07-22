import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  showsnackbar: boolean = false;
  constructor() {}
}
