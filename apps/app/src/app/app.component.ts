import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterBtnComponent, LayoutComponent } from '@qair/ui';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutComponent,
    CounterBtnComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ],
  selector: 'qair-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
