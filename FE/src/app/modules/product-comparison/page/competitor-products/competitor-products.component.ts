import { Component, Input, OnChanges } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { ICompetitorProduct } from 'src/app/theme/shared/models/Item';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-competitor-products',
  templateUrl: './competitor-products.component.html',
  styleUrls: ['./competitor-products.component.scss'],
})
export class CompetitorProductsComponent implements OnChanges {
  @Input() competitors: ICompetitorProduct[];

  public chartOptions: Partial<ChartOptions>;
  public paginatedCompetitors: any[] = [];
  public currentPage: number = 0;
  public itemsPerPage: number = 5;
  public totalPages: number;

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: 'pie',
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  ngOnChanges() {
    this.totalPages = Math.ceil(this.competitors.length / this.itemsPerPage);
    this.updatePaginatedCompetitors();
    this.updateChart();
  }

  updatePaginatedCompetitors() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCompetitors = this.competitors.slice(start, end);
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedCompetitors();
      this.updateChart();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePaginatedCompetitors();
      this.updateChart();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePaginatedCompetitors();
      this.updateChart();
    }
  }

  updateChart() {
    const labels = this.competitors.map((c) => c.name);
    const data = this.competitors.map((c) => c.sales);

    this.chartOptions = {
      series: data,
      chart: {
        type: 'pie',
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
