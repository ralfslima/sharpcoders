import { CanActivateFn, Router } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {

  // Importar a classe Router
  const rota = new Router;

  // Validação
  if(localStorage.getItem('email') == undefined){
    rota.navigateByUrl('/login');
    return false; // Necessário este return para que o redirecionamento seja devidamente realizado
  }

  // Retorno
  return true;
};
