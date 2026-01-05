import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

type LoginResponse = {
  access_token: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'handsoft_token';

  private tokenSubject = new BehaviorSubject<string | null>(
    localStorage.getItem(this.tokenKey)
  );

  token$ = this.tokenSubject.asObservable();

  get token(): string | null {
    return this.tokenSubject.value;
  }

  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    const url = `${environment.apiBaseUrl}/auth/login`;

    // ✅ Login solo requiere X-API-Key
    const headers = new HttpHeaders({
      'X-API-Key': environment.apiKey,
    });

    return this.http.post<LoginResponse>(url, { login, password }, { headers }).pipe(
      tap((res) => {
        localStorage.setItem(this.tokenKey, res.access_token);
        this.tokenSubject.next(res.access_token);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.tokenSubject.next(null);
  }
}
