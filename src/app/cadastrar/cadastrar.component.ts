import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }



user: User = new User
confirmSenha: string
tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

confirmarSenha(event: any){
  this.confirmSenha = event.target.value
}

tipoUser(event: any){
  this.tipoUsuario = event.target.value
}


cadastrar(){

    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmSenha){
      alert("Senhas Incorretas!")
    }

    else {this.authService.cadastrar(this.user).subscribe((resp: User)=>{
      this.user = resp
      this.router.navigate(['/entrar'])
      alert("Usuário cadastrado com Sucesso!")
      })
    }
}


}
