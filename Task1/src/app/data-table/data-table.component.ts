import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit,OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  message:string | undefined;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'from','to','dateCreated','permanentLink'];
  dataSource = new MatTableDataSource<DataTableItem>(EXAMPLE_DATA);
  constructor(public dialog: MatDialog, private productservice:ProductService) {}
  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  } 
  ngOnInit(): void {
    this.productservice.subject.subscribe((data:any)=>{
      const records=Object.assign({},...data);
      EXAMPLE_DATA.push(records);
      console.log(records);
      
    })
  }
    openDialog() {
    this.dialog.open(DialogComponent);
  }
  


}

export interface DataTableItem {
  id: number;
  from:string;
  to:string;
  dateCreated:string;
  permanentLink:boolean;
}

const EXAMPLE_DATA: DataTableItem[] = [
  {
    id: 19228,
    from: '/heath_and_wellness',
    to: '/danone-group-in-heath-and-wellness/report',
    dateCreated: "26/11/2022",
    permanentLink: true,
  },
  {
    id: 19229,
    from: '/heinekens_acquisition_of_femsa_increases',
    to: '/heinekens_acquisition_of_femsa_increases',
    dateCreated: "26/11/2022",
    permanentLink: true,
  },
  {
    id: 19230,
    from: '/herbal_traditional_products',
    to: '/herbal_traditional_products',
    dateCreated: "26/11/2022",
    permanentLink: true,
  },
  {
    id: 19231,
    from: '/home_care',
    to: '/amway-corp-in-home-care/report',
    dateCreated: "26/11/2022",
    permanentLink: true,
  },
  {
    id: 19232,
    from: '/hong-kong-china',
    to: '/100-home-delivery-take-away-in-hong-kong-china',
    dateCreated: "26/11/2022",
    permanentLink: true,
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: "26/11/2022",
    permanentLink: true,
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: "26/11/2022",
    permanentLink: true,
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: "26/11/2022",
    permanentLink: true,
  },
];