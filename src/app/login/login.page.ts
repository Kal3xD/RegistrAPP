import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    usuario:'',
    pass:''
  }

  constructor(
    private router: Router,
    private activeroute: ActivatedRoute,
  
  ) { }

  ngOnInit() {
  }

  ingresar(){
    let navigationExtras :NavigationExtras ={
      state: {
        user: this.user
      }

    };
    this.router.navigate(['/home'],navigationExtras);
  }

  olvido(){
    this.router.navigate(['reestablecer']);
  }
}
