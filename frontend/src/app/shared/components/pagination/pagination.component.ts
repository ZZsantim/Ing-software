import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  template: `<nav class="pagination" aria-label="Paginación"><button [disabled]="page <= 1" (click)="goTo(page - 1)">‹</button>@for (item of pages; track item) {<button [class.active]="item === page" (click)="goTo(item)">{{ item }}</button>}<button [disabled]="page >= totalPages" (click)="goTo(page + 1)">›</button></nav>`,
  styles: [`.pagination{display:flex;gap:.3rem}.pagination button{border:1px solid #d9e7e3;background:#fff;color:#557078;border-radius:6px;min-width:30px;height:30px;cursor:pointer}.pagination .active{background:#22b573;color:#fff;border-color:#22b573}.pagination button:disabled{opacity:.4;cursor:not-allowed}`],
})
export class PaginationComponent {
  @Input() page = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();
  get pages(): number[] { return Array.from({ length: this.totalPages }, (_, index) => index + 1); }
  goTo(page: number): void { if (page >= 1 && page <= this.totalPages) this.pageChange.emit(page); }
}
