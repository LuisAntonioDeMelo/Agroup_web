import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/app/util/util';
import { AmostraAgroService } from './amostra-agro.service';
import { Agro } from './agro.model';

@Component({
  selector: 'app-amostra-agro',
  templateUrl: './amostra-agro.component.html',
  styleUrls: ['./amostra-agro.component.css']
})
export class AmostraAgroComponent implements OnInit {

  agro:Agro;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  success:boolean = false;
  
  
  constructor(private http:HttpClient,
              private amostraService:AmostraAgroService) 
              {}
   
  ngOnInit() {
    //this.amostraService.obterDados().subscribe(agro => this.agro = agro);
  }
   
  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
  }
 
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }
   
  onSubmit() {
      const formData = new FormData();
      formData.append('file', this.fileData);
      this.http.post(`${url}/previsao`, formData).subscribe((res:any) => {
          console.log(res);
          this.uploadedFilePath = res.fileData
          this.success = true;
          alert('Enviado  !!');
        });

        this.amostraService.obterDados()
        .subscribe(agro => this.agro = agro);
       
      }


}

