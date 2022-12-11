import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { Card } from './models/main';

@Component({
  selector: 'ngx-main',
  styleUrls: ['main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  @ViewChild('modalTemplate', { static: true }) modalTemplate: TemplateRef<any>;
  public cards: Card[] = new Array<Card>();
  selectedOption = 'primary';
  infoForm: FormGroup;
  msUTC = Date.now();
  card = {
    id: 5,
    title: 'string',
    status: 1,
    info: 'string',
    catVisible: true,
    delay: 22,
  };
  editMode = false;
  // зона UTC
  // now2 = this.msUTC.setDate(this.msUTC);
  now = new Date().toISOString().slice(0, 16);

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: NbDialogService,
  ) {
    this.infoForm = formBuilder.group({
      id: [5],
      title: ['Информация', [Validators.required]],
      info: ['', [Validators.required]],
      status: [],
      catVisible: [],
      delay: [],
    });
  }
  ngOnInit(): void {
    this.cards.push(this.card);
  }
  openDialog() {
    // this.cards.push(this.card);
    this.dialogService
      .open(this.modalTemplate, { context: {} })
      .onClose.subscribe(result => {
        this.editMode = false;
        if (result) {
          this.cards.push(result);
          console.log('results', result);
        } else {
          this.infoForm.reset();
        }
      });
  }
  onSave(item, ref) {
    const inx = this.cards.findIndex(card => card.id === item.id);
    this.cards[inx] = item;
    ref.close();
  }
  openEditDialog(card) {
    this.infoForm.setValue(card);
    this.openDialog();
    this.editMode = true;
  }
}
