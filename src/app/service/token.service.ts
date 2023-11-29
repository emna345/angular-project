import { Injectable } from '@angular/core';
const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    const user = this.getUser();
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }
  public saveUser(user: any): void {
    console.log(user)
    console.log(user.userFonction)
  
   window.sessionStorage.removeItem(USER_KEY);
   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
   window.sessionStorage.setItem('functionUser', JSON.stringify(user.userFonction));
   
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  signOut(): void {
    
    window.sessionStorage.clear();
    
  }
  
  
}
