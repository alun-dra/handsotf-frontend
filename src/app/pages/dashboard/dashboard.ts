import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // KPIs (mock)
  kpis = [
    { title: 'Ventas hoy', value: '$ 1.245.900', icon: 'payments', note: '+8% vs ayer' },
    { title: 'Ticket promedio', value: '$ 18.450', icon: 'receipt_long', note: '+3% semanal' },
    { title: 'Stock crítico', value: '14 ítems', icon: 'warning', note: 'Reponer hoy' },
    { title: 'Ocupación bodega', value: '72%', icon: 'warehouse', note: 'Capacidad usada' },
  ];

  // Line: Ventas últimos 14 días
  salesLineType: 'line' = 'line';
  salesLineData: ChartData<'line'> = {
    labels: ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13','D14'],
    datasets: [
      { data: [120, 98, 140, 160, 130, 190, 220, 210, 230, 200, 260, 240, 280, 310], label: 'Ventas' },
    ],
  };
  salesLineOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  // Bar: Top productos
  topProductsType: 'bar' = 'bar';
  topProductsData: ChartData<'bar'> = {
    labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E'],
    datasets: [
      { data: [320, 280, 210, 180, 150], label: 'Unidades vendidas' },
    ],
  };
  topProductsOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  // Doughnut: Distribución de ocupación (mock)
  occupancyType: 'doughnut' = 'doughnut';
  occupancyData: ChartData<'doughnut'> = {
    labels: ['Ocupado', 'Libre'],
    datasets: [{ data: [72, 28], label: 'Ocupación' }],
  };
  occupancyOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
  };
}
