import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type StorageType = 'RACKS' | 'PALLETS' | 'AREA_M2';

@Component({
  selector: 'app-bodegas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bodegas.html',
  styleUrl: './bodegas.css',
})
export class Bodegas {
  bodegas: Array<{
    id: string;
    name: string;
    type: StorageType;
    location: string;
    capacityLabel: string;
    occupancyLabel: string;
  }> = [
    { id: '1', name: 'Bodega Central', type: 'RACKS', location: 'Santiago', capacityLabel: 'Slots: 400', occupancyLabel: 'Ocupación: 62%' },
    { id: '2', name: 'Bodega Piso Norte', type: 'PALLETS', location: 'Quilicura', capacityLabel: 'Pallets: 120', occupancyLabel: 'Ocupación: 48%' },
    { id: '3', name: 'Bodega Arrendada', type: 'AREA_M2', location: 'San Bernardo', capacityLabel: 'Área: 800 m²', occupancyLabel: 'Uso: variable' },
  ];

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
}
