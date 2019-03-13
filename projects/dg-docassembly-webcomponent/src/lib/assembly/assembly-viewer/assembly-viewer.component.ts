import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assembly-viewer',
  templateUrl: './assembly-viewer.component.html',
  styleUrls: ['./assembly-viewer.component.scss']
})
export class AssemblyViewerComponent {

  outputFormat = 'PDF';
  documentUrl: string;

  @Input() outputFormats = [];
  @Input() templateName: string;
  @Input() templateData: any;
  @Input() reusePreviewDocument = true;

  @ViewChild('modalTemplate') modalTemplate: ElementRef;

  constructor() {}

  previewDocument({ templateData, documentUrl }) {
    this.templateData = templateData;
    this.documentUrl = documentUrl;
  }

  showModal() {
    this.modalTemplate.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modalTemplate.nativeElement.style.display = 'none';
  }
}