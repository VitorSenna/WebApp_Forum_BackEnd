type EquipeConstructor = {
  id?: number
  nome: string
  descricao: string
  dataCriacao: Date
}

export class Equipe {
  id?: number
  nome: string
  descricao: string
  dataCriacao: Date

  constructor ({ id = null, nome, descricao, dataCriacao = new Date() }: EquipeConstructor) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.dataCriacao = dataCriacao
  }
}
