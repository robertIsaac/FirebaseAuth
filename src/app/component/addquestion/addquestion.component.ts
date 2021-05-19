import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoodsService } from '../../services/goods.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss'],
})
export class AddquestionComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private gs: GoodsService, private as: AuthService) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      vote: [0],
      uid: [],
    });
    this.as.user.subscribe((user) => {
      this.form.controls.uid.setValue(user?.uid);
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.gs.addNewQuestion(this.form.value);
  }
}
