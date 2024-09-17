import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventos: any[] = [];
  eventosFiltrados: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }
  
  getEventos() {
    this.http.get<any>('http://localhost:8080/api/evento')
      .subscribe(
        response => {
          this.eventos = response;
          this.eventosFiltrados = this.eventos; 
        },
        error => {
          console.error('Erro ao buscar eventos', error);
        }
      );
  }

  performSearch(searchTerm: string) {
    if (searchTerm) {
      this.eventosFiltrados = this.eventos.filter(evento =>
        (evento.nome && evento.nome.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (evento.sala && evento.sala.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } else {
      this.eventosFiltrados = this.eventos;
    }
  }
}
