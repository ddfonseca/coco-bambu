# Desafio Full-Stack Coco Bambu da Tagme

## Requisitos

-   Mongodb instalado localmente ou docker
-   Nodejs 16
-   Git (Opcional)

## Clonando o projeto e instalando as dependências

```
git clone https://github.com/ddfonseca/coco-bambu
npm install
cd backend
npm install
```

## Rodando o projeto

### Subindo o Mongodb

Via Docker:

```
docker run -p 27027:27017 -d mongo:4.2
```

### Build Angular (Frontend)

Volte para a pasta root:

```
cd ../
npm run build:dev
```

### Build Node (Backend)

Entre na pasta backend:

```
cd backend
npm run start
```

## App Rodando em

Veja o app rodando em http://localhost:3000/

### Credenciais de teste:

-   usuário: admin
-   password: admin
