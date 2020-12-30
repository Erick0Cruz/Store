// Utiliza el decorador para ver si es un componente o servicio o demas
import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Product} from '../product.model';

@Component({
    // Añado la metadata
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart(){
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}