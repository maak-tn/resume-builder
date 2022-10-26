import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../dialogs/settings/settings.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSettingsDialog() {
    const dialogRef = this.dialog.open(SettingsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
