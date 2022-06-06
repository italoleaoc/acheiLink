import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar : MatSnackBar) { }
  public  showSnackBar(messagem: string, action: string){
    this.snackBar.open(messagem, action, {duration:3000});
  }
  public showSnackBarOf(messagem: string, action: string){
    this.snackBar.open(messagem, action, {duration:3000});

  }
}
