import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'mx-cell',
        data: { pageTitle: 'myCellEntityApp.mxCell.home.title' },
        loadChildren: () => import('./mx-cell/mx-cell.module').then(m => m.MxCellModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
