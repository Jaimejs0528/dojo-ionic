;
import { Camera } from '@ionic-native/camera/ngx'
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  fileImage: any;
  
  cameraInfo={
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: false,
    saveToPhotoAlbum: true,
    sourceType: this.camera.PictureSourceType.CAMERA
  }
  
  cameraData(dataImage) {
    this.fileImage = `data:image/jpeg;base64,${dataImage}`
  }  
  constructor(private camera: Camera) {}

  capturePicture(){
    this.camera.getPicture(this.cameraInfo).then(this.cameraData);
  }

  searchPicture(){
    let localdata = this.cameraInfo
    localdata.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY
    this.camera.getPicture(localdata).then(this.cameraData)
  }

}
