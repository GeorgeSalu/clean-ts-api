import { makeAxiosHttpClient } from './../http/axios.http-client-facotry'
import { makeLocalStorageAdapter } from './../cache/local-storage-adapter-factory'
import { AuthorizeHttpClientDecorator } from '@/main/decorators'
import { HttpClient } from '@/data/protocols/http'

export const makeAuthorizeHttpClientDecorator = (): HttpClient => {
  return new AuthorizeHttpClientDecorator(makeLocalStorageAdapter(), makeAxiosHttpClient())
}
