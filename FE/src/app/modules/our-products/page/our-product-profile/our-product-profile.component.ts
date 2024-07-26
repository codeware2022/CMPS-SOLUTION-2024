import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOurProduct, IProduct } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-our-product-profile',
  templateUrl: './our-product-profile.component.html',
  styleUrls: ['./our-product-profile.component.scss'],
})
export class OurProductProfileComponent implements OnInit {
  product: IOurProduct;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
    debugger;
  }
}
