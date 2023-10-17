import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin={
    usuario:"",
    pass:"",
  }

  constructor(
    private router: Router,
    private activeroute: ActivatedRoute,
    private storage: Storage
  
  ) { }

  async ngOnInit() {
    await this.storage.create()
  }

  iniciarSesion(){
    console.log("usuario" + this.formLogin.usuario)
    console.log("pass" + this.formLogin.pass)

    let DatosEnviar : NavigationExtras ={
      queryParams: {nombreusuario: this.formLogin.usuario, /*Se pueden agregar mas campos separados por coma */}
    }
    this.router.navigate(['/home'],DatosEnviar);

    /*Guardar info en estorage */
    this.storage.set("nombreUsuario",this.formLogin.usuario)
  }

  olvido(){
    this.router.navigate(['reestablecer']);
  }
}
