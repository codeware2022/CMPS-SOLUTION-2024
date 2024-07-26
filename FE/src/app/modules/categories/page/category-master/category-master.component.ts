import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.scss']
})
export class CategoryMasterComponent implements OnInit {
  categories: ICategory[] = [];

  ngOnInit(): void {
    this.categories = [
      // {
      //   id: 1,
      //   name: "Common Cold and Alergy Drugs",
      //   icon: "assets/images/Categories/Category-1.webp",
      //   description: "description of the drug category"
      // },
      // {
      //   id: 2,
      //   name: "Cough and Asthma Drugs",
      //   icon: "assets/images/Categories/Category-2.jpg",
      //   description: "description of the drug category"
      // },
      // {
      //   id: 3,
      //   name: "Cardiovascular drugs",
      //   icon: "assets/images/Categories/Category-3.jpg",
      //   description: "description of the drug category"
      // },
      // {
      //   id: 4,
      //   name: "Drugs use for GI diseases",
      //   icon: "assets/images/Categories/Category-4.png",
      //   description: "description of the drug category"
      // },
      // {
      //   id: 5,
      //   name: "Antidiabetic drugs",
      //   icon: "assets/images/Categories/Category-5.jfif",
      //   description: "description of the drug category"
      // },
      // {
      //   id: 6,
      //   name: "Antibacteial Drugs",
      //   icon: "assets/images/Categories/Category-6.jfif",
      //   description: "description of the drug category"
      // },
      // {
      //   id: 7,
      //   name: "Creams",
      //   icon: "assets/images/Categories/Category-7.jpg",
      //   description: "description of the drug category"
      // },

      // {
      //   id: 8,
      //   name: "Supplements",
      //   icon: "assets/images/Categories/Category-8.jpg",
      //   description: "description of the drug category"
      // },

      // {
      //   id: 9,
      //   name: "Painkillers/Analgesics",
      //   icon: "assets/images/Categories/Category-9.webp",
      //   description: "description of the drug category"
      // },

      // {
      //   id: 10,
      //   name: "Mouthwashes",
      //   icon: "assets/images/Categories/Category-10.jpg",
      //   description: "description of the drug category"
      // },
    ]
  }


}
