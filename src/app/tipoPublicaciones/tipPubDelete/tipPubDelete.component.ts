import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { TipoPublicacionService } from '../../services/tipoPublicacion.service';
@Component({
  selector: 'app-delete',
  templateUrl: './tipoPubDelete.component.html',
  styleUrls: ['./tipoPubDelete.component.css']
})
export class TipoPubDeleteComponent implements OnInit {


  tipoPublicacion: any;
  date: Date;
  buscarTipoPublicacion: any;
  constructor(private http: HttpClient, private tipoPublicacionDataService: TipoPublicacionService) { }

  ngOnInit() {
      this.buscarTipoPublicacion();

  }
  buscarOpcion() {
      this.tipoPublicacionDataService.buscarTipoPublicacion().subscribe(respuesta => {
          this.tipoPublicacion = respuesta;
          alert(JSON.stringify(this.tipoPublicacion));
      },
          err => {
          }
      );
  }
}
