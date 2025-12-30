import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

type StorageType = 'RACKS' | 'PALLETS' | 'AREA_M2';
type Tab = 'RESUMEN' | 'ESPACIOS' | 'PALLETS';

@Component({
  selector: 'app-bodega-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bodega-detail.html',
  styleUrl: './bodega-detail.css',
})
export class BodegaDetail {
  tab: Tab = 'RESUMEN';

  // mock bodega actual (luego se carga por API usando id)
  bodega: {
    id: string;
    name: string;
    type: StorageType;
    location: string;
    // configuración por tipo:
    racks?: { rows: string[]; racksPerRow: number; levels: number; palletsPerLevel: number };
    pallets?: { maxPallets: number };
    area?: { totalM2: number; tenant: string };
  } | null = null;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id') ?? '1';

    // mocks por id
    if (id === '1') {
      this.bodega = {
        id, name: 'Bodega Central', type: 'RACKS', location: 'Santiago',
        racks: { rows: ['A', 'B', 'C'], racksPerRow: 10, levels: 4, palletsPerLevel: 10 },
      };
    } else if (id === '2') {
      this.bodega = {
        id, name: 'Bodega Piso Norte', type: 'PALLETS', location: 'Quilicura',
        pallets: { maxPallets: 120 },
      };
    } else {
      this.bodega = {
        id, name: 'Bodega Arrendada', type: 'AREA_M2', location: 'San Bernardo',
        area: { totalM2: 800, tenant: 'Arrendatario X' },
      };
    }
  }

  setTab(t: Tab) {
    this.tab = t;
  }

  typeLabel(t: StorageType) {
    if (t === 'RACKS') return 'Con racks';
    if (t === 'PALLETS') return 'Pallets en piso';
    return 'Por m² (arrendada)';
  }

  typeIcon(t: StorageType) {
    if (t === 'RACKS') return 'view_week';
    if (t === 'PALLETS') return 'inventory_2';
    return 'square_foot';
  }

  // mock: “generar slots”
  generateSlotsMock() {
    alert('Mock: aquí se generarían los slots (ubicaciones) según filas/racks/niveles/capacidad.');
  }
}
