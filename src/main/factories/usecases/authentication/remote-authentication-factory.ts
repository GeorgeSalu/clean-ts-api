import { makeApiUrl } from './../../http/api-http-client-factory'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http/axios.http-client-facotry'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
}
