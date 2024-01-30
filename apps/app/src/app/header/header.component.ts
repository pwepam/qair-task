import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CounterBtnComponent,
  CounterWarningDirective,
  withCounterState,
} from '@qair/ui';

@Component({
  selector: 'qair-header',
  standalone: true,
  imports: [CommonModule, CounterBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...withCounterState()],
  hostDirectives: [CounterWarningDirective],
})
export class HeaderComponent {}
