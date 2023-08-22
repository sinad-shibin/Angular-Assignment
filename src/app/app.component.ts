import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'OfferRide';
  contactForm: FormGroup | undefined ;
  submittedData: any[] = [];

  constructor(private frmBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.frmBuilder.group({
      name: ['', Validators.required],
      start: ['',Validators.required],
      end: ['',Validators.required],
      car: ['',Validators.required],
      seat: ['', Validators.required],
    });
    // throw new Error('Method not implemented.');
  }

  onSubmit(){
    if (this.contactForm?.valid) {
      const formData = this.contactForm.value;
      this.submittedData.push(formData);
      this.contactForm.reset();
       //alert("Form Submitted : "+ formData);
    }
    else{
      alert("Invalid Form!");
    }
  }
}
