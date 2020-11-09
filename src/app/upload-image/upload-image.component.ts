import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @ViewChild('imgRenderer') imgRenderer: ElementRef;

  public uploadedImageBlob: any;

  ngOnInit(): void {

  }

  onPaste(event: any) {
    const items = event.clipboardData.items;

    for (const item of items) {
      if (item.type.indexOf('image') !== 0) {
        continue;
      }
      this.uploadedImageBlob = item.getAsFile();
    }

    if (this.uploadedImageBlob === null) {
       return;
    }

    const guid = UUID.UUID();
    const fileFromBlob: File = new File([this.uploadedImageBlob], `/assets/${guid}.jpg`);


    const reader = new FileReader();
    reader.onload = (evt: any) => {
      this.imgRenderer.nativeElement.src = evt.target.result;
    };
    reader.readAsDataURL(this.uploadedImageBlob);
  }
}
