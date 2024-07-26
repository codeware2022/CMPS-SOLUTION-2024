import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, map } from 'rxjs';
import { Login } from 'src/app/theme/shared/models/login';
import { Register } from 'src/app/theme/shared/models/register';
import { User } from 'src/app/theme/shared/models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSource = new ReplaySubject<User | null>(1);
  user$ = this.userSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: Login) {
    return this.http.post<User>(`${environment.appUrl}/api/account/login`, model).pipe(
      map((user: User) => {
        if (user) {
          this.setUser(user);

        }

      })
    );
  }

  register(model: Register) {
    return this.http.post(`${environment.appUrl}/api/account/register`, model);
  }

  private setUser(user: User) {
    localStorage.setItem(environment.userKey, JSON.stringify(user));
    this.userSource.next(user);

    this.user$.subscribe({
      next: response => console.log(response)
    })
  }
}
