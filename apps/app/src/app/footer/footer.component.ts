import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CounterBtnComponent,
  CounterWarningDirective,
  withCounterState,
} from '@qair/ui';

@Component({
  selector: 'qair-footer',
  standalone: true,
  imports: [CommonModule, CounterBtnComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...withCounterState()],
  hostDirectives: [CounterWarningDirective],
})
export class FooterComponent {}
