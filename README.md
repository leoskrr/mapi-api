<img src="https://github.com/leoskrr/mapi-api/blob/main/.github/img/mapi-cover.png" width=1000 height=250/>

<h1>MAPI - API</h1>

:wave:	Olá! Essa é a API da aplicação Mapi construída durante a segunda edição do Hackathon CCR! <br/>O nosso foco é ajudar jovens a gerarem rendas.

<h2>O que é o Mapi ?</h2>
O Mapi é uma aplicação web para jovens entre 18 e 24 anos que querem empreender e não sabem por onde começar. Abriremos o caminho para uma jornada no conhecimento criativo e processual. Fazendo com que o jovem reflita sobre si e aprenda processos de negócio usando ferramentas como Design Thinking para formar uma ideia e mudança de atitude que gere renda e resultados.

<h2>Rotas:</h2>

### POST /users
  - Essa rota é usada para a criação de um usuário. Espera-se receber, no body, um json no formato:
```json
{
  "name": "John Doe",
  "email": "email@example.com",
  "password": "123456"
}
```
  - A saída desejada será uma resposta com status code 200 e um json no formato: 
```json
{
  "name": "John Doe",
  "email": "email@example.com",
  "points": 0,
  "id": "uuid",
  "created_at": "date-created",
  "updated_at": "date-updated"
}
```

### POST /sessions
  - Rota utilizada para autenticar um usuário na aplicação. Espera-se receber, no body, um json no formato:
```json
{
  "email": "email@example.com",
  "password": "123456"
}
```
  - A saída desejada será uma resposta com status code 200 e um json no formato: 
```json
{
  "user": {
    "id": "user-uuid",
    "name": "John Doe",
    "email": "email@example.com",
    "points": 0,
    "created_at": "date-created",
    "updated_at": "date-updated"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA5MjQwMzQsImV4cCI6MTYxMTAxMDQzNCwic3ViIjoiMWU4OGNmNWQtYTU3Ny00YzA0LWE5OWEtY2E2MGU3OGNmN2MwIn0.PJNhPHRvqi9Aoc8aatVDpN6SMYRfUu1tccdMA4vZEN0"
}
```
> O token deve ser utilizado no header de authorization no formato Bearer em rotas que exigem autenticação.

### PATCH /users/points
  > Observação: essa rota exige autenticação.
  - Utilize essa rota para atualizar os pontos de um usuário. Espera-se receber, no body, um json no formato:
```json
{
  "new_points": 3,
}
```
  - A saída desejada será uma resposta com status code 200 e um json no formato: 
```json
{
  "user_id": "user-uuid",
  "points": 0
}
```

### PUT /profile
  > Observação: essa rota exige autenticação.
  - Utilize essa rota para atualizar o perfil de um usuário. Espera-se receber, no body, um json no formato:
```json
{
	"name": "John Doe",
	"email": "email@example.com",
	"old_password": "123456",
	"password": "123456789",
	"password_confirmation": "123456789"
}
```
> Os campos "old_password", "password" e "password_confirmation" não são obrigatórios. 
> Os campos "old_password" e "password_confirmation" só devem existir se o campo "password" existir.
> Isso significa que, caso o usuário queira atualizar a senha dele, será necessário informar sua senha antiga (old_password), informar sua nova senha e confirmar a mesma.
  - A saída desejada será uma resposta com status code 200 e um json no formato: 
```json
{
  "id": "user-uuid",
  "name": "John Doe",
  "email": "email@example.com",
  "created_at": "date-created",
  "updated_at": "date-updated"
}
```

### GET /profile
  > Observação: essa rota exige autenticação.
  - Rota responsável por mostrar o perfil de um usuário.
  - A saída desejada será uma resposta com status code 200 e um json no formato: 
```json
{
  "id": "user-uuid",
  "name": "John Doe",
  "email": "email@example.com",
  "points": 5,
  "created_at": "date-created",
  "updated_at": "date-updated"
}
```
### POST /password/forgot
  - Rota responsável por enviar o e-mail de recuperação de senha a um usuário. Espera-se receber, no body, um json no formato:
```json
{
  "email": "email@example.com",
}
```
  - A saída desejada será uma resposta com status code 204.
### POST /password/reset
  - Rota responsável por recuperar a senha de um usuário. Espera-se receber, no body, um json no formato:
```json
{
	"password": "123456",
	"password_confirmation": "123456",
	"token": "token-uuid"
}
```
> Observação: o token virá como um query param na url do front-end no formato '/reset_passsword?token=reset-password-token`
  - A saída desejada será uma resposta com status code 204.
