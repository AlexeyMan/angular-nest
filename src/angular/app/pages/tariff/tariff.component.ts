import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';

export interface TariffsGKH {
  nameService: string;
  costTotalArea: number;
  costInHostels: number;
}

const ELEMENT_DATA: TariffsGKH[] = [
  {
    nameService: `Hydrogennjoifhodsfjweoijfdpoosafkdpfmsapf[pfekls[pdsfkpofksdpof
    sopokdspofdskpodfskpdf sadf[dlpsa[fpsld[pflsed[fmk[pesklfp[lsed[fplse[plf  
    [sekgposemkpogks swef[pfeslf[pdslf sed[pflsdofp[ se[dof-[osd fsed=-[-o fe-s[of=-0osed-=0fkispr
    odghjp[drfkhg dsgf[pdfokg dr-0 gpdfkfbbb`,
    costTotalArea: 1.0079,
    costInHostels: 54545,
  },
  { nameService: 'Helium', costTotalArea: 4.0026, costInHostels: 5656 },
  { nameService: 'Lithium', costTotalArea: 6.941, costInHostels: 6498599 },
  { nameService: 'Beryllium', costTotalArea: 9.0122, costInHostels: 9.0122 },
  { nameService: 'Boron', costTotalArea: 10.811, costInHostels: 10.811 },
  { nameService: 'Carbon', costTotalArea: 12.0107, costInHostels: 10.811 },
  { nameService: 'Nitrogen', costTotalArea: 14.0067, costInHostels: 6.941 },
  { nameService: 'Oxygen', costTotalArea: 15.9994, costInHostels: 6.941 },
  { nameService: 'Fluorine', costTotalArea: 18.9984, costInHostels: 6.941 },
  { nameService: 'Neon', costTotalArea: 20.1797, costInHostels: 6.941 },
  { nameService: 'Neon', costTotalArea: 20.1797, costInHostels: 6.941 },
  {
    nameService: `Hydrogennjoifhodsfjweoijfdpoosafkdpfmsapf[pfekls[pdsfkpofksdpof
    sopokdspofdskpodfskpdf sadf[dlpsa[fpsld[pflsed[fmk[pesklfp[lsed[fplse[plf  
    [sekgposemkpogks swef[pfeslf[pdslf sed[pflsdofp[ se[dof-[osd fsed=-[-o fe-s[of=-0osed-=0fkispr
    odghjp[drfkhg dsgf[pdfokg dr-0 gpdfkfbbb`,
    costTotalArea: 1.0079,
    costInHostels: 54545,
  },
  { nameService: 'Helium', costTotalArea: 4.0026, costInHostels: 5656 },
  { nameService: 'Lithium', costTotalArea: 6.941, costInHostels: 6498599 },
  { nameService: 'Beryllium', costTotalArea: 9.0122, costInHostels: 9.0122 },
  { nameService: 'Boron', costTotalArea: 10.811, costInHostels: 10.811 },
  { nameService: 'Carbon', costTotalArea: 12.0107, costInHostels: 10.811 },
  { nameService: 'Nitrogen', costTotalArea: 14.0067, costInHostels: 6.941 },
  { nameService: 'Oxygen', costTotalArea: 15.9994, costInHostels: 6.941 },
  { nameService: 'Fluorine', costTotalArea: 18.9984, costInHostels: 6.941 },
  { nameService: 'Neon', costTotalArea: 20.1797, costInHostels: 6.941 },
  { nameService: 'Neon', costTotalArea: 20.1797, costInHostels: 6.941 },
];

@Component({
  selector: 'nb-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
})
export class TariffComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'nameService',
    'costTotalArea',
    'costInHostels',
    'action',
  ];
  dataSource = new MatTableDataSource<any>();

  isLoading = true;

  pageNumber = 1;
  VOForm: FormGroup;
  isEditableNew = true;
  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private dialogService: NbDialogService,
  ) {}

  ngOnInit(): void {
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([]),
    });
    let i = 1;
    this.VOForm = this.fb.group({
      VORows: this.fb.array(
        ELEMENT_DATA.map(val =>
          this.fb.group({
            position: i++,
            nameService: new FormControl(val.nameService),
            costTotalArea: new FormControl(val.costTotalArea),
            costInHostels: new FormControl(val.costInHostels),
            action: new FormControl('existingRecord'),
            isEditable: new FormControl(true),
            isNewRow: new FormControl(false),
          }),
        ),
      ),
    });
    this.isLoading = false;
    this.dataSource = new MatTableDataSource(
      (this.VOForm.get('VORows') as FormArray).controls,
    );
    this.dataSource.paginator = this.paginator;

    const filterPredicate = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
      return filterPredicate.call(this.dataSource, data.value, filter);
    };
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('dialog', { static: false })
  dialog: ElementRef | undefined;
  // goToPage() {
  //   this.paginator.pageIndex = this.pageNumber - 1;
  //   this.paginator.page.next({
  //     pageIndex: this.paginator.pageIndex,
  //     pageSize: this.paginator.pageSize,
  //     length: this.paginator.length,
  //   });
  // }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.paginatorList = document.getElementsByClassName(
  //     'mat-paginator-range-label',
  //   );

  //   this.onPaginateChange(this.paginator, this.paginatorList);

  //   this.paginator.page.subscribe(() => {
  //     // this is page change event
  //     this.onPaginateChange(this.paginator, this.paginatorList);
  //   });
  // }

  applyFilter(event: Event) {
    //  debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddNewRow() {
    const control = this.VOForm.get('VORows') as FormArray;
    control.insert(0, this.initiateVOForm(control.length + 1));
    this.dataSource = new MatTableDataSource(control.controls);
  }

  oldVal = [];

  EditSVO(VOFormElement, i) {
    this.oldVal.push(VOFormElement.get('VORows').value[i]);
    VOFormElement.get('VORows')
      .at(i)
      .get('isEditable')
      .patchValue(false);
  }

  names: string[] = [];
  open(dialog) {
    this.dialogService.open(dialog, {
      context: {
        title: 'Нельзя добавить элемент',
        data: 'Не заполнено обязательное поле наименование услуг',
      },
    });
  }
  confirm = false;
  openConfirm(dialog, el, i) {
    if (el.action === 'existingRecord') this.confirm = true;
    this.dialogService
      .open(dialog, {
        context: {
          title: 'Предупреждение',
          data: 'Точно хотите удалить?',
        },
      })
      .onClose.subscribe(result => {
        this.confirm = false;
        if (result) {
          this.removeEl(i);
        }
      });
  }

  SaveVO(VOFormElement, i) {
    const elService = VOFormElement.get('VORows').at(i);

    const nameService = elService.get('nameService');
    const position = elService.get('position').value;

    if (nameService.value == '') {
      this.open(this.dialog);
      return;
    }
    // elService.setValue(elService.value)
    this.oldVal = this.oldVal.filter(el => {
      if (el.position !== position) return el;
    });
    elService.get('isEditable').patchValue(true);
  }

  // On click of cancel button in the table (after click on edit) this method will call and reset the previous data
  CancelSVO(VOElement, i) {
    const nP = VOElement.value[i].position;
    const oldVal = this.oldVal.find(el => el.position === nP);
    if (oldVal) {
      VOElement.at(i).setValue(oldVal);

      this.oldVal = this.oldVal.filter(el => {
        if (el.position !== oldVal.position) return el;
      });
    }
  }

  DeleteVO(el, i) {
    if (el.action === 'newRecord') {
      this.removeEl(i);
      return;
    }
    this.openConfirm(this.dialog, el, i);
  }

  removeEl(i) {
    const control = this.VOForm.get('VORows') as FormArray;
    control.removeAt(i);
    this.dataSource = new MatTableDataSource(control.controls);
  }
  // paginatorList: HTMLCollectionOf<Element>;
  // idx: number;
  // onPaginateChange(paginator: MatPaginator, list: HTMLCollectionOf<Element>) {
  //   setTimeout(
  //     idx => {
  //       const from = paginator.pageSize * paginator.pageIndex + 1;

  //       const to =
  //         paginator.length < paginator.pageSize * (paginator.pageIndex + 1)
  //           ? paginator.length
  //           : paginator.pageSize * (paginator.pageIndex + 1);

  //       const toFrom = paginator.length == 0 ? 0 : `${from} - ${to}`;
  //       const pageNumber =
  //         paginator.length == 0
  //           ? `0 of 0`
  //           : `${paginator.pageIndex + 1} of ${paginator.getNumberOfPages()}`;
  //       const rows = `Page ${pageNumber} (${toFrom} of ${paginator.length})`;

  //       if (list.length >= 1) list[0].innerHTML = rows;
  //     },
  //     0,
  //     paginator.pageIndex,
  //   );
  // }

  initiateVOForm(index): FormGroup {
    return this.fb.group({
      position: new FormControl(index),
      nameService: new FormControl(''),
      costTotalArea: new FormControl(''),
      costInHostels: new FormControl(''),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
    });
  }
}
