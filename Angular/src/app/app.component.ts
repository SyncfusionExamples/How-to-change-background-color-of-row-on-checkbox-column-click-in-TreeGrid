import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './jsontreegriddata';
import {
  TreeGridComponent,
  PageService,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [PageService],
})
export class AppComponent {
  public data: Object[] = [];
  @ViewChild('treegrid')
  public treegrid!: TreeGridComponent;

  ngOnInit(): void {
    this.data = sampleData;
    // this.selectionsettings = { persistSelection: true
  }

  checkboxChange(args:any) {
    debugger;
    if (args.checked) {
      setTimeout(() => {
        const checkedRows = this.treegrid.element.querySelectorAll('.e-check');
        Array.from(checkedRows).map((row) => {
          row?.closest('tr')?.classList.add('bgcolor');
        });
      }, 0);
    } else {
      setTimeout(() => {
        const coloredRows = this.treegrid.element.querySelectorAll('.bgcolor');

        Array.from(coloredRows).map((row) => {
          if (row.querySelector('.e-uncheck') || row.querySelector('.e-stop')) {
            row.classList.remove('bgcolor');
          }
        });
      }, 0);
    }
  }
 
}
