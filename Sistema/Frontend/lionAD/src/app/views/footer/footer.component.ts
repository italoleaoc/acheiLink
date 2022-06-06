import { PoliticaDialogComponent } from './../politica-dialog/politica-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  cookiesAdd = sessionStorage.getItem('cookiesAdd');

    constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    this.openDialog();
  }
  openDialog() {
  if(!this.cookiesAdd){
    const dialogRef = this.dialog.open(PoliticaDialogComponent);

    dialogRef.afterClosed().subscribe((result:any )=> {
      console.log('Dialog result:'+ result);
      this.cookiesAdd = result;
      sessionStorage.setItem('cookiesAdd', result);
    });
  }
  }
}
