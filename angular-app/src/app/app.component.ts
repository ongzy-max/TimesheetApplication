import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, Route } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PopupComponent>
  ) {}
  title = 'angular-app';

  ngOnInit() {
    this.printpath('', this.router.config);
  }
  
  printpath(parent: string, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      console.log(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? `${parent}/${route.path}` : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }

  searchForm = this.formBuilder.group({
    searchTerm: ''
  });

  public onCreateClick() {
    this.dialogRef = this.dialog.open(PopupComponent, {
      data: {
        dataKey: ""
      }
    })

     this.dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
      this.dialogRef.close();
    })
    //this.router.navigate(['/','create-timesheet'])
  }

  onSubmit(): void {
    console.log(this.searchForm.value.searchTerm);
    this.router.navigate(['search-task',this.searchForm.value.searchTerm]).then(() => {
      window.location.reload();
    })
    
    
  }
}
