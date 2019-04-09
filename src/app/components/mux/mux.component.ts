import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { LatlngService } from 'src/app/latlng.service';
import { Router } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';

@Component({
  selector: 'app-mux',
  templateUrl: './mux.component.html',
  styleUrls: ['./mux.component.scss'],
})
export class MuxComponent implements OnInit {

  public muxForm: FormGroup
  public items: FormArray

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  getItems(items: any){
    items.forEach(val => {
      val.lat = parseFloat(val.lat);
      val.lng = parseFloat(val.lng);      
    });
    return items;
  }

  onSubmit(form: FormGroup) {
    LatlngService.setMulX(this.getItems(form.value.items));
    PopoverComponent.closeModal();
    this.router.navigateByUrl('/new');
  }

  ngOnInit() {
    this.muxForm = this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()]),
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      lat: new FormControl('',Validators.required),
      lng: new FormControl('',Validators.required),
    });
  }

  addItem(): void {
    let items = this.muxForm.get('items') as FormArray
    if(items.length < 5)
    {
      this.items = items;
      this.items.push(this.createItem());
    }
  }
}
