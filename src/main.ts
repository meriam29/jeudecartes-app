import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RandomHandComponent } from './app/random-hand/random-hand.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(RandomHandComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(FormsModule),
  ],
}).catch((err) => console.error(err));
