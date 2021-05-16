import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { MemberService, ROLES } from '../services/member.service';

@Component({
  providers: [SubSink],
  templateUrl: './member-edit.component.html',

})
export class MemberEditComponent implements OnDestroy {

  form: FormGroup
  roles = ['', ...ROLES]

  constructor(
    builder: FormBuilder,
    route: ActivatedRoute,
    private router: Router,
    private sub: SubSink,
    private service: MemberService
  ) {
    this.form = builder.group({
      id: 0,
      role: ['',Validators.required],
      name: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required]
    })

    this.sub.sink = route.params.subscribe(params => {
      const id = Number(params['id']);
      if(id) {
        this.form.patchValue(service.findById(id));
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save() {
    const id = this.service.save(this.form.value);
    this.router.navigate(['/hello', id, 'details']);
  }

}
