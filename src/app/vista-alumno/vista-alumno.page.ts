import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { QrscanService } from '../qrscan.service';

@Component({
  selector: 'app-vista-alumno',
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
})
export class VistaAlumnoPage implements OnInit {
  usuario: any;

  constructor(private router: Router, private qrscanservice: QrscanService, private alertController: AlertController) {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
    }
  }

  ngOnInit() {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  async iniciarEscaneo() {
    const scannedText = await this.qrscanservice.startScan();
    if (scannedText) {
      this.mostrarAlerta(scannedText);
    }
  }

  async mostrarAlerta(texto: string) {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: texto,
      buttons: ['Cerrar']
    });

    await alert.present();
  }
}
