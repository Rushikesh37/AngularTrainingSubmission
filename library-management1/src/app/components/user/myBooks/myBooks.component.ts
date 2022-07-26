import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './myBooks.component.html',
  styleUrls: ['./myBooks.component.css']
})
export class MyBooksComponent implements OnInit {
  counDowndate:any
  myBookForm !: FormGroup;
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "My Books";
  newdate:any;
crDate = new Date();
  displayedColumns: string[] = [ 'bookName', 'category', 'authorName','date','action'];

  constructor(private getMybook:UserServiceService) {}

  ngOnInit(): void {
    this.myBookList();
    console.log(this.seprateCrDate());
  }
  counter:any;
  public dateReminder(rtData:any){
    return rtData.getTime();
  }
  // public dateReminder(rtdata:any){
    
    // let returndt = this.seprateDate(rtdata).split(":");
    // let currentdt = this.seprateDate(issudate).split(":");

    // let diffYear = (Number(returndt[0])-Number(currentdt[0]));
    // let diffMonth = (Number(returndt[1])-Number(currentdt[1]));
    // let diffDay = Math.abs(Number(returndt[2])-Number(currentdt[2]));
    // let diffHour = Math.abs(Number(returndt[3])-Number(currentdt[3]));
    // let diffMinute = (Number(returndt[4])-Number(currentdt[4]));
    // let diffSecond = (Number(returndt[5])-Number(currentdt[5]));
    // let expire = (diffDay+'D '+diffHour+'Hr '+diffMinute+'Min '+diffSecond)
   //return (diffDay+'D '+diffHour+'Hr '+diffMinute+'Min '+diffSecond);
    // return crDate;
    // let x=setInterval(()=>{ 
    //   let crDate = new Date().getDate();
    //   var distance=rtdata-crDate;
    //   var days=Math.floor(distance/(1000*60*60*24));
    //   var hours=Math.floor(distance% (1000*60*60*24))/(1000*60*60)
    //   var minutes =Math.floor((distance%(1000*60*60))/(1000*60))
    //   var seconds=Math.floor((distance%(1000*60))/1000);
    //   this.counter=days +"d"+hours+"h"+minutes+"m"+seconds+"s"
    //   if(distance<0){
    //     clearInterval(x);
    //     this.counter="Expired"
    //   }
    // })
// return this.counter;
    
//   }
  myBookList(){
    console.log(this.getMybook.getIssuedBook);
    this.getMybook.getIssuedBook()
    .subscribe({
      next: (res) => {
       console.log(res,'dkjksdj')
       this.dataSource = new MatTableDataSource(res);
      },
        error: (err) => {
          alert("Error while fetching the data")
             // this.toast.success({detail:"Error while fetching the dat",duration:5000});
        }
      });
  }
  // public extendDate(date:any){
  //   let data = date.split("T");
  //   let speratedt = data[0].split("-");
  //   let year = speratedt[0];
  //   let month = speratedt[1];
  //   let dd = speratedt[2];
  //   return (year+'-'+month+'-'+(Number(dd)+3));
  // }
  public seprateDate(data:any){
    data = data.split("T");
    let rtdate = data[0].split("-");
    let rtyear = rtdate[0];
    let rtmonth = rtdate[1]
    let rtdd = rtdate[2]
    let rtTime = data[1].split(":");
    let rthh = rtTime[0];
    let rtminute = rtTime[1];
    let rtsecond = rtTime[2].split(".");
  return (rtyear+':'+rtmonth+':'+rtdd+':'+rthh+':'+rtminute+':'+rtsecond[0]);
  }
  public seprateCrDate(){
    let data = new Date();
      let day = data.getDate();
      let month = data.getMonth()+1;
    let year = data.getFullYear();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
    return (year+':'+month+':'+day+':'+hour+':'+minute+':'+second)
  }
  }

