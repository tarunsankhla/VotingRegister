import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(name, gender, address, state) {
    const issue = {
      name: name,
      gender: gender,
      address: address,
      state: state
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, name, gender, address, state, status) {
    const issue = {
      name: name,
      gender: gender,
      address: address,
      state: state,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
