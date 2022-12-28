import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'nb-stepper-validation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['stepper.component.scss'],
  templateUrl: './stepper.component.html',
})

export class StepperComponent implements OnInit {

  sityForm: FormGroup;
  streetForm: FormGroup;
  houseForm: FormGroup;
  houseForm2: FormGroup;
  
  optionsSity: string[];
  filteredOptionsSity$: Observable<string[]>;
  optionsStreet: string[];
  filteredOptionsStreet$: Observable<string[]>;
  optionsHouse: string[];
  filteredOptionsHouse$: Observable<string[]>;
  optionsEntrance: string[];
  filteredOptionsEntrance$: Observable<string[]>;
  fullAdres = {
    sity: "",
    street: "",
    house: "",
    korpus: "",
    liter: "",
    entrance: "",
  };
  @ViewChild('autoInputSity') inputSity;
  @ViewChild('autoInputStreet') inputStreet;
  @ViewChild('autoInputHouse') inputHouse;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.sityForm = this.fb.group({
      sityCtrl: ['', Validators.required],
    });

    this.streetForm = this.fb.group({
      streetCtrl: ['', Validators.required],
    });

    this.houseForm = this.fb.group({
      houseCtrl: ['', Validators.required],
      korpusCtrl: [''],
      literCtrl: [''],
      EntranceCtrl:[''],
    });

    this.optionsSity = ['Санкт-Петербург', 'Москва', 'Мурманск'];
    this.filteredOptionsSity$ = of(this.optionsSity);
    this.optionsStreet = ['Афонская', 'Вербная', 'Щербакова'];
    this.filteredOptionsStreet$ = of(this.optionsStreet);
    this.optionsHouse = ['1', '2', '3'];
    this.filteredOptionsHouse$ = of(this.optionsHouse);
    this.optionsEntrance = ['3', '4', '5'];
    this.filteredOptionsEntrance$ = of(this.optionsEntrance);
  }

  onSave() {
    this.fullAdres.sity = this.sityForm.value.sityCtrl;
    this.fullAdres.street = this.streetForm.value.streetCtrl;
    this.fullAdres.house = this.houseForm.value.houseCtrl;
    this.fullAdres.korpus = this.houseForm.value.korpusCtrl;
    this.fullAdres.liter = this.houseForm.value.literCtrl;
    this.fullAdres.entrance = this.houseForm.value.EntranceCtrl;
    localStorage.setItem('fullAdres', JSON.stringify(this.fullAdres));
    this.router.navigate(['pages']);
  }
  onsitySubmit() {
    this.sityForm.markAsDirty();
  }
  onstreetSubmit() {
    this.streetForm.markAsDirty();
  }

  onhouseSubmit() {
    this.houseForm.markAsDirty();
  }
  private filter(value: string, el): string[] {
    const filterValue = value.toLowerCase();
    return el.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string, el): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString, el)),
    );
  }

  onChangeSity() {
    this.filteredOptionsSity$ = this.getFilteredOptions(this.inputSity.nativeElement.value, this.optionsSity);
  }

  onSelectionChangeSity($event) {
    this.filteredOptionsSity$ = this.getFilteredOptions($event, this.optionsSity);
  }

  onChangeStreet() {
    this.filteredOptionsStreet$ = this.getFilteredOptions(this.inputStreet.nativeElement.value, this.optionsStreet);
  }

  onSelectionChangeStreet($event) {
    this.filteredOptionsStreet$ = this.getFilteredOptions($event, this.optionsStreet);
  }
  onChangeHouse() {
    this.filteredOptionsHouse$ = this.getFilteredOptions(this.inputHouse.nativeElement.value, this.optionsHouse);
  }

  onSelectionChangeHouse($event) {
    this.filteredOptionsHouse$ = this.getFilteredOptions($event, this.optionsHouse);
  }
}
