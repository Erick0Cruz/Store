// Utiliza el decorador para ver si es un componente o servicio o demas
import {Component} from '@angular/core';

import {Product} from '../product.model';

@Component({
    // Añado la metadata
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    product: Product = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
    }
}