import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  people = [
    {
      id: 1,
      name: 'Abhinav Joshi',
      email: 'abhi@gmail.com',
      //dob: '7/2/2010',
     // age:22
    },
    {
      id: 2,
      name: 'Shlok P',
      email: 'shlok@gmail.com',
      //dob: '4/3/1987',
     // age:40
    },
    {
      id: 3,
      name: 'Shreya J',
      email: 'shreya@gmail.com',
      //dob: '3/3/1988',
     // age:50
    },
    {
      id: 4,
      name: 'Adhya D',
      email: 'adhya@gmail.com',
      //dob: '8/4/1876',
     // age:80
    }
  ];

  idFilter = new FormControl('');
  nameFilter = new FormControl('');
  
  emailFilter = new FormControl('');
 // dobFilter = new FormControl('');
 // ageFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'email'];
  filterValues = {
   
    id: '',
    name: '',
    email: '',
    //dob: '',
    //age:''
  };

  constructor() {
    this.dataSource.data = this.people;
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {
    this.idFilter.valueChanges
    .subscribe(
      id => {
        this.filterValues.id = id;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
   
    this.emailFilter.valueChanges
      .subscribe(
        email => {
          this.filterValues.email = email;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    // this.dobFilter.valueChanges
    //   .subscribe(
    //     dob => {
    //       this.filterValues.dob = dob;
    //       this.dataSource.filter = JSON.stringify(this.filterValues);
    //     }
    //   )
    // this.ageFilter.valueChanges
    // .subscribe(
    //   age => {
    //     this.filterValues.age = age;
    //     this.dataSource.filter = JSON.stringify(this.filterValues);
    //   }
    // )
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1 
       && data.name.toLowerCase().indexOf(searchTerms.name) !== -1
        
        && data.email.toLowerCase().indexOf(searchTerms.email) !== -1;
       // && data.dob.toLowerCase().indexOf(searchTerms.dob) !== -1
      //  && data.age.toString().toLowerCase().indexOf(searchTerms.age) !== -1;
    }
    return filterFunction;
  }

}  




