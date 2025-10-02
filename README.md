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

