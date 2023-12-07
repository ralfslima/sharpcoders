import { CanActivateFn, Router } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {

  // Importar a classe Router
  const rota = new Router;

  // Validação
  if(localStorage.getItem('email') == undefined){
    rota.navigateByUrl('/login');
  }

  // Retorno
  return true;
};
