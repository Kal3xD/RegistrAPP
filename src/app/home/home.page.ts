import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensaje: string = "";

  data: any;
  
  constructor(private activeroute: ActivatedRoute,private storage:Storage,private router: Router) 
    {
      this.activeroute.queryParams.subscribe(params => {
        if(params['nombreusuario']){
          this.mensaje= params['nombreusuario']
        }
        else{this.router.navigate(["/login"])}
      })
  }

  async verStorage(){
    let nombre = await this.storage.get("nombreUsuario");
    console.log("El nombre usuario es "+ nombre)

  }
    


}
