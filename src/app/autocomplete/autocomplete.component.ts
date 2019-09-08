import { Component, ViewChild, forwardRef } from '@angular/core';
import { MatOption } from '@angular/material';
import { NgModel, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
  }
  ]
})
export class AutocompleteComponent implements ControlValueAccessor {

  name;

  onChanged (value)  {
    console.log(value)
  };

  onTouched(){};

  isDisabled: boolean;
  
  writeValue(value): void {
    this.name = value;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  names = ['Ambuz', 'Bhupesh', 'Naveen', 'Naseem', 'Shouvik', 'Tushar', 'Varun', 'Vipul'];
  names1=[]
 
  constructor() { }

  ngOnInit() {
     this.names1 = this.names.slice();
    //  console.log(this.names1)
  }

  _filter(value: string,option) {
    let q = value.toLowerCase();
    // console.log(q)
    this.names1 = this.names;
    this.names1 = (value) ?
      this.names1.filter(p => p.toLowerCase().includes(q)) : this.names;
    // console.log(this.names1)
    if(this.names1.includes(option)){
      // console.log('this.names1')
      return true;
    }
    else{
      // console.log('this.names12')
      return false;
    }
  }
}
