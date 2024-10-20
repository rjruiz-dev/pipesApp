import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [

  ]
})
export class MenuComponent {
  
  public menuItem: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItem = [
      { 
        label: 'Pipes de Angular', 
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar'
          },  
          {
            label: 'No Comunes',
            icon: 'pi pi-globe'
          }               
        ] 
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro Elemento', 
            icon: 'pi pi-cog',
          }
        ]
      }    
    ];
  }
}
