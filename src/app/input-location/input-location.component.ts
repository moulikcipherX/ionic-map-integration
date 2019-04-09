import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PopoverComponent } from '../popover/popover.component';
import { LatlngService } from '../latlng.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-location',
  templateUrl: './input-location.component.html',
  styleUrls: ['./input-location.component.scss'],
})
export class InputLocationComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      lat: new FormControl('',Validators.required),
      lng: new FormControl('',Validators.required)
    });
  }

  onSubmit(form: FormGroup) {
    let lat = Number.parseFloat(form.value.lat);
    let lng = Number.parseFloat(form.value.lng);
    LatlngService.setLatLng(lat,lng);
    this.router.navigateByUrl('/new');
    PopoverComponent.closeModal();
    
  }
}
