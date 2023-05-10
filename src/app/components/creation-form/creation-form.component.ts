import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css'],
})
export class CreationFormComponent {
  creationForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    movieImageUrl: new FormControl(''),
  });

  submitCard() {
    console.log('crear');
  }
}
