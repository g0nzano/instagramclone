import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent implements OnInit {

  options = [
    { icon: 'settings-sharp', label: 'Configuracion', redirectTo: '' },
    { icon: 'archive-outline', label: 'Archivo', redirectTo: '' },
    { icon: 'bar-chart-outline', label: 'Estadisticas', redirectTo: '' },
    { icon: 'time-outline', label: 'Mis Actividades', redirectTo: '' },
    { icon: 'qr-code-outline', label: 'QR Code', redirectTo: '' },
    { icon: 'bookmark-outline', label: 'Guardado', redirectTo: '' },
    { icon: 'list-outline', label: 'Mejores Amigos', redirectTo: '' },
    { icon: 'person-add-outline', label: 'Buscar amigos', redirectTo: '' },
    { icon: 'heart-circle-outline', label: 'COVID-19 Informacion', redirectTo: '' },
  ];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

}