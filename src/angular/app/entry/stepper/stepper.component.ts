import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'nb-stepper-validation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['stepper.component.scss'],
  templateUrl: './stepper.component.html',
})

export class StepperComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
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

  @ViewChild('autoInputSity') inputSity;
  @ViewChild('autoInputStreet') inputStreet;
  @ViewChild('autoInputHouse') inputHouse;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.houseForm = this.fb.group({
      houseCtrl: ['', Validators.required],
      korpusCtrl: [''],
      literCtrl: [''],
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

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
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
