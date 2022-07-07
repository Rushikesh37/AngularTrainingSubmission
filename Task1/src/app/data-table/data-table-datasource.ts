// import { DataSource } from '@angular/cdk/collections';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { map } from 'rxjs/operators';
// import { Observable, of as observableOf, merge } from 'rxjs';

// // TODO: Replace this with your own data model type
// export interface DataTableItem {
//   id: number;
//   from:string;
//   to:string;
//   dateCreated:number;
//   permanentLink:boolean;


// }

// // TODO: replace this with real data from your application
// const EXAMPLE_DATA: DataTableItem[] = [
//   {
//     id: 19228,
//     from: '/heath_and_wellness',
//     to: '/danone-group-in-heath-and-wellness/report',
//     dateCreated: new Date().getDate(),
//     permanentLink: true,
//   },
//   {
//     id: 19229,
//     from: '/heinekens_acquisition_of_femsa_increases',
//     to: '/heinekens_acquisition_of_femsa_increases',
//     dateCreated: new Date().getDate(),
//     permanentLink: true,
//   },
//   {
//     id: 19230,
//     from: '/herbal_traditional_products',
//     to: '/herbal_traditional_products',
//     dateCreated: new Date().getDate(),
//     permanentLink: true,
//   },
//   {
//     id: 19231,
//     from: '/home_care',
//     to: '/amway-corp-in-home-care/report',
//     dateCreated: new Date().getDate(),
//     permanentLink: true,
//   },
//   {
//     id: 19232,
//     from: '/hong-kong-china',
//     to: '/100-home-delivery-take-away-in-hong-kong-china',
//     dateCreated: new Date().getDate(),
//     permanentLink: true,
//   },
//   {
//     id: 19233,
//     from: '/hot-drinks',
//     to: '/associated-british-foods-plc-in-hot-drinks/report',
//     dateCreated: new Date().getDate(),
//     permanentLink: true,
//   },
//   {
//     id: 19233,
//     from: '/hot-drinks',
//     to: '/associated-british-foods-plc-in-hot-drinks/report',
//     dateCreated: new Date().getDate(),
//     permanentLink: true,
//   },
//   {
//     id: 19233,
//     from: '/hot-drinks',
//     to: '/associated-british-foods-plc-in-hot-drinks/report',
//     dateCreated: new Date().getDate(),
//     permanentLink: true,
//   },
// ];

// /**
//  * Data source for the DataTable view. This class should
//  * encapsulate all logic for fetching and manipulating the displayed data
//  * (including sorting, pagination, and filtering).
//  */
// export class DataTableDataSource extends DataSource<DataTableItem> {
//   data: DataTableItem[] = EXAMPLE_DATA;
//   paginator: MatPaginator | undefined;
//   sort: MatSort | undefined;

//   constructor() {
//     super();
//   }

//   /**
//    * Connect this data source to the table. The table will only update when
//    * the returned stream emits new items.
//    * @returns A stream of the items to be rendered.
//    */
//   connect(): Observable<DataTableItem[]> {
//     if (this.paginator && this.sort) {
//       // Combine everything that affects the rendered data into one update
//       // stream for the data-table to consume.
//       return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
//         .pipe(map(() => {
//           return this.getPagedData(this.getSortedData([...this.data ]));
//         }));
//     } else {
//       throw Error('Please set the paginator and sort on the data source before connecting.');
//     }
//   }

//   /**
//    *  Called when the table is being destroyed. Use this function, to clean up
//    * any open connections or free any held resources that were set up during connect.
//    */
//   disconnect(): void {}

//   /**
//    * Paginate the data (client-side). If you're using server-side pagination,
//    * this would be replaced by requesting the appropriate data from the server.
//    */
//   private getPagedData(data: DataTableItem[]): DataTableItem[] {
//     if (this.paginator) {
//       const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
//       return data.splice(startIndex, this.paginator.pageSize);
//     } else {
//       return data;
//     }
//   }

//   /**
//    * Sort the data (client-side). If you're using server-side sorting,
//    * this would be replaced by requesting the appropriate data from the server.
//    */
//   private getSortedData(data: DataTableItem[]): DataTableItem[] {
//     if (!this.sort || !this.sort.active || this.sort.direction === '') {
//       return data;
//     }

//     return data.sort((a, b) => {
//       const isAsc = this.sort?.direction === 'asc';
//       switch (this.sort?.active) {
       
//         case 'id': return compare(+a.id, +b.id, isAsc);
        
//         default: return 0;
//       }
//     });
//   }
// }

// /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(a: string | number, b: string | number, isAsc: boolean): number {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
