import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loading = false;
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(ev: Event) {
    ev.preventDefault();
    this.error = null;

    const form = ev.target as HTMLFormElement;
    const data = new FormData(form);

    const login = String(data.get('login') ?? '').trim();
    const password = String(data.get('password') ?? '');

    if (!login || !password) {
      this.error = 'Completa usuario y contraseña';
      return;
    }

    this.loading = true;

    this.auth.login(login, password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message ?? 'Credenciales inválidas o error de conexión';
      },
    });
  }
}
