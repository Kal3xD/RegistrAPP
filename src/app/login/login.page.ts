import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import  { Animation }from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonCard,{read:ElementRef}) card!: ElementRef<HTMLIonCardElement>;
  private animation: Animation | undefined;
  

  user = {
    usuario:'',
    pass:''
  }

  constructor(
    private router: Router,
    private activeroute: ActivatedRoute,
    private animationCtrl: AnimationController
  ) { }

  ngAfterViewInit(){
    this.animation = this.animationCtrl
    .create()
    .addElement(this.card.nativeElement)
    .duration(1800)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
      { offset: 1, transform: 'scale(1)', opacity: '1' },
    ]);
    this.animation.play()
    

  }

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
