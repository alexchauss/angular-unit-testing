import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  text = 'contact page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    password: ''
  };
  submitted = false;
  message = '';

  constructor(private fb: FormBuilder, private logger: LoggerService) {
    this.contactForm = fb.group({
      name: new FormControl(this.contact.name,
        [Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.contact.email,
        [Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.contact.password,
        [Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.logger.log('model-based reactive form submitted');
    this.message = this.logger.getMessage();
    this.submitted = true;
  }

}
