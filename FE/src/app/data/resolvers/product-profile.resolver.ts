import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IOurProduct } from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GetOurProductById implements Resolve<IOurProduct> {
  constructor(private localStorageService: LocalStorageService,){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    const productId = parseInt(route.paramMap.get('id'));

    // Retrieve 'OurProducts' from local storage
    const products = this.localStorageService.getObject('OurProducts');

    // Find the product by Id
    const product = products.find((p: any) => p.id === productId);

    return of(product);
  }
}
