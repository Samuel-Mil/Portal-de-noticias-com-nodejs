# Portal de notícias com node

## Como instalar

```
yarn
yarn typeorm migration:run
yarn dev
```

## Como usar

- Primeiro use ferramentas para gerenciar métodos http como o insomnia ou postman.

- As rotas estão especificadas no arquivo de rotas **./src/routes.ts**.

- Para o uso de algumas rotas como a de criar article você precisa fazer o login na rota **/login** passando no body o **email** e **password**. Assim que feito o login você terá uma key(chave) em jwt,e na ferramenta de autenticação você escolherá o Bearer e cole a chave no campo pedido.  

- Para o upload de arquivos use uma requisição do método **post** com o **multipartform**.

## Informações uteis

- Os uploads feitos ficarão salvos em **./uploads**

## Stack e dependencias

- Nodejs
- MySql
- Typescript
- Typeorm 
- Bcrypt
- JsonWebToken(JWT)
- Multer

#

Não fiz esse projeto para fins comerciais mas sim para estudo e desenvolvimento das minhas abilidades como programador.

Por favor se for usar esse codigo dar o devido crédito
