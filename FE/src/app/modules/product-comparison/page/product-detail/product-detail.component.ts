import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  productData: IProduct;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productData = history.state.data;
      // If the data was not passed, you may need to fetch it based on the ID
      if (!this.productData) {
        // Fetch the data using the id
        // Example: this.cardData = this.someService.getDataById(id);
      }
    });
  }
}
