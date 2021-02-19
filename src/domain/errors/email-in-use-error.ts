export class EmailInUseError extends Error {
  constructor () {
    super('Esse email ja esta em uso')
    this.name = 'EmailInUseError'
  }
}
