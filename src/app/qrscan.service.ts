import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Injectable({
  providedIn: 'root'
})
export class QrscanService {

  constructor() { }

  async startScan() {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan(); 

    if (result.hasContent) {
      const scannedContent = result.content;

      if (this.isValidURL(scannedContent)) {
        window.open(scannedContent, '_blank'); 
      } else {
        console.log('Contenido escaneado no es una URL válida:', scannedContent);
        
      }
    }
  }

  private isValidURL(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === "http:" || urlObj.protocol === "https:";
    } catch (e) {
      return false;
    }
  }
}
