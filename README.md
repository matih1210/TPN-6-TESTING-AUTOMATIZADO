# 🧪 Testing Automatizado con Cypress – Lista de Contactos

Este proyecto contiene pruebas automatizadas con **Cypress** sobre la aplicación web [Thinking Tester Contact List](https://thinking-tester-contact-list.herokuapp.com/).

El objetivo es validar los flujos principales de la aplicación: registro de usuario, login/logout y operaciones de contactos (crear, editar, eliminar), además de restricciones de acceso.

---

## 🚀 Funcionalidad cubierta

- **Registro de usuario**  
  Verifica que se pueda registrar un nuevo usuario con datos válidos.

- **Login y Logout**  
  Comprueba acceso con credenciales correctas e incorrectas, y cierre de sesión.

- **Contactos (CRUD)**  
  - Crear un contacto (alta).  
  - Editar un contacto (modificación).  
  - Eliminar un contacto (baja).  
  - Validaciones: no se pueden guardar contactos sin `FirstName` o `LastName`.

- **Restricciones de acceso**  
  Se valida que la ruta `/contactList` no sea accesible si no hay sesión activa.

---

## 📂 Estructura del proyecto

```bash
cypress/
│
├── e2e/                  # Casos de prueba
│   ├── crearContacto.cy.js
│   ├── editarContacto.cy.js
│   ├── eliminarContacto.cy.js
│   ├── registro.cy.js
│   ├── login.cy.js
│   ├── logout.cy.js
│   ├── restriccionSinSesion.cy.js
│   └── validacionesCrearContacto.cy.js
│
├── fixtures/             # Datos de prueba (JSON)
│
├── support/              # Comandos custom de Cypress
│   └── commands.js       # ej: cy.login()
│
└── cypress.config.js     # Configuración baseUrl y viewport
```
---

## ⚙️ Requisitos

- [Node.js](https://nodejs.org) (v16+ recomendado)  
- npm o yarn  
- Cypress (se instala como dependencia de desarrollo)

---

## 📦 Instalación

Cloná el repositorio y luego ejecutá:

```bash
npm install
```
Esto instalará Cypress y las demás dependencias.

## ▶️ Ejecución de tests

### 🔹 Modo interactivo (Test Runner con navegador)

```bash
npx cypress open
```

- Seleccioná E2E Testing
- Elegí un navegador (Chrome, Edge, Electron)
- Aparecerá la lista de archivos .cy.js en cypress/e2e/ → podés ejecutar uno o todos

### 🔹 Modo headless (sin navegador, ideal para CI/CD):

```bash
npx cypress run
```

- Ejecuta todos los tests en segundo plano
- Genera videos en cypress/videos/ y screenshots en cypress/screenshots/

## 🛠️ Comandos custom
En cypress/support/commands.js está definido el comando:

```js
cy.login(email, password)
```
---

👩‍💻 Autores:
- Matias Hansen
- Matias Zarandon
- Daniel Cabrero
- Ramiro Martinez
- Nicolas Correa
- Alvaro Ariza
- Luciano Marquesini
- Ignacio Castro

Trabajo Práctico de Testing Automatizado con Cypress
Ingeniería en Sistemas de Información – UTN.
