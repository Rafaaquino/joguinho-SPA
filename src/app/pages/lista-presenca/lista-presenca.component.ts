import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-lista-presenca',
  templateUrl: './lista-presenca.component.html',
  styleUrls: ['./lista-presenca.component.css']
})
export class ListaPresencaComponent implements OnInit {

  usuarios: any
  fileName= 'DesafioBilastina.xlsx';
  paginaAtual = 1;
  listaPresenca: any = [];
  @Output() pageChange: EventEmitter<number>;


  constructor(private allUsers: ServicesService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.allUsers.allImages().subscribe(users => {
      console.log(users, 'retorno');
      this.usuarios = users;

      this.usuarios  = this.usuarios.filter(function(presenca) {
        return presenca.name == "Usuario da festa";
      });

    }, error => {
      console.log(error);
    });
  }

  exportexcel(): void
    {
       /* table id is passed over here */
       let element = document.getElementById('excel-table');
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);

    }

}
