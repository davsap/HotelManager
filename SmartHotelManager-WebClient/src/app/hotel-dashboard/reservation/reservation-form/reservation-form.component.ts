import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(5)]],
    email: [null, [Validators.required, Validators.minLength(5), Validators.email]],
    provider: [null, [Validators.required ]],
    hotel: [null, [Validators.required ]],
    guests: [null, [Validators.required, Validators.min(1)]],
    beginDate: [null, [Validators.required]],
    endDate: [null, [Validators.required ]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
