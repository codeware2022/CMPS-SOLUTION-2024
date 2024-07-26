import { style } from '@angular/animations';
import {
  ContentChild,
  Injectable,
  ViewChild,
  ViewChildren,
} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/home/dashboard',
        icon: 'feather icon-home',
        class: 'nav-item',
      },
      {
        id: 'ourproducts',
        title: 'Our Product',
        type: 'collapse',
        icon: 'feather icon-package',
        class: 'nav-item',
        children: [
          {
            id: 'add-our-product',
            title: 'Add Our Product',
            type: 'item',
            url: '/home/our-product/add',
          },

          {
            id: 'view-our-product',
            title: 'View Our Product',
            type: 'item',
            url: '/home/our-product/view',
          },
        ],
      },
      {
        id: 'competitors',
        title: 'Competitors',
        type: 'collapse',
        icon: 'feather icon-command',
        class: 'nav-item',
        children: [
          {
            id: 'add-competitor',
            title: 'Add Competitor',
            type: 'item',
            class: 'nav-item',
            url: '/home/competitors/add-competitor',
          },
          {
            id: 'view-competitor',
            title: 'View Competitor',
            type: 'item',
            class: 'nav-item',
            url: '/home/competitors/view-competitor',
          },
          {
            id: 'add-competitor-product',
            title: 'Add Competitor Product',
            type: 'item',
            class: 'nav-item',
            url: '/home/competitors/add-competitor-product',
          },
          {
            id: 'view-competitor-product',
            title: 'View Competitor Product',
            type: 'item',
            class: 'nav-item',
            url: '/home/competitors/view-competitor-product',
          },
        ],
      },
    ],
  },
  {
    id: 'product-comparison',
    title: 'Product Comparison',
    type: 'group',
    url: '/home/products',
    icon: 'feather icon-home',
    children: [
      {
        id: 'comparison',
        title: 'Product Comparison',
        type: 'collapse',
        class: 'nav-item',
        icon: 'feather icon-minimize-2',
        children: [
          {
            id: 'competitor',
            title: 'Competitor wise',
            type: 'item',
            class: 'nav-item',
            url: '/home/products/product-master',
          },
          {
            id: 'competitor',
            title: 'Genaric wise',
            type: 'item',
            class: 'nav-item',
            url: '/home/products/new-therapeutic-category',
          },
          {
            id: 'competitor',
            title: 'Dosage Form wise',
            type: 'item',
            class: 'nav-item',
            url: '/home/products/new-therapeutic-category',
          },
        ],
      },
    ],
  },
  {
    id: 'categories',
    title: 'Base Informations & Categories',
    type: 'group',
    children: [
      {
        id: 'therapeutic',
        title: 'Therapeutic',
        type: 'collapse',
        icon: 'feather icon-list',
        children: [
          {
            id: 'add-therapeutic',
            title: 'Add Therapeutic',
            type: 'item',
            url: '/home/categories/add-therapeutic',
          },
          {
            id: 'view-therapeutic',
            title: 'View Therapeutic',
            type: 'item',
            url: '/home/categories/view-therapeutic',
          },
        ],
      },
      {
        id: 'sub-therapeutic',
        title: 'Sub Therapeutic',
        type: 'collapse',
        class: 'nav-item',
        icon: 'feather icon-share-2',
        children: [
          {
            id: 'Add-sub-therapeutic',
            title: 'Add Sub Therapeutic',
            type: 'item',
            url: '/home/categories/add-sub-therapeutic',
          },
          {
            id: 'view-sub-therapeutic',
            title: 'View Sub Therapeutic',
            type: 'item',
            url: '/home/categories/view-sub-therapeutic',
          },
        ],
      },
      {
        id: 'product-master',
        title: 'Product Master',
        type: 'collapse',
        class: 'nav-item',
        icon: 'feather icon-cpu',
        children: [
          {
            id: 'add-product-master',
            title: 'Add Product Master',
            type: 'item',
            url: '/home/categories/add-product-master',
          },
          {
            id: 'view-product-master',
            title: 'View Product Master',
            type: 'item',
            url: '/home/categories/view-product-master',
          },
        ],
      },
      {
        id: 'dosage-form',
        title: 'Dosage Form',
        type: 'collapse',
        class: 'nav-item',
        icon: 'feather icon-pocket',
        children: [
          {
            id: 'add-dosage-form',
            title: 'Add Dosage Form',
            type: 'item',
            url: '/home/categories/add-dosage-form',
          },
          {
            id: 'view-dosage-form',
            title: 'View Dosage Form',
            type: 'item',
            url: '/home/categories/view-dosage-form',
          },
        ],
      },
      {
        id: 'Measurement-Units',
        title: 'Measurement Units',
        type: 'collapse',
        icon: 'feather icon-aperture',
        class: 'nav-item',
        children: [
          {
            id: 'add-measurement-units',
            title: 'Add Measurement Units',
            type: 'item',
            url: '/home/categories/add-measurement-units',
          },
          {
            id: 'View-measurement-units',
            title: 'View Measurement Units',
            type: 'item',
            url: '/home/categories/view-measurement-units',
          },
        ],
      },
      {
        id: 'ingredient',
        title: 'Ingredient',
        type: 'collapse',
        icon: 'feather icon-sunset',
        class: 'nav-item',
        children: [
          {
            id: 'add-ingredient',
            title: 'Add Ingredient',
            type: 'item',
            url: '/home/categories/add-ingredient',
          },
          {
            id: 'view-ingredient',
            title: 'View Ingredient',
            type: 'item',
            url: '/home/categories/view-ingredient',
          },
        ],
      },
      {
        id: 'generic',
        title: 'Generic',
        type: 'collapse',
        icon: 'feather icon-sun',
        class: 'nav-item',
        children: [
          {
            id: 'add-generic',
            title: 'Add Generic',
            type: 'item',
            url: '/home/categories/add-generic',
          },
          {
            id: 'view-generic',
            title: 'View Generic',
            type: 'item',
            url: '/home/categories/view-generic',
          },
        ],
      },
      {
        id: 'manufacturer',
        title: 'Manufacturer',
        type: 'collapse',
        icon: 'feather icon-link-2',
        class: 'nav-item',
        children: [
          {
            id: 'add-manufacturer',
            title: 'Add Manufacturer',
            type: 'item',
            url: '/home/categories/add-manufacturer',
          },
          {
            id: 'view-manufacturer',
            title: 'View Manufacturer',
            type: 'item',
            url: '/home/categories/view-manufacturer',
          },
        ],
      },
    ],
  },
  {
    id: 'team-combination',
    title: 'Team Combination',
    type: 'group',
    children: [
      {
        id: 'business-manager',
        title: 'Business Manager',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'add-business-manager',
            title: 'Add Business Manager',
            type: 'item',
            url: '/home/team/add-business-manager',
          },
          {
            id: 'view-business-manager',
            title: 'View Business Manager',
            type: 'item',
            url: '/home/team/view-business-manager',
          },
        ],
      },
      {
        id: 'brandcoordinator',
        title: 'Brand Coordinator',
        type: 'collapse',
        icon: 'feather icon-user-x',
        children: [
          {
            id: 'add-brandcoordinator',
            title: 'Add Brand Coordinator',
            type: 'item',
            url: '/home/team/add-brandcoordinator',
          },
          {
            id: 'view-brandcoordinator',
            title: 'View Brand Coordinator',
            type: 'item',
            url: '/home/team/view-brandcoordinator',
          },
        ],
      },
      {
        id: 'medicalrep',
        title: 'Medical Rep',
        type: 'collapse',
        icon: 'feather icon-user-check',
        children: [
          {
            id: 'add-medicalrep',
            title: 'Add Medicalrep',
            type: 'item',
            url: '/home/team/add-medicalrep',
          },
          {
            id: 'view-medicalrep',
            title: 'View Medicalrep',
            type: 'item',
            url: '/home/team/view-medicalrep',
          },
        ],
      },
      {
        id: 'salesrep',
        title: 'Sales Rep',
        type: 'collapse',
        icon: 'feather icon-user-plus',
        children: [
          {
            id: 'add-salesrep',
            title: 'Add Salesrep',
            type: 'item',
            url: '/home/team/add-salesrep',
          },
          {
            id: 'view-salesrep',
            title: 'View Salesrep',
            type: 'item',
            url: '/home/team/view-salesrep',
          },
        ],
      },
      {
        id: 'marketingadmin',
        title: 'Marketing Admin',
        type: 'collapse',
        icon: 'feather icon-user',
        children: [
          {
            id: 'add-marketing-admin',
            title: 'Add Marketing Admin',
            type: 'item',
            url: '/home/team/add-marketing-admin',
          },
          {
            id: 'view-marketing-admin',
            title: 'View Marketing Admin',
            type: 'item',
            url: '/home/team/view-marketing-admin',
          },
        ],
      },
    ],
  },
  {
    id: 'territory-management',
    title: 'Territory Management',
    type: 'group',
    children: [
      {
        id: 'distributor',
        title: 'Distributor',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
        children: [
          {
            id: 'add-distributor',
            title: 'Add Distributor',
            type: 'item',
            url: '/home/territories/add-distributor',
          },
          {
            id: 'view-distributor',
            title: 'Distributors List',
            type: 'item',
            url: '/home/territories/view-distributor',
          },
        ],
      },
      {
        id: 'town',
        title: 'Town',
        type: 'collapse',
        icon: 'feather icon-compass',
        children: [
          {
            id: 'add-town',
            title: 'Add Town',
            type: 'item',
            url: '/home/territories/add-town',
          },
          {
            id: 'view-town',
            title: 'Town List',
            type: 'item',
            url: '/home/territories/view-town',
          },
        ],
      },
      {
        id: 'area',
        title: 'Area',
        type: 'collapse',
        icon: 'feather icon-map-pin',
        children: [
          {
            id: 'add-area',
            title: 'Add Area',
            type: 'item',
            url: '/home/territories/add-area',
          },
          {
            id: 'view-area',
            title: 'View Area',
            type: 'item',
            url: '/home/territories/view-area',
          },
        ],
      },
      {
        id: 'range',
        title: 'Range',
        type: 'collapse',
        icon: 'feather icon-loader',
        children: [
          {
            id: 'add-range',
            title: 'Add Range',
            type: 'item',
            url: '/home/territories/add-range',
          },
          {
            id: 'view-range',
            title: 'View Range',
            type: 'item',
            url: '/home/territories/view-range',
          },
        ],
      },
      {
        id: 'zone',
        title: 'Zone',
        type: 'collapse',
        icon: 'feather icon-globe',
        children: [
          {
            id: 'add-zone',
            title: 'Add Zone',
            type: 'item',
            url: '/home/territories/add-zone',
          },
          {
            id: 'view-zone',
            title: 'View Zone',
            type: 'item',
            url: '/home/territories/view-zone',
          },
        ],
      },
    ],
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false,
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false,
          },
        ],
      },
    ],
  },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
