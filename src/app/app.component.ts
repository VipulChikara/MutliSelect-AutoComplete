import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  title = {
    name: []
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl([],Validators.required)
    });
  }

  onSubmit() {
    console.log(this.form.value);
    // console.log(this.title.name)
  }


}