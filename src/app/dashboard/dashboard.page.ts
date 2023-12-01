import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
const USERNAME = 'namasaya';
@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.page.html',
 styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 public nama= '';
 constructor(private authService: AuthenticationService, private alertController :
AlertController, private router : Router) { }
 ngOnInit() {
 this.cekSesi();
 console.log(this.nama);
 }
 async cekSesi() {
  const ambilNama = localStorage.getItem(USERNAME);
  if (ambilNama) {
    let namauser = ambilNama;
    this.nama = namauser;
  } else {
    this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
 logout() {
 this.alertController.create({
 header: 'Perhatian',
 subHeader: 'Yakin Logout aplikasi ?',
 buttons: [
 {
 text: 'Batal',
 handler: (data: any) => {
 console.log('Canceled', data);
 }
 },
 {
 text: 'Yakin',
 handler: (data: any) => {
 //jika tekan yakin
 this.authService.logout();
 this.router.navigateByUrl('/', { replaceUrl: true });
 }
 }
 ]
 }).then(res => {
 res.present();
 });
 }
}
