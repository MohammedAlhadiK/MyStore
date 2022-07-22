import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  showsnackbar: boolean = true;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.showsnackbar = this.snackbarService.showsnackbar;
  }
}
