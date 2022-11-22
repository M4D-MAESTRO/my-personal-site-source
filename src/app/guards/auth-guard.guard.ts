import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ToastEnum } from '../shared/constants/toast.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private toastService: MessageService,
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserRole(next, url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    const url = segments.map(s => `/${s}`).join('');

    return this.checkAuthState(url).pipe(take(1));
  }

  private checkAuthState(redirect: string): Observable<boolean> {
   /* return this.storageService.isLogedInObs().pipe(
      tap(is => {
        if (!is) {
          this.presentToast('warn', 'Não autenticado', 'Por favor, realize login', ToastEnum.mediumDuration);
          this.router.navigate(['/login'], { queryParams: { redirect } })
        }
      })
    )*/
    return new Observable();
  }

  private checkUserRole(route: ActivatedRouteSnapshot, url: any): boolean {
    /*if (this.storageService.isLogedIn()) {
      //const isAdmin = this.storageService.getUserIsAdmin();
      // if (isAdmin) {
      //   return true;
      // }

      const userRole = this.storageService.getRole();

      if ((route.data.role && route.data.role.indexOf(userRole) === -1)) {
        this.presentToast('warn', 'Sem permissão', `Apenas ${route.data.role} podem acessar esta funcionalidade!`, ToastEnum.mediumDuration);
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    }

    this.presentToast('warn', 'Não autenticado', 'Por favor, realize login', ToastEnum.mediumDuration);
    this.router.navigate(['/login']);
    return false;*/
    return true;
  }

  private presentToast(
    severity: string,
    summary: string,
    detail: string,
    life: ToastEnum
  ) {
    this.toastService.clear();
    this.toastService.add({
      severity,
      summary,
      detail,
      life,
    });
  }

}
