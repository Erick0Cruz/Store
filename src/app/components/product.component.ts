// Utiliza el decorador para ver si es un componente o servicio o demas
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import {Product} from '../product.model';

@Component({
    // Añado la metadata
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor(){
        console.log('1._ constructor');
    }

    /* ngOnChanges(changes: SimpleChanges) {
        console.log('2._ ngOnChanges');
        console.log(changes);
    } */

    ngOnInit(): void {
        console.log('3._ ngOnInit');
    }

    // Posee problemas de colision entre el doCheck y el on changes
    // por ende se coment el mentodo anterior el cual lo realiza por default
    // de igual manera se elimina de la implementación
    ngDoCheck(): void {
        console.log('4._ ngOnDoCheck');
    }

    ngOnDestroy(): void {
        console.log('5._ ngOnDestroy');
    }

    addCart(): void{
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
