import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regstation',
  templateUrl: './regstation.component.html',
  styleUrls: ['./regstation.component.css'],
})
export class RegstationComponent implements OnInit {
  regForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.regForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', Validators.required],
      pwd: ['', Validators.required],
      conPwd: ['', Validators.required],
    });
  }
}
