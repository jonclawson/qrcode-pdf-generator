import {
  Component,
  VERSION,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('template', { static: true }) template: ElementRef;
  name = 'Angular ';

  url = '';
  pdf;

  constructor() {}

  ngOnInit(): void {}

  update(): void {
    const DATA = this.template.nativeElement;
    const doc: jsPDF = new jsPDF('p', 'px', 'a4');
    doc.html(DATA, {
      callback: (doc) => {
        this.pdf = doc.output('datauristring');
        console.log(this.pdf);
      },
    });
  }

  openPDF(): void {
    const DATA = this.template.nativeElement;
    const doc: jsPDF = new jsPDF('p', 'px', 'a4');
    doc.html(DATA, {
      callback: (doc) => {
        doc.output('dataurlnewwindow');
      },
    });
  }
}
