import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class EmployeeService {

  constructor( private http:Http) { }
  getEmployees(){
    return this.http.get("https://ng4springbootrest.herokuapp.com/employees")
        .map(res => res.json());
  }
   addEmployee(info){
    return this.http.post("https://ng4springbootrest.herokuapp.com/employees",info)
        .map(res => res.json());
  }
  getEmployee(id){
    return this.http.get("https://ng4springbootrest.herokuapp.com/employees/"+id)
        .map(res => res.json());
  }
  deleteEmployee(id){
    return this.http.delete("https://ng4springbootrest.herokuapp.com/employees/"+id)
        //.map(res => res.json());
  }
  updateEmployee(id, info){
    return this.http.put("https://ng4springbootrest.herokuapp.com/employees/"+id,info)
        .map(res => res.json());
  }
}