import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listLivros() {
    const livros = await sql`select * from livros`;
    return livros;
  }

  async createLivro(livro) {
    const id = randomUUID();
    console.log('id', id);
    const titulo = livro.titulo;
    const autor = livro.autor;
    const genero = livro.genero;
    
    await sql`insert into livros (id, titulo, autor, genero)
    values (${id}, ${titulo}, ${autor}, ${genero})`
  }

  async updateLivro(id, livro) {
    const titulo = livro.titulo;
    const autor = livro.autor;
    const genero = livro.genero;

    await sql`update livro set 
        titulo = ${titulo},
        autor = ${autor},
        genero = ${genero}
        where id = ${id}
    `;
  }

  async deleteLivro(id) {
    await sql`delete from livros where id = ${id}`
  }

}